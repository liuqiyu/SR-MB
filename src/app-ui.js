// 组件引用
import Vue from 'vue'

// mint-ui 组件 按需引入
import {
  Field,
  Button,
  Lazyload,
  Badge,
  InfiniteScroll,
  IndexList,
  IndexSection,
  Cell,
  Spinner
} from 'mint-ui'

// element-ui 组件 按需引入
import Rate from 'element-ui'

Vue.component(Field.name, Field)
Vue.component(Button.name, Button)
Vue.component(Badge.name, Badge)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(Cell.name, Cell)
Vue.component(Spinner.name, Spinner)
Vue.use(InfiniteScroll)
Vue.use(Lazyload)

Vue.use(Rate)
