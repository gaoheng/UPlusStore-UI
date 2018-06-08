<template>
  <div id="main-view">
    <app-header></app-header>
    <left-panel></left-panel>
    <main-panel></main-panel>
    <page-footer></page-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import LeftPanel from '@/components/LeftPanel'
import MainPanel from '@/components/MainPanel'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'MainView',
  components: {
    AppHeader, LeftPanel, MainPanel, PageFooter
  },
  watch: {
    '$route': function (route) {
      console.log('Route:', route)
    }
  }
}
</script>

<style scoped>

</style>
