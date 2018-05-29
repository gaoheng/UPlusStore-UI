<template>
<div>
  <div class="row">
    <div class="col col-md-4">
      <div class="input-group margin-bottom-10">
        <input class="form-control input-lg" type="text" placeholder="输入货号进行搜索...">
        <div class="input-group-btn">
          <button class="btn btn-lg btn-default btn-primary" type="button">
            <i class="fa fa-search"></i> 搜索
          </button>
        </div>
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
      items: []
    }
  },
  mounted: function () {
    this.items.push({id: 1, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 2, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 3, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 4, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 5, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 6, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 7, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 8, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 9, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 10, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 11, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 12, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 13, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 14, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 15, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
    this.items.push({id: 16, name: '中文中文中文中文中文中文中文中文中文中文中文中文', code: '9999999999999', color: 'RED', size: 'XL', stock: 19, price: 29.9, quantity: 2})
  }
}

</script>

<style scoped>

</style>
