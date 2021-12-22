<template>
  <section id="top-category" class="pt-6">
    <div class="container-fluid px-3 px-md-6">
      <div class="row mx-n3">
        <div class="col-12 col-sm-4 d-flex flex-column px-3">
          <!-- Card-->
          <div class="card card-xl mb-3 mb-sm-0" style="min-height: 280px">
            <!-- Background -->
            <div class="card-bg">
              <div
                class="card-bg-img bg-cover"
                :style="{
                  'background-image': `url(${require('@/assets/img/products/product-22.jpg')})`,
                  height: '100%'
                }"
              ></div>
            </div>

            <!-- Body -->
            <div class="card-body my-auto">
              <!-- Heading -->
              <h5 class="mb-0">Summer Hats</h5>

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
        <div class="col-12 col-sm-4 d-flex flex-column px-3">
          <!-- Card-->
          <div class="card card-xl mb-3 mb-sm-0" style="min-height: 280px">
            <!-- Background -->
            <div class="card-bg">
              <div
                class="card-bg-img bg-cover"
                :style="{
                  'background-image': `url(${require('@/assets/img/products/product-23.jpg')})`,
                  height: '100%'
                }"
              ></div>
            </div>

            <!-- Body -->
            <div class="card-body my-auto">
              <!-- Heading -->
              <h5 class="mb-0">Men Hats</h5>

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
        <div class="col-12 col-sm-4 d-flex flex-column px-3">
          <!-- Card-->
          <div class="card card-xl bg-cover bg-hover" style="min-height: 280px">
            <!-- Background -->
            <div class="card-bg">
              <div
                class="card-bg-img bg-cover"
                :style="{
                  'background-image': `url(${require('@/assets/img/products/product-24.jpg')})`,
                  height: '100%'
                }"
              ></div>
            </div>

            <!-- Body -->
            <div class="card-body my-auto">
              <!-- Heading -->
              <h5 class="mb-0">Floral Dresses</h5>

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
  name: 'TopCategory',
  data: () => ({})
}
</script>

<style>
/* top category styling */
#top-category .card:hover .card-bg-img {
  /* transform: translateX(-0.5rem); */
  /* left: -10px; */
  width: calc(100%);
}
</style>
