<template>
<div>
  <div class="row">
    <div class="col col-md-4">
      <div class="input-group margin-bottom-10">
        <input class="form-control input-lg" type="text" placeholder="输入货号进行搜索..." @keyup.enter="search" v-model.trim="code">
        <div class="input-group-btn">
          <button class="btn btn-lg btn-default btn-primary" type="button" @click="search">
            <i class="fa fa-search"></i> 搜索
          </button>
        </div>
      </div>
    </div>
    <div class="col col-md-8" v-show="notExists">
      <div class="alert alert-danger alert-block margin-bottom-10" style="margin-bottom: 10px">
        <h4 class="alert-heading">商品不存在！</h4>
      </div>
    </div>
  </div>
  <shopping-cart :items="items"></shopping-cart>
</div>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart'
export default {
  name: 'CheckoutCounter',
  components: {
    ShoppingCart
  },
  data: function () {
    return {
      code: null,
      notExists: false,
      items: []
    }
  },
  methods: {
    search: function () {
      var code = this.code
      this.$http.get('http://localhost:8080/skus', {
        params: {
          code: code
        }
      }).then(resp => {
        var item = resp.body
        if (!item || item === null || item === '') {
          this.notExists = true
        } else {
          this.notExists = false
          this.add(item)
          this.code = null
        }
      }, resp => {
        console.log(resp)
      })
    },
    add: function (item) {
      var existed = null
      var items = this.items
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === item.id) {
          existed = items[i]
          break
        }
      }

      if (existed === null) {
        item['quantity'] = 1
        items.push(item)
      } else {
        existed.quantity = existed.quantity + 1
      }
    }
  }
}

</script>

<style scoped>

</style>
