import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)

app.use(createPinia())
app.use(PerfectScrollbar)
app.use(VueSmoothScroll)
app.use(router)

app.mount('#app')
