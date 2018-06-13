<template>
  <!-- RIBBON -->
  <div id="ribbon">

    <!-- breadcrumb -->
    <ol class="breadcrumb">
      <li v-for="i in breadcrumbs" v-bind:key="i.name">{{ i.meta.title }}</li>
    </ol>
    <!-- end breadcrumb -->

  </div>
  <!-- END RIBBON -->
</template>

<script>
export default {
  name: 'Ribbon',
  data: function () {
    return {
      breadcrumbs: []
    }
  },
  methods: {
    getBreadcrumbs: function () {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name !== 'root') {
        matched = [ { path: '/', meta: { title: '优+童装' } } ].concat(matched)
      }
      this.breadcrumbs = matched
    }
  },
  watch: {
    '$route': function () {
      this.getBreadcrumbs()
    }
  },
  created: function () {
    this.getBreadcrumbs()
  }
}
</script>

<style scoped>

</style>
