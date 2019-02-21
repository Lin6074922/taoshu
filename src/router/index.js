import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../components/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:index},
    {path:'/index',component:index}
  ]
})
