import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import i18n from './i18n'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

AOS.init();

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
