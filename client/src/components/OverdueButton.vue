<template>
  <button class="sidebar-tab" :class="{ active }" @click="$emit('click')">
    Overdue <span class="tab-count">{{ count }}</span>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  count: {
    type: [Number, String],
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
});
defineEmits(['click']);
</script>

<style scoped>
.sidebar-tab {
  flex: 1;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: #444;
  padding: 0.7rem 0;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-bottom 0.2s;
}
.sidebar-tab.active {
  color: #1976d2;
  border-bottom: 2px solid #1976d2;
  background: #fff;
}
.tab-count {
  color: #888;
  font-size: 0.95em;
  margin-left: 0.2em;
}
</style> 