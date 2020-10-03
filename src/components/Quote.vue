<template>
  <section class="lg:w-4/5 lg:pl-32 px-8 border-l-8 border-yellow-400">
    <div class="lg:text-4xl text-xl font-medium">
      {{$props.quote}}
    </div>
  </section>
</template>

<script>
export default {
  name: "Quote",
  props: ['quote']
}
</script>

<style scoped>

</style>
