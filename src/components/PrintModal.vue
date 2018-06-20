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
                <input id="code" type="text" class="form-control" required v-model="label.code" readonly />
              </div>
              <div class="form-group">
                <label for="name">名称</label>
                <input id="name" type="text" class="form-control" required v-model="label.name" readonly />
              </div>
              <div class="form-group">
                <label for="price">价格</label>
                <input id="price" type="text" class="form-control" required v-model="label.price" readonly />
              </div>
              <div class="form-group">
                <label for="color">颜色</label>
                <input id="color" type="text" class="form-control" required v-model="label.color" readonly />
              </div>
              <div class="form-group">
                <label for="size">尺码</label>
                <input id="size" type="text" class="form-control" required v-model="label.size" readonly />
              </div>
              <div class="form-group">
                <label for="quantity">打印份数</label>
                <input id="quantity" type="text" class="form-control" placeholder="需打印的标签份数" required v-model.number="quantity"/>
              </div>
              <div class="alert alert-success alert-block" v-show="done">
                <a class="close" data-dismiss="alert" href="#"></a>
                <h4 class="alert-heading">打印成功！</h4>
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
          <button type="button" class="btn btn-primary" @click="print" v-show="!done">
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
      label: {
        code: '',
        name: '',
        color: '',
        size: '',
        price: 0
      },
      quantity: 0,
      done: false,
      error: false
    }
  },
  mounted: function () {
    $(this.$el).on('show.bs.modal', (e) => {
      this.id = $(e.relatedTarget).data('sku-id')
      this.$http.get('skus/' + this.id).then(resp => {
        let sku = resp.body
        this.label.code = sku.code
        this.label.name = sku.name
        this.label.price = sku.price
        this.label.color = sku.color
        this.label.size = sku.size
      }, resp => {
        console.log(resp)
      })
    }).on('hide.bs.modal', (e) => {
      this.reset()
    })
  },
  methods: {
    print: function () {
      this.$http.post('http://localhost:8080/print/sku-label', {
        label: this.label,
        quantity: this.quantity
      }).then(resp => {
        this.done = true
        this.error = false
        console.log(resp)
      }, resp => {
        this.error = true
        this.done = false
        console.log(resp)
      })
    },
    reset: function () {
      this.id = null
      this.label = {
        code: '',
        name: '',
        color: '',
        size: '',
        price: 0
      }
      this.quantity = 0
      this.done = false
      this.error = false
    }
  }
}
</script>

<style scoped>

</style>
