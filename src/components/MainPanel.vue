<template>
  <!-- #MAIN PANEL -->
  <div id="main" role="main">
    <ribbon></ribbon>
    <main-content></main-content>
  </div>
  <!-- END #MAIN PANEL -->
</template>

<script>
import Ribbon from '@/components/Ribbon'
import MainContent from '@/components/MainContent'

export default {
  name: 'MainPanel',
  components: {
    Ribbon,
    MainContent
  }
}
</script>

<style scoped>

</style>
