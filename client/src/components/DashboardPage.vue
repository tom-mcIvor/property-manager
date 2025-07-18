<template>
  <div class="dashboard">
    <div class="calendar-panel">
      <div class="calendar-inner">
        <div class="calendar-tabs">
          <button class="calendar-tab" :class="{ active: activeTab === 'my' }" @click="setTab('my')">My Calendar</button>
          <button class="calendar-tab" :class="{ active: activeTab === 'global' }" @click="setTab('global')">Global Calendar</button>
          <button class="calendar-tab" :class="{ active: activeTab === 'analytics' }" @click="setTab('analytics')">My Analytics</button>
          <button class="calendar-tab" :class="{ active: activeTab === 'inbox' }" @click="setTab('inbox')">My Inbox</button>
        </div>
        <MyCalendar v-if="activeTab === 'my'" />
        <GlobalCalendar v-else-if="activeTab === 'global'" />
        <MyAnalytics v-else-if="activeTab === 'analytics'" />
        <MyInbox v-else-if="activeTab === 'inbox'" />
      </div>
    </div>
    <div class="dashboard-sidebar">
      <div class="sidebar-tabs">
        <TodayButton :count="2" :active="sidebarTab === 'today'" @click="sidebarTab = 'today'" />
        <OverdueButton :count="603" :active="sidebarTab === 'overdue'" @click="sidebarTab = 'overdue'" />
      </div>
      <div class="sidebar-events" v-if="sidebarTab === 'overdue' || sidebarTab === 'today'">
        <template v-if="sidebarTab === 'today'">
          <TodaySidebarCards />
          <!-- Tools Component below Today -->
          <div class="tools-section">
            <ToolsComponent />
          </div>
        </template>
        <template v-else>
          <div v-for="ticket in overdueTickets" :key="ticket.id" :class="['event-card', ticket.typeClass]">
            <div :class="['event-dot', ticket.typeClass]"></div>
            <div class="event-main">
              <div class="event-title">{{ ticket.typeLabel }} <span class="event-date">{{ ticket.date }}</span></div>
              <div class="event-property">{{ ticket.property }}</div>
              <div class="event-tenancy">{{ ticket.tenancy }}</div>
            </div>
            <div class="event-overdue-bar"></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MyCalendar from './MyCalendar.vue';
import GlobalCalendar from './GlobalCalendar.vue';
import MyAnalytics from './MyAnalytics.vue';
import MyInbox from './MyInbox.vue';
import TodayButton from './TodayButton.vue';
import OverdueButton from './OverdueButton.vue';
import TodaySidebarCards from './TodaySidebarCards.vue';
import ToolsComponent from './ToolsComponent.vue';
const activeTab = ref('my');
const sidebarTab = ref('today');

// Generate 603 fake overdue tickets with types cycling through maintenance, inspection, renewal, property
const overdueTypes = [
  { label: 'Test Maintenance', class: 'maintenance' },
  { label: 'Test Inspection', class: 'inspection' },
  { label: 'Test Renewal', class: 'anniversary' },
  { label: 'Test Property', class: 'maintenance' },
];
const overdueTickets = Array.from({ length: 603 }, (_, i) => {
  const type = overdueTypes[i % overdueTypes.length];
  return {
    id: i + 1,
    property: `Property #${i + 1}`,
    tenancy: `Tenancy #${i + 1}`,
    date: `2025-04-${String((i % 30) + 1).padStart(2, '0')}`,
    typeLabel: type.label,
    typeClass: type.class,
  };
});

function setTab(tab) {
  activeTab.value = tab;
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

.dashboard {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-top: 36px;
  box-sizing: border-box;
  gap: 2rem;
  max-width: 100vw;
  overflow-x: hidden;
}

@media (min-width: 901px) {
  .dashboard {
    overflow-x: hidden;
  }
}
@media (max-width: 600px) {
  .dashboard {
    margin-top: 36px;
  }
}

.dashboard-sidebar {
  width: 320px;
  background: #fafbfc;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0001;
  display: flex;
  flex-direction: column;
  /* height: 74vh; */
  margin: 0;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}
.sidebar-tabs {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem; /* Align with .calendar-inner top padding */
}
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
.sidebar-events {
  max-height: 74vh;
  overflow-y: auto;
  padding-right: 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.event-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  border: 1px solid #ededed;
  padding: 0.8rem 1rem 0.7rem 0.7rem;
  display: flex;
  align-items: flex-start;
  position: relative;
  min-height: 70px;
  margin-bottom: 0;
}
.event-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 0.3em;
  margin-right: 0.8em;
  flex-shrink: 0;
}
.event-dot.maintenance { background: #2d5c88; }
.event-dot.inspection { background: #3b7c3b; }
.event-dot.anniversary { background: #222; }
.event-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}
.event-title {
  font-weight: 600;
  color: #222;
  font-size: 1rem;
  margin-bottom: 0.1em;
}
.event-date {
  color: #888;
  font-weight: 400;
  font-size: 0.97em;
  margin-left: 0.4em;
}
.event-property {
  color: #444;
  font-size: 0.97em;
}
.event-tenancy {
  color: #888;
  font-size: 0.95em;
}
.event-overdue-bar {
  position: absolute;
  right: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: #e74c3c;
  border-radius: 0 8px 8px 0;
}

.tools-section {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
}

.calendar-panel {
  background: var(--dashboard-bg);
  border-radius: var(--dashboard-radius);
  box-shadow: var(--dashboard-shadow);
  padding: var(--main-padding);
  width: 900px;
  min-width: 900px;
  max-width: 900px;
  height: 74vh;
  min-height: 700px;
  margin: 0 auto 0 auto;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  border-right: none;
  box-sizing: border-box;
  overflow: hidden;
}

@media (min-width: 901px) {
  .calendar-panel {
    overflow-x: hidden;
  }
}
@media (max-width: 1200px) {
  .calendar-panel {
    width: 700px;
    min-width: 700px;
    max-width: 700px;
  }
}
@media (max-width: 700px) {
  .calendar-panel {
    width: 100vw;
    min-width: 0;
    max-width: 100vw;
    padding: 0.5rem;
  }
  .calendar-inner {
    padding: 0.5rem;
  }
}
@media (max-width: 900px) {
  .calendar-panel {
    width: 100vw;
    min-width: 0;
    max-width: 100vw;
    margin-left: 0;
    margin-right: 0;
    border-radius: 0;
  }
  .event {
    display: none !important;
  }
}

.calendar-inner {
  width: 100%;
  height: 100%;
  min-height: 600px;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

@media (max-width: 900px) {
  .calendar-inner {
    overflow: auto;
  }
}

.calendar-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}
.calendar-tab {
  background: #f7f6f3;
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
  flex: 1;
  text-align: center;
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
  flex: 1 1 0;
  width: calc(100% / 7);
  min-width: var(--cell-min-width);
  max-width: calc(100% / 7);
  min-height: var(--cell-min-height);
  background: var(--calendar-cell-bg);
  position: relative;
  padding: 4px 6px 2px 6px;
  font-size: 0.95rem;
  border-right: 1px solid #ededed;
  box-sizing: border-box;
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
}
.toggle-popup-btn {
  position: fixed;
  top: 24px;
  right: 32px;
  z-index: 10001;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.7em 1.4em;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
  transition: background 0.2s;
}
.toggle-popup-btn:hover {
  background: #1356a2;
}
</style> 