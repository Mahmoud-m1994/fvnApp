import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  InfoCard: () => import('../../components/InfoCard.vue' /* webpackChunkName: "components/info-card" */).then(c => wrapFunctional(c.default || c)),
  MyStorybook: () => import('../../components/MyStorybook.vue' /* webpackChunkName: "components/my-storybook" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
