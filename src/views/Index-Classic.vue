<template>
  <div>
    <div class="py-3 bg-dark">
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
.text-white {
  color: var(--white) !important;
}

.text-center {
  text-align: center !important;
}

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
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px;
  }
}
</style>
