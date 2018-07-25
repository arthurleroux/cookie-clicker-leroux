<template>
  <div id="game-container">
    <Cookie />
  </div>
</template>

<script>

  import Cookie from '@/components/Cookie.vue'
  import Shop from '@/components/Shop.vue'

  export default {
      components: {
          Cookie,
          Shop
      }
  }

</script>