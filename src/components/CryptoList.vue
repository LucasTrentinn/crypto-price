<template>
  <div class="list"> 
    <h3> Choose your crypto </h3>
    <div class="list-group">
      <button class="list-group-item list-group-item-action item "
      v-for="item in cryptos" :key="item.id" :value="item.id" @click="store.changeID(item.id) && scrollTop()">
        {{item.name}} ({{item.symbol}})
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useCryptoStore } from "../stores/crypto";

const store =  useCryptoStore()
const cryptos = computed(() => store.cryptos)

function scrollTop() {
   document.documentElement.scrollTop = 0;
}
</script>

<style>
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.item{
  display: flex;
  justify-content: center;
  width: 200px;
  background-color: #d6d6f3;
}

.item:hover, .item:focus {
  background-color: #E6E6FA;
}
</style>