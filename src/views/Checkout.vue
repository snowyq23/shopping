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
    <section class="pt-7 pb-12">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <!-- Heading -->
            <h3 class="mb-4">Checkout</h3>

            <!-- Subheading -->
            <p class="mb-10">
              Already have an account?
              <a class="font-weight-bold text-reset" href="#!"
                >Click here to login</a
              >
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-7">
            <!-- Form -->
            <form>
              <!-- Heading -->
              <h6 class="mb-7">Billing Details</h6>

              <!-- Billing details -->
              <div class="row mb-9">
                <div
                  class="col-12"
                  v-for="(bill, i) in billingDetails"
                  :key="i"
                  :class="{ 'col-md-6': bill.isHalf }"
                >
                  <!-- First Name -->
                  <div class="form-group">
                    <label :for="bill.labelFor"
                      >{{ bill.labelName }}
                      <spam v-if="bill.isRequired">*</spam></label
                    >
                    <input
                      v-if="bill.isRequired"
                      class="form-control"
                      :class="{ 'form-control-sm': bill.isHalf }"
                      :id="bill.labelFor"
                      :type="bill.type"
                      :placeholder="bill.labelName"
                      required=""
                    />
                    <input
                      v-else
                      class="form-control"
                      :class="{ 'form-control-sm': bill.isHalf }"
                      :id="bill.labelFor"
                      :type="bill.type"
                      :placeholder="bill.labelName"
                    />
                  </div>
                </div>
              </div>

              <!-- Heading -->
              <h6 class="mb-7">Shipping Details</h6>

              <!-- Shipping details -->
              <div class="table-responsive mb-6">
                <table class="table table-bordered table-sm table-hover mb-0">
                  <tbody>
                    <tr v-for="shipping in shippingDetails" :key="shipping.id">
                      <td>
                        <div class="custom-control custom-radio">
                          <input
                            class="custom-control-input"
                            :id="shipping.id"
                            name="shipping"
                            type="radio"
                          />
                          <label
                            class="custom-control-label text-body text-nowrap"
                            :for="shipping.id"
                          >
                            {{ shipping.label }}
                          </label>
                        </div>
                      </td>
                      <td>{{ shipping.time }}</td>
                      <td>{{ shipping.price }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Address -->
              <div class="mb-9">
                <!-- Checkbox -->
                <div class="custom-control custom-checkbox">
                  <input
                    class="custom-control-input"
                    id="checkoutShippingAddress"
                    type="checkbox"
                  />
                  <label
                    class="custom-control-label font-size-sm"
                    data-toggle="collapse"
                    data-target="#checkoutShippingAddressCollapse"
                    for="checkoutShippingAddress"
                  >
                    Ship to a different address?
                  </label>
                </div>

                <!-- Collapse -->
                <div class="collapse" id="checkoutShippingAddressCollapse">
                  <div class="row mt-6">
                    <div class="col-12">
                      <!-- Country -->
                      <div class="form-group">
                        <label for="checkoutShippingAddressCountry"
                          >Country *</label
                        >
                        <input
                          class="form-control form-control-sm"
                          id="checkoutShippingAddressCountry"
                          type="text"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <!-- Address Line 1 -->
                      <div class="form-group">
                        <label for="checkoutShippingAddressLineOne"
                          >Address Line 1 *</label
                        >
                        <input
                          class="form-control form-control-sm"
                          id="checkoutShippingAddressLineOne"
                          type="text"
                          placeholder="Address Line 1"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <!-- Address Line 2 -->
                      <div class="form-group">
                        <label for="checkoutShippingAddressLineTwo"
                          >Address Line 2</label
                        >
                        <input
                          class="form-control form-control-sm"
                          id="checkoutShippingAddressLineTwo"
                          type="text"
                          placeholder="Address Line 2 (optional)"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <!-- Town / City -->
                      <div class="form-group">
                        <label for="checkoutShippingAddressTown"
                          >Town / City *</label
                        >
                        <input
                          class="form-control form-control-sm"
                          id="checkoutShippingAddressTown"
                          type="text"
                          placeholder="Town / City"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <!-- Town / City -->
                      <div class="form-group">
                        <label for="checkoutShippingAddressZIP"
                          >ZIP / Postcode *</label
                        >
                        <input
                          class="form-control form-control-sm"
                          id="checkoutShippingAddressZIP"
                          type="text"
                          placeholder="ZIP / Postcode"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <!-- Button -->
                      <button class="btn btn-sm btn-outline-dark" type="submit">
                        Save Address
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Heading -->
              <h6 class="mb-7">Payment</h6>

              <!-- List group -->
              <div class="list-group list-group-sm mb-7">
                <div class="list-group-item">
                  <!-- Radio -->
                  <div class="custom-control custom-radio">
                    <!-- Input -->
                    <input
                      class="custom-control-input"
                      id="checkoutPaymentCard"
                      name="payment"
                      type="radio"
                      data-toggle="collapse"
                      data-action="show"
                      data-target="#checkoutPaymentCardCollapse"
                    />

                    <!-- Label -->
                    <label
                      class="
                        custom-control-label
                        font-size-sm
                        text-body text-nowrap
                      "
                      for="checkoutPaymentCard"
                    >
                      Credit Card
                      <img
                        class="ml-2"
                        src="@/assets/img/brands/color/cards.svg"
                        alt="..."
                      />
                    </label>
                  </div>
                </div>
                <div
                  class="list-group-item collapse py-0"
                  id="checkoutPaymentCardCollapse"
                >
                  <!-- Form -->
                  <div class="form-row py-5">
                    <div class="col-12">
                      <div class="form-group mb-4">
                        <label class="sr-only" for="checkoutPaymentCardNumber"
                          >Card Number</label
                        >
                        <input
                          class="form-control form-control-sm"
                          id="checkoutPaymentCardNumber"
                          type="text"
                          placeholder="Card Number *"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group mb-4">
                        <label class="sr-only" for="checkoutPaymentCardName"
                          >Name on Card</label
                        >
                        <input
                          class="form-control form-control-sm"
                          id="checkoutPaymentCardName"
                          type="text"
                          placeholder="Name on Card *"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-4">
                      <div class="form-group mb-md-0">
                        <label class="sr-only" for="checkoutPaymentMonth"
                          >Month</label
                        >
                        <select
                          class="custom-select custom-select-sm"
                          id="checkoutPaymentMonth"
                        >
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-4">
                      <div class="form-group mb-md-0">
                        <label class="sr-only" for="checkoutPaymentCardYear"
                          >Year</label
                        >
                        <select
                          class="custom-select custom-select-sm"
                          id="checkoutPaymentCardYear"
                        >
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-4">
                      <div class="input-group input-group-merge">
                        <input
                          class="form-control form-control-sm"
                          id="checkoutPaymentCardCVV"
                          type="text"
                          placeholder="CVV *"
                          required=""
                        />
                        <div class="input-group-append">
                          <span
                            class="input-group-text"
                            data-toggle="popover"
                            data-placement="top"
                            data-trigger="hover"
                            data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards."
                            data-original-title=""
                            title=""
                          >
                            <i class="fe fe-help-circle"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="list-group-item">
                  <!-- Radio -->
                  <div class="custom-control custom-radio">
                    <!-- Input -->
                    <input
                      class="custom-control-input"
                      id="checkoutPaymentPaypal"
                      name="payment"
                      type="radio"
                      data-toggle="collapse"
                      data-action="hide"
                      data-target="#checkoutPaymentCardCollapse"
                    />

                    <!-- Label -->
                    <label
                      class="
                        custom-control-label
                        font-size-sm
                        text-body text-nowrap
                      "
                      for="checkoutPaymentPaypal"
                    >
                      <img
                        src="@/assets/img/brands/color/paypal.svg"
                        alt="..."
                      />
                    </label>
                  </div>
                </div>
              </div>

              <!-- Notes -->
              <textarea
                class="form-control form-control-sm mb-9 mb-md-0 font-size-xs"
                rows="5"
                placeholder="Order Notes (optional)"
              ></textarea>
            </form>
          </div>
          <div class="col-12 col-md-5 col-lg-4 offset-lg-1">
            <!-- Heading -->
            <h6 class="mb-7">Order Items (3)</h6>

            <!-- Divider -->
            <hr class="my-7" />

            <!-- List group -->
            <ul
              class="
                list-group list-group-lg list-group-flush-y list-group-flush-x
                mb-7
              "
            >
              <li class="list-group-item" v-for="(item, i) in cart" :key="i">
                <div class="row align-items-center">
                  <div class="col-4">
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
                    <p class="mb-4 font-size-sm font-weight-bold">
                      <a class="text-body" :href="item.link">{{ item.name }}</a>
                      <br />
                      <span class="text-muted">{{ item.price }}</span>
                    </p>

                    <!-- Text -->
                    <div class="font-size-sm text-muted" id="productDetail">
                      {{ productDetail(item.details) }}
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <!-- Card -->
            <div class="card mb-9 bg-light">
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
                  <li class="list-group-item d-flex">
                    <span>Shipping</span>
                    <span class="ml-auto font-size-sm">$8.00</span>
                  </li>
                  <li
                    class="list-group-item d-flex font-size-lg font-weight-bold"
                  >
                    <span>Total</span> <span class="ml-auto">$97.00</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Disclaimer -->
            <p class="mb-7 font-size-xs text-gray-500">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>

            <!-- Button -->
            <button class="btn btn-block btn-dark">Place Order</button>
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
// import Features from '../components/Features.vue'
// import Features from '../components/Features.vue'
import TopNavGeneral from '../components/TopNavGeneral.vue'
import Features from '../components/Features.vue'
import BottomNavigation from '../components/BottomNavigation.vue'

export default {
  name: 'Checkout',
  data: () => ({
    breadcrumbs: [
      {
        text: 'Classic',
        disabled: false,
        href: 'index-classic'
      },
      {
        text: 'Shopping Cart',
        disabled: true,
        href: 'shoppingcart.html'
      },
      {
        text: 'Checkout',
        disabled: true,
        href: 'checkout'
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
    billingDetails: [
      // First Name
      {
        isHalf: true,
        labelFor: 'checkoutBillingFirstName',
        labelName: 'First Name',
        type: 'text',
        placehold: 'First Name',

        isRequired: true
      },
      // Last Name
      {
        isHalf: true,
        labelFor: 'checkoutBillingLastName',
        labelName: 'Last Name',
        type: 'text',
        placehold: 'Last Name',

        isRequired: true
      },
      // Email
      {
        isHalf: false,
        labelFor: 'checkoutBillingEmail',
        labelName: 'Email',
        type: 'email',
        placehold: 'Email',

        isRequired: true
      },
      // Company Name
      {
        isHalf: false,
        labelFor: 'checkoutBillingCompany',
        labelName: 'Company name',
        type: 'text',
        placehold: 'Company name (optional)',
        isRequired: true
      },
      // Country
      {
        isHalf: false,
        labelFor: 'checkoutBillingCountry',
        labelName: 'Country',
        type: 'text',
        placehold: 'Country',
        isRequired: true
      },
      // Address Line 1
      {
        isHalf: false,
        labelFor: 'checkoutBillingAddress',
        labelName: 'Address Line 1',
        type: 'text',
        placehold: 'Address Line 1',
        isRequired: true
      },
      // Address Line 2
      {
        isHalf: false,
        labelFor: 'checkoutBillingAddressTwo',
        labelName: 'Address Line 2',
        type: 'text',
        placehold: 'Address Line 2 (optional)',
        isRequired: false
      },
      // Town / City
      {
        isHalf: true,
        labelFor: 'checkoutBillingTown',
        labelName: 'Town / City ',
        type: 'text',
        placehold: 'Town / City ',
        isRequired: true
      },
      // ZIP / Postcode
      {
        isHalf: true,
        labelFor: 'checkoutBillingZIP',
        labelName: 'ZIP / Postcode',
        type: 'text',
        placeholder: 'ZIP / Postcode',
        isRequired: true
      },
      // Mobile Phone
      {
        isHalf: true,
        labelFor: 'checkoutBillingPhone',
        labelName: 'Mobile Phone',
        type: 'tel',
        placeholder: 'Mobile Phone',
        isRequired: true
      }
    ],
    shippingDetails: [
      {
        id: 'checkoutShippingStandard',
        label: 'Standard Shipping',
        time: 'Delivery in 5 - 7 working days',
        price: '$8.00'
      },
      {
        id: 'checkoutShippingExpress',
        label: 'Express Shipping',
        time: 'Delivery in 3 - 5 working days',
        price: '$12.00'
      },
      {
        id: 'checkoutShippingShort',
        label: '1 - 2 Shipping',
        time: 'Delivery in 1 - 2 working days',
        price: '$18.00'
      },
      {
        id: 'checkoutShippingFree',
        label: 'Free Shipping',
        time: "Living won't the He one every subdue meat replenish face was you morning firmament darkness.",
        price: '$0.00'
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

<style scoped>
/* details of cart styling */
#productDetail {
  white-space: pre-line;
}
</style>
