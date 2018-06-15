<template>
  <!-- Modal -->
  <div class="modal fade" id="stockModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            &times;
          </button>
          <h4 class="modal-title" id="myModalLabel">{{ title }}</h4>
        </div>
        <div class="modal-body">

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="delta">{{ mode === 'in' ? '入库' : '出库' }}数量</label>
                <input id="delta" type="text" class="form-control" placeholder="入库数量" required v-model.number="delta"/>
              </div>
              <div class="form-group">
                <label for="reason">原因</label>
                <select class="form-control" id="reason" v-model="reason">
                  <option v-for="r in reasons" v-bind:key="r" :value="r">{{ r }}</option>
                </select>
              </div>
              <div class="alert alert-success alert-block" v-show="done">
                <a class="close" data-dismiss="alert" href="#"></a>
                <h4 class="alert-heading">保存成功！</h4>
              </div>
              <div class="alert alert-danger alert-block" v-show="error">
                <a class="close" data-dismiss="alert" href="#"></a>
                <h4 class="alert-heading">出错啦！提刀去找程序员算账吧！！！</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">
            关闭
          </button>
          <button type="button" class="btn btn-primary" @click="save" v-show="!done">
            保存
          </button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
</template>

<script>
const stockInReasons = [
  '采购入库', '销售退货', '修正库存', '其他'
]
const stockOutReasons = [
  '销售出库', '采购退货', '修正库存', '其他'
]
export default {
  name: 'StockModal',
  props: ['mode'],
  data: function () {
    return {
      skuId: null,
      delta: 0,
      reason: '',
      done: false,
      error: false
    }
  },
  computed: {
    title: function () {
      if (this.mode === 'in') {
        return '商品入库'
      } else {
        return '商品出库'
      }
    },
    reasons: function () {
      if (this.mode === 'in') {
        return stockInReasons
      } else {
        return stockOutReasons
      }
    }
  },
  mounted: function () {
    this.reason = this.reasons[0]
    $(this.$el).on('show.bs.modal', (e) => {
      console.log($(e.relatedTarget).data('sku-id'))
      this.skuId = $(e.relatedTarget).data('sku-id')
    }).on('hide.bs.modal', (e) => {
      this.reset()
    })
  },
  methods: {
    save: function () {
      let changement = {
        delta: this.mode === 'in' ? this.delta : this.delta * -1,
        reason: this.reason
      }
      this.$http.put('http://localhost:8080/skus/' + this.skuId + '/stock', changement).then(resp => {
        this.done = true
        this.error = false
      }, resp => {
        this.done = false
        this.error = true
        console.log(resp)
      })
    },
    reset: function () {
      this.skuId = null
      this.delta = 0
      this.reason = this.reasons[0]
      this.done = false
      this.error = false
    }
  }
}
</script>

<style scoped>

</style>
