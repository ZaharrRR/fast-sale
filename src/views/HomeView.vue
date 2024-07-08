<template>
  <div class="home">
    <div class="home-top">
      <AdressSelect />
      <SearchBar v-model="searchQuery" />
    </div>
    <div class="home-top fixed">
      <AdressSelect />
      <SearchBar v-model="searchQuery" />
    </div>

    <main>
      <ProductCardList :products="filteredProducts" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import SearchBar from '@/components/UI/SearchBar.vue'
import AdressSelect from '@/components/UI/AdressSelect.vue'
import ProductCardList from '@/components/Lists/ProductCardList.vue'

import { Product } from '@/domain/Product'

import { useProductStore } from '@/stores/ProductStore'

const productStore = useProductStore()

const products = ref<Product[]>([])

const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const searchQuery = ref<string>('')

onMounted(() => {
  products.value = productStore.getProducts
})
</script>

<style scoped>
.home-top {
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 12px;
  border-radius: 0 0 14px 14px;
  background-color: white;
  width: 100%;
}

.fixed {
  position: fixed;
  top: 0;
  z-index: 10;
}

main {
  margin: 36px 0 68px 0;
}
</style>
