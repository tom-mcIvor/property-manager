<template>
  <div class="calendar-panel">
    <div class="calendar-inner">
      <!-- Calendar Header with Navigation and Controls -->
      <div class="calendar-header-section">
        <div class="calendar-left-controls">
          <button class="nav-btn" aria-label="Previous Month" @click="prevMonth">
            <svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12,2 4,8 12,14" fill="#999" />
            </svg>
          </button>
          <span class="month-label">{{ monthLabel }}</span>
          <button class="today-btn">today</button>
        </div>
        
        <div class="calendar-right-controls">
          <div class="view-controls">
            <button class="view-btn active">month</button>
            <button class="view-btn">week</button>
            <button class="view-btn">day</button>
          </div>
          <button class="nav-btn" aria-label="Next Month" @click="nextMonth">
            <svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <polygon points="4,2 12,8 4,14" fill="#999" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Calendar Grid -->
      <div class="calendar-grid">
        <div class="calendar-row calendar-days">
          <div v-for="day in days" :key="day" class="calendar-cell day-label">{{ day }}</div>
        </div>
        <div v-for="(week, wIdx) in weeks" :key="wIdx" class="calendar-row">
          <div v-for="(date, dIdx) in week" :key="dIdx" class="calendar-cell">
            <div class="calendar-cell-content">
              <div v-if="date" class="date-number">{{ date.day }}</div>
              <div class="events-container">
                <div v-for="event in date?.events || []" :key="event.id"
                  :class="['event', event.type]">
                  <button class="event-btn"
                    @mouseenter="showPopup(event, date.day, currentMonth, currentYear)"
                    @mouseleave="hidePopup()">
                    <span class="event-label">{{ event.label.replace(/^!\s*/, '') }}</span>
                  </button>
                  <LocalEventPopup
                    v-if="hoveredEvent && hoveredEvent.id === event.id"
                    :event="hoveredEvent"
                    :date="hoveredEventDate"
                    :month="hoveredEventMonth"
                    :year="hoveredEventYear" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="calendar-legend">
        <div class="legend-item">
          <div class="legend-dot maintenance">
            <span class="checkmark">✓</span>
          </div>
          <span>Maintenance</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot rent-review">
            <span class="checkmark">✓</span>
          </div>
          <span>Rent Review</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot lease-break">
            <span class="checkmark">✓</span>
          </div>
          <span>Lease Break</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot compliance">
            <span class="checkmark">✓</span>
          </div>
          <span>Compliance</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot term-renewal">
            <span class="checkmark">✓</span>
          </div>
          <span>Term Renewal</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot budget-end">
            <span class="checkmark">✓</span>
          </div>
          <span>Budget End</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot insurance-renewal">
            <span class="checkmark">✓</span>
          </div>
          <span>Insurance Renewal</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot suppliers-insurance">
            <span class="checkmark">✓</span>
          </div>
          <span>Suppliers Insurance</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot property-key">
            <span class="checkmark">✓</span>
          </div>
          <span>Property Key</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot property-insurance">
            <span class="checkmark">✓</span>
          </div>
          <span>Property Insurance</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot final-bond">
            <span class="checkmark">✓</span>
          </div>
          <span>Final Bond</span>
        </div>
        <div class="legend-item">
          <div class="legend-dot renewal-options">
            <span class="checkmark">✓</span>
          </div>
          <span>Renewal Options</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// All calendar logic from DashboardPage.vue
import { ref, computed } from 'vue';
import LocalEventPopup from './LocalEventPopup.vue';

// Local popup state management
const hoveredEvent = ref(null);
const hoveredEventDate = ref(null);
const hoveredEventMonth = ref(null);
const hoveredEventYear = ref(null);

function showPopup(event, date, month, year) {
  hoveredEvent.value = event;
  hoveredEventDate.value = date;
  hoveredEventMonth.value = month;
  hoveredEventYear.value = year;
}

function hidePopup() {
  hoveredEvent.value = null;
  hoveredEventDate.value = null;
  hoveredEventMonth.value = null;
  hoveredEventYear.value = null;
}

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
      { type: 'maintenance', label: '! Maintenance' },
      { type: 'reminder', label: '! Reminder' },
      { type: 'inspection', label: '! Inspection' },
      { type: 'rent-review', label: '! Rent Review' },
      { type: 'renewal-expiry', label: '! Renewal Option Expiry' },
      { type: 'property-anniversary', label: '! Property Anniversary' }
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
          label: '! Property Anniversary',
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
  --calendar-header-bg: #f8f9fa;
  --calendar-border: #e9ecef;
  --calendar-cell-bg: #fff;
  --event-maintenance: #4a5568;
  --event-inspection: #38a169;
  --event-rent-review: #d69e2e;
  --event-reminder: #3182ce;
  --event-renewal: #805ad5;
  --event-anniversary: #e53e3e;
  --main-padding: 1.5rem;
  --cell-min-width: 120px;
  --cell-min-height: 100px;
}

.calendar-panel {
  background: #ffffff;
  border-radius: var(--dashboard-radius);
  box-shadow: var(--dashboard-shadow);
  padding: var(--main-padding);
  width: 76vw;
  min-width: 320px;
  max-width: 900px;
  height: 74vh;
  margin: auto;
  border-top: 1px solid var(--calendar-border);
  border-right: 1px solid var(--calendar-border);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  z-index: 10;
}

@media (min-width: 901px) {
  .calendar-panel {
    overflow-x: hidden;
  }
}

.calendar-inner {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: visible;
}

@media (max-width: 900px) {
  .calendar-inner {
    overflow: auto;
  }
}

/* Header Section */
.calendar-header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: #ffffff;
}

.calendar-left-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.calendar-right-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-btn {
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
  border-radius: 2px;
}

.nav-btn:hover {
  opacity: 0.7;
}

.month-label {
  font-size: 1.125rem;
  font-weight: 500;
  color: #6b7280;
  margin: 0 0.5rem;
}

.today-btn {
  background: none;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
}

.today-btn:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}

.view-controls {
  display: flex;
  gap: 0;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  overflow: hidden;
}

.view-btn {
  background: #ffffff;
  border: none;
  border-right: 1px solid #d1d5db;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;
}

.view-btn:last-child {
  border-right: none;
}

.view-btn.active {
  background: #f3f4f6;
  color: #374151;
}

.view-btn:not(.active):hover {
  background: #f9fafb;
}

/* Calendar Grid */
.calendar-grid {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0; /* Allow flex shrinking */
  max-height: calc(100% - 80px); /* Reserve space for legend */
  overflow: hidden;
  border: 1px solid #ededed;
  border-top: none;
  border-radius: 4px;
}

@media (max-width: 900px) {
  .calendar-grid {
    overflow: auto;
  }
}

.calendar-row {
  display: flex;
  flex: 1;
}

.calendar-row:last-child .calendar-cell {
  border-bottom: none;
}

.calendar-row.calendar-days {
  flex: none;
  background: var(--calendar-header-bg);
  border-bottom: 1px solid var(--calendar-border);
}

.calendar-cell,
.day-label {
  flex: 1 1 0;
  width: calc(100% / 7);
  min-width: var(--cell-min-width);
  max-width: calc(100% / 7);
  min-height: var(--cell-min-height);
  background: var(--calendar-cell-bg);
  position: relative;
  padding: 0.75rem 0.5rem;
  font-size: 0.875rem;
  border-right: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  box-sizing: border-box;
  overflow: visible;
}

.calendar-cell:last-child,
.day-label:last-child {
  border-right: none;
}

.day-label {
  background: var(--calendar-header-bg);
  font-weight: 600;
  text-align: center;
  color: #4a5568;
  padding: 0.75rem 0.5rem;
  min-height: auto;
}

.calendar-cell-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.date-number {
  font-size: 0.875rem;
  font-weight: 500;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.events-container {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
  width: 100%;
}

/* Event Styles */
.event {
  border-radius: 3px;
  padding: 0.125rem 0.375rem;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: all 0.15s;
  margin-bottom: 0.125rem;
  display: block;
  width: 100%;
  box-sizing: border-box;
  min-height: 16px;
  line-height: 1.2;
}

.event:hover {
  opacity: 0.9;
  transform: scale(1.02);
}

.event.maintenance {
  background: #4a5568;
}

.event.inspection {
  background: #38a169;
}

.event.rent-review {
  background: #d69e2e;
}

.event.reminder {
  background: #3182ce;
}

.event.renewal-expiry {
  background: #805ad5;
}

.event.property-anniversary {
  background: #2d3748;
}

.event-btn {
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  display: block;
}

.event-label {
  font-size: 0.6875rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
}

/* Legend */
.calendar-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0.75rem 1.5rem;
  border-top: 1px solid var(--calendar-border);
  background: #ffffff;
  flex-shrink: 0;
  justify-content: flex-start;
  align-items: center;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  color: #374151;
  font-weight: 400;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.checkmark {
  color: white;
  font-size: 8px;
  font-weight: bold;
  line-height: 1;
}

.legend-dot.maintenance {
  background: #4a5568;
}

.legend-dot.rent-review {
  background: #d69e2e;
}

.legend-dot.lease-break {
  background: #38a169;
}

.legend-dot.compliance {
  background: #2d3748;
}

.legend-dot.term-renewal {
  background: #805ad5;
}

.legend-dot.budget-end {
  background: #e53e3e;
}

.legend-dot.insurance-renewal {
  background: #3182ce;
}

.legend-dot.suppliers-insurance {
  background: #38a169;
}

.legend-dot.property-key {
  background: #d69e2e;
}

.legend-dot.property-insurance {
  background: #4a5568;
}

.legend-dot.final-bond {
  background: #805ad5;
}

.legend-dot.renewal-options {
  background: #2d3748;
}

/* Responsive */
@media (max-width: 1200px) {
  .calendar-cell,
  .day-label {
    padding: 0.5rem 0.25rem;
    font-size: 0.75rem;
  }
  
  .date-number {
    font-size: 0.75rem;
  }
  
  .event-label {
    font-size: 0.625rem;
  }
}

@media (max-width: 900px) {
  .calendar-cell,
  .day-label {
    padding: 0.25rem 0.125rem;
    font-size: 0.625rem;
  }
  
  .calendar-legend {
    padding: 0.75rem;
    gap: 0.75rem;
  }
  
  .legend-item {
    font-size: 0.75rem;
  }
}

@media (max-width: 600px) {
  .calendar-header-section {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .calendar-controls {
    justify-content: center;
  }
  
  .view-controls {
    justify-content: center;
  }
}
</style> 