import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem, Button, Form, Field, CellGroup, Divider, Checkbox, Loading, Skeleton, Tab, Tabs, Sticky, Icon, Rate, Sidebar, SidebarItem, Tag, NavBar } from 'vant'

import 'vant/lib/index.css'
import './styles/index.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.use(Tabbar)
app.use(TabbarItem)
app.use(Button)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(Divider)
app.use(Checkbox)
app.use(Loading)
app.use(Skeleton)
app.use(Tab)
app.use(Tabs)
app.use(Sticky)
app.use(Icon)
app.use(Rate)
app.use(Sidebar)
app.use(SidebarItem)
app.use(Tag)
app.use(NavBar)

const rootValue = 16
const rootWidth = 390
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = deviceWidth * rootValue / rootWidth + 'px'

app.mount('#app')
