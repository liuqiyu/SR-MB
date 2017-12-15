// vuex store
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
// import getters from './getters'

Vue.use(Vuex)

const state = {
  city: '',     //  当前的城市
  gender: '',     //  性别
  height: '',    //  身高
  weight: '',    //  体重
  login: true
}

export default new Vuex.Store({
  state,
  actions,
  mutations
  // getters
})
