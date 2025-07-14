<template>
  <div class="tenancies-page">
    <div class="page-header">
      <h1>Tenancies Management</h1>
      <p class="page-description">Manage all your property tenancies, leases, and tenant information</p>
    </div>
    
    <div class="tenancies-content">
      <div class="tenancies-grid">
        <div class="tenancy-card">
          <div class="tenancy-header">
            <h3>123 Main Street, Unit 1A</h3>
            <span class="tenancy-status active">Active</span>
          </div>
          <div class="tenancy-details">
            <div class="detail-row">
              <span class="label">Tenant:</span>
              <span class="value">John Smith</span>
            </div>
            <div class="detail-row">
              <span class="label">Lease Start:</span>
              <span class="value">Jan 15, 2024</span>
            </div>
            <div class="detail-row">
              <span class="label">Lease End:</span>
              <span class="value">Jan 14, 2025</span>
            </div>
            <div class="detail-row">
              <span class="label">Monthly Rent:</span>
              <span class="value">$2,500</span>
            </div>
          </div>
          <div class="tenancy-actions">
            <button class="action-btn primary" @click="openOperational">View Details</button>
            <button class="action-btn secondary">Edit</button>
          </div>
        </div>

        <div class="tenancy-card">
          <div class="tenancy-header">
            <h3>456 Oak Avenue, Unit 2B</h3>
            <span class="tenancy-status active">Active</span>
          </div>
          <div class="tenancy-details">
            <div class="detail-row">
              <span class="label">Tenant:</span>
              <span class="value">Sarah Johnson</span>
            </div>
            <div class="detail-row">
              <span class="label">Lease Start:</span>
              <span class="value">Mar 1, 2024</span>
            </div>
            <div class="detail-row">
              <span class="label">Lease End:</span>
              <span class="value">Feb 28, 2025</span>
            </div>
            <div class="detail-row">
              <span class="label">Monthly Rent:</span>
              <span class="value">$3,200</span>
            </div>
          </div>
          <div class="tenancy-actions">
            <button class="action-btn primary" @click="openOperational">View Details</button>
            <button class="action-btn secondary">Edit</button>
          </div>
        </div>

        <div class="tenancy-card">
          <div class="tenancy-header">
            <h3>789 Pine Street, Unit 3C</h3>
            <span class="tenancy-status expiring">Expiring Soon</span>
          </div>
          <div class="tenancy-details">
            <div class="detail-row">
              <span class="label">Tenant:</span>
              <span class="value">Michael Brown</span>
            </div>
            <div class="detail-row">
              <span class="label">Lease Start:</span>
              <span class="value">Aug 1, 2023</span>
            </div>
            <div class="detail-row">
              <span class="label">Lease End:</span>
              <span class="value">Jul 31, 2025</span>
            </div>
            <div class="detail-row">
              <span class="label">Monthly Rent:</span>
              <span class="value">$2,800</span>
            </div>
          </div>
          <div class="tenancy-actions">
            <button class="action-btn primary" @click="openOperational">View Details</button>
            <button class="action-btn secondary">Renew</button>
          </div>
        </div>

        <div class="tenancy-card">
          <div class="tenancy-header">
            <h3>321 Elm Drive, Unit 4D</h3>
            <span class="tenancy-status vacant">Vacant</span>
          </div>
          <div class="tenancy-details">
            <div class="detail-row">
              <span class="label">Last Tenant:</span>
              <span class="value">Emma Wilson</span>
            </div>
            <div class="detail-row">
              <span class="label">Vacant Since:</span>
              <span class="value">Dec 15, 2024</span>
            </div>
            <div class="detail-row">
              <span class="label">Target Rent:</span>
              <span class="value">$2,900</span>
            </div>
            <div class="detail-row">
              <span class="label">Status:</span>
              <span class="value">Ready to Rent</span>
            </div>
          </div>
          <div class="tenancy-actions">
            <button class="action-btn primary" @click="openOperational">List Property</button>
            <button class="action-btn secondary">Maintenance</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Operational Sidebar -->
    <Operational :isOpen="isOperationalOpen" @close="closeOperational" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Operational from './Operational.vue';

// Reactive state for operational sidebar
const isOperationalOpen = ref(false);

// Methods
const openOperational = () => {
  isOperationalOpen.value = true;
};

const closeOperational = () => {
  isOperationalOpen.value = false;
};
</script>

<style scoped>
.tenancies-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 36px;
}

.page-header {
  margin-bottom: 2rem;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
  font-family: 'Inter', Arial, sans-serif;
}

.page-description {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
}

.tenancies-content {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  padding: 2rem;
}

.tenancies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.tenancy-card {
  background: #fafbfc;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  transition: box-shadow 0.2s, transform 0.2s;
}

.tenancy-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.tenancy-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.tenancy-header h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  margin: 0;
  flex: 1;
  line-height: 1.3;
}

.tenancy-status {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tenancy-status.active {
  background: #e8f5e8;
  color: #2e7d32;
}

.tenancy-status.expiring {
  background: #fff3e0;
  color: #f57c00;
}

.tenancy-status.vacant {
  background: #ffebee;
  color: #c62828;
}

.tenancy-details {
  margin-bottom: 1.5rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 0.3rem 0;
}

.detail-row:last-child {
  margin-bottom: 0;
}

.label {
  font-weight: 500;
  color: #666;
}

.value {
  font-weight: 600;
  color: #222;
}

.tenancy-actions {
  display: flex;
  gap: 0.8rem;
}

.action-btn {
  flex: 1;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.action-btn:hover {
  transform: translateY(-1px);
}

.action-btn.primary {
  background: #1976d2;
  color: #fff;
}

.action-btn.primary:hover {
  background: #1356a2;
}

.action-btn.secondary {
  background: #f5f5f5;
  color: #444;
  border: 1px solid #ddd;
}

.action-btn.secondary:hover {
  background: #e8e8e8;
}

@media (max-width: 768px) {
  .tenancies-page {
    padding: 1rem;
  }
  
  .tenancies-grid {
    grid-template-columns: 1fr;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .tenancies-content {
    padding: 1rem;
  }
}
</style>