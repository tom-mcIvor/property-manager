<template>
  <div class="dashboard">
    <div class="calendar-panel">
      <div class="calendar-tabs">
        <button class="calendar-tab active">My Calendar</button>
        <button class="calendar-tab">Global Calendar</button>
        <button class="calendar-tab">My Analytics</button>
        <button class="calendar-tab">My Inbox</button>
      </div>
      <div class="calendar-search-bar-wrapper">
        <input type="text" class="calendar-search-bar" placeholder="Search calendar..." />
      </div>
      <div class="calendar-header">
        <button class="nav-btn">&#8592;</button>
        <span class="month-label">April 2025</span>
        <button class="nav-btn">&#8594;</button>
      </div>
      <div class="calendar-grid">
        <div class="calendar-row calendar-days">
          <div v-for="day in days" :key="day" class="calendar-cell day-label">{{ day }}</div>
        </div>
        <div v-for="(week, wIdx) in weeks" :key="wIdx" class="calendar-row">
          <div v-for="(date, dIdx) in week" :key="dIdx" class="calendar-cell">
            <div v-if="date" class="date-number">{{ date.day }}</div>
            <div v-for="event in date?.events || []" :key="event.id" :class="['event', event.type]">
              {{ event.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// Mock data for April 2025
const weeks = [
  [
    { day: 30 }, { day: 31 }, { day: 1, events: [{ id: 1, label: 'Maintenance', type: 'maintenance' }, { id: 2, label: 'Rent Review', type: 'review' }] }, { day: 2 }, { day: 3, events: [{ id: 3, label: 'Property Key', type: 'key' }] }, { day: 4, events: [{ id: 4, label: 'Maintenance', type: 'maintenance' }] }, { day: 5 }
  ],
  [
    { day: 6, events: [{ id: 5, label: 'Maintenance', type: 'maintenance' }, { id: 6, label: 'Renewal Option Expiry', type: 'expiry' }] }, { day: 7 }, { day: 8, events: [{ id: 7, label: 'Maintenance', type: 'maintenance' }] }, { day: 9 }, { day: 10 }, { day: 11, events: [{ id: 8, label: 'Maintenance', type: 'maintenance' }] }, { day: 12 }
  ],
  [
    { day: 13, events: [{ id: 9, label: 'Maintenance', type: 'maintenance' }] }, { day: 14 }, { day: 15, events: [{ id: 10, label: 'Maintenance', type: 'maintenance' }] }, { day: 16 }, { day: 17 }, { day: 18 }, { day: 19 }
  ],
  [
    { day: 20, events: [{ id: 11, label: 'Maintenance', type: 'maintenance' }] }, { day: 21 }, { day: 22, events: [{ id: 12, label: 'Maintenance', type: 'maintenance' }] }, { day: 23 }, { day: 24 }, { day: 25 }, { day: 26 }
  ],
  [
    { day: 27, events: [{ id: 13, label: 'Maintenance', type: 'maintenance' }] }, { day: 28 }, { day: 29, events: [{ id: 14, label: 'Maintenance', type: 'maintenance' }] }, { day: 30 }, { day: 1 }, { day: 2 }, { day: 3 }
  ]
]
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
  --main-padding: 1.5rem;
  --cell-min-width: 90px;
  --cell-min-height: 60px;
}

.dashboard {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.calendar-panel {
  background: var(--dashboard-bg);
  border-radius: var(--dashboard-radius);
  box-shadow: var(--dashboard-shadow);
  padding: var(--main-padding);
  min-width: 700px;
  border: 1px solid #ccc; /* Added border for simple box */
}

.calendar-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}
.calendar-tab {
  background: #f7f6f3;
  /* border: 1px solid #e0e0e0; */
  border: none;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: #333;
  outline: none;
  transition: background 0.2s, color 0.2s;
}
.calendar-tab.active, .calendar-tab:hover {
  background: #fff;
  color: #1976d2;
  border-bottom: 2px solid #fff;
  z-index: 1;
}

.calendar-search-bar-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.2rem;
}
.calendar-search-bar {
  width: 96%;
  max-width: 900px;
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

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 1rem;
}

.month-label {
  font-size: 1.2rem;
  font-weight: 600;
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
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.calendar-row {
  display: flex;
}

.calendar-cell,
.day-label {
  flex: 1;
  min-width: var(--cell-min-width);
  min-height: var(--cell-min-height);
  border: 1px solid var(--calendar-border);
  background: var(--calendar-cell-bg);
  position: relative;
  padding: 4px 6px 2px 6px;
  font-size: 0.95rem;
}

.day-label {
  background: var(--calendar-header-bg);
  font-weight: 600;
  text-align: center;
  border-bottom: 2px solid var(--calendar-border);
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
}

.event.maintenance { background: var(--event-maintenance); }
.event.review { background: var(--event-review); }
.event.key { background: var(--event-key); }
.event.expiry { background: var(--event-expiry); }
</style> 