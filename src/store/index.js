import Vue from 'vue'
import Vuex from 'vuex'
import datos from './modules/datos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    datos
  }
})
