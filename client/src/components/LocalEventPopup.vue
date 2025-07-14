<template>
  <div class="local-event-popup">
    <div class="local-event-popup-arrow"></div>
    <div class="popup-content">
      <div class="popup-title">{{ event.label.replace(/^!\s*/, '') }}</div>
      <div class="popup-type">Type: {{ formatEventType(event.type) }}</div>
      <div class="popup-date">{{ formatDate(date, month, year) }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true
  },
  date: {
    type: Number,
    required: true
  },
  month: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

function formatEventType(type) {
  const typeMap = {
    'maintenance': 'Maintenance',
    'inspection': 'Inspection',
    'rent-review': 'Rent Review',
    'reminder': 'Reminder',
    'renewal-expiry': 'Renewal Option Expiry',
    'property-anniversary': 'Property Anniversary'
  };
  return typeMap[type] || type;
}

function formatDate(day, month, year) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return `${monthNames[month]} ${day}, ${year}`;
}
</script>

<style scoped>
.local-event-popup {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
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

.local-event-popup-arrow {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #fff;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.08));
}

.popup-content {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.popup-title {
  font-weight: 600;
  font-size: 1.1em;
  color: #222;
}

.popup-type {
  font-size: 0.9em;
  color: #666;
}

.popup-date {
  font-size: 0.85em;
  color: #888;
  font-style: italic;
}

.local-event-popup-arrow::before {
  content: '';
  position: absolute;
  bottom: 1px;
  left: -10px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #e0e0e0;
}
</style>