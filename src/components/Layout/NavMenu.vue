<template>
  <nav class="nav">
    <RouterLink to="/" class="nav-item">
      <img src="/icons/home.svg" />
    </RouterLink>
    <RouterLink to="/catalogs" class="nav-item">
      <img src="/icons/catalogs.svg" />
    </RouterLink>
    <RouterLink to="/cart" class="nav-item">
      <img src="/icons/cart.svg" />
    </RouterLink>
    <RouterLink to="/account" class="nav-item">
      <img src="/icons/account.svg" />
    </RouterLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav {
  border: 1px solid black;

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  position: fixed;
  bottom: 0;

  background-color: white;
}

.nav-item {
  padding: 14px;
}
</style>
