<template>
  <!-- #MAIN CONTENT -->
  <div id="content">
    <page-header></page-header>
    <router-view/>
  </div>
  <!-- END #MAIN CONTENT -->
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  name: 'Content',
  components: {
    PageHeader
  }
}
</script>

<style scoped>

</style>
