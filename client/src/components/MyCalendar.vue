<template>
  <div class="calendar-panel">
    <div class="calendar-inner">
      <div class="calendar-search-bar-wrapper">
        <input type="text" class="calendar-search-bar" placeholder="Search calendar..." />
      </div>
      <div class="calendar-refresh-btn-wrapper">
        <button class="calendar-refresh-btn">Refresh Calendar</button>
      </div>
      <div class="calendar-header">
        <button class="nav-btn" aria-label="Previous Month" @click="prevMonth">
          <svg width="18" height="18" viewBox="0 0 18 18" style="display:block" xmlns="http://www.w3.org/2000/svg">
            <polygon points="12,4 6,9 12,14" fill="#666" />
          </svg>
        </button>
        <span class="month-label">{{ monthLabel }}</span>
        <button class="nav-btn" aria-label="Next Month" @click="nextMonth">
          <svg width="18" height="18" viewBox="0 0 18 18" style="display:block" xmlns="http://www.w3.org/2000/svg">
            <polygon points="6,4 12,9 6,14" fill="#666" />
          </svg>
        </button>
      </div>
      <div class="calendar-grid">
        <div class="calendar-row calendar-days">
          <div v-for="day in days" :key="day" class="calendar-cell day-label">{{ day }}</div>
        </div>
        <div v-for="(week, wIdx) in weeks" :key="wIdx" class="calendar-row">
          <div v-for="(date, dIdx) in week" :key="dIdx" class="calendar-cell">
            <div v-if="date" class="date-number">{{ date.day }}</div>
            <div v-for="event in date?.events || []" :key="event.id" :class="['event', event.type]">
              <span class="event-bang">!</span>
              <span class="event-label">{{ event.label.replace(/^!\s*/, '') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// All calendar logic from DashboardPage.vue
import { ref, computed } from 'vue';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const today = new Date();
const currentMonth = ref(today.getMonth()); // 0-indexed
const currentYear = ref(today.getFullYear());

// Hardcoded events for April 2025 (as in the original mock data)
const april2025Events = [
  { day: 26, events: [{ id: 1, label: '! Inspection', type: 'inspection' }] },
  { day: 27, events: [{ id: 2, label: '! Inspection', type: 'inspection' }] },
  { day: 28, events: [] },
  { day: 29, events: [{ id: 3, label: '! Maintenance', type: 'maintenance' }] },
  { day: 30, events: [{ id: 4, label: '! Rent Review', type: 'rent-review' }] },
  { day: 31, events: [{ id: 5, label: '! Reminder', type: 'reminder' }] },
  { day: 1, events: [{ id: 6, label: '! Renewal Option Expiry', type: 'renewal-expiry' }] },
  { day: 2, events: [{ id: 7, label: '! Maintenance', type: 'maintenance' }] },
  { day: 3, events: [] },
  { day: 4, events: [{ id: 8, label: '! Property Anniversary', type: 'property-anniversary' }] },
  { day: 5, events: [
    { id: 9, label: '! Maintenance', type: 'maintenance' },
    { id: 10, label: '! Inspection', type: 'inspection' },
    { id: 11, label: '! Rent Review', type: 'rent-review' }
  ] },
  { day: 6, events: [{ id: 12, label: '! Reminder', type: 'reminder' }] },
  { day: 7, events: [{ id: 13, label: '! Inspection', type: 'inspection' }] },
  { day: 8, events: [] },
  { day: 9, events: [{ id: 14, label: '! Reminder', type: 'reminder' }] },
  { day: 10, events: [{ id: 15, label: '! Maintenance', type: 'maintenance' }] },
  { day: 11, events: [{ id: 16, label: '! Maintenance', type: 'maintenance' }] },
  { day: 12, events: [{ id: 17, label: '! Rent Review', type: 'rent-review' }] },
  { day: 13, events: [{ id: 18, label: '! Property Anniversary', type: 'property-anniversary' }] },
  { day: 14, events: [] },
  { day: 15, events: [] },
  { day: 16, events: [{ id: 19, label: '! Maintenance', type: 'maintenance' }] },
  { day: 17, events: [] },
  { day: 18, events: [{ id: 20, label: '! Maintenance', type: 'maintenance' }] },
  { day: 19, events: [{ id: 21, label: '! Renewal Option Expiry', type: 'renewal-expiry' }] },
  { day: 20, events: [{ id: 22, label: '! Reminder', type: 'reminder' }] },
  { day: 21, events: [] },
  { day: 22, events: [] },
  { day: 23, events: [{ id: 23, label: '! Maintenance', type: 'maintenance' }] },
  { day: 24, events: [{ id: 24, label: '! Inspection', type: 'inspection' }] },
  { day: 25, events: [{ id: 25, label: '! Property Anniversary', type: 'property-anniversary' }] },
  { day: 26, events: [{ id: 26, label: '! Maintenance', type: 'maintenance' }] },
  { day: 27, events: [{ id: 27, label: '! Rent Review', type: 'rent-review' }] },
  { day: 28, events: [{ id: 28, label: '! Reminder', type: 'reminder' }] },
  { day: 1, events: [] },
];

function getEventsForDay(day, month, year) {
  // Only show events for April 2025
  if (month === 3 && year === 2025) {
    // Find the event object for this day
    const found = april2025Events.find(e => e.day === day);
    return found ? found.events : [];
  }
  // Spread test events across all days of 2024, 2025, and 2026, random but deterministic, and ensure at least one black label per month
  if (year === 2024 || year === 2025 || year === 2026) {
    const eventTypes = [
      { type: 'maintenance', label: '! Test Maintenance' },
      { type: 'reminder', label: '! Test Reminder' },
      { type: 'inspection', label: '! Test Inspection' },
      { type: 'rent-review', label: '! Test Rent Review' },
      { type: 'renewal-expiry', label: '! Test Renewal Option Expiry' },
      { type: 'property-anniversary', label: '! Test Property Anniversary' }
    ];
    const hash = (day + 31 * (month + 1) + 101 * year);
    let events = [];
    if (hash % 2 === 0) {
      const typeIdx = hash % eventTypes.length;
      events.push({
        id: 10000 + day + 100 * (month + 1) + 1000 * (year - 2024),
        label: eventTypes[typeIdx].label,
        type: eventTypes[typeIdx].type
      });
    }
    // Guarantee at least one black label (property-anniversary) on the 15th of each month
    if (day === 15) {
      let hasBlack = false;
      for (let d = 1; d <= 31; d++) {
        const dHash = (d + 31 * (month + 1) + 101 * year);
        if (dHash % 2 === 0 && (dHash % eventTypes.length) === 5) {
          hasBlack = true;
          break;
        }
      }
      if (!hasBlack) {
        events.push({
          id: 20000 + 15 + 100 * (month + 1) + 1000 * (year - 2024),
          label: '! Test Property Anniversary',
          type: 'property-anniversary'
        });
      }
    }
    return events;
  }
  return [];
}

function getWeeks(year, month) {
  const weeks = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  let current = new Date(firstDay);
  current.setDate(current.getDate() - current.getDay()); // Start from Sunday before the 1st

  while (current <= lastDay || current.getDay() !== 0) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      if (current.getMonth() === month) {
        week.push({
          day: current.getDate(),
          events: getEventsForDay(current.getDate(), month, year)
        });
      } else {
        week.push(null);
      }
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
    if (current > lastDay && current.getDay() === 0) break;
  }
  return weeks;
}

const weeks = computed(() => getWeeks(currentYear.value, currentMonth.value));

const monthLabel = computed(() => `${monthNames[currentMonth.value]} ${currentYear.value}`);

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value -= 1;
  } else {
    currentMonth.value -= 1;
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value += 1;
  } else {
    currentMonth.value += 1;
  }
}
</script>

<style scoped>
:root {
  --dashboard-bg: #fff;
  --dashboard-radius: 8px;
  --dashboard-shadow: 0 2px 8px #0001;
  --calendar-header-bg: #f7f6f3;
  --calendar-border: #e0e0e0;
  --calendar-cell-bg: #fafafa;
  --event-maintenance: #2d5c88;
  --event-review: #bfa32b;
  --event-key: #3b7c3b;
  --event-expiry: #2b8fbf;
  --main-padding: 1.2rem;
  --cell-min-width: 72px;
  --cell-min-height: 88px;
}

.calendar-panel {
  background: var(--dashboard-bg);
  border-radius: var(--dashboard-radius);
  box-shadow: var(--dashboard-shadow);
  padding: var(--main-padding);
  width: 76vw;
  min-width: 320px;
  max-width: 900px;
  height: 74vh;
  margin: auto;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.calendar-inner {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
}

.calendar-search-bar-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
}
.calendar-search-bar {
  width: 100%;
  max-width: none;
  padding: 0.7rem 1.2rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  background: #fafafa;
  color: #222;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
  transition: border 0.2s, box-shadow 0.2s;
}
.calendar-search-bar:focus {
  outline: none;
  border: 1.5px solid #1976d2;
  background: #fff;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
}

.calendar-refresh-btn-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: -0.9rem;
  margin-bottom: 0.8rem;
}
.calendar-refresh-btn {
  background: #222;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.4rem 0.96rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,0.10);
  transition: background 0.2s, box-shadow 0.2s;
}
.calendar-refresh-btn:hover {
  background: #444;
  box-shadow: 0 2px 8px rgba(0,0,0,0.13);
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  gap: 1rem;
}

.month-label {
  font-size: 1.2rem;
  font-weight: 600;
  flex: 1 1 0;
  text-align: center;
  padding: 0 0.5rem;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.nav-btn {
  background: var(--calendar-header-bg);
  border: 1px solid var(--calendar-border);
  border-radius: 4px;
  font-size: 1.1rem;
  padding: 0.2rem 0.7rem;
  cursor: pointer;
}

.calendar-grid {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: stretch;
  height: 100%;
  border: 1px solid #ededed; /* Match grid cell border */
  border-top: none;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
}

.calendar-row {
  display: flex;
  flex: 1;
  border-bottom: 1px solid #ededed;
}

.calendar-row:last-child {
  border-bottom: none;
}

.calendar-row.calendar-days {
  border-bottom: 1px solid #ededed;
}

.calendar-cell,
.day-label {
  flex: 1;
  min-width: var(--cell-min-width);
  min-height: var(--cell-min-height);
  background: var(--calendar-cell-bg);
  position: relative;
  padding: 4px 6px 2px 6px;
  font-size: 0.95rem;
  border-right: 1px solid #ededed;
  word-break: break-word;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

@media (max-width: 1200px) {
  .calendar-cell,
  .day-label {
    font-size: 0.8rem;
    padding: 2px 3px 1px 3px;
  }
}
@media (max-width: 900px) {
  .calendar-cell,
  .day-label {
    font-size: 0.7rem;
    padding: 1px 2px 1px 2px;
  }
}
@media (max-width: 600px) {
  .calendar-cell,
  .day-label {
    font-size: 0.6rem;
    padding: 1px 1px 1px 1px;
  }
}

.calendar-cell:last-child,
.day-label:last-child {
  border-right: none;
}

.day-label {
  background: var(--calendar-header-bg);
  font-weight: 600;
  text-align: center;
  padding-bottom: 2px; /* Reduce bottom padding to move border closer */
}

.date-number {
  font-size: 0.95em;
  font-weight: 600;
  margin-bottom: 2px;
}

.event {
  margin-top: 2px;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.85em;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
}

.event.maintenance {
  background: #2d5c88;
  font-weight: bold;
  letter-spacing: 0.5px;
}
.event.rent-review {
  background: #bfa32b;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.5px;
}
.event.reminder {
  background: #ff9800;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.5px;
}
.event.renewal-expiry {
  background: #8bc34a;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.5px;
}
.event.property-anniversary {
  background: #222;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.5px;
}
.event.inspection {
  background: #4caf50;
  font-weight: bold;
  letter-spacing: 0.5px;
}
.event.review { background: var(--event-review); }
.event.key { background: var(--event-key); }
.event.expiry { background: var(--event-expiry); }

.event-bang {
  font-weight: bold;
  margin-right: 4px;
  display: inline-block;
  vertical-align: middle;
}
.event-label {
  display: inline-block;
  vertical-align: middle;
  word-break: break-word;
  white-space: nowrap;
  overflow-wrap: break-word;
  max-width: 100%;
  font-size: 0.75em;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style> 