<script setup lang="ts"></script>

<template>
  <div class="account">
    <header class="account-head">
      <div class="head-account">
        <div class="account-user">
          <img src="/icons/account.svg" />
          <span>username</span>
        </div>

        <button>Выйти</button>
      </div>
    </header>

    <main class="account-main">
      <div class="block">
        <span>3342 ₽</span>

        <button>Пополнить</button>
      </div>

      <div class="block"></div>
    </main>
  </div>
</template>

<style scoped>
.account {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.account-head {
  border: 1px solid black;

  border-radius: 0 0 14px 14px;
  padding: 12px;
}

.head-account {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.account-user {
  display: flex;
  align-items: center;
  gap: 8px;
}

.account-main {
  padding: 12px;
}
</style>
