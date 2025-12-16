import { createApp } from 'vue'
import Welcome from './views/guest/Welcome.vue'
import router from './router'
import vuetify from './plugins/vuetify'

const app = createApp(Welcome)  // <-- mount your component here

app.use(router)
app.use(vuetify)

app.mount('#app')
