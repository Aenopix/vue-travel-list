<script setup>
import { ref } from 'vue'

const emit = defineEmits([
  'onAddItem'
])

const quantity = ref(1)
const description = ref('')
const numOfOptions = ref(20)

function handleSubmit() {
  if (!description.value) return

  const newItem = {
    description: description.value,
    quantity: quantity.value,
    packed: false,
    id: Date.now()
  }

  emit('onAddItem', newItem)

  quantity.value = 1
  description.value = ''
}
</script>

<template>
  <form class="add-form" @submit.prevent="handleSubmit">
    <h3>What do you need for your 😍 trip?</h3>
    <select v-model="quantity">
      <option v-for="num in numOfOptions" :key="num" :value="num">{{ num }}</option>
    </select>
    <input type="text" placeholder="Item..." v-model="description">
    <button type="submit">Add</button>
  </form>
</template>