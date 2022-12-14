import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import { createWebHashHistory,createRouter} from 'vue-router'

const histroy = createWebHashHistory()
const router = createRouter({
  history:histroy,
  routes:[
    {path:'/',component:Home},
    {path:'/doc',component:Doc}
  ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')
