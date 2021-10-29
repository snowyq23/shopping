<template>
  <div>
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
                      <i class="fa fa-x"></i> Remove
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
            <a
              class="btn btn-block btn-outline-dark"
              href="./shopping-cart.html"
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
