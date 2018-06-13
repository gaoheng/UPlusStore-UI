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
                <label for="delta">数量</label>
                <input id="delta" type="text" class="form-control" placeholder="入库数量" required v-model="delta"/>
              </div>
              <div class="form-group">
                <label for="reason">原因</label>
                <select class="form-control" id="reason" v-model="reason">
                  <option v-for="r in reasons" v-bind:key="r">{{ r }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="stockIn">
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
      reason: ''
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
      this.skuId = $(e.relatedTarget).data('sku-id')
    }).on('hide.bs.modal', (e) => {
      this.reset()
    })
  },
  methods: {
    stockIn: function () {
      console.log('Data:', this.$data)
    },
    reset: function () {
      this.skuId = null
      this.delta = 0
      this.reason = this.reasons[0]
    }
  }
}
</script>

<style scoped>

</style>
