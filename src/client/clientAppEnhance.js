import { defineClientAppEnhance } from '@vuepress/client'
import OnThisPage from './components/OnThisPage.vue'
import Footer from './components/Footer.vue'
import SplitBadge from './components/SplitBadge.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('OnThisPage', OnThisPage)
  app.component('Footer', Footer)
  app.component('SplitBadge', SplitBadge)
})
