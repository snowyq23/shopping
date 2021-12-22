<template>
  <section id="top-product">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <!-- Card -->
          <div class="card card-lg">
            <!-- Circle -->
            <div class="card-circle card-circle-lg card-circle-right">
              <strong
                class="font-size-xs text-decoration-line-through opacity-80"
                >$99.00</strong
              >
              <span class="font-size-h6 font-weight-bold">$59.00</span>
            </div>

            <!-- Image -->
            <img
              class="card-img-top"
              src="@/assets/img/products/product-30.jpg"
              alt="..."
            />

            <!-- Body -->
            <div
              class="
                card-body
                position-relative
                mx-6 mx-lg-11
                mt-n11
                bg-white
                text-center
              "
            >
              <!-- Heading -->
              <h4 class="mb-0">Cropped Trousers</h4>

              <!-- Link -->
              <a
                class="btn btn-link stretched-link px-0 text-reset"
                href="shop.html"
              >
                Shop Now <i class="fa fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <!-- Card -->
          <div class="card card-lg">
            <!-- Circle -->
            <div class="card-circle card-circle-lg card-circle-right">
              <strong
                class="font-size-xs text-decoration-line-through opacity-80"
                >$99.00</strong
              >
              <span class="font-size-h6 font-weight-bold">$59.00</span>
            </div>

            <!-- Image -->
            <img
              class="card-img-top"
              src="@/assets/img/products/product-31.jpg"
              alt="..."
            />

            <!-- Body -->
            <div
              class="
                card-body
                position-relative
                mx-6 mx-lg-11
                mt-n11
                bg-white
                text-center
              "
            >
              <!-- Heading -->
              <h4 class="mb-0">Leather Sneakers</h4>

              <!-- Link -->
              <a
                class="btn btn-link stretched-link px-0 text-reset"
                href="shop.html"
              >
                Shop Now <i class="fa fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopProduct',
  data: () => ({})
}
</script>

<style>
/* top product styling */
.card-circle {
  position: absolute;
  top: 1.25rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: #ff6f61;
  border-radius: 50%;
  color: #fff;
}
.card-circle-lg {
  width: 96px;
  height: 96px;
}
.card-circle-right {
  right: 1.25rem;
}
.card-body .btn > .fa-arrow-right {
  display: inline-block;
  transition: all 0.2s ease-in-out;
  transition-property: transform;
}
.card-body:hover .btn > .fa-arrow-right {
  transform: translateX(50%);
}
.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: '';
  background-color: rgba(0, 0, 0, 0);
}
</style>
