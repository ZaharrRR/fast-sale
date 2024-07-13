<template>
  <div class="card">
    <img class="card-img" :src="card.imageUrl" />

    <div class="card-info">
      <p class="info-price">{{ card.price }} ₽</p>
      <p class="info-brand">{{ card.brand }}</p>
      <p class="info-name">{{ card.name }}</p>

      <div class="info-rating">
        <img src="/icons/star.svg" />
        <span>{{ card.rating }}</span>
      </div>

      <button v-if="!card.isAdded" @click="$emit('addToCart', card)" class="info-btn">
        <img src="/icons/cart.svg" />
        <span>Послезавтра</span>
      </button>

      <button v-else class="info-btn">
        <span>уже в корзине</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '@/domain/Product'

defineProps<{
  card: Product
}>()
</script>

<style scoped>
.card-img {
  width: 100%;
  border-radius: 24px;
  background-color: rgb(209, 209, 209);
}

.card-info {
  padding: 8px;
}

.info-price {
  font-weight: 700;
  font-size: 20px;

  margin-bottom: 8px;
}

.info-brand {
  font-size: 14px;
}

.info-name {
  font-weight: 500;
  font-size: 14px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info-rating {
  display: flex;
  align-items: center;
  gap: 6px;

  margin-top: 8px;
}

.info-rating span {
  margin-top: 4px;
}

.info-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: 100%;
  margin: 12px 0;
  padding: 10px 0;

  border-radius: 12px;
  border: none;

  font-weight: 700;
}
</style>
