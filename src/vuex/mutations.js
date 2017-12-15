// mutations
import {
  CITY_UPDATE,
  GENDER_UPDATE,
  HEIGHT_UPDATE,
  WEIGHT_UPDATE
} from './mutation-types'

const mutations = {
  [CITY_UPDATE] (state, val) {
    state.city = val
  },
  [GENDER_UPDATE] (state, val) {
    state.gender = val
  },
  [HEIGHT_UPDATE] (state, val) {
    state.height = val
  },
  [WEIGHT_UPDATE] (state, val) {
    state.weight = val
  }
}

export default mutations
