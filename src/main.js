import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
//import './index.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from './router'

//import VueRouter from 'vue-router'

//import {router} from './routes'



const app = createApp(App).use(router)
app.use(VueSweetalert2);
//app.use(VueRouter);
app.mount('#app');




