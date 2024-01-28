<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: {
    id: Number,
    description: String,
    quantity: Number,
    packed: Boolean
  }
})

const emit = defineEmits([
  'onDeleteItem',
  'onToggleItem'
])

const item = ref(props.item)
</script>

<template>
  <li>
    <input type="checkbox" v-model="item.packed" @change="emit('onToggleItem')" />
    <span :style="{ textDecoration: item.packed ? 'line-through' : 'none' }">
      {{ item.quantity }} {{ item.description }}
    </span>
    <button @click="emit('onDeleteItem', item.id)">❌</button>
  </li>
</template>