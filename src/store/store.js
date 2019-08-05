
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    type: '',
    count: 0
  },
  getters: {

  },
  mutations: {
    increase () {
      this.state.count++
    }
  },
  actions: {

  }
})

export default store
