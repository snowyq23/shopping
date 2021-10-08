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
    <navigation-bar />
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'
export default {
  name: 'Index-Classic',

  components: {
    NavigationBar
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
</style>
