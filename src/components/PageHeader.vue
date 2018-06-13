<template>
  <div class="row">
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
      <h1 class="page-title txt-color-blueDark">
        <i :class="classes"></i>
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  data: function () {
    return {
      classes: '',
      title: ''
    }
  },
  methods: {
    get: function () {
      let matched = this.$route.matched.filter(item => item.name && item.name !== '')
      const last = matched[matched.length - 1]
      this.classes = last.meta.iconClasses
      this.title = last.meta.title
    }
  },
  watch: {
    '$route': function () {
      this.get()
    }
  },
  created: function () {
    this.get()
  }
}
</script>

<style scoped>

</style>
