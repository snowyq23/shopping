<template>
  <div>
    <!-- /consider changing to v-navigation-drawer -->
    <v-dialog
      id="modalShoppingCart"
      class="modal"
      v-model="show"
      transition="scroll-x-reverse-transition"
      max-width="470px"
      scrollable
      fullscreen
    >
      <v-card
        class="modal-dialog modal-dialog-vertical"
        role="document"
        id="shoppingCart"
      >
        <!-- Full cart (add `.d-none` to disable it) -->
        <div class="modal-content" v-if="cart.length !== 0">
          <!-- Close -->
          <button type="button" class="close" @click.stop="show = false">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>

          <!-- Header-->
          <div class="modal-header line-height-fixed font-size-lg">
            <strong class="mx-auto">Your Cart (2)</strong>
          </div>

          <!-- List group -->
          <ul class="list-group list-group-lg list-group-flush">
            <li class="list-group-item" v-for="(item, i) in cart" :key="i">
              <div class="row align-items-center">
                <div class="col-4">
                  <!-- Image -->
                  <a :href="item.link">
                    <img
                      class="img-fluid"
                      :src="require(`@/assets/img/products/${item.image}.jpg`)"
                      alt="..."
                    />
                  </a>
                </div>
                <div class="col-8">
                  <!-- Title -->
                  <p class="font-size-sm font-weight-bold mb-6">
                    <a class="text-body" :href="item.link">{{ item.name }}</a>
                    <br />
                    <span class="text-muted">{{ item.price }}</span>
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
            class="modal-footer line-height-fixed font-size-sm bg-light mt-auto"
          >
            <strong>Subtotal</strong> <strong class="ml-auto">$89.00</strong>
          </div>

          <!-- Buttons -->
          <div class="modal-body">
            <a class="btn btn-block btn-dark" href="./checkout.html"
              >Continue to Checkout</a
            >
            <a class="btn btn-block btn-outline-dark" href="./shopping-cart"
              >View Cart</a
            >
          </div>
        </div>

        <!-- Empty cart (remove `.d-none` to enable it) -->
        <div class="modal-content d-none" v-if="cart.length === 0">
          <!-- Close -->
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click.stop="show = false"
          >
            <i class="fa fa-x" aria-hidden="true"></i>
          </button>

          <!-- Header-->
          <div class="modal-header line-height-fixed font-size-lg">
            <strong class="mx-auto">Your Cart (0)</strong>
          </div>

          <!-- Body -->
          <div class="modal-body flex-grow-0 my-auto">
            <!-- Heading -->
            <h6 class="mb-7 text-center">Your cart is empty 😞</h6>

            <!-- Button -->
            <a class="btn btn-block btn-outline-dark" href="#!">
              Continue Shopping
            </a>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data: () => ({
    cart: [
      {
        name: 'Cotton floral print Dress',
        link: './product.html',
        image: 'product-6',
        price: '$40.00'
      },
      {
        name: 'Suede cross body Bag',
        link: './product.html',
        image: 'product-10',
        price: '$49.00'
      },
      {
        name: 'Suede cross body Bag',
        link: './product.html',
        image: 'product-10',
        price: '$49.00'
      },
      {
        name: 'Suede cross body Bag',
        link: './product.html',
        image: 'product-10',
        price: '$49.00'
      },
      {
        name: 'Suede cross body Bag',
        link: './product.html',
        image: 'product-10',
        price: '$49.00'
      }
    ]
  }),
  props: {
    value: Boolean
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style>
/* shopping cart styling */
/* // dialog // */
.v-dialog {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1050;
  width: 100%;
  max-width: 470px;
  height: 100%;
  overflow: hidden;
  outline: 0;
  margin-left: auto;
}

/* // modal // */
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 0 solid rgba(17, 17, 17, 0.2);
  outline: 0;
}
.modal-content > * {
  flex-shrink: 0;
}
.modal-dialog-vertical .modal-content {
  height: inherit;
  overflow-y: auto;
}
/* // header // */
:not(.toast-header):not(.alert) > .close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1030;
  display: inline-flex;
}
.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e5e5e5;
}
.modal-header {
  padding: 1.5rem 2rem;
}
.line-height-fixed {
  line-height: 1.5rem !important;
}

/* // list of cart items // */
.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 1.5rem 1.5rem;
  background-color: transparent;
  border: 1px solid #e5e5e5;
}
.list-group-lg .list-group-item {
  padding: 2rem 2rem;
}
.list-group-flush .list-group-item {
  border: 0;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.modal-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 1.75rem;
  border-top: 1px solid #e5e5e5;
}
.modal-footer {
  justify-content: flex-start;
  padding: 1.5rem 2rem;
  border-width: 0;
}
.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 1.75rem + 2px);
  padding: 0.875rem 3.5rem 0.875rem 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #111;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpolyline fill='none' stroke='%23525252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' points='6 9 12 15 18 9'/%3e%3c/svg%3e")
    no-repeat right 1.5rem center/1rem 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.custom-control-label::before,
.custom-file-label,
.custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
.w-auto {
  width: auto !important;
}
.custom-select-xxs {
  height: calc(1.40625rem + 0.375rem + 2px);
  padding: 0.1875rem 2.5rem 0.1875rem 0.5rem;
  font-size: 0.9375rem;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpolyline fill='none' stroke='%23525252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' points='6 9 12 15 18 9'/%3e%3c/svg%3e")
    no-repeat right 0.5rem center/1rem 1rem;
}
</style>
