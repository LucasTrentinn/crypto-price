import { defineStore } from "pinia";
import { api } from "../api";

export const useCryptoStore = defineStore({
  id: 'crypto',
  state: () => ({
    id: 'bitcoin',
    crypto: '',
    cryptos: [
    {name: 'Bitcoin', id: 'bitcoin', symbol: 'btc'}, 
    {name: 'Cosmos', id: 'cosmos', symbol: 'atom'}, 
    {name: 'Dacxi', id: 'dacxi', symbol: 'dacxi'}, 
    {name: 'Ethereum', id: 'ethereum', symbol: 'eth'}, 
    {name: 'Terra', id: 'terra-luna', symbol: 'luna'}
    ],
    histPrice: null
  }),
  getters: {
  },
  actions: {
    async checkCrypto() {
      const res =  await api.get(`coins/${this.id}?localization=false&tickers=true&community_data=false&developer_data=false&sparkline=false`)
      this.crypto = res.data
    },
    async changeID(id) {
      this.id = id
      this.checkCrypto(this.id)
      this.histPrice = null
    },
    async checkHistPrice(unix, unix2) {
      const res = await api.get(`https://api.coingecko.com/api/v3/coins/${this.id}/market_chart/range?vs_currency=brl&from=${unix}&to=${unix2}`)
      this.histPrice = res.data.prices.at(0).at(1)
    }
  }
})