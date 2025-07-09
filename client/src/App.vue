<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import IconsBar from './components/IconsBar.vue'
// No imports needed for now; router-view will handle page rendering

const router = useRouter()
const showLogin = ref(false)
const username = ref('')
const password = ref('')
const loginError = ref('')

const showPropertyDropdown = ref(false)
function togglePropertyDropdown() {
  showPropertyDropdown.value = !showPropertyDropdown.value
}
function closePropertyDropdown() {
  showPropertyDropdown.value = false
}
const showAccountingDropdown = ref(false)
function toggleAccountingDropdown() {
  showAccountingDropdown.value = !showAccountingDropdown.value
}
function closeAccountingDropdown() {
  showAccountingDropdown.value = false
}
const showReportingDropdown = ref(false)
function toggleReportingDropdown() {
  showReportingDropdown.value = !showReportingDropdown.value
}
function closeReportingDropdown() {
  showReportingDropdown.value = false
}

function goToDashboard() {
  router.push('/dashboard')
}
function toggleLogin() {
  showLogin.value = !showLogin.value
  loginError.value = ''
}
function submitLogin() {
  if (!username.value || !password.value) {
    loginError.value = 'Please enter both username and password.'
    return
  }
  // Simulate login success
  showLogin.value = false
  loginError.value = ''
  // You can add real authentication logic here
}
</script>

<template>
  <header class="main-navbar">
    <div class="nav-left">
      <button class="logo-btn" aria-label="Home" @click="goToDashboard">
        <span class="logo"><span class="logo-letter">T</span><span class="logo-double-dash"><span></span><span></span></span><span class="logo-letter">M</span></span>
      </button>
    </div>
    <nav class="nav-menu">
      <router-link to="/dashboard" class="nav-item" :class="{ active: $route.path === '/dashboard' }">Dashboard</router-link>
      <div class="nav-item property-dropdown-wrapper" @mouseenter="showPropertyDropdown = true" @mouseleave="showPropertyDropdown = false">
        <button class="property-dropdown-btn" :class="{ active: $route.path === '/properties' }">
          Property Management <span class="chevron">▼</span>
        </button>
        <div v-if="showPropertyDropdown" class="property-dropdown-menu">
          <button class="dropdown-item" @click="() => { closePropertyDropdown(); router.push('/properties'); }">Properties</button>
          <button class="dropdown-item" @click="closePropertyDropdown">Tenancies</button>
          <button class="dropdown-item" @click="closePropertyDropdown">Rent Reviews</button>
          <button class="dropdown-item" @click="closePropertyDropdown">Maintenance</button>
          <button class="dropdown-item" @click="closePropertyDropdown">Compliance</button>
          <button class="dropdown-item" @click="closePropertyDropdown">Insurance</button>
          <button class="dropdown-item" @click="closePropertyDropdown">Inspections</button>
        </div>
      </div>
      <div class="nav-item property-dropdown-wrapper" @mouseenter="showAccountingDropdown = true" @mouseleave="showAccountingDropdown = false">
        <button class="property-dropdown-btn" :class="{ active: $route.path === '/accounting' }">
          Accounting <span class="chevron">▼</span>
        </button>
        <div v-if="showAccountingDropdown" class="property-dropdown-menu">
          <button class="dropdown-item" @click="closeAccountingDropdown">Income & Expenses</button>
          <button class="dropdown-item" @click="closeAccountingDropdown">Invoice Intelligence</button>
          <button class="dropdown-item" @click="closeAccountingDropdown">Arrears</button>
          <button class="dropdown-item" @click="closeAccountingDropdown">Re-Leased Pay</button>
          <button class="dropdown-item" @click="closeAccountingDropdown">Invoice Approvals</button>
          <button class="dropdown-item" @click="closeAccountingDropdown">Owner Fees</button>
          <button class="dropdown-item" @click="closeAccountingDropdown">Tenant Late Fees</button>
        </div>
      </div>
      <div class="nav-item property-dropdown-wrapper" @mouseenter="showReportingDropdown = true" @mouseleave="showReportingDropdown = false">
        <button class="property-dropdown-btn" :class="{ active: $route.path === '/reporting' }">
          Reporting <span class="chevron">▼</span>
        </button>
        <div v-if="showReportingDropdown" class="property-dropdown-menu">
          <button class="dropdown-item" @click="closeReportingDropdown">General</button>
          <button class="dropdown-item" @click="closeReportingDropdown">Report Builder</button>
          <button class="dropdown-item" @click="closeReportingDropdown">Insights</button>
        </div>
      </div>
    </nav>
    <div class="nav-right">
      <button class="icon-btn menu-btn" title="More">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <button class="navbar-avatar" aria-label="Profile" @click="toggleLogin"><span class="navbar-avatar-text">TM</span></button>
      <div v-if="showLogin" class="login-dropdown">
        <form class="login-form" @submit.prevent="submitLogin">
          <div class="login-form-group">
            <input type="text" v-model="username" placeholder="Username" autocomplete="username" />
          </div>
          <div class="login-form-group">
            <input type="password" v-model="password" placeholder="Password" autocomplete="current-password" />
          </div>
          <div v-if="loginError" class="login-error">{{ loginError }}</div>
          <button type="submit" class="login-submit-btn">Login</button>
        </form>
      </div>
    </div>
  </header>
  <div class="sub-navbar">
    <span class="sub-navbar-title">All Companies</span>
    <div style="display: flex; align-items: center; gap: 1rem;">
      <input class="search-bar" type="text" placeholder="Search..." />
      <!-- <IconsBar /> removed -->
    </div>
  </div>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
.main-navbar {
  width: 100vw;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  height: 56px;
  padding: 0 1.5rem;
  font-family: 'Inter', Arial, sans-serif;
}
.nav-left {
  display: flex;
  align-items: center;
}
.logo {
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  margin-right: 2rem;
  letter-spacing: 0.02em;
  color: #222;
  font-family: 'Arial Black', Arial, sans-serif;
}
.logo-letter {
  font-weight: 900;
  font-size: 1.6rem;
  line-height: 1;
}
.logo-double-dash {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 0.13em;
  height: 1em;
  position: relative;
}
.logo-double-dash span:first-child {
  width: 0.6em;
  margin-left: 0.45em;
}
.logo-double-dash span:last-child {
  width: 0.45em;
  margin-left: 0;
}
.logo-double-dash span {
  display: block;
  width: 0.9em;
  height: 0.18em;
  background: #222;
  margin: 0.07em 0;
  border-radius: 0.04em;
}
.dash {
  color: #888;
  font-weight: 400;
}
.nav-menu {
  display: flex;
  gap: 1.5rem;
  margin-left: auto;
  margin-right: 2.5rem;
}
.nav-item {
  color: #222;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0.2rem;
  transition: color 0.2s;
}
.nav-item.active, .nav-item:hover {
  color: #1976d2;
}
.chevron {
  font-size: 0.8em;
  margin-left: 0.2em;
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.icon-btn {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  margin-left: 0.2rem;
  color: #444;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  transition: background 0.2s;
}
.icon-btn:hover {
  background: #f0f0f0;
}
.sub-navbar {
  width: 100vw;
  background: #ededed;
  border-bottom: 1px solid #e0e0e0;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  font-size: 1rem;
  color: #444;
  font-family: 'Inter', Arial, sans-serif;
  box-sizing: border-box;
  position: fixed;
  top: 56px;
  left: 0;
  z-index: 999;
}
.sub-navbar-title {
  font-weight: 400;
  letter-spacing: 0.01em;
}
.search-bar {
  width: 220px;
  padding: 0.4rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background: #fafafa;
  margin-left: 2rem;
}
main {
  max-width: 100vw;
  margin: 0 auto;
  padding: 0;
  padding-top: 56px;
}
main > *:first-child {
  margin-top: 0 !important;
}
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 18px;
  gap: 4px;
}
.hamburger span {
  display: block;
  width: 18px;
  height: 3px;
  background: #444;
  border-radius: 2px;
  transition: background 0.2s;
}
.hamburger {
  top: 6px;
}
.hamburger::before {
  top: 0;
}
.hamburger::after {
  bottom: 0;
}
.menu-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 50%;
  transition: background 0.2s;
}
.menu-btn:hover {
  background: #f0f0f0;
}
.logo-btn {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.logo-btn:focus {
  outline: 2px solid #1976d2;
  outline-offset: 2px;
}
.navbar-avatar {
  width: 36px;
  height: 36px;
  background: #f7f6f3;
  color: #111;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.7rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  letter-spacing: 0.02em;
  position: relative;
  overflow: visible;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;
  transition: box-shadow 0.2s, background 0.2s;
}
.navbar-avatar:focus {
  box-shadow: 0 0 0 2px #1976d2;
}
.navbar-avatar::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 34px;
  height: 34px;
  background: #d3d3d3;
  border-radius: 50%;
  z-index: 0;
}
.navbar-avatar {
  z-index: 1;
}
.navbar-avatar-text {
  position: relative;
  z-index: 1;
}
.login-dropdown {
  position: absolute;
  top: 48px;
  right: 0;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  padding: 1.2rem 1.2rem 1rem 1.2rem;
  z-index: 2000;
  min-width: 220px;
}
.login-form-group {
  margin-bottom: 1rem;
}
.login-form input {
  width: 100%;
  padding: 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  background: #fafafa;
  color: #222;
  box-sizing: border-box;
}
.login-form input:focus {
  outline: none;
  border: 1.5px solid #1976d2;
  background: #fff;
}
.login-submit-btn {
  width: 100%;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.7rem 0;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.login-submit-btn:hover {
  background: #1356a2;
}
.login-error {
  color: #d32f2f;
  font-size: 0.95rem;
  margin-bottom: 0.7rem;
  text-align: center;
}
.property-dropdown-wrapper {
  position: relative;
  display: inline-block;
}
.property-dropdown-btn {
  background: #e6efea;
  color: #222;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.property-dropdown-btn.active, .property-dropdown-btn:hover {
  background: #b7d2c6;
  color: #1976d2;
}
.property-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  border: 1px solid #e0e0e0;
  z-index: 2000;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
}
.dropdown-item {
  padding: 0.7rem 1.5rem;
  color: #222;
  text-decoration: none;
  font-size: 1rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  border-radius: 0;
}
.dropdown-item:hover, .dropdown-item:focus {
  background: #1976d2;
  color: #fff;
}
</style>
