<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: Array
})

const numItems = computed(() => props.items.length ?? 0)
const numPacked = computed(() => props.items.filter(item => item.packed).length)
const percentage = computed(() => Math.round((numPacked.value / numItems.value) * 100))
</script>

<template>
  <footer class="stats">
    <em v-if="numItems === 0">Start adding some items to your packing list 🚀</em>
    <em v-else-if="percentage !== 100">💼 You have {{ numItems }} items on your list, and you already packed {{ numPacked }}
      ({{ percentage }}%)</em>
    <em v-else>You got everything! Ready to go ✈️</em>
  </footer>
</template>