<template>
  <div id="app">
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
  name: 'App',
  components: {
    AppHeader, LeftPanel, MainPanel, PageFooter
  }
}
</script>

<style>
</style>
