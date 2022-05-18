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
    ]
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
    }
  }
})