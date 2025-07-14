<template>
  <div class="properties-container">
    <!-- Header -->
    <div class="properties-header">
      <h1>Properties</h1>
      <div class="header-actions">
        <button class="bulk-edit-btn">
          <span class="bulk-icon">☰</span>
          Bulk Edit
        </button>
        <button class="new-property-btn">
          <span class="plus-icon">+</span>
          New Property
        </button>
      </div>
    </div>

    <!-- Filters Section -->
    <div class="filters-section">
      <div class="filter-dropdowns">
        <div class="filter-group">
          <label>Companies</label>
          <select v-model="filters.company" class="filter-select">
            <option value="">Select</option>
            <option value="johl-holdings">Johl Holdings Ltd</option>
            <option value="beta-property">Beta Property Pty Ltd</option>
          </select>
        </div>
        
        <div class="filter-group">
          <label>Property Owners</label>
          <select v-model="filters.propertyOwner" class="filter-select">
            <option value="">Select</option>
            <option value="owner1">Property Owner 1</option>
            <option value="owner2">Property Owner 2</option>
          </select>
        </div>
        
        <div class="filter-group">
          <label>Tags</label>
          <select v-model="filters.tags" class="filter-select">
            <option value="">Select</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        
        <div class="filter-group">
          <label>Property Managers</label>
          <select v-model="filters.propertyManager" class="filter-select">
            <option value="">Select</option>
            <option value="manager1">Manager 1</option>
            <option value="manager2">Manager 2</option>
          </select>
        </div>
        
        <div class="filter-group search-group">
          <label>Search</label>
          <div class="search-input-container">
            <input 
              v-model="filters.search" 
              type="text" 
              placeholder="Search..." 
              class="search-input"
            />
            <span class="search-icon">🔍</span>
          </div>
        </div>
      </div>
      
      <div class="table-controls">
        <button class="control-btn">
          <span class="columns-icon">☰</span>
          Columns
        </button>
        <button class="control-btn">
          <span class="filters-icon">⚙</span>
          Filters
        </button>
      </div>
    </div>

    <!-- Properties Table -->
    <div class="properties-table-container">
      <table class="properties-table">
        <thead>
          <tr>
            <th class="title-column">
              Title
              <span class="sort-icon">↕</span>
            </th>
            <th>Tags</th>
            <th>EPC</th>
            <th>Custom Reference</th>
            <th>Company</th>
            <th>Facilities Manager</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="property in filteredProperties" :key="property.id" class="property-row">
            <td class="title-cell">
              <div class="property-title">
                <img :src="property.image" :alt="property.title" class="property-image" />
                <span class="property-name">{{ property.title }}</span>
              </div>
            </td>
            <td class="tags-cell">
              <span v-if="property.tags" class="tag">{{ property.tags }}</span>
              <span v-else class="no-tags">No tags</span>
            </td>
            <td class="epc-cell">{{ property.epc }}</td>
            <td class="reference-cell">
              <span v-if="property.customReference" class="reference">{{ property.customReference }}</span>
              <span v-else class="no-reference">No reference</span>
            </td>
            <td class="company-cell">{{ property.company }}</td>
            <td class="manager-cell">
              <span v-if="property.facilitiesManager" class="manager">{{ property.facilitiesManager }}</span>
              <span v-else class="no-manager">No facilities manager</span>
            </td>
            <td class="address-cell">{{ property.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="pagination-container">
      <div class="pagination-info">
        1-25 of 33
      </div>
      <div class="pagination-controls">
        <button class="pagination-btn" :disabled="currentPage === 1">
          ‹
        </button>
        <button class="pagination-btn">
          ›
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentPage = ref(1)

const filters = ref({
  company: '',
  propertyOwner: '',
  tags: '',
  propertyManager: '',
  search: ''
})

const properties = ref([
  {
    id: 1,
    title: '1 Fansie Place',
    tags: 'Residential',
    epc: 'B',
    customReference: null,
    company: 'Johl Holdings Ltd',
    facilitiesManager: null,
    address: '34 / 1 Fansie Place, Adelaide South Australia 5000, Australia',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=60&h=60&fit=crop&crop=center'
  },
  {
    id: 2,
    title: '1/3 Tapers Way',
    tags: null,
    epc: 'A',
    customReference: null,
    company: 'Johl Holdings Ltd',
    facilitiesManager: null,
    address: '1 / 3 Tapers Way, Auckland Auckland 0614, New Zealand',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=60&h=60&fit=crop&crop=center'
  },
  {
    id: 3,
    title: '11 Mayoral Drive Auckland Central',
    tags: 'Northshore',
    epc: 'D',
    customReference: null,
    company: 'Johl Holdings Ltd',
    facilitiesManager: null,
    address: '53 Fort Street, Auckland CBD, Auckland Great South Road 1010, New Zealand',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=60&h=60&fit=crop&crop=center'
  },
  {
    id: 4,
    title: '111 Wellesley Street West',
    tags: null,
    epc: 'Unset',
    customReference: null,
    company: 'Johl Holdings Ltd',
    facilitiesManager: null,
    address: '111 Wellesley Street West, Auckland Auckland 1010, New Zealand',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=60&h=60&fit=crop&crop=center'
  },
  {
    id: 5,
    title: '111 Wellesley Street West',
    tags: null,
    epc: 'Unset',
    customReference: null,
    company: 'Beta Property Pty Ltd',
    facilitiesManager: null,
    address: '111 Wellesley Street West, Auckland Auckland 1010, New Zealand',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=60&h=60&fit=crop&crop=center'
  },
  {
    id: 6,
    title: 'Auckland Retail Mixed',
    tags: 'Auckland retail mixed',
    epc: 'A',
    customReference: 'www.gta/southwaikato.co.nz',
    company: 'Johl Holdings Ltd',
    facilitiesManager: null,
    address: '',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=60&h=60&fit=crop&crop=center'
  }
])

const filteredProperties = computed(() => {
  return properties.value.filter(property => {
    if (filters.value.search && !property.title.toLowerCase().includes(filters.value.search.toLowerCase())) {
      return false
    }
    if (filters.value.company && property.company !== filters.value.company) {
      return false
    }
    return true
  })
})
</script>

<style scoped>
.properties-container {
  padding: 20px;
  background: #f8f9fa;
  min-height: 100vh;
}

/* Header */
.properties-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.properties-header h1 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.bulk-edit-btn, .new-property-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.new-property-btn {
  background: #28a745;
  color: white;
  border-color: #28a745;
}

.bulk-edit-btn:hover {
  background: #f8f9fa;
}

.new-property-btn:hover {
  background: #218838;
}

.bulk-icon, .plus-icon {
  font-size: 12px;
}

/* Filters Section */
.filters-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
  gap: 20px;
}

.filter-dropdowns {
  display: flex;
  gap: 15px;
  flex: 1;
}

.filter-group {
  display: flex;
  flex-direction: column;
  min-width: 120px;
}

.filter-group label {
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
  font-weight: 500;
}

.filter-select {
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  color: #333;
}

.search-group {
  min-width: 200px;
}

.search-input-container {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 6px 30px 6px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.search-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 12px;
}

.table-controls {
  display: flex;
  gap: 10px;
}

.control-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  color: #333;
  font-size: 14px;
  cursor: pointer;
}

.control-btn:hover {
  background: #f8f9fa;
}

/* Table */
.properties-table-container {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.properties-table {
  width: 100%;
  border-collapse: collapse;
}

.properties-table th {
  background: #f8f9fa;
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #dee2e6;
  position: relative;
}

.properties-table th:first-child {
  padding-left: 20px;
}

.sort-icon {
  margin-left: 4px;
  color: #666;
  font-size: 12px;
}

.properties-table td {
  padding: 16px;
  border-bottom: 1px solid #f1f3f4;
  font-size: 14px;
  color: #333;
  vertical-align: middle;
}

.properties-table td:first-child {
  padding-left: 20px;
}

.property-row:hover {
  background: #f8f9fa;
}

.title-cell {
  min-width: 200px;
}

.property-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.property-image {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
}

.property-name {
  font-weight: 500;
  color: #1976d2;
  cursor: pointer;
}

.property-name:hover {
  text-decoration: underline;
}

.tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.no-tags, .no-reference, .no-manager {
  color: #999;
  font-style: italic;
}

.epc-cell {
  font-weight: 600;
  text-align: center;
  min-width: 60px;
}

.reference-cell {
  color: #1976d2;
  cursor: pointer;
}

.reference:hover {
  text-decoration: underline;
}

.address-cell {
  max-width: 250px;
  word-wrap: break-word;
}

/* Pagination */
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.pagination-info {
  font-size: 14px;
  color: #666;
}

.pagination-controls {
  display: flex;
  gap: 4px;
}

.pagination-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  background: white;
  color: #333;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.pagination-btn:hover:not(:disabled) {
  background: #f8f9fa;
}

.pagination-btn:disabled {
  color: #ccc;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 1200px) {
  .filter-dropdowns {
    flex-wrap: wrap;
  }
  
  .filter-group {
    min-width: 100px;
  }
}

@media (max-width: 768px) {
  .filters-section {
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-dropdowns {
    justify-content: space-between;
  }
  
  .table-controls {
    justify-content: flex-end;
  }
  
  .properties-table-container {
    overflow-x: auto;
  }
  
  .properties-table {
    min-width: 800px;
  }
}
</style>