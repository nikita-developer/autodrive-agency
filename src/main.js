import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import Maska from 'maska'

const app = createApp(App)

app.use(store).use(Maska).mount('#app')
