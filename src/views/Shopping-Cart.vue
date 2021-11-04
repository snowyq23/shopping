<template>
  <div id="shopping-cart">
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
              <li class="list-group-item" v-for="(item, i) in cart" :key="i">
                <div class="row align-items-center">
                  <div class="col-3">
                    <!-- Image -->
                    <a :href="item.link">
                      <img
                        :src="
                          require(`@/assets/img/products/${item.image}.jpg`)
                        "
                        alt="..."
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col">
                    <!-- Title -->
                    <div class="d-flex mb-2 font-weight-bold">
                      <a class="text-body" :href="item.link">{{ item.name }}</a>
                      <span class="ml-auto">{{ item.price }}</span>
                    </div>

                    <!-- Text -->
                    <p class="mb-7 font-size-sm text-muted" id="productDetail">
                      {{ productDetail(item.details) }}
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
                        <i class="fa fa-times"></i> Remove
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
              <i class="fa fa-arrow-left mr-2"></i> Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <features />

    <!-- FOOTER -->
    <bottom-navigation />
  </div>
</template>

<script>
import TopNavGeneral from '../components/TopNavGeneral.vue'
import Features from '../components/Features.vue'
import BottomNavigation from '../components/BottomNavigation.vue'

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
    ],
    cart: [
      {
        name: 'Cotton floral print',
        link: './product.html',
        image: 'product-6',
        price: '$40.00',
        details: ['Size: M', 'Color: Red']
      },
      {
        name: 'Suede cross body Bag',
        link: './product.html',
        image: 'product-10',
        price: '$49.00',
        details: ['Color: Brown']
      }
    ],
    isBackgroundLight: true
  }),
  methods: {
    productDetail: function (val) {
      if (val.length === 0) {
        return null
      } else if (val.length === 1) {
        return val.toString()
      } else {
        val = val.join('\n')
        return val
      }
    }
  },
  components: {
    TopNavGeneral,
    Features,
    BottomNavigation
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

/* content styling */
#content li {
  margin-top: 0;
  margin-bottom: 0;
}
.list-group-lg .list-group-item {
  padding: 2rem 2rem;
}
/* // product col styling */
.list-group-flush-x .list-group-item {
  padding-left: 0;
  padding-right: 0;
  border-left: none;
  border-right: none;
}
.list-group-flush-x .list-group-item:not(:first-child) {
  border-top: none;
}
/* //price col styling */
.list-group-sm .list-group-item {
  padding: 1.25rem 1.25rem;
}

.list-group-flush-y .list-group-item:first-child {
  padding-top: 0;
  border-top: none;
}
.list-group-flush-y .list-group-item:last-child {
  border-bottom: none;
}

/* button styling */
.btn .fa-arrow-left {
  transition: all 0.2s ease-in-out;
  transition-property: transform;
}
.btn:hover .fa-arrow-left {
  transform: translateX(-20%);
}

/* form styling */
.form-control-sm {
  height: calc(1.5em + 1.625rem + 2px);
  padding: 0.8125rem 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.5;
}
.form-control#cartCouponCode {
  outline-color: #111;
  outline-width: 1px;
}
.btn-dark {
  color: #fff !important;
}
.btn-outline-dark {
  color: #1f1f1f;
  border-color: #1f1f1f;
}
.btn-group-sm > .btn,
.btn-sm {
  padding: 0.8125rem 1.5rem;
  font-size: 0.9375rem;
  line-height: 1.40625rem;
  border-radius: 0;
}
.btn-group-sm > .btn,
.btn-sm {
  height: calc(1.40625rem + 1.625rem + 2px);
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #1f1f1f;
  border-color: #1f1f1f;
}

/* col styling */
@media (min-width: 768px) {
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
}

/* details of cart styling */
#productDetail {
  white-space: pre-line;
}
</style>
