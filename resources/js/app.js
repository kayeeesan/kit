import { createApp } from 'vue'
import router from './router/index'
import pinia from './store'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import App from './views/App.vue'

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
