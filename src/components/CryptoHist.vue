<template>
  <div class="hist">
    <h3> Historical price </h3>
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">Date:</span>
      <input type="date" class="form-control" aria-describedby="basic-addon1" @change="changeDate">
      <span class="input-group-text" id="basic-addon1">Time: </span>
      <input type="time" class="form-control" aria-describedby="basic-addon1" @change="changeTime">
    </div>
    <button class="btn search" @click="checkPrice()">Search</button>
    <div>
      <div v-if="histPrice">
        <h5 class="histText"> {{ histPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }} </h5>
        <hr>
      </div>
      <div v-else>
        <h5 class="histText"> Enter a date and time to see the price. </h5>
        <hr>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useCryptoStore } from "../stores/crypto";

const store = useCryptoStore()
const histPrice = computed(() => store.histPrice)

onMounted(() => {
  store.checkHistPrice()
})

var date 
var time 

function changeDate (e) {
  date = (e.target.value).replace("-", ".").replace("-", ".")
}

const changeTime = (e) => {
  time = (e.target.value)
}

const checkPrice = () => {
  let dateTime = date + " " + time
  let unix =  Math.floor(new Date(dateTime).getTime() / 1000)
  let unix2 = unix + 86400

  store.checkHistPrice(unix, unix2)
}
</script>

<style>
.hist {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 60px 10px 60px;
}

.search {
  background-color: #d6d6f3;
  border: 1px black solid;
  margin: 40px 0 20px 0;
}
</style>