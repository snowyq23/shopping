<template>
  <div>
    <top-nav-general />
    <section id="service" class="py-9">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-3">
            <!-- Item -->
            <div class="d-flex mb-6 mb-lg-0">
              <!-- Icon -->
              <i class="fa fa-truck font-size-lg text-primary"></i>

              <!-- Body -->
              <div class="ml-6">
                <!-- Heading -->
                <h6 class="heading-xxs mb-1">Free shipping</h6>

                <!-- Text -->
                <p class="mb-0 font-size-sm text-muted">
                  From all orders over $100
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <!-- Item -->
            <div class="d-flex mb-6 mb-lg-0">
              <!-- Icon -->
              <i class="fa fa-exchange-alt font-size-lg text-primary"></i>

              <!-- Body -->
              <div class="ml-6">
                <!-- Heading -->
                <h6 class="mb-1 heading-xxs">Free returns</h6>

                <!-- Text -->
                <p class="mb-0 font-size-sm text-muted">
                  Return money within 30 days
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <!-- Item -->
            <div class="d-flex mb-6 mb-md-0">
              <!-- Icon -->
              <i class="fa fa-lock font-size-lg text-primary"></i>

              <!-- Body -->
              <div class="ml-6">
                <!-- Heading -->
                <h6 class="mb-1 heading-xxs">Secure shopping</h6>

                <!-- Text -->
                <p class="mb-0 font-size-sm text-muted">You're in safe hands</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <!-- Item -->
            <div class="d-flex">
              <!-- Icon -->
              <i class="fa fa-tag font-size-lg text-primary"></i>

              <!-- Body -->
              <div class="ml-6">
                <!-- Heading -->
                <h6 class="mb-1 heading-xxs">Over 10,000 Styles</h6>

                <!-- Text -->
                <p class="mb-0 font-size-sm text-muted">
                  We have everything you need
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
