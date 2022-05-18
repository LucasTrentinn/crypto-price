<template>
  <div class="list"> 
    <h3> Choose your crypto </h3>
    <div class="list-group">
      <button class="list-group-item list-group-item-action item"
      v-for="item in cryptos" :key="item.id" :value="item.id" @click="store.changeID(item.id)">
        {{item.name}} ({{item.symbol}})
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useCryptoStore } from "../stores/crypto";

const store =  useCryptoStore()
const cryptos = computed(() => store.cryptos)
const crypto = computed(() => store.crypto)

</script>

<style>
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px;
}

.item{
  display: flex;
  justify-content: center;
  width: 200px;
  background-color: #E6E6FA;
}

.item:hover {
  background-color: white;
}
</style>