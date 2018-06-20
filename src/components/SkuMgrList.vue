<template>
    <div class="row">
      <div class="col-lg-12 col-md-12"><a class="btn btn-primary" data-toggle="modal" data-target="#skuModal"><i class="fa fa-plus"></i> 上新</a></div>
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
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <stock-modal id="stockInModal" mode="in"></stock-modal>
      <stock-modal id="stockOutModal" mode="out"></stock-modal>
      <sku-modal id="skuModal"></sku-modal>
      <print-modal id="printModal"></print-modal>
    </div>
</template>

<script>
import StockModal from '@/components/StockModal'
import SkuModal from "./SkuModal";
import PrintModal from '@/components/PrintModal'
export default {
  name: 'SkuMgrList',
  components: {
    SkuModal,
    StockModal,
    PrintModal
  },
  mounted: function () {
    pageSetUp()
    this.$nextTick().then(function () {
      $('#sku-mgr-list-table').dataTable({
        pageLength: 15,
        lengthChange: false,
        searching: false,
        ordering: false,
        serverSide: true,
        ajax: {
          url: process.env.API_BASE + '/skus'
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
          }, {
            data: 'id', orderable: false, searchable: false, render: function (id) {
              return '' +
                '<a title="入库" class="btn btn-xs btn-success" data-toggle="modal" data-target="#stockInModal" data-sku-id="' + id + '"><i class="fa fa-plus"></i> </a> ' +
                '<a title="出库" class="btn btn-xs btn-danger" data-toggle="modal" data-target="#stockOutModal" data-sku-id="' + id + '"><i class="fa fa-minus"></i> </a> ' +
                '<a title="修改商品信息" class="btn btn-xs btn-primary" data-toggle="modal" data-target="#skuModal" data-sku-id="' + id + '"><i class="fa fa-pencil"></i> </a> ' +
                '<a title="打印标签" class="btn btn-xs btn-primary" data-toggle="modal" data-target="#printModal" data-sku-id="' + id + '"><i class="fa fa-print"></i> </a> '
            }
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
