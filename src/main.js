import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import axios from 'axios'
import Maska from 'maska'

const app = createApp(App)

app.use(store).use(Maska).mount('#app')
