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
              <section v-show="done">
                <div class="alert alert-success alert-block">
                  <h4 class="alert-heading">操作成功！</h4>
                </div>
              </section>
              <section v-show="error">
                <div class="alert alert-danger alert-block" style="margin-bottom: 10px">
                  <h4 class="alert-heading">操作失败！</h4>先拿小本本记好，然后去找程序员算账吧！！！
                </div>
              </section>
            </fieldset>
            <fieldset>
              <div class="pull-right">
                <button type="submit" class="btn btn-lg btn-default" v-show="!done" @click="clear">
                  取消
                </button>
                <button type="button" class="btn btn-lg btn-primary" v-show="!done" @click="deal">
                  结账
                </button>
                <button type="button" class="btn btn-lg btn-primary" v-show="done" @click="clear">
                  结束
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import numeral from 'numeral'
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
      total: 0.0,
      done: false,
      error: false
    }
  },
  methods: {
    clear: function () {
      this.items = []
      this.discount = 0.0
      this.total = 0.0
      this.done = false
      this.error = false
    },
    deal: function () {
      var order = this.order
      this.$http.post('http://localhost:8080/orders', order).then(resp => {
        console.log(resp)
        this.done = true

      }, resp => {
        console.log(resp)
      })
    },
    discountChanged: function (e) {
      console.log('discount changed...')
      var discount = e.target.value
      if (discount === '') {
        discount = '0'
      }
      this.discount = Number(discount)
      this.total = numeral(this.summary.cost - this.discount).format('0.00')
    },
    totalChanged: function (e) {
      var total = e.target.value
      if (total === '') {
        return
      }
      this.total = Number(total)
      this.discount = numeral(this.summary.cost - this.total).format('9.00')
    }
  },
  computed: {
    order: function () {
      var total = this.summary.cost
      var discount = this.discount
      var paid = this.total
      var items = []
      for (var i = 0; i < this.items.length; i++) {
        var it = this.items[i]
        items.push({
          skuId: it.id,
          skuName: it.name,
          skuCode: it.code,
          skuColor: it.color,
          skuSize: it.size,
          skuPrice: it.price,
          quantity: it.quantity
        })
      }
      return {
        total: total,
        discount: discount,
        paid: paid,
        items: items
      }
    },
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
      summary.quantity = numeral(summary.quantity).format('0.00')
      summary.cost = numeral(summary.cost).format('0.00')
      return summary
    }
  },
  watch: {
    'summary.cost': function (newVal, oldVal) {
      console.log('Watch...')
      this.total = numeral(this.summary.cost - this.discount).format('0.00')
    }
  }
}
</script>

<style scoped>

</style>
