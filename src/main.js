import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import axios from 'axios'
import '@/assets/css/tailwind.css'

const app = createApp(App)

app.use(store).mount('#app')
