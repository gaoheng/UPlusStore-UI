<template>
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <table id="sku-mgr-list-table" class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>货号</th>
              <th>名称</th>
              <th>颜色</th>
              <th>尺码</th>
              <th>价格</th>
              <th>库存</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SkuMgrList',
  mounted: function () {
    this.$nextTick().then(function () {
      $('#sku-mgr-list-table').dataTable({
        pageLength: 15,
        lengthChange: false,
        searching: false,
        ordering: false,
        serverSide: true,
        ajax: {
          url: 'http://localhost:8080/skus'
        },
        columns: [
          {
            data: 'code', orderable: false, searchable: false
          }, {
            data: 'name', orderable: false, searchable: false
          }, {
            data: 'color', orderable: false, searchable: false
          }, {
            data: 'size', orderable: false, searchable: false
          }, {
            data: 'price', orderable: false, searchable: false
          }, {
            data: 'stock', orderable: false, searchable: false
          }
        ]
      })
    })
  },
  beforeDestroy: function () {
    $('#sku-mgr-list-table').DataTable().destroy()
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
