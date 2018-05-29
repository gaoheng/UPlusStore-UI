<template>
  <div class="col-md-6">
    <div class="well padding-7" style="border-style: dashed; min-height: 96px; max-height: 96px">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <span class="h3">{{ item.name }}</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <span class="h4">{{ item.code }}</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <dl>
                <dd>颜色：{{ item.color }}</dd>
                <dd>尺码：{{ item.size }}</dd>
              </dl>
            </div>
            <div class="col-md-3 font-lg semi-bold">
              ￥{{ item.price }}
            </div>
            <div class="col-md-5 font-lg semi-bold no-padding text-align-center">
              <a class="btn btn-danger" @click="remove"><i class="fa fa-trash"></i></a>
              <a class="btn btn-default" @click="decrease"><i class="fa fa-minus"></i></a>
              <input style="min-width: 42px; max-width: 42px; " v-model.number="item.quantity">
              <a class="btn btn-success" @click="increase"><i class="fa fa-plus"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCartItem',
  props: ['item'],
  methods: {
    increase: function () {
      this.item.quantity = this.item.quantity + 1
    },
    decrease: function () {
      this.item.quantity = this.item.quantity - 1
      if (this.item.quantity === 0) {
        this.remove()
      }
    },
    remove: function () {
      var idx = -1
      console.log(this.$parent)
      var items = this.$parent.items
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === this.item.id) {
          idx = i
          break
        }
      }
      if (idx >= 0) {
        items.splice(idx, 1)
      }
    }
  }
}
</script>

<style scoped>

</style>
