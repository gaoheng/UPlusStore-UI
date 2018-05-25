<template>
<form class="smart-form">
  <div class="row">
    <section class="col col-md-4">
      <label for="file" class="input input-file">
        <div class="button">
          <file-upload id="file" name="file" target="http://localhost:8000/api/upload" action="POST" v-model="file"></file-upload>选择
        </div>
        <input :value="file" placeholder="点击右侧“选择”按钮选择文件并上传..." readonly="" type="text">
      </label>
    </section>
  </div>
</form>
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
      file: null
    }
  }
}
</script>

<style scoped>

</style>
