<template>
  <div>
    <top-nav-general />
    <bottom-navigation />
  </div>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation.vue'
import TopNavGeneral from '../components/TopNavGeneral.vue'

export default {
  name: 'Cart',

  components: {
    BottomNavigation,
    TopNavGeneral
  }
}
</script>

<style>
.container {
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .ml-lg-n4,
  .mx-lg-n4 {
    margin-left: -1rem !important;
  }
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px;
  }
}
</style>
