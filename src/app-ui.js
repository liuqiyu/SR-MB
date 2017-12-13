// 组件引用
import Vue from 'vue'

// mint-ui 组件 按需引入
import {
  Badge,
  InfiniteScroll,
  IndexList,
  IndexSection,
  Cell
} from 'mint-ui'

// element-ui 组件 按需引入
import Rate from 'element-ui'

Vue.component(Badge.name, Badge)
Vue.component(IndexList.name, IndexList)
Vue.component(IndexSection.name, IndexSection)
Vue.component(Cell.name, Cell)
Vue.use(InfiniteScroll)

Vue.use(Rate)
