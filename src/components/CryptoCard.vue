<template>
  <div>
    <h1> {{ preco.name }} </h1>  
    <img :src="preco.image.thumb" alt="">
  </div>  
</template>

<script setup>
import { computed, onMounted } from '@vue/runtime-core';
import { usePricesStore } from '../stores/prices';

const store =  usePricesStore()
const preco = computed(() => store.price)

onMounted(() => {
  store.consultarPreco('bitcoin')
})

</script>

<style>

</style>