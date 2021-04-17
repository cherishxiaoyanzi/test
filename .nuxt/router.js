import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _47dd7b07 = () => interopDefault(import('../pages/articlelist.vue' /* webpackChunkName: "pages/articlelist" */))
const _a29f5f08 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _2426ed06 = () => interopDefault(import('../pages/posts.vue' /* webpackChunkName: "pages/posts" */))
const _7b970285 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _88c43ba6 = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articlelist",
    component: _47dd7b07,
    name: "articlelist"
  }, {
    path: "/home",
    component: _a29f5f08,
    name: "home"
  }, {
    path: "/posts",
    component: _2426ed06,
    name: "posts"
  }, {
    path: "/",
    component: _7b970285,
    name: "index"
  }, {
    path: "/:id",
    component: _88c43ba6,
    name: "id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
