// tests/UserForm.spec.js
import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import UserForm from './UserForm.vue'

describe('UserForm', () => {
  beforeEach(() => {
    // Clear local storage and reset Pinia store before each test
    localStorage.clear()
    setActivePinia(createPinia())
  })

  it('renders the form correctly', () => {
    const wrapper = mount(UserForm)
    
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  })

  it('adds a user when form is submitted', async () => {
    const wrapper = mount(UserForm)
    
    // Fill out the form
    await wrapper.find('input[type="text"]').setValue('John Doe')
    await wrapper.find('input[type="email"]').setValue('john@example.com')
    
    // Submit the form
    await wrapper.find('form').trigger('submit.prevent')
    
    // Check that the user is added to the list
    const userItems = wrapper.findAll('li')
    expect(userItems.length).toBe(1)
    expect(userItems[0].text()).toContain('John Doe')
    expect(userItems[0].text()).toContain('john@example.com')
  })

  it('removes a user when delete button is clicked', async () => {
    const wrapper = mount(UserForm)
    
    // Add a user first
    await wrapper.find('input[type="text"]').setValue('John Doe')
    await wrapper.find('input[type="email"]').setValue('john@example.com')
    await wrapper.find('form').trigger('submit.prevent')
    
    // Delete the user
    const deleteButton = wrapper.find('button.text-red-500')
    await deleteButton.trigger('click')
    
    // Check that the user list is empty
    const userItems = wrapper.findAll('li')
    expect(userItems.length).toBe(0)
  })
})