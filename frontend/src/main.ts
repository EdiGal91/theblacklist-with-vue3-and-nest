import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueQueryPlugin)
    .use(createPinia())
    .use(router)
    .mount('#app')
