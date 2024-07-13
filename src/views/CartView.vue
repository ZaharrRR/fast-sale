<script setup lang="ts">
import { computed } from 'vue'

import CartList from '@/components/Lists/CartList.vue'
import AdressSelect from '@/components/UI/AdressSelect.vue'

import { useProductStore } from '@/stores/ProductStore'

import { storeToRefs } from 'pinia'

const productStore = useProductStore()

const { cartProducts } = storeToRefs(productStore)

const productsTotal = computed(() => {
  let total = { amount: 0, summ: 0 }

  cartProducts.value.forEach((product) => {
    total.summ += product.price * product.amount
    total.amount += product.amount
  })

  return total
})
</script>

<template>
  <main class="cart">
    <header class="cart-head">
      <div class="head-title">
        <h1>Корзина</h1>
        <span>{{ cartProducts.length }} товаров</span>
      </div>

      <AdressSelect />
    </header>

    <CartList class="cart-list" :products="cartProducts" />

    <button v-if="cartProducts.length" class="cart-order">
      <p>Оформить заказ</p>
      <p>
        <span>{{ productsTotal.amount }} шт, </span>
        <span>{{ productsTotal.summ }} ₽</span>
      </p>
    </button>
  </main>
</template>

<style scoped>
.cart {
  position: relative;
  height: 100%;
}

.cart-head {
  border: 1px solid black;

  border-radius: 0 0 14px 14px;
  padding: 12px;
}

.head-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.cart-list {
  margin-top: 24px;
}

.cart-order {
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  bottom: 68px;

  width: 100%;
  padding: 12px;

  border: 1px solid black;
  border-radius: 14px;
}
</style>
