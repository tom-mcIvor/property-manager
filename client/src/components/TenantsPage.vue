<template>
  <div>
    <h1>Tenants</h1>
    <form @submit.prevent="addTenant">
      <input v-model="newTenant.name" placeholder="Tenant Name" required />
      <input v-model="newTenant.email" placeholder="Email" required />
      <button type="submit">Add Tenant</button>
    </form>
    <ul>
      <li v-for="tenant in tenants" :key="tenant.id">
        <span v-if="!tenant.editing">{{ tenant.name }} - {{ tenant.email }}</span>
        <span v-else>
          <input v-model="tenant.name" />
          <input v-model="tenant.email" />
        </span>
        <button v-if="!tenant.editing" @click="editTenant(tenant)">Edit</button>
        <button v-if="tenant.editing" @click="saveTenant(tenant)">Save</button>
        <button @click="deleteTenant(tenant.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tenants = ref([
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', editing: false },
  { id: 2, name: 'Bob Johnson', email: 'bob@example.com', editing: false },
])

const newTenant = ref({ name: '', email: '' })

function addTenant() {
  if (!newTenant.value.name || !newTenant.value.email) return
  tenants.value.push({
    id: Date.now(),
    name: newTenant.value.name,
    email: newTenant.value.email,
    editing: false,
  })
  newTenant.value.name = ''
  newTenant.value.email = ''
}

function editTenant(tenant) {
  tenant.editing = true
}

function saveTenant(tenant) {
  tenant.editing = false
}

function deleteTenant(id) {
  tenants.value = tenants.value.filter(t => t.id !== id)
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