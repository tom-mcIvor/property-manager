<template>
  <div class="analytics-dashboard-wrapper">
    <div class="analytics-tabs">
      <button class="tab-btn" :class="{active: activeTab === 'overview'}" @click="setTab('overview')">Overview</button>
      <button class="tab-btn" :class="{active: activeTab === 'occupancy'}" @click="setTab('occupancy')">Occupancy</button>
      <button class="tab-btn" :class="{active: activeTab === 'revenue'}" @click="setTab('revenue')">Revenue</button>
      <button class="tab-btn" :class="{active: activeTab === 'expenses'}" @click="setTab('expenses')">Expenses</button>
    </div>
    <div class="analytics-content">
      <div v-if="activeTab === 'overview'">
        <div class="kpi-row">
          <div class="kpi-card">
            <div class="kpi-label">Total Properties</div>
            <div class="kpi-value">24</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Occupancy Rate</div>
            <div class="kpi-value">92%</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Monthly Revenue</div>
            <div class="kpi-value">$48,200</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Outstanding Rent</div>
            <div class="kpi-value">$3,100</div>
          </div>
        </div>
        <div class="analytics-graph">
          <svg width="100%" height="160" viewBox="0 0 400 160">
            <polyline fill="#e3f2fd" stroke="#1976d2" stroke-width="3" points="0,120 40,100 80,90 120,80 160,60 200,70 240,50 280,60 320,40 360,50 400,30" />
          </svg>
          <div class="graph-label">Revenue Trend (12 months)</div>
        </div>
      </div>
      <div v-else-if="activeTab === 'occupancy'">
        <div class="analytics-graph">
          <svg width="100%" height="160" viewBox="0 0 400 160">
            <rect x="30" y="60" width="40" height="80" fill="#90caf9" />
            <rect x="90" y="40" width="40" height="100" fill="#1976d2" />
            <rect x="150" y="80" width="40" height="60" fill="#90caf9" />
            <rect x="210" y="30" width="40" height="110" fill="#1976d2" />
            <rect x="270" y="70" width="40" height="70" fill="#90caf9" />
          </svg>
          <div class="graph-label">Occupancy by Building</div>
        </div>
      </div>
      <div v-else-if="activeTab === 'revenue'">
        <div class="analytics-graph">
          <svg width="100%" height="160" viewBox="0 0 400 160">
            <rect x="40" y="100" width="40" height="60" fill="#1976d2" />
            <rect x="100" y="80" width="40" height="80" fill="#90caf9" />
            <rect x="160" y="60" width="40" height="100" fill="#1976d2" />
            <rect x="220" y="120" width="40" height="40" fill="#90caf9" />
            <rect x="280" y="90" width="40" height="70" fill="#1976d2" />
          </svg>
          <div class="graph-label">Revenue by Property</div>
        </div>
      </div>
      <div v-else-if="activeTab === 'expenses'">
        <div class="analytics-graph">
          <svg width="100%" height="160" viewBox="0 0 400 160">
            <circle cx="120" cy="80" r="60" fill="#e3f2fd" />
            <circle cx="120" cy="80" r="40" fill="#1976d2" />
            <rect x="220" y="60" width="40" height="80" fill="#90caf9" />
            <rect x="280" y="100" width="40" height="40" fill="#1976d2" />
          </svg>
          <div class="graph-label">Expenses Breakdown</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('overview');
function setTab(tab) { activeTab.value = tab; }
</script>

<style scoped>
.analytics-dashboard-wrapper {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem 2.5rem 2.5rem 2.5rem;
  font-family: 'Inter', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 420px;
  border: 2px solid #d0d7de;
}
.analytics-tabs {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2rem;
}
.tab-btn {
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  color: #1976d2;
  padding: 0.7rem 1.7rem;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
}
.tab-btn.active, .tab-btn:hover {
  background: #e3f2fd;
  color: #1356a2;
}
.analytics-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.kpi-row {
  display: flex;
  gap: 2.2rem;
  margin-bottom: 2.2rem;
}
.kpi-card {
  background: #f7fafd;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(25,118,210,0.04);
  padding: 1.2rem 2.2rem 1.1rem 1.2rem;
  min-width: 140px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.kpi-label {
  color: #888;
  font-size: 1.01rem;
  margin-bottom: 0.5rem;
}
.kpi-value {
  color: #1976d2;
  font-size: 1.7rem;
  font-weight: 700;
}
.analytics-graph {
  background: #f7fafd;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(25,118,210,0.04);
  padding: 1.2rem 1.2rem 0.7rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 180px;
}
.analytics-graph svg {
  display: block;
  width: 100%;
  max-width: 420px;
  height: 160px;
  margin-bottom: 0.7rem;
}
.graph-label {
  color: #1976d2;
  font-size: 1.05rem;
  font-weight: 500;
  margin-top: 0.2rem;
}
</style> 