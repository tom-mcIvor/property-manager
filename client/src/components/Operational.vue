<template>
  <div class="operational-sidebar" :class="{ 'open': isOpen }">
    <div class="sidebar-overlay" @click="closeSidebar" v-if="isOpen"></div>
    <div class="sidebar-content">
      <!-- Header -->
      <div class="sidebar-header">
        <h2 class="sidebar-title">Operational</h2>
        <button class="close-btn" @click="closeSidebar">×</button>
      </div>

      <!-- Navigation Tabs -->
      <div class="nav-tabs">
        <button class="nav-tab active">Overview</button>
        <button class="nav-tab">Details</button>
        <button class="nav-tab">Documents</button>
        <button class="nav-tab">History</button>
      </div>

      <!-- Content Sections -->
      <div class="sidebar-body">
        <!-- Property Information -->
        <div class="info-section">
          <h3 class="section-title">Property Information</h3>
          <div class="info-grid">
            <div class="info-item">
              <label>Property Address</label>
              <span>2 Clifton Street, Auckland</span>
            </div>
            <div class="info-item">
              <label>Property Type</label>
              <span>Residential</span>
            </div>
            <div class="info-item">
              <label>Bedrooms</label>
              <span>3</span>
            </div>
            <div class="info-item">
              <label>Bathrooms</label>
              <span>2</span>
            </div>
            <div class="info-item">
              <label>Floor Area</label>
              <span>120 sqm</span>
            </div>
            <div class="info-item">
              <label>Land Area</label>
              <span>450 sqm</span>
            </div>
          </div>
        </div>

        <!-- Tenancy Information -->
        <div class="info-section">
          <h3 class="section-title">Tenancy Information</h3>
          <div class="info-grid">
            <div class="info-item">
              <label>Tenant Name</label>
              <span>John Smith</span>
            </div>
            <div class="info-item">
              <label>Lease Start</label>
              <span>01/01/2024</span>
            </div>
            <div class="info-item">
              <label>Lease End</label>
              <span>31/12/2024</span>
            </div>
            <div class="info-item">
              <label>Weekly Rent</label>
              <span>$650.00</span>
            </div>
            <div class="info-item">
              <label>Bond Amount</label>
              <span>$2,600.00</span>
            </div>
            <div class="info-item">
              <label>Payment Frequency</label>
              <span>Weekly</span>
            </div>
          </div>
        </div>

        <!-- Financial Summary -->
        <div class="info-section">
          <h3 class="section-title">Financial Summary</h3>
          <div class="financial-cards">
            <div class="financial-card">
              <div class="card-header">
                <span class="card-title">Total Income</span>
                <span class="card-amount positive">$33,800.00</span>
              </div>
              <div class="card-subtitle">This Year</div>
            </div>
            <div class="financial-card">
              <div class="card-header">
                <span class="card-title">Total Expenses</span>
                <span class="card-amount negative">$8,450.00</span>
              </div>
              <div class="card-subtitle">This Year</div>
            </div>
            <div class="financial-card">
              <div class="card-header">
                <span class="card-title">Net Income</span>
                <span class="card-amount positive">$25,350.00</span>
              </div>
              <div class="card-subtitle">This Year</div>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="info-section">
          <h3 class="section-title">Recent Activity</h3>
          <div class="activity-list">
            <div class="activity-item">
              <div class="activity-icon maintenance">🔧</div>
              <div class="activity-content">
                <div class="activity-title">Maintenance Request</div>
                <div class="activity-description">Plumbing repair completed</div>
                <div class="activity-date">2 days ago</div>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon payment">💰</div>
              <div class="activity-content">
                <div class="activity-title">Rent Payment</div>
                <div class="activity-description">Weekly rent received</div>
                <div class="activity-date">5 days ago</div>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon inspection">📋</div>
              <div class="activity-content">
                <div class="activity-title">Property Inspection</div>
                <div class="activity-description">Routine inspection scheduled</div>
                <div class="activity-date">1 week ago</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="info-section">
          <h3 class="section-title">Quick Actions</h3>
          <div class="action-buttons">
            <button class="action-btn">Create Maintenance</button>
            <button class="action-btn">Schedule Inspection</button>
            <button class="action-btn">Send Notice</button>
            <button class="action-btn">View Documents</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const closeSidebar = () => {
  emit('close');
};
</script>

<style scoped>
.operational-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
  transition: all 0.3s ease;
}

.operational-sidebar.open {
  pointer-events: all;
}

.sidebar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.operational-sidebar.open .sidebar-overlay {
  opacity: 1;
}

.sidebar-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  background: #ffffff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.operational-sidebar.open .sidebar-content {
  transform: translateX(0);
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
}

.sidebar-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s;
}

.close-btn:hover {
  background: #e5e7eb;
  color: #374151;
}

.nav-tabs {
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  background: #ffffff;
}

.nav-tab {
  flex: 1;
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: #6b7280;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.nav-tab.active {
  color: #1f2937;
  border-bottom-color: #3b82f6;
  background: #f9fafb;
}

.nav-tab:hover:not(.active) {
  color: #374151;
  background: #f3f4f6;
}

.sidebar-body {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

.info-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.info-grid {
  display: grid;
  gap: 0.75rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-item label {
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-item span {
  font-size: 0.875rem;
  color: #1f2937;
  font-weight: 500;
}

.financial-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.financial-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.card-title {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.card-amount {
  font-size: 1rem;
  font-weight: 600;
}

.card-amount.positive {
  color: #059669;
}

.card-amount.negative {
  color: #dc2626;
}

.card-subtitle {
  font-size: 0.75rem;
  color: #9ca3af;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.activity-item {
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.activity-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.activity-icon.maintenance {
  background: #fef3c7;
}

.activity-icon.payment {
  background: #d1fae5;
}

.activity-icon.inspection {
  background: #dbeafe;
}

.activity-content {
  flex: 1;
}

.activity-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.activity-description {
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

.activity-date {
  font-size: 0.75rem;
  color: #9ca3af;
}

.action-buttons {
  display: grid;
  gap: 0.5rem;
}

.action-btn {
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  color: #374151;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.action-btn:hover {
  background: #e5e7eb;
  border-color: #9ca3af;
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar-content {
    width: 100%;
  }
}
</style>