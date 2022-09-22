import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import one from './components/one.vue'
import two from './components/two.vue'
import { createWebHashHistory,createRouter} from 'vue-router'

const histroy = createWebHashHistory()
const router = createRouter({
  history:histroy,
  routes:[
    {path:'/',component:one},
    {path:'/xxx',component:two}
  ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')
