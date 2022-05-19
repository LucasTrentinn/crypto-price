<template>
  <div v-if="crypto" class="content">
    <h1 class="name"> {{ crypto.name }} ({{crypto.symbol}}) </h1>
    <img :src="crypto.image.large" alt="">
    <h1 class="price"> {{ crypto.market_data.current_price.brl.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}} </h1>
  </div>
  <div v-else>
    <h1>carregando...</h1>
  </div>  
</template>

<script setup>
import { computed, onMounted } from '@vue/runtime-core';
import { useCryptoStore } from '../stores/crypto';

const store =  useCryptoStore()
const crypto = computed(() => store.crypto)

onMounted(() => {
  store.checkCrypto()

  setInterval(() => {
    store.checkCrypto()
  }, 1000 * 60)
})
</script>

<style>
.content {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.name {
  font-size: 60px;
  padding: 20px;
}

.price {
  font-size: 50px;
  padding: 20px;
}
</style>