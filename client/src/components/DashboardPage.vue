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
        <button class="sidebar-tab active">Today <span class="tab-count">2</span></button>
        <button class="sidebar-tab">Overdue <span class="tab-count">603</span></button>
      </div>
      <div class="sidebar-events">
        <div class="event-card maintenance">
          <div class="event-dot maintenance"></div>
          <div class="event-main">
            <div class="event-title">Maintenance <span class="event-date">3/04/2025</span></div>
            <div class="event-property">Property: 34 Queen St</div>
            <div class="event-tenancy">Tenancy: Marsland - Head Lease</div>
          </div>
        </div>
        <div class="event-card inspection">
          <div class="event-dot inspection"></div>
          <div class="event-main">
            <div class="event-title">Inspection <span class="event-date">3/04/2025</span></div>
            <div class="event-property">Property: 34 Queen St</div>
            <div class="event-tenancy">Tenancy: Smartechnologies</div>
          </div>
        </div>
        <div class="event-card anniversary">
          <div class="event-dot anniversary"></div>
          <div class="event-main">
            <div class="event-title">Property Anniversary <span class="event-date">1/01/2005</span></div>
            <div class="event-property">Property: 219 Moore Street</div>
          </div>
          <div class="event-overdue-bar"></div>
        </div>
        <!-- More event cards as needed -->
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

const activeTab = ref('my');

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
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  height: 74vh;
  margin: 0;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}
.sidebar-tabs {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 0.5rem;
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
  flex: 1;
  overflow-y: auto;
  padding-right: 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
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

.calendar-panel {
  background: var(--dashboard-bg);
  border-radius: var(--dashboard-radius);
  box-shadow: var(--dashboard-shadow);
  padding: var(--main-padding);
  width: fit-content;
  min-width: 600px;
  max-width: 100vw;
  height: 74vh;
  margin: 0 auto 0 auto;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
}

.calendar-inner {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
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
  flex: 1;
  min-width: var(--cell-min-width);
  min-height: var(--cell-min-height);
  background: var(--calendar-cell-bg);
  position: relative;
  padding: 4px 6px 2px 6px;
  font-size: 0.95rem;
  border-right: 1px solid #ededed;
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
</style> 