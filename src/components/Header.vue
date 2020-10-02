<template>
  <header class="flex justify-end">
    <div class="flex items-center text-lg font-medium p-2 mr-4 cursor-pointer hover:bg-gray-200 rounded">
      <div>random</div>
      <div class="material-icons">autorenew</div>
    </div>
  </header>
</template>

<script>
import {ref, onMounted} from 'vue'

export default {
  name: "Header",
  setup() {
    const show = ref(true)
    onMounted(() => {
      setTimeout(() => {
        show.value = false
      }, 10000)
    })
    return {show}
  }
}
</script>

<style scoped>

</style>
