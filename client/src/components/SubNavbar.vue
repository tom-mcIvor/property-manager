<script setup>
// No props or reactive data needed for now
</script>

<template>
  <div class="sub-navbar">
    <span class="sub-navbar-title">All Companies</span>
    <div class="sub-navbar-right">
      <input class="search-bar" type="text" placeholder="Search..." />
      <button class="icon-btn add-btn" title="Add">
        <span class="plus-icon">+</span>
      </button>
      <button class="icon-btn refresh-btn" title="Refresh">
        <span class="refresh-icon">↻</span>
      </button>
      <button class="icon-btn notification-btn" title="Notifications">
        <span class="notification-icon">🔔</span>
        <span class="notification-badge">1</span>
      </button>
      <button class="icon-btn profile-btn" title="Profile">
        <span class="profile-icon">👤</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.sub-navbar {
  width: 100vw;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 0.875rem;
  color: #495057;
  font-family: 'Inter', Arial, sans-serif;
  box-sizing: border-box;
  position: fixed;
  top: 56px;
  left: 0;
  z-index: 999;
}

.sub-navbar-title {
  font-weight: 500;
  letter-spacing: 0.01em;
  color: #212529;
}

.sub-navbar-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.search-bar {
  width: 240px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 0.875rem;
  background: #ffffff;
  color: #495057;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.search-bar:focus {
  outline: none;
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.search-bar::placeholder {
  color: #6c757d;
}

.icon-btn {
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  position: relative;
  color: #6c757d;
  font-size: 0.875rem;
}

.icon-btn:hover {
  background-color: #e9ecef;
  color: #495057;
}

.plus-icon {
  font-size: 1.125rem;
  font-weight: 600;
}

.refresh-icon {
  font-size: 1rem;
}

.notification-icon {
  font-size: 0.875rem;
}

.profile-icon {
  font-size: 0.875rem;
}

.notification-btn {
  position: relative;
}

.notification-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  background: #dc3545;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
</style>