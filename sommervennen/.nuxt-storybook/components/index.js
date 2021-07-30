import { wrapFunctional } from './utils'

export { default as Header } from '../../components/Header.vue'
export { default as InfoCard } from '../../components/InfoCard.vue'
export { default as MyStorybook } from '../../components/MyStorybook.vue'

export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyInfoCard = import('../../components/InfoCard.vue' /* webpackChunkName: "components/info-card" */).then(c => wrapFunctional(c.default || c))
export const LazyMyStorybook = import('../../components/MyStorybook.vue' /* webpackChunkName: "components/my-storybook" */).then(c => wrapFunctional(c.default || c))
