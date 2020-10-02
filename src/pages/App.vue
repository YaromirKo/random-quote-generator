<template>
  <div class="container relative min-h-screen-95 mx-auto pt-8 sm:px-24">
    <Header/>
    <ContentBody/>
  </div>
  <Footer/>
</template>
<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import {defineAsyncComponent } from "vue";

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    ContentBody: defineAsyncComponent(() =>
        import("@/components/ContentBody")
    )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 100vh;
  border: 3px solid #edf2f7;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
* {
  -webkit-touch-callout:none;                /* prevent callout to copy image, etc when tap to hold */
  -webkit-text-size-adjust:none;             /* prevent webkit from resizing text to fit */
  -webkit-tap-highlight-color:rgba(0,0,0,0); /* prevent tap highlight color / shadow */
  /*-webkit-user-select:none;                  !* prevent copy paste, to allow, change 'none' to 'text' *!*/
}
</style>
