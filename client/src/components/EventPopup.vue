<template>
  <div class="event-popup">
    <div class="event-popup-arrow"></div>
    This is a test popup from DashboardPage
  </div>
</template>

<script setup>
// No props for now; purely presentational
</script>

<style scoped>
.event-popup {
  position: fixed;
  left: 50vw;
  top: 20vh;
  background: #fff;
  color: #222;
  padding: 1em 1.2em;
  border-radius: 8px;
  white-space: pre-line;
  font-size: 1em;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  z-index: 9999;
  pointer-events: auto;
  border: 1px solid #e0e0e0;
  min-width: 220px;
  max-width: 320px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.event-popup-arrow {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
  position: absolute;
  top: -10px;
  left: 32px;
  filter: drop-shadow(0 -2px 2px rgba(0,0,0,0.08));
}
</style> 