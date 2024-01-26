import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App', () => {
  it('loads and displays items from JSON', () => {
    const wrapper = mount(App)
    const items = wrapper.vm.items
    expect(items.length).toBe(5)
    expect(items[0].description).toBe('Uno')
  })
})