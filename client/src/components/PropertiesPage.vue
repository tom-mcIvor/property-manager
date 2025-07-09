<template>
  <div class="properties-container">
    <div class="properties-header">
      <h1>Property Management</h1>
      <button 
        class="add-property-btn" 
        @click="showAddForm = !showAddForm"
        :class="{ 'active': showAddForm }"
      >
        <span class="btn-icon">+</span>
        Property Management
      </button>
    </div>

    <!-- Add Property Form -->
    <div v-if="showAddForm" class="add-property-form">
      <form @submit.prevent="addProperty" class="property-form">
        <div class="form-group">
          <label for="propertyName">Property Name</label>
          <input 
            id="propertyName"
            v-model="newProperty.name" 
            placeholder="Enter property name" 
            required 
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="propertyAddress">Address</label>
          <input 
            id="propertyAddress"
            v-model="newProperty.address" 
            placeholder="Enter property address" 
            required 
            class="form-input"
          />
        </div>
        <div class="form-actions">
          <button type="submit" class="submit-btn">Add Property</button>
          <button type="button" @click="cancelAdd" class="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>

    <!-- Properties List -->
    <div class="properties-list">
      <div v-if="properties.length === 0" class="empty-state">
        <p>No properties added yet. Click "Add Property" to get started.</p>
      </div>
      <div v-else class="property-cards">
        <div v-for="property in properties" :key="property.id" class="property-card">
          <div v-if="!property.editing" class="property-info">
            <h3 class="property-name">{{ property.name }}</h3>
            <p class="property-address">{{ property.address }}</p>
          </div>
          <div v-else class="property-edit">
            <input v-model="property.name" class="edit-input" />
            <input v-model="property.address" class="edit-input" />
          </div>
          <div class="property-actions">
            <button v-if="!property.editing" @click="editProperty(property)" class="action-btn edit-btn">
              Edit
            </button>
            <button v-if="property.editing" @click="saveProperty(property)" class="action-btn save-btn">
              Save
            </button>
            <button @click="deleteProperty(property.id)" class="action-btn delete-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const properties = ref([
  { id: 1, name: 'Sunset Villa', address: '123 Main St', editing: false },
  { id: 2, name: 'Ocean Breeze', address: '456 Beach Ave', editing: false },
])

const newProperty = ref({ name: '', address: '' })
const showAddForm = ref(false)

function addProperty() {
  if (!newProperty.value.name || !newProperty.value.address) return
  properties.value.push({
    id: Date.now(),
    name: newProperty.value.name,
    address: newProperty.value.address,
    editing: false,
  })
  newProperty.value.name = ''
  newProperty.value.address = ''
  showAddForm.value = false
}

function cancelAdd() {
  newProperty.value.name = ''
  newProperty.value.address = ''
  showAddForm.value = false
}

function editProperty(property) {
  property.editing = true
}

function saveProperty(property) {
  property.editing = false
}

function deleteProperty(id) {
  properties.value = properties.value.filter(p => p.id !== id)
}
</script>

<style scoped>
/* Layout Containers */
.properties-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.properties-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

/* Header */
.properties-header h1 {
  margin: 0;
  color: #333;
  font-size: 2rem;
  font-weight: 600;
}

.add-property-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #1976d2;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.add-property-btn:hover,
.add-property-btn.active {
  background: #1565c0;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}
.btn-icon {
  font-size: 1.2rem;
  font-weight: bold;
}

/* Add Property Form */
.add-property-form {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.property-form {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1rem;
  align-items: end;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}
.form-input {
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}
.form-input:focus {
  outline: none;
  border-color: #1976d2;
  box-shadow: 0 0 0 3px rgba(25,118,210,0.1);
}
.form-actions {
  display: flex;
  gap: 0.5rem;
}
.submit-btn, .cancel-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.submit-btn {
  background: #28a745;
  color: #fff;
}
.submit-btn:hover {
  background: #218838;
}
.cancel-btn {
  background: #6c757d;
  color: #fff;
}
.cancel-btn:hover {
  background: #5a6268;
}

/* Properties List & Cards */
.properties-list {
  margin-top: 2rem;
}
.empty-state {
  text-align: center;
  padding: 3rem;
  color: #6c757d;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px dashed #dee2e6;
}
.empty-state p {
  margin: 0;
  font-size: 1.1rem;
}
.property-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}
.property-card {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: box-shadow 0.2s, transform 0.2s;
}
.property-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}
.property-info {
  margin-bottom: 1rem;
}
.property-name {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.25rem;
  font-weight: 600;
}
.property-address {
  margin: 0;
  color: #6c757d;
  font-size: 1rem;
}
.property-edit {
  margin-bottom: 1rem;
}
.edit-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
.edit-input:focus {
  outline: none;
  border-color: #1976d2;
}
.property-actions {
  display: flex;
  gap: 0.5rem;
}
.action-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.edit-btn {
  background: #ffc107;
  color: #212529;
}
.edit-btn:hover {
  background: #e0a800;
}
.save-btn {
  background: #28a745;
  color: #fff;
}
.save-btn:hover {
  background: #218838;
}
.delete-btn {
  background: #dc3545;
  color: #fff;
}
.delete-btn:hover {
  background: #c82333;
}

/* Responsive Design */
@media (max-width: 768px) {
  .properties-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  .property-form {
    grid-template-columns: 1fr;
  }
  .form-actions {
    justify-content: stretch;
  }
  .property-cards {
    grid-template-columns: 1fr;
  }
}
</style> 