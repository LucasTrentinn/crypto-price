<template>
  <div>
    <Header />
    <div class="row body">
      <div class="col">
        <CryptoCard />
      </div>
      <div class="col">
       <CryptoHist />
       <CryptoList />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import CryptoCard from '../components/CryptoCard.vue';
import CryptoHist from '../components/CryptoHist.vue';
import CryptoList from '../components/CryptoList.vue';

</script>

<style>
body {
  background-color: #E6E6FA;
}

.body {
  padding-bottom: 60px;
}
</style>