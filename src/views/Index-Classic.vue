<template>
  <div id="main">
    <div id="announcement" class="py-3 bg-dark bg-pattern @@classList">
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
    <top-nav-classic />
    <banner-classic />
    <bottom-navigation />
  </div>
</template>

<script>
import TopNavClassic from '../components/TopNavClassic'
import BottomNavigation from '../components/BottomNavigation'
import BannerClassic from '../components/BannerClassic'

export default {
  name: 'Index-Classic',
  data: () => ({}),
  components: {
    TopNavClassic,
    BottomNavigation,
    BannerClassic
  }
}
</script>

<style>
.fade {
  transition: opacity 0.2s ease-in-out;
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.card-bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 0.25rem);
  height: 100%;
  display: inline-block;
  transition: all 0.5s ease-in-out;
  transition-property: transform;
}
.card:hover .card-bg-img {
  transform: translateX(-0.5rem);
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

/* v-app styling */
.v-application a {
  color: #111;
}
#banner .btn-dark,
#new-arrivals .btn-dark {
  color: #fff;
  background-color: #1f1f1f;
  border-color: #1f1f1f;
}

#lookbook .v-application {
  max-height: 650px;
}
#lookbook .v-application a {
  text-decoration: none;
  color: #111;
  background-color: transparent;
}

/* Column styling */
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
}
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
.col-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
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
  .col-sm-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
}
@media (min-width: 768px) {
  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-md-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
}
@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
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

/* banner styling */
.link-underline {
  position: relative;
  display: inline-block;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-weight: 500;
  color: #111;
}
.link-underline::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-bottom: 1px solid;
  transform-origin: left center;
  transition: all 0.2s ease-in-out;
  transition-property: left;
}

.v-application .display-1 {
  font-size: 6.875rem !important;
  font-weight: 500;
  line-height: 1.2;
}

#banner #app {
  max-height: 500px;
}

/* container styling */
@media (min-width: 992px) {
  #category-list #topSellersTab .v-slide-group__prev {
    margin-right: 6rem !important;
  }
  #category-list #topSellersTab .v-slide-group__next {
    margin-left: 6rem !important;
  }
}
</style>
