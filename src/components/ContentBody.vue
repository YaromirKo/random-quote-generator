<template>
  <transition name="list">
    <header v-if="store.state.data.length !== 1" class="pb-4">
      <span class="lg:pl-32 pl-8 lg:text-4xl text-xl font-bold">{{ store.state.name }}</span>
    </header>
  </transition>

  <transition-group name="list" mode="out-in">
    <div class="my-16" v-for="item in store.state.data" :key="item['_id']">
      <Quote :quote="item.quoteText"/>
    </div>
  </transition-group>

  <div @click="getQuotesByAuthor" v-if="store.state.data.length === 1" class="flex justify-center mt-24">
    <div class="flex items-center justify-between w-9/12 px-6 py-2 hover:bg-brown hover:text-white cursor-pointer">
      <div class="">
        <p class="text-2xl font-bold">{{store.state.data[0]['quoteAuthor']}}</p>
        <p class="text-sm font-medium text-gray-600">{{store.state.data[0]['quoteGenre']}}</p>
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
    store.getRandomQuote()
    const getQuotesByAuthor = () => {
      store.getQuoteByAuthor()
    }
    return {store, getQuotesByAuthor}
  }
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
