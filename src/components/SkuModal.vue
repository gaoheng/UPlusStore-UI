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
                <input id="code" type="text" class="form-control" placeholder="货号" required v-model="code" :readonly="isUpdate"/>
              </div>
              <div class="form-group">
                <label for="name">名称</label>
                <input id="name" type="text" class="form-control" placeholder="商品名称" required v-model="name"/>
              </div>
              <div class="form-group">
                <label for="color">颜色</label>
                <input id="color" type="text" class="form-control" placeholder="商品颜色" required v-model="color"/>
              </div>
              <div class="form-group">
                <label for="size">尺码</label>
                <input id="size" type="text" class="form-control" placeholder="商品尺码" required v-model="size"/>
              </div>
              <div class="form-group">
                <label for="stock">库存</label>
                <input id="stock" type="text" class="form-control" placeholder="初始库存" required v-model="stock" :readonly="isUpdate"/>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="save">
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
      code: '',
      name: '',
      color: '',
      size: '',
      stock: 0
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
      console.log(this.id)
    }).on('hide.bs.modal', (e) => {
      this.reset()
    })
  },
  methods: {
    save: function () {
      console.log(this.id)
    },
    reset: function () {
      this.id = null
      this.code = ''
      this.name = ''
      this.color = ''
      this.size = ''
      this.stock = 0
    }
  }
}
</script>

<style scoped>

</style>
