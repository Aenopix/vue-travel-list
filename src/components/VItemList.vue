<script setup>
import VItem from './VItem.vue';

defineProps({
  items: Array
})

const emit = defineEmits([
  'onClearClick',
  'onDeleteItem',
  'onToggleItem'
])
</script>

<template>
  <div class="list">
    <ul>
      <VItem v-for="item in items" :key="item.id" :item="item" @on-toggle-item="emit('onToggleItem', item.id)"
        @on-delete-item="emit('onDeleteItem', item.id)" />
    </ul>
    <div class="actions">
      <select>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button @click="emit('onClearClick')">Clear list</button>
    </div>
  </div>
</template>
