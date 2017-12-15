// actions
import {
  CITY_UPDATE,
  GENDER_UPDATE,
  HEIGHT_UPDATE,
  WEIGHT_UPDATE
} from './mutation-types'
import { getCity } from './../utils/getData'

const cityUpdate = ({commit}) => {
  let city = getCity()
  commit(CITY_UPDATE, city)
}

const genderUpdate = ({commit}) => {
  const gender = 'MAN MAN'
  commit(GENDER_UPDATE, gender)
}

const heightUpdate = ({commit}) => {
  const height = '183cm'
  commit(HEIGHT_UPDATE, height)
}

const weightUpdate = ({commit}) => {
  const weight = '64kg'
  commit(WEIGHT_UPDATE, weight)
}

export default {
  cityUpdate,
  genderUpdate,
  heightUpdate,
  weightUpdate
}
