import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/entry',
    name: 'entry',
    component: () => import('../views/Entry.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../views/Me.vue')
  },
  {
    path: '/sport-detail',
    name: 'sport-detail',
    component: () => import('../views/SportDetail.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition ?? { left: 0, top: 0 }
  }
})

router.beforeEach(async (to) => {
  if (to.name === 'landing-page') return
  if (to.name === 'login') return
  if (to.name === 'settings-payment-upgrade') {
    to.meta.noLayout = true
  }
  // 暫時註解，用token判斷是否導回登入頁面
  // if (!localStorage.getItem('token')) {
  //   return { name: 'login' }
  // }
})

export default router