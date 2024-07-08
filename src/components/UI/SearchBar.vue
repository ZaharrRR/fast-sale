<template>
  <div class="search">
    <img src="/icons/search.svg" />
    <input v-model="value" type="text" placeholder="Поиск" class="search-input" />
  </div>
</template>

<script setup lang="ts">
const value = defineModel()
</script>

<style scoped>
.search {
  border: 1px solid black;

  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;

  border-radius: 16px;
  padding: 12px;
}
</style>
