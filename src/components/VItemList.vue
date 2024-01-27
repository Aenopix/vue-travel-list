<script setup>
import { computed, ref } from 'vue';
import VItem from './VItem.vue';

const props = defineProps({
  items: Array
})

const emit = defineEmits([
  'onClearClick',
  'onDeleteItem',
  'onToggleItem'
])

const sortValue = ref('input')
const sortedItems = computed(() => {
  if (sortValue.value === 'description') {
    return [...props.items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  if (sortValue.value === 'packed') {
    return [...props.items].sort((a, b) =>
      Number(a.packed) - Number(b.packed)
    );
  }

  return props.items
})
</script>

<template>
  <div class="list">
    <ul>
      <VItem v-for="item in sortedItems" :key="item.id" :item="item" @on-toggle-item="emit('onToggleItem', item.id)"
        @on-delete-item="emit('onDeleteItem', item.id)" />
    </ul>
    <div class="actions">
      <select v-model="sortValue">
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button @click="emit('onClearClick')">Clear list</button>
    </div>
  </div>
</template>
