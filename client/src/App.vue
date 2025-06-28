<script setup>
// No imports needed for now; router-view will handle page rendering
</script>

<template>
  <header class="main-navbar">
    <div class="nav-left">
      <span class="logo"><span class="logo-letter">T</span><span class="logo-double-dash"><span></span><span></span></span><span class="logo-letter">M</span></span>
      <nav class="nav-menu">
        <router-link to="/dashboard" class="nav-item" :class="{ active: $route.path === '/dashboard' }">Dashboard</router-link>
        <router-link to="/properties" class="nav-item" :class="{ active: $route.path === '/properties' }">Properties</router-link>
        <a href="#" class="nav-item">Accounting <span class="chevron">▼</span></a>
        <a href="#" class="nav-item">Reporting <span class="chevron">▼</span></a>
      </nav>
    </div>
    <div class="nav-right">
      <button class="icon-btn menu-btn" title="More"><span class="hamburger"></span></button>
    </div>
  </header>
  <div class="sub-navbar">
    <span class="sub-navbar-title">All Companies</span>
    <input class="search-bar" type="text" placeholder="Search..." />
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
  background: #f7f6f3;
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
  padding-top: 92px;
}
.hamburger {
  display: inline-block;
  width: 22px;
  height: 16px;
  position: relative;
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
</style>
