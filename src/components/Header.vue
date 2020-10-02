<template>
  <header class="flex justify-end">
    <div @click="store.getRandomQuote" class="flex items-center text-lg font-medium p-2 mr-4 cursor-pointer hover:bg-gray-200 rounded">
      <div>random</div>
      <div class="material-icons">autorenew</div>
    </div>
  </header>
</template>

<script>
import {injectStore} from "@/store";

export default {
  name: "Header",
  setup() {
    return {
      store: injectStore()
    }
  }
}
</script>

<style scoped>

</style>
