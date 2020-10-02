<template>

  <header v-if="store.state.showAll" class="pb-4">
    <span class="lg:pl-32 pl-8 lg:text-4xl text-xl font-bold">Bill Gates</span>
  </header>

  <Quote :quote="store.state.random.quote.quoteText"/>

  <div v-if="!store.state.showAll" @click="toggleShowAllQuotes" class="flex justify-center mt-24">
    <div class="flex items-center justify-between w-9/12 px-6 py-2 hover:bg-brown hover:text-white cursor-pointer">
      <div class="">
        <p class="text-2xl font-bold">{{store.state.random.quote.quoteAuthor}}</p>
        <p class="text-sm font-medium text-gray-600">{{store.state.random.quote.quoteGenre}}</p>
      </div>
      <div class="material-icons text-white">arrow_right_alt</div>
    </div>
  </div>
</template>

<script>
import Quote from "@/components/Quote";
import {injectStore} from "@/store";

export default {
  name: "Content",
  components: {
    Quote
  },
   setup() {
    const store = injectStore()
    return {store}
  }
}
</script>

<style scoped>

</style>
