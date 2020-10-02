<template>

  <Quote/>

  <footer class="flex justify-center mt-24">
    <div class="flex items-center justify-between w-9/12 px-6 py-2 hover:bg-brown hover:text-white cursor-pointer">
      <div class="">
        <p class="text-2xl font-bold">Bill Gates</p>
        <p class="text-sm font-medium text-gray-600">business</p>
      </div>
      <div class="material-icons text-white">arrow_right_alt</div>
    </div>
  </footer>
</template>

<script>
import Quote from "@/components/Quote";
export default {
  name: "Content",
  components: {
    Quote
  }
}
</script>

<style scoped>

</style>
