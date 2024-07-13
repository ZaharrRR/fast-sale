<template>
  <div class="card">
    <img class="card-img" :src="card.imageUrl" />

    <div class="card-info">
      <p class="info-price">{{ card.price }} ₽</p>
      <p class="info-brand">{{ card.brand }}</p>
      <p class="info-name">{{ card.name }}</p>

      <div class="info-btns">
        <div>
          <button @click="productStore.decreaseAmount(card)">-</button>
          <span> {{ card.amount }} </span>
          <button @click="productStore.increaseAmount(card)">+</button>
        </div>

        <button>Купить</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/domain/Product'

import { useProductStore } from '@/stores/ProductStore'

const productStore = useProductStore()

defineProps<{
  card: Product
}>()
</script>

<style scoped>
.card {
  border: 1px solid black;

  display: flex;
  gap: 12px;

  padding: 12px;
  border-radius: 14px;
}

.card-img {
  width: 30%;
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-btns {
  display: flex;
  align-items: end;
  gap: 12px;
  flex: 1;
}
</style>
