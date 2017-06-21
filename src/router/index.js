import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


Vue.use(Router)

const router = new VueRouter({
  routes: [
    {
      path: '/home', component: require('../components/Home.vue')
    },
    {
      path: '/about', component: require('../components/About.vue')
    },
    {
      path:'*',redirect:'/home'
    }
  ]
});
// 输出router
export default router;
