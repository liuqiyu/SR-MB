import Vue from 'vue'
import Router from 'vue-router'
const Layout = r => require.ensure([], () => r(require('@/views/layout/index')), 'layout')
const Contacts = r => require.ensure([], () => r(require('@/views/contacts/index')), 'contacts')
const Film = r => require.ensure([], () => r(require('@/views/film/index')), 'film')
// read
const Read = r => require.ensure([], () => r(require('@/views/read/index')), 'read')
const BookItem = r => require.ensure([], () => r(require('@/views/read/item')), 'read')

const My = r => require.ensure([], () => r(require('@/views/my/index')), 'layout')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Contacts',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'Contacts',
          name: Contacts,
          component: Contacts
        },
        {
          path: 'Film',
          name: Film,
          component: Film
        },
        {
          path: 'Read',
          name: Read,
          component: Read
        },
        {
          path: 'Read/BookItem',
          name: BookItem,
          component: BookItem
        },
        {
          path: 'My',
          name: My,
          component: My
        }
      ]
    }
  ]
})
