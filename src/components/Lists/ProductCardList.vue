<template>
  <div class="list">
    <ProductCard v-for="product in products" :key="product.id" :card="product" class="list-item" />
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/Cards/ProductCard.vue'

import { Product } from '@/domain/Product'

defineProps<{
  products: Product[]
}>()
</script>

<style scoped>
.list {
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
}
</style>
