<template>
  <div>
    <!-- NAVBAR -->
    <top-nav-general />

    <!-- BREADCRUMB -->
    <nav id="breadcrumbs" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <v-breadcrumbs
              divider=">"
              :items="breadcrumbs"
              class="py-0 font-size-xs text-gray-400"
            >
              <template v-slot:divider>
                <v-icon size="0.6rem">fas fa-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </div>
        </div>
      </div>
    </nav>

    <!-- CONTENT -->
    <section id="content" class="pt-7 pb-12">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Heading -->
            <h3 class="mb-10 text-center">Shopping Cart</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-7">
            <!-- List group -->
            <ul class="list-group list-group-lg list-group-flush-x mb-6">
              <li class="list-group-item">
                <div class="row align-items-center">
                  <div class="col-3">
                    <!-- Image -->
                    <a href="product.html">
                      <img
                        src="@/assets/img/products/product-6.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col">
                    <!-- Title -->
                    <div class="d-flex mb-2 font-weight-bold">
                      <a class="text-body" href="product.html"
                        >Cotton floral print</a
                      >
                      <span class="ml-auto">$40.00</span>
                    </div>

                    <!-- Text -->
                    <p class="mb-7 font-size-sm text-muted">
                      Size: M <br />
                      Color: Red
                    </p>

                    <!--Footer -->
                    <div class="d-flex align-items-center">
                      <!-- Select -->
                      <select class="custom-select custom-select-xxs w-auto">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                      </select>

                      <!-- Remove -->
                      <a class="font-size-xs text-gray-400 ml-auto" href="#!">
                        <i class="fe fe-x"></i> Remove
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row align-items-center">
                  <div class="col-3">
                    <!-- Image -->
                    <a href="product.html">
                      <img
                        src="@/assets/img/products/product-10.jpg"
                        alt="..."
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col">
                    <!-- Title -->
                    <div class="d-flex mb-2 font-weight-bold">
                      <a class="text-body" href="product.html"
                        >Suede cross body Bag</a
                      >
                      <span class="ml-auto">$49.00</span>
                    </div>

                    <!-- Text -->
                    <p class="mb-7 font-size-sm text-muted">Color: Brown</p>

                    <!--Footer -->
                    <div class="d-flex align-items-center">
                      <!-- Select -->
                      <select class="custom-select custom-select-xxs w-auto">
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                      </select>

                      <!-- Remove -->
                      <a class="font-size-xs text-gray-400 ml-auto" href="#!">
                        <i class="fe fe-x"></i> Remove
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <!-- Footer -->
            <div
              class="row align-items-end justify-content-between mb-10 mb-md-0"
            >
              <div class="col-12 col-md-7">
                <!-- Coupon -->
                <form class="mb-7 mb-md-0">
                  <label
                    class="font-size-sm font-weight-bold"
                    for="cartCouponCode"
                  >
                    Coupon code:
                  </label>
                  <div class="row form-row">
                    <div class="col">
                      <!-- Input -->
                      <input
                        class="form-control form-control-sm"
                        id="cartCouponCode"
                        type="text"
                        placeholder="Enter coupon code*"
                      />
                    </div>
                    <div class="col-auto">
                      <!-- Button -->
                      <button class="btn btn-sm btn-dark" type="submit">
                        Apply
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-12 col-md-auto">
                <!-- Button -->
                <button class="btn btn-sm btn-outline-dark">Update Cart</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 col-lg-4 offset-lg-1">
            <!-- Total -->
            <div class="card mb-7 bg-light">
              <div class="card-body">
                <ul
                  class="
                    list-group
                    list-group-sm
                    list-group-flush-y
                    list-group-flush-x
                  "
                >
                  <li class="list-group-item d-flex">
                    <span>Subtotal</span>
                    <span class="ml-auto font-size-sm">$89.00</span>
                  </li>
                  <li class="list-group-item d-flex">
                    <span>Tax</span>
                    <span class="ml-auto font-size-sm">$00.00</span>
                  </li>
                  <li
                    class="list-group-item d-flex font-size-lg font-weight-bold"
                  >
                    <span>Total</span>
                    <span class="ml-auto font-size-sm">$89.00</span>
                  </li>
                  <li
                    class="
                      list-group-item
                      font-size-sm
                      text-center text-gray-500
                    "
                  >
                    Shipping cost calculated at Checkout *
                  </li>
                </ul>
              </div>
            </div>

            <!-- Button -->
            <a class="btn btn-block btn-dark mb-2" href="checkout.html"
              >Proceed to Checkout</a
            >

            <!-- Link -->
            <a class="btn btn-link btn-sm px-0 text-body" href="shop.html">
              <i class="fe fe-arrow-left mr-2"></i> Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section id="features" class="bg-light py-9">
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

    <!-- FOOTER -->
    <bottom-navigation />
  </div>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation.vue'
import TopNavGeneral from '../components/TopNavGeneral.vue'

export default {
  name: 'Cart',
  data: () => ({
    breadcrumbs: [
      {
        text: 'Classic',
        disabled: false,
        href: 'index-classic.html'
      },
      {
        text: 'Shopping Cart',
        disabled: true,
        href: 'shoppingcart.html'
      }
    ]
  }),
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

/* breadcrumbs styling */
#breadcrumbs a {
  color: #909090 !important;
}
#breadcrumbs li {
  margin-left: 0;
  margin-right: 0;
}
</style>
