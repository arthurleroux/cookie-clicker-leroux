<template>
  <div id="game-container">
    <CookieSection />
    <ShopSection />
  </div>
</template>

<script>

  import CookieSection from '@/components/CookieSection.vue'
  import ShopSection from '@/components/ShopSection.vue'

  export default {
      components: {
          CookieSection,
          ShopSection
      }
  }

</script>

<style>
    #game-container {
        display: flex;
        flex-direction: row;
    }
</style>