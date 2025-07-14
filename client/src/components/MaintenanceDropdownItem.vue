<template>
  <div class="maintenance-container">
    <!-- Header Section -->
    <div class="maintenance-header">
      <div class="header-left">
        <h2 class="page-title">Maintenance</h2>
        <div class="header-info">
          <span class="info-text">From here you can view complete, overdue or upcoming maintenance tasks.</span>
        </div>
      </div>
      <div class="header-right">
        <button class="btn-secondary">Download</button>
        <button class="btn-secondary">Create Maintenance</button>
        <button class="btn-primary">Close with Costs</button>
      </div>
    </div>

    <!-- Filters Section -->
    <div class="filters-section">
      <div class="filter-tabs">
        <button class="filter-tab active">Work Orders</button>
        <button class="filter-tab">Quotes</button>
        <button class="filter-tab">Overdue</button>
      </div>
      <div class="filter-controls">
        <div class="filter-group">
          <label>Due Date</label>
          <select class="filter-select">
            <option>Next 30 Days</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Status</label>
          <select class="filter-select">
            <option>Incomplete</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Tags</label>
          <select class="filter-select">
            <option>Select</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Properties</label>
          <select class="filter-select">
            <option>Select</option>
          </select>
        </div>
        <div class="search-group">
          <label>Search</label>
          <input type="text" class="search-input" placeholder="Search">
          <button class="search-btn">🔍</button>
        </div>
        <div class="view-controls">
          <span>Display</span>
          <button class="view-btn active">📋</button>
          <span>Columns</span>
          <button class="columns-btn">📊</button>
          <span>Filters</span>
          <button class="filters-btn">🔽</button>
        </div>
      </div>
    </div>

    <!-- Table Section -->
    <div class="table-container">
      <table class="maintenance-table">
        <thead>
          <tr>
            <th>Maintenance</th>
            <th>Tags</th>
            <th>Property Manager</th>
            <th>Assigned To</th>
            <th>Tenancy</th>
            <th>Contractor</th>
            <th>Property</th>
            <th>Type</th>
            <th>Created Date</th>
            <th>Due Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in maintenanceItems" :key="item.id" class="table-row">
            <td class="maintenance-cell">
              <div class="maintenance-item">
                <span class="priority-indicator">⚠️</span>
                <span class="maintenance-title">{{ item.title }}</span>
              </div>
            </td>
            <td><span class="tag">{{ item.tag }}</span></td>
            <td>
              <div class="user-cell">
                <div class="user-avatar" :style="{ backgroundColor: item.manager.color }">
                  {{ item.manager.initials }}
                </div>
              </div>
            </td>
            <td>
              <div class="user-cell">
                <div class="user-avatar" :style="{ backgroundColor: item.assignedTo.color }">
                  {{ item.assignedTo.initials }}
                </div>
              </div>
            </td>
            <td><span class="tenancy-link">{{ item.tenancy }}</span></td>
            <td><span class="contractor-text">{{ item.contractor }}</span></td>
            <td><span class="property-link">{{ item.property }}</span></td>
            <td><span class="type-text">{{ item.type }}</span></td>
            <td><span class="date-text">{{ item.createdDate }}</span></td>
            <td><span class="date-text">{{ item.dueDate }}</span></td>
            <td><span class="status-badge" :class="item.status.toLowerCase()">{{ item.status }}</span></td>
            <td>
              <button class="action-btn">⋮</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const maintenanceItems = ref([
  {
    id: 1,
    title: 'Roof Maintenance',
    tag: 'No tags',
    manager: { initials: 'JD', color: '#4a5568' },
    assignedTo: { initials: 'AB', color: '#2d3748' },
    tenancy: 'No tenancy',
    contractor: 'No contractor',
    property: '2 Clifton St',
    type: 'Air Conditioning',
    createdDate: '04/01/2025',
    dueDate: '06/06/2025',
    status: 'Incomplete'
  },
  {
    id: 2,
    title: 'Oven Maintenance',
    tag: 'No tags',
    manager: { initials: 'SM', color: '#38a169' },
    assignedTo: { initials: 'CD', color: '#2d3748' },
    tenancy: 'No tenancy',
    contractor: 'Ace Plumbing',
    property: '2 Clifton St',
    type: 'Plumbing',
    createdDate: '04/01/2025',
    dueDate: '06/06/2025',
    status: 'Incomplete'
  },
  {
    id: 3,
    title: 'Fire Safety Check',
    tag: 'No tags',
    manager: { initials: 'TM', color: '#d69e2e' },
    assignedTo: { initials: 'EF', color: '#2d3748' },
    tenancy: 'Unassigned',
    contractor: 'No contractor',
    property: '2 Montrose St',
    type: 'Fire Safety',
    createdDate: '25/07/2025',
    dueDate: '05/08/2025',
    status: 'Incomplete'
  },
  {
    id: 4,
    title: 'Fire Safety Check',
    tag: 'No tags',
    manager: { initials: 'JD', color: '#4a5568' },
    assignedTo: { initials: 'GH', color: '#2d3748' },
    tenancy: 'Unassigned',
    contractor: 'No contractor',
    property: '100 Oxford St',
    type: 'Fire Safety',
    createdDate: '25/07/2025',
    dueDate: '05/08/2025',
    status: 'Incomplete'
  },
  {
    id: 5,
    title: 'Tap Leakage',
    tag: 'No tags',
    manager: { initials: 'SM', color: '#38a169' },
    assignedTo: { initials: 'IJ', color: '#2d3748' },
    tenancy: 'Unassigned',
    contractor: 'Ace Plumbing',
    property: '2 Queen St',
    type: 'Plumbing',
    createdDate: '26/07/2025',
    dueDate: '06/08/2025',
    status: 'Incomplete'
  }
]);
</script>

<style scoped>
.maintenance-container {
  padding: 1.5rem;
  background: #ffffff;
  min-height: 100vh;
}

.maintenance-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.header-left {
  flex: 1;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.info-text {
  color: #6b7280;
  font-size: 0.875rem;
}

.header-right {
  display: flex;
  gap: 0.75rem;
}

.btn-secondary {
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: #e5e7eb;
}

.btn-primary {
  background: #1f2937;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: #111827;
}

.filters-section {
  margin-bottom: 1.5rem;
}

.filter-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.filter-tab {
  background: #f9fafb;
  border: 1px solid #d1d5db;
  color: #374151;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-tab.active {
  background: #1f2937;
  color: white;
  border-color: #1f2937;
}

.filter-controls {
  display: flex;
  gap: 1rem;
  align-items: end;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.filter-group label {
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
}

.filter-select {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.875rem;
  background: white;
  min-width: 120px;
}

.search-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.search-group label {
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
}

.search-input {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-size: 0.875rem;
  min-width: 150px;
}

.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
}

.view-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
}

.view-controls span {
  font-size: 0.75rem;
  color: #6b7280;
}

.view-btn, .columns-btn, .filters-btn {
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
}

.view-btn.active {
  background: #1f2937;
  color: white;
}

.table-container {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.maintenance-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.maintenance-table th {
  background: #f9fafb;
  padding: 0.75rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.75rem;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

.table-row {
  border-bottom: 1px solid #f3f4f6;
}

.table-row:hover {
  background: #f9fafb;
}

.maintenance-table td {
  padding: 0.75rem;
  font-size: 0.875rem;
  vertical-align: middle;
}

.maintenance-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.priority-indicator {
  font-size: 1rem;
}

.maintenance-title {
  color: #1f2937;
  font-weight: 500;
}

.tag {
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.user-cell {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.75rem;
}

.tenancy-link, .property-link {
  color: #3b82f6;
  cursor: pointer;
}

.tenancy-link:hover, .property-link:hover {
  text-decoration: underline;
}

.contractor-text, .type-text {
  color: #6b7280;
}

.date-text {
  color: #374151;
  font-size: 0.875rem;
}

.status-badge {
  background: #fef3c7;
  color: #92400e;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-badge.incomplete {
  background: #fef3c7;
  color: #92400e;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: #6b7280;
  font-size: 1rem;
}

.action-btn:hover {
  color: #374151;
}
</style>