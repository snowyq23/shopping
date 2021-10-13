<template>
  <div>
    <div class="py-3 bg-dark bg-pattern @@classList">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Text -->
            <div class="text-center text-white">
              <span class="heading-xxs letter-spacing-xl">
                ⚡️ Happy Holiday Deals on Everything ⚡️
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <top-navigation />
    <bottom-navigation />
  </div>
</template>

<script>
import TopNavigation from '../components/TopNavigation'
import BottomNavigation from '../components/BottomNavigation'

export default {
  name: 'Index-Classic',

  components: {
    TopNavigation,
    BottomNavigation
  }
}
</script>

<style>
.bg-dark {
  background-color: var(--dark) !important;
}

.letter-spacing-xl {
  letter-spacing: 0.05em !important;
}

.heading-xxs {
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -1rem;
  margin-left: -1rem;
}
.justify-content-center {
  justify-content: center !important;
}
.container {
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}

/* Column styling */
.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}
.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}
.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}
.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
.col-md-10 {
  flex: 0 0 83.33333%;
  max-width: 83.33333%;
}

.form-row > .col,
.form-row > [class*='col-'] {
  padding-right: 10px;
  padding-left: 10px;
}
@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-md-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
}
@media (min-width: 992px) {
  .col-lg-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
}
@media (min-width: 1200px) {
  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
</style>
