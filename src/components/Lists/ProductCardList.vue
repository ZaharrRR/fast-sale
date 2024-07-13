<template>
  <div class="list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :card="product"
      @addToCart="productStore.addProduct(product)"
      class="list-item"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/Cards/ProductCard.vue'

import { Product } from '@/domain/Product'

import { useProductStore } from '@/stores/ProductStore'

const productStore = useProductStore()

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
