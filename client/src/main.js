import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import PropertiesPage from './components/PropertiesPage.vue'
import HomePage from './components/HomePage.vue'
import DashboardPage from './components/DashboardPage.vue'

const routes = [
  { path: '/', component: DashboardPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/properties', component: PropertiesPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
