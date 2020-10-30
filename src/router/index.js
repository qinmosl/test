import Vue from 'vue'
import Router from 'vue-router'

const man = () => import('../views/man/man')
const book = () => import('../views/book/book')
const game = () => import('../views/game/game')
const cloth = () => import('../views/cloth/cloth')

Vue.use(Router)

export default new Router({
  mode:'history',  //默认是hash模式，会带#号
  routes: [{
      path: '',
      redirect: '/cloth'
    },
    {
      path: '/cloth',
      component:cloth
    },
    {
      path: '/man',
      component:man
    }, 
    {
      path: '/book',
      component: book
    },
    {
      path: '/game',
      component: game
    }
  ]
})


