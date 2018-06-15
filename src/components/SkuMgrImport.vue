<template>
  <div>
    <div class="row">
      <form id="import-form" class="smart-form">
        <section class="col col-md-4">
          <label for="file" class="input input-file">
            <div class="button">
              <file-upload id="file" name="file" :target="uploadUrl" action="POST" @finish="finishUpload"></file-upload>选择
            </div>
            <input placeholder="点击右侧“选择”按钮选择文件并上传..." readonly="" type="text">
          </label>
        </section>
      </form>
    </div>
    <div class="row">
      <div class="col col-md-12">
        <table id="table" class="table table-bordered">
          <thead>
          <tr>
            <th>状态</th>
            <th>货号</th>
            <th>名称</th>
            <th>颜色</th>
            <th>尺码</th>
            <th>价格</th>
            <th>数量</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td colspan="7">暂无数据</td>
          </tr>
          </tbody>
        </table>
        <form id="submit-form" method="post" style="display: none;">
          <a id="cancel-btn" class="btn btn-danger" @click="cancel">取消</a>
          <a id="enter-btn" class="btn btn-success" @click="submit" v-show="!done">导入</a>
          <a id="enter-btn" class="btn btn-success" @click="submit" v-show="done">继续导入</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from 'vue-simple-upload/dist/FileUpload'
export default {
  name: 'SkuMgrImport',
  components: {
    FileUpload
  },
  data: function () {
    return {
      uploadUrl: process.env.API_BASE + '/sku-importings',
      done: false,
      batchNo: null
    }
  },
  methods: {
    initTable: function(list) {
        $('#table').dataTable({
          data: list,
          pageLength: 15,
          lengthChange: false,
          searching: false,
          scrollY: '560px',
          scrollCollapse: true,
          columns: [
            {
              data: 'importStatus',
              orderable: false,
              searchable: false,
              render: function (data, type, row, meta) {
                if (data === 'DONE') {
                  return '<span class="label label-success">成功</span>'
                } else if (data === 'PENDING') {
                  return '<span class="label label-warning">待导入</span>'
                } else if (data === 'FAILED') {
                  return '<span class="label label-danger">失败</span>'
                }
              }},
            {'data': 'code', orderable: false, searchable: false},
            {'data': 'name', orderable: false, searchable: false},
            {'data': 'color', orderable: false, searchable: false},
            {'data': 'size', orderable: false, searchable: false},
            {'data': 'price', orderable: false, searchable: false},
            {'data': 'quantity', orderable: false, searchable: false}
          ]
        })
    },
    finishUpload: function (e) {
      $('#import-form')[0].reset()
      var status = e.target.status
      console.log('Status:', status)
      var resp = JSON.parse(e.target.response)
      console.log('Resp:', resp)
      this.batchNo = resp.batchNo

      if (resp.list !== null && resp.list.length > 0) {
        this.initTable(resp.list)
        $('#submit-form').show()
      }
    },
    submit: function () {
      var _this = this
      this.$http.put('sku-importings/batches/' + this.batchNo, {
      }).then(resp => {
        console.log('Resp:', resp)
        $('#table').DataTable().clear().destroy()
        _this.initTable(resp.body.list)
        this.done = true
      })
    },
    cancel: function () {
      console.log('Cancel....')
      this.batchNo = null
      this.done = false
      $('#table').DataTable().clear().destroy()
      $('#submit-form').hide()
    }
  }
}
</script>

<style scoped>

</style>
