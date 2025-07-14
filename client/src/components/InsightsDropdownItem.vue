<template>
  <button class="sidebar-link" :class="{ active }">
    Insights
  </button>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  active: { type: Boolean, default: false }
});
</script>

<style scoped>
.sidebar-link {
  background: none;
  border: none;
  color: #222;
  font-size: 1.05rem;
  text-align: left;
  padding: 0.6rem 1rem 0.6rem 1.2rem;
  border-radius: 0 24px 24px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: background 0.18s, color 0.18s;
  position: relative;
  width: 100%;
  font-family: 'Inter', Arial, sans-serif;
}
.sidebar-link.active, .sidebar-link:hover {
  background: #e8f0fe;
  color: #1976d2;
}
.sidebar-link.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 4px;
  border-radius: 4px;
  background: #1976d2;
}
</style> 