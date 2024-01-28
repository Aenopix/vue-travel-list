<script setup>
import VForm from './components/VForm.vue'
import VItemList from './components/VItemList.vue'
import VFooter from './components/VFooter.vue'
import VLogo from './components/VLogo.vue'

import { ref } from 'vue'

const items = ref([])

function handleAddItem(item) {
  items.value.push(item)
}

function handleDeleteItem(id) {
  items.value = items.value.filter(item => item.id !== id)
}

function handleToggleItem(id) {
  items.value.map(item =>
    item.id === id ? { ...item, packed: !item.packed } : item
  )
}

function handleClearList() {
  const confirmed = window.confirm(
    "Are you sure you want to delete all items?"
  )
  if (confirmed)
    items.value = []
}
</script>

<template>
  <div class="app">
    <VLogo />
    <VForm @on-add-item="handleAddItem" />
    <VItemList :items="items" @on-clear-click="handleClearList" @on-toggle-item="handleToggleItem"
      @on-delete-item="handleDeleteItem" />
    <VFooter :items="items" />
  </div>
</template>
