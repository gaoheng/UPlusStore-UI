<template>
    <div class="row">
      <div class="col-md-9">
        <div class="well margin-bottom-0 padding-bottom-0" style="min-height: 640px;max-height: 640px; overflow-y: scroll">
          <div class="row">
            <shopping-cart-item v-for="item in items" :key="item.id" :item="item"></shopping-cart-item>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="well" style="min-height: 640px;max-height: 640px; ">
          <form class="smart-form bg-color-white bordered" style="border-style: dashed; min-height: 600px;max-height: 600px; ">
            <header class="font-lg">账单信息</header>
            <fieldset style="min-height: 420px; max-height: 420px; ">
              <section>
                <label class="label font-lg">件数</label>
                <label class="input">
                  <input class="input-lg bg-color-lighten" :value="summary.quantity" disabled/>
                </label>
              </section>
              <section>
                <label class="label font-lg">金额</label>
                <label class="input">
                  <input class="input-lg bg-color-lighten" :value="summary.cost" disabled/>
                </label>
              </section>
              <section>
                <label class="label font-lg">优惠</label>
                <label class="input">
                  <input class="input-lg" :value="discount" @keyup="discountChanged">
                </label>
              </section>
              <section>
                <label class="label font-lg">应付</label>
                <label class="input">
                  <input class="input-lg" :value="total" @keyup="totalChanged">
                </label>
              </section>
            </fieldset>
            <fieldset>
              <div class="pull-right">
                <button type="submit" class="btn btn-lg btn-default">
                  取消
                </button>
                <button type="button" class="btn btn-lg btn-primary">
                  结账
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import ShoppingCartItem from '@/components/ShoppingCartItem'

export default {
  name: 'ShoppingCart',
  props: [
    'items'
  ],
  components: {
    ShoppingCartItem
  },
  data: function () {
    return {
      discount: 0.0,
      total: 0.0
    }
  },
  methods: {
    add: function (item) {
      this.items.push(item)
    },
    discountChanged: function (e) {
      console.log('discount changed...')
      var discount = e.target.value
      if (discount === '') {
        discount = '0'
      }
      this.discount = Number(discount)
      this.total = this.summary.cost - this.discount
    },
    totalChanged: function (e) {
      var total = e.target.value
      if (total === '') {
        return
      }
      this.total = Number(total)
      this.discount = this.summary.cost - this.total
    }
  },
  computed: {
    summary: function () {
      var summary = {
        quantity: 0,
        cost: 0.0
      }
      if (this.items.length > 0) {
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i]
          summary.quantity = summary.quantity + item.quantity
          summary.cost = summary.cost + item.quantity * item.price
        }
      }
      return summary
    }
  },
  watch: {
    'summary.cost': function (newVal, oldVal) {
      console.log('Watch...')
      this.total = this.summary.cost - this.discount
    }
  }
}
</script>

<style scoped>

</style>
