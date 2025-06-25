<template>
  <div>
    <h1>Properties</h1>
    <form @submit.prevent="addProperty">
      <input v-model="newProperty.name" placeholder="Property Name" required />
      <input v-model="newProperty.address" placeholder="Address" required />
      <button type="submit">Add Property</button>
    </form>
    <ul>
      <li v-for="property in properties" :key="property.id">
        <span v-if="!property.editing">{{ property.name }} - {{ property.address }}</span>
        <span v-else>
          <input v-model="property.name" />
          <input v-model="property.address" />
        </span>
        <button v-if="!property.editing" @click="editProperty(property)">Edit</button>
        <button v-if="property.editing" @click="saveProperty(property)">Save</button>
        <button @click="deleteProperty(property.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const properties = ref([
  { id: 1, name: 'Sunset Villa', address: '123 Main St', editing: false },
  { id: 2, name: 'Ocean Breeze', address: '456 Beach Ave', editing: false },
])

const newProperty = ref({ name: '', address: '' })

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
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 0.5rem 0;
}
input {
  margin-right: 0.5rem;
}
button {
  margin-left: 0.5rem;
}
</style> 