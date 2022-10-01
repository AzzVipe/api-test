import { createRouter, createWebHashHistory } from 'vue-router'
import PinCode from '../pages/PinCode.vue'
import BankIfsc from '../pages/BankIfsc.vue'
import EmployeeList from '../pages/EmployeeList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/HomeView.vue')
  },
  {
    path: '/pincode',
    name: 'pincode',
    component: PinCode
  },
  {
    path: '/bank',
    name: 'bankifsc',
    component: BankIfsc
  },
  {
    path: '/emplist',
    name: 'employeelist',
    component: EmployeeList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
