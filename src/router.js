import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rooms/:roomId',
      name: 'chatroom',
      component: function () {
        return import(/* webpackChunkName: "room" */ './views/ChatRoom.vue')
      }
    }
  ]
})
