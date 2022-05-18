import { defineStore } from "pinia";
import { api } from "../api";

export const usePricesStore = defineStore({
  id: 'prices',
  state: () => ({
    price: ''
  }),
  getters: {

  },
  actions: {
    async consultarPreco(id) {
      const res =  await api.get(`coins/${id}?localization=false&tickers=true&community_data=false&developer_data=false&sparkline=false`)
      this.price = res.data
    }
  }
})