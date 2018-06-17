<template>
  <!-- Modal -->
  <div class="modal fade" id="skuModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            &times;
          </button>
          <h4 class="modal-title" id="myModalLabel">商品信息</h4>
        </div>
        <div class="modal-body">

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="code">货号</label>
                <input id="code" type="text" class="form-control" placeholder="货号（最多16个字，如不填写将自动生成）" required v-model="sku.code" :readonly="isUpdate"/>
              </div>
              <div class="form-group">
                <label for="name">名称</label>
                <input id="name" type="text" class="form-control" placeholder="商品名称（最多32个字）" required v-model="sku.name"/>
              </div>
              <div class="form-group">
                <label for="price">价格</label>
                <input id="price" type="text" class="form-control" placeholder="商品价格（大于等于0）" required v-model="sku.price"/>
              </div>
              <div class="form-group">
                <label for="color">颜色</label>
                <input id="color" type="text" class="form-control" placeholder="商品颜色（最多16个字）" required v-model="sku.color"/>
              </div>
              <div class="form-group">
                <label for="size">尺码</label>
                <input id="size" type="text" class="form-control" placeholder="商品尺码（最多16个字）" required v-model="sku.size"/>
              </div>
              <div class="form-group">
                <label for="stock">库存</label>
                <input id="stock" type="text" class="form-control" placeholder="初始库存（大于等于0）" required v-model.number="sku.stock" :readonly="isUpdate"/>
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
export default {
  name: 'SkuModal',
  data: function () {
    return {
      id: null,
      sku: {
        code: '',
        name: '',
        color: '',
        size: '',
        stock: 0
      },
      done: false,
      error: false
    }
  },
  computed: {
    isUpdate: function () {
      return this.id && this.id !== null && this.id !== ''
    }
  },
  mounted: function () {
    $(this.$el).on('show.bs.modal', (e) => {
      this.id = $(e.relatedTarget).data('sku-id')
      if (this.isUpdate) {
        this.$http.get('skus/' + this.id).then(resp => {
          this.sku = resp.body
        }, resp => {
          console.log(resp)
        })
      }
      console.log(this.id)
    }).on('hide.bs.modal', (e) => {
      this.reset()
    })
  },
  methods: {
    save: function () {
      if (this.isUpdate) {
        this.$http.put('skus/' + this.id, this.sku).then(resp => {
          this.done = true
          this.error = false
          $('#sku-mgr-list-table').DataTable().draw(false)
        }, resp => {
          this.error = true
          this.done = false
          console.log(resp)
        })
      } else {
        this.$http.post('skus', this.sku).then(resp => {
          this.done = true
          this.error = false
          $('#sku-mgr-list-table').DataTable().draw(true)
        }, resp => {
          this.error = true
          this.done = false
          console.log(resp)
        })
      }
    },
    reset: function () {
      this.id = null
      this.sku = {
        code: '',
        name: '',
        color: '',
        size: '',
        stock: 0
      }
      this.done = false
      this.error = false
    }
  }
}
</script>

<style scoped>

</style>
