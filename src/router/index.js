import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/Default'
import EDefault from '@/layout/EDefault'
import JDefault from '@/layout/JDefault'
import Home from '@/view/Home'
import EHome from '@/view/english/Home'
import JHome from '@/view/japan/Home'

import Branch from '@/view/Branch'
import EBranch from '@/view/english/Branch'
import JBranch from '@/view/japan/Branch'

import Company from '@/view/Company'
import ECompany from '@/view/english/Company'
import JCompany from '@/view/japan/Company'

import Consult from '@/view/Consult'
import EConsult from '@/view/english/Consult'
import JConsult from '@/view/japan/Consult'

import Device from '@/view/Device'
import EDevice from '@/view/english/Device'
import JDevice from '@/view/japan/Device'

import Life from '@/view/Life'
import ELife from '@/view/english/Life'
import JLife from '@/view/japan/Life'

import Product from '@/view/Product'
import EProduct from '@/view/english/Product'
import JProduct from '@/view/japan/Product'

import Cert from '@/view/Cert'
import ECert from '@/view/english/Cert'
import JCert from '@/view/japan/Cert'


Vue.use(Router)

 let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: Default,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },

        {
          path: '/branch',
          name: 'branch',
          component: Branch
        },
        {
          path: '/cert',
          name: 'cert',
          component: Cert
        },
        {
          path: '/company',
          name: 'company',
          component: Company
        },
        {
          path: '/consult',
          name: 'consult',
          component: Consult
        },
        {
          path: '/device',
          name: 'device',
          component: Device
        },
        {
          path: '/life',
          name: 'life',
          component: Life
        },{
          path: '/product',
          name: 'product',
          component: Product
        },
      ]
    },
    {
      path: '/English',
      name: 'eDefult',
      component: EDefault,
      redirect: '/English/home',
      children: [
        {
          path: '/English/home',
          name: 'eHome',
          component:  EHome
        },
        {
          path: '/English/company',
          name: 'eCompany',
          component:  ECompany
        },
        {
          path: '/English/product',
          name: 'eProduct',
          component:  EProduct
        },
        {
          path: '/English/device',
          name: 'eDevice',
          component:  EDevice
        },
        {
          path: '/English/cert',
          name: 'eCert',
          component:  ECert
        },
        {
          path: '/English/life',
          name: 'eLife',
          component:  ELife
        },
        {
          path: '/English/Branch',
          name: 'eBranch',
          component:  EBranch
        },
        {
          path: '/English/consult',
          name: 'eConsult',
          component:  EConsult
        },
      ]
    },
    {
      path: '/Japanese',
      name: 'jDefult',
      component: JDefault,
      redirect: '/Japanese/home',
      children: [
        {
          path: '/Japanese/home',
          name: 'jHome',
          component:  JHome
        },
        {
          path: '/Japanese/company',
          name: 'jCompany',
          component:  JCompany
        },
        {
          path: '/Japanese/product',
          name: 'jProduct',
          component:  JProduct
        },
        {
          path: '/Japanese/device',
          name: 'jDevice',
          component:  JDevice
        },
        {
          path: '/Japanese/cert',
          name: 'jCert',
          component:  JCert
        },
        {
          path: '/Japanese/life',
          name: 'jLife',
          component:  JLife
        },
        {
          path: '/Japanese/branch',
          name: 'jBranch',
          component:  JBranch
        },
        {
          path: '/Japanese/consult',
          name: 'jConsult',
          component:  JConsult
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
})
export default router;
