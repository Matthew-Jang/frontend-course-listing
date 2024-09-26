import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Ensure you have a router setup
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Vuetify CSS
import '@mdi/font/css/materialdesignicons.css' // Material Design Icons

// Vuetify setup
const vuetify = createVuetify()

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
