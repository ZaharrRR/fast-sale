<template>
  <div class="list">
    <CartCard v-for="product in products" :key="product.id" :card="product" class="list-item" />
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/domain/Product'

import CartCard from '@/components/Cards/CartCard.vue'

defineProps<{
  products: Product[]
}>()
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
