import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

createApp(App).mount('#app')

AOS.init({ duration: 800 })