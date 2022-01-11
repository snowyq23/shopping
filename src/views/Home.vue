<template>
  <div>
    <hello-world />
    <carousel />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',

  components: {
    HelloWorld,
    Carousel
  }
}
</script>

<style scoped>
/* #topSellersTab .v-slide-group__wrapper {
  width: 100%;
} */
/* @media (min-width: 992px) {
  #topSellersTab .v-slide-group__wrapper {
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }
} */
</style>
