import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'http://registry.npmjs.org/-/v1/search?text='

export default new Vuex.Store({
  actions: {
    async getData ({ commit }, { packageName }) {
      await axios.get(baseUrl + packageName)
        .then(
          (response) => {
            commit('showData', response.data.objects)
          },
          (error) => { console.log(error) }
        )
    },
    getModalData ({ commit }, { data }) {
      commit('showModal', data)
    }
  },
  state: {
    data: [],
    modal: [],
    isModal: false
  },
  mutations: {
    showData (state, data) {
      state.data = data
    },
    showModal (state, data) {
      state.modal = data
    }
  },
  getters: {
    getInfo (state) {
      return state.data
    },
    getModalInfo (state) {
      return state.modal
    }
  }
})
