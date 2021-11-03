<template>
  <div id="bottom-navigation">
    <footer
      class="bg-dark bg-cover @@classList"
      :style="{
        'background-image': `url(${require('@/assets/img/patterns/pattern-2.svg')})`
      }"
    >
      <div class="py-12 border-bottom border-gray-700">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-6">
              <!-- Heading -->
              <h5 class="mb-7 text-center text-white">
                Want style Ideas and Treats?
              </h5>

              <!-- Form -->
              <form class="mb-11">
                <div class="form-row align-items-start">
                  <div class="col">
                    <input
                      type="email"
                      class="form-control form-control-gray-700 form-control-lg"
                      placeholder="Enter Email *"
                    />
                  </div>
                  <div class="col-auto">
                    <button type="submit" class="btn btn-gray-500 btn-lg">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <!-- Heading -->
              <h4 class="mb-6 text-white">Shopper.</h4>

              <!-- Social -->
              <ul class="list-unstyled list-inline mb-7 mb-md-0">
                <li class="list-inline-item">
                  <a href="#!" class="text-gray-350">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#!" class="text-gray-350">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#!" class="text-gray-350">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#!" class="text-gray-350">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#!" class="text-gray-350">
                    <i class="fab fa-medium"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-sm">
              <!-- Heading -->
              <h6 class="heading-xxs mb-4 text-white">Support</h6>

              <!-- Links -->
              <ul class="list-unstyled mb-7 mb-sm-0">
                <li>
                  <a class="text-gray-300" href="./contact-us.html"
                    >Contact Us</a
                  >
                </li>
                <li>
                  <a class="text-gray-300" href="./faq.html">FAQs</a>
                </li>
                <li>
                  <a
                    class="text-gray-300"
                    data-toggle="modal"
                    href="#modalSizeChart"
                    >Size Guide</a
                  >
                </li>
                <li>
                  <a class="text-gray-300" href="./shipping-and-returns.html"
                    >Shipping &amp; Returns</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-6 col-sm">
              <!-- Heading -->
              <h6 class="heading-xxs mb-4 text-white">Shop</h6>

              <!-- Links -->
              <ul class="list-unstyled mb-7 mb-sm-0">
                <li>
                  <a class="text-gray-300" href="./shop.html">Men's Shopping</a>
                </li>
                <li>
                  <a class="text-gray-300" href="./shop.html"
                    >Women's Shopping</a
                  >
                </li>
                <li>
                  <a class="text-gray-300" href="./shop.html">Kids' Shopping</a>
                </li>
                <li>
                  <a class="text-gray-300" href="./shop.html">Discounts</a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-sm">
              <!-- Heading -->
              <h6 class="heading-xxs mb-4 text-white">Company</h6>

              <!-- Links -->
              <ul class="list-unstyled mb-0">
                <li>
                  <a class="text-gray-300" href="./about.html">Our Story</a>
                </li>
                <li>
                  <a class="text-gray-300" href="#!">Careers</a>
                </li>
                <li>
                  <a class="text-gray-300" href="#!">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a class="text-gray-300" href="#!"
                    >Privacy &amp; Cookie policy</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-6 col-sm">
              <!-- Heading -->
              <h6 class="heading-xxs mb-4 text-white">Contact</h6>

              <!-- Links -->
              <ul class="list-unstyled mb-0">
                <li>
                  <a class="text-gray-300" href="#!">1-202-555-0105</a>
                </li>
                <li>
                  <a class="text-gray-300" href="#!">1-202-555-0106</a>
                </li>
                <li>
                  <a class="text-gray-300" href="#!">help@shopper.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="py-6">
        <div class="container">
          <div class="row">
            <div class="col">
              <!-- Copyright -->
              <p class="mb-3 mb-md-0 font-size-xxs text-muted">
                © 2019 All rights reserved. Designed by Unvab.
              </p>
            </div>
            <div class="col-auto">
              <!-- Payment methods -->
              <img
                class="footer-payment"
                src="@/assets/img/payment/mastercard.svg"
                alt="..."
              />
              <img
                class="footer-payment"
                src="@/assets/img/payment/visa.svg"
                alt="..."
              />
              <img
                class="footer-payment"
                src="@/assets/img/payment/amex.svg"
                alt="..."
              />
              <img
                class="footer-payment"
                src="@/assets/img/payment/paypal.svg"
                alt="..."
              />
              <img
                class="footer-payment"
                src="@/assets/img/payment/maestro.svg"
                alt="..."
              />
              <img
                class="footer-payment"
                src="@/assets/img/payment/klarna.svg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data: () => ({})
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.align-items-start {
  align-items: flex-start !important;
}
.footer-payment {
  height: 1.5rem;
  width: auto;
}
img.footer-payment {
  vertical-align: middle;
  border-style: none;
  padding: 2px;
}

/* Form styling */
.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
}

.form-row > .col,
.form-row > [class*='col-'] {
  padding-right: 10px;
  padding-left: 10px;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 1.75rem + 2px);
  padding: 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #111;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control-lg {
  height: calc(1.5em + 2.125rem + 2px);
  padding: 1.0625rem 1.875rem;
  font-size: 1rem;
  line-height: 1.5;
}

.form-control-gray-700 {
  background-color: #303030;
  border-color: #303030;
  color: #fff;
}

/* Button styling */
.btn-group-lg > .btn,
.btn-lg {
  padding: 1.0625rem 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 0;
}

.btn {
  height: calc(1.5rem + 1.75rem + 2px);
  white-space: nowrap;
}

.btn-group-lg > .btn,
.btn-lg {
  height: calc(1.5rem + 2.125rem + 2px);
}

.btn-gray-500 {
  background-color: #525252;
  border-color: #525252;
  color: #fff;
}

/* List styling */
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline {
  padding-left: 0;
  list-style: none;
}
.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

/* Hover styling */
.text-gray-300[href]:hover {
  color: #a6a6a6 !important;
}
.text-gray-350[href]:hover {
  color: #909090 !important;
}
.btn-gray-500:focus,
.btn-gray-500:hover {
  background-color: #4c4c4c;
  border-color: #4c4c4c;
  color: #fff;
}

/* Column styling */
/* Note: Repeat to avoid rendering error in pages excluding /index-classic */
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

input[type='email']:focus-visible {
  border-color: transparent;
}
</style>
