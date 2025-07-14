<template>
  <div class="arrears-container">
    <!-- Header -->
    <div class="header">
      <h2 class="title">Tenancy Arrears</h2>
    </div>

    <!-- Filter Tabs -->
    <div class="filter-tabs">
      <button
        v-for="tab in filterTabs"
        :key="tab.label"
        :class="['tab', { active: activeTab === tab.label }]"
        @click="activeTab = tab.label"
      >
        {{ tab.label }} ({{ tab.count }})
      </button>
    </div>

    <!-- Controls Row -->
    <div class="controls-row">
      <!-- Dropdown Filters -->
      <div class="dropdown-filters">
        <select class="dropdown">
          <option>< All Companies ></option>
        </select>
        <select class="dropdown">
          <option>< All Property Managers ></option>
        </select>
        <select class="dropdown">
          <option>< All Owners ></option>
        </select>
        <select class="dropdown">
          <option>< Default Rules ></option>
        </select>
      </div>

      <!-- Search Box -->
      <div class="search-container">
        <input
          type="text"
          placeholder="Search..."
          class="search-input"
          v-model="searchQuery"
        >
        <button class="search-btn">🔍</button>
      </div>
    </div>

    <!-- Filter by Account and Show Credits -->
    <div class="additional-filters">
      <span class="filter-label">Filter by Account</span>
      <label class="checkbox-container">
        <input type="checkbox" v-model="showUnallocatedCredits">
        <span class="checkmark"></span>
        Show Unallocated Credits
      </label>
    </div>

    <!-- Pagination Info -->
    <div class="pagination-info">
      Page 1 of 4
    </div>

    <!-- Data Table -->
    <div class="table-container">
      <table class="arrears-table">
        <thead>
          <tr>
            <th>Tenancy</th>
            <th>Outstanding Invoices</th>
            <th>Status</th>
            <th>Latest Note <span class="info-icon">?</span></th>
            <th>Dismiss Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in arrearsData" :key="item.id" class="table-row">
            <td class="tenancy-cell">
              <div class="tenancy-name">{{ item.tenancy.name }}</div>
              <div class="tenancy-address">{{ item.tenancy.address }}</div>
              <div class="tenancy-unit">{{ item.tenancy.unit }}</div>
            </td>
            <td class="amount-cell">
              <div class="amount">${{ item.amount }}</div>
              <div class="overdue-info">{{ item.overdueInfo }}</div>
            </td>
            <td class="status-cell">
              <span class="status-icon">📝</span>
            </td>
            <td class="notes-cell">
              <div v-if="item.notes.length > 0">
                <div v-for="note in item.notes" :key="note" class="note-item">
                  <span class="note-icon">📝</span> {{ note }}
                </div>
              </div>
              <button class="add-note-btn">➕ Add Note</button>
              <button v-if="item.hasViewNotes" class="view-notes-btn">👁 View Notes</button>
            </td>
            <td class="dismiss-cell">
              <button class="dismiss-btn">📧</button>
            </td>
            <td class="action-cell">
              <input type="checkbox" class="action-checkbox">
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <button class="page-btn active">1</button>
      <button class="page-btn">2</button>
      <button class="page-btn">3</button>
      <button class="page-btn">4</button>
      <button class="page-btn">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive data
const activeTab = ref('Actionable Arrears')
const searchQuery = ref('')
const showUnallocatedCredits = ref(false)

// Filter tabs data
const filterTabs = ref([
  { label: 'Actionable Arrears', count: 78 },
  { label: '1 - 2 days', count: 32 },
  { label: '3 - 5 days', count: 7 },
  { label: '6 - 7 days', count: 2 },
  { label: '8 - 14 days', count: 5 },
  { label: 'All Arrears', count: 121 }
])

// Sample arrears data
const arrearsData = ref([
  {
    id: 1,
    tenancy: {
      name: 'Tru-Blu Beverages',
      address: '1 Farrer Place',
      unit: 'Office 4'
    },
    amount: '12,321.80',
    overdueInfo: '47 days overdue from 2 rent invoices',
    notes: [],
    hasViewNotes: false
  },
  {
    id: 2,
    tenancy: {
      name: 'General Carrying',
      address: '1 Farrer Place',
      unit: 'Office 5'
    },
    amount: '15,386.48',
    overdueInfo: '47 days overdue from 2 rent invoices',
    notes: [],
    hasViewNotes: false
  },
  {
    id: 3,
    tenancy: {
      name: 'Willow Records',
      address: '49-53 Bunche Street',
      unit: 'Shop 1'
    },
    amount: '9,823.18',
    overdueInfo: '47 days overdue from 2 rent invoices',
    notes: ['Tank is busted'],
    hasViewNotes: true
  },
  {
    id: 4,
    tenancy: {
      name: 'Amazon Navigations',
      address: '72 Moulsey St',
      unit: 'Office 2'
    },
    amount: '8,195.59',
    overdueInfo: '47 days overdue from 1 rent invoices',
    notes: [],
    hasViewNotes: false
  },
  {
    id: 5,
    tenancy: {
      name: 'LIGHTING DIRECT',
      address: 'Airport Retail Park',
      unit: 'Retail 4'
    },
    amount: '47,412.46',
    overdueInfo: '47 days overdue from 2 rent invoices',
    notes: [],
    hasViewNotes: false
  },
  {
    id: 6,
    tenancy: {
      name: 'Evelin Ferguson',
      address: '49-53 Bunche Street',
      unit: 'Apartment 3'
    },
    amount: '6,159.34',
    overdueInfo: '34 days overdue from 2 rent invoices',
    notes: [],
    hasViewNotes: true
  },
  {
    id: 7,
    tenancy: {
      name: 'THE WAREHOUSE',
      address: 'Airport Retail Park',
      unit: ''
    },
    amount: '4,396.15',
    overdueInfo: '34 days overdue from 1 rent invoices',
    notes: [],
    hasViewNotes: false
  }
])
</script>

<style scoped>
.arrears-container {
  padding: 20px;
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
}

.header {
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.filter-tabs {
  display: flex;
  gap: 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.tab {
  padding: 12px 20px;
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  color: #666;
  font-size: 14px;
  transition: all 0.2s;
}

.tab:hover {
  color: #333;
}

.tab.active {
  color: #007bff;
  border-bottom-color: #007bff;
  font-weight: 500;
}

.controls-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  gap: 20px;
}

.dropdown-filters {
  display: flex;
  gap: 10px;
}

.dropdown {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  font-size: 14px;
  min-width: 150px;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 14px;
  width: 200px;
}

.search-btn {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-left: none;
  border-radius: 0 4px 4px 0;
  background: #f8f9fa;
  cursor: pointer;
}

.additional-filters {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
}

.filter-label {
  color: #666;
  font-size: 14px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
}

.pagination-info {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}

.table-container {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.arrears-table {
  width: 100%;
  border-collapse: collapse;
}

.arrears-table th {
  background: #f8f9fa;
  padding: 12px;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
}

.arrears-table td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  vertical-align: top;
}

.table-row:hover {
  background-color: #f8f9fa;
}

.tenancy-cell {
  min-width: 200px;
}

.tenancy-name {
  font-weight: 600;
  color: #007bff;
  margin-bottom: 4px;
}

.tenancy-address {
  color: #666;
  font-size: 13px;
  margin-bottom: 2px;
}

.tenancy-unit {
  color: #666;
  font-size: 13px;
}

.amount-cell {
  min-width: 150px;
}

.amount {
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.overdue-info {
  color: #666;
  font-size: 13px;
}

.status-cell {
  text-align: center;
  width: 60px;
}

.status-icon {
  font-size: 16px;
}

.notes-cell {
  min-width: 200px;
}

.note-item {
  color: #007bff;
  font-size: 13px;
  margin-bottom: 4px;
}

.add-note-btn, .view-notes-btn {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 13px;
  padding: 2px 0;
  margin-right: 10px;
  text-decoration: none;
}

.add-note-btn:hover, .view-notes-btn:hover {
  text-decoration: underline;
}

.dismiss-cell {
  text-align: center;
  width: 60px;
}

.dismiss-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
}

.action-cell {
  text-align: center;
  width: 60px;
}

.action-checkbox {
  transform: scale(1.2);
}

.pagination {
  display: flex;
  gap: 5px;
  justify-content: flex-end;
}

.page-btn {
  padding: 8px 12px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.page-btn.active {
  background: #333;
  color: white;
  border-color: #333;
}

.page-btn:hover:not(.active) {
  background: #f8f9fa;
}

.info-icon {
  color: #999;
  font-size: 12px;
  margin-left: 4px;
}
</style>