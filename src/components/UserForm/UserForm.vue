
<template>
  <div class=" w-1/2 flex mx-auto my-auto flex-row justify-between items-center gap-20 p-6 bg-white shadow-md rounded-lg">
    <form @submit.prevent="submitForm" class=" h-[350px] w-full flex justify-center flex-col flex-1">
      <div class="flex-1 w-full h-max">
        <label class="block text-sm font-medium mb-2 text-gray-700">Name</label>
        <input v-model="form.name" type="text" required
          class="mt-1 block w-full flex-1 p-3 rounded-md border-gray-600 shadow-lg focus:border-primary-500 focus:ring focus:ring-primary-50">
      </div>
      <div class="flex-1 w-full h-max" >
        <label class="block text-sm font-medium mb-2 text-gray-700">Email</label>
        <input v-model="form.email" type="email" required
          class="mt-1 block w-full flex-1 p-3 rounded-md border-gray-600 shadow-lg focus:border-primary-500 focus:ring focus:ring-primary-50">
      </div>
      <button type="submit"
        class="w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600 transition-colors">
        Submit
      </button>
    </form>

    <div class="mt-6 flex-1">
      <div class="flex justify-between mb-2">
        <h2 class="text-xl font-semibold mb-4">Registered Attendees</h2>
        <p v-if="users.length > 0" class="text-gray-500">{{ users.length }}</p>       
      </div>

      <p v-if="users.length > 0" class="text-grey px-4 py-2 rounded-md">
        Sorted by RSVP date (oldest to newest)
      </p>

      <ul v-if="users.length" class=" flex flex-col gap-4 overflow-y-scroll max-h-[200px] p-1">
        <li v-for="(user, index) in users" :key="index"
          class="flex justify-between bg-gray-100 p-3 rounded-md shadow-md">
          <div>
            <p class="font-medium">{{ user.name }}</p>
            <p class="text-sm text-gray-600">{{ user.email }}</p>
            <p class="text-sm text-gray-600">rsvp: {{ user.joinedAt }}</p>
          </div>
          <button @click="removeUser(index)" class="text-red-500 hover:text-red-700">
            &#128465; Delete
          </button>
        </li>
      </ul>
      <p v-else class="text-gray-500">No attendees yet.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '../../store/userStore'

const userStore = useUserStore()
const users = ref(userStore.users)

const form = ref({
  name: '',
  email: '',
  joinedAt: new Date().toLocaleString(),
})

const submitForm = () =>
{
  userStore.addUser({ ...form.value })
  form.value = { name: '', email: '', joinedAt: '' }
}

const removeUser = (index) =>
{
  userStore.removeUser(index)
}

onMounted(() => {
  users.value = userStore.users
})

</script>