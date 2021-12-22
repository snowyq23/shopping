<template>
  <section id="blog" class="py-12 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Preheading -->
          <h6 class="heading-xxs mb-3 text-center text-gray-400">Our blog</h6>

          <!-- Heading -->
          <h2 class="mb-10 text-center">Latest in Blog</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4">
          <!-- Card -->
          <div class="card mb-7 shadow shadow-hover lift">
            <!-- Image -->
            <a href="blog-post.html">
              <img
                src="@/assets/img/blog/blog-1.jpg"
                alt="..."
                class="card-img-top"
              />
            </a>

            <!-- Body -->
            <div class="card-body px-8 py-7">
              <!-- Time -->
              <p class="mb-3 font-size-xs">
                <a class="text-muted" href="blog.html"
                  >Fashion / Jun 20, 2019</a
                >
              </p>

              <!-- Heading -->
              <h6 class="mb-0">
                <a class="text-body" href="blog-post.html">
                  Us yielding Fish sea night night the said him two
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <!-- Card -->
          <div class="card mb-7 shadow shadow-hover lift">
            <!-- Image -->
            <a href="blog-post.html">
              <img
                src="@/assets/img/blog/blog-2.jpg"
                alt="..."
                class="card-img-top"
              />
            </a>

            <!-- Body -->
            <div class="card-body px-8 py-7">
              <!-- Time -->
              <p class="mb-3 font-size-xs">
                <a class="text-muted" href="blog.html">Travel / Jun 13, 2019</a>
              </p>

              <!-- Heading -->
              <h6 class="mb-0">
                <a class="text-body" href="blog-post.html">
                  Tree earth fowl given moveth deep lesser After
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <!-- Card -->
          <div class="card mb-7 shadow shadow-hover lift">
            <!-- Image -->
            <a href="blog-post.html">
              <img
                src="@/assets/img/blog/blog-3.jpg"
                alt="..."
                class="card-img-top"
              />
            </a>

            <!-- Body -->
            <div class="card-body px-8 py-7">
              <!-- Time -->
              <p class="mb-3 font-size-xs">
                <a class="text-muted" href="blog.html"
                  >Lifestyle / Jun 08, 2019</a
                >
              </p>

              <!-- Heading -->
              <h6 class="mb-0">
                <a class="text-body" href="blog-post.html">
                  Given Set was without from god divide rule Hath
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <!-- Link -->
          <div class="mt-7 text-center">
            <a class="link-underline" href="blog.html">Discover more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  data: () => ({})
}
</script>

<style>
/* blog styling */
.shadow {
  box-shadow: 0 0.25rem 0.25rem rgba(17, 17, 17, 0.02) !important;
}
.shadow-hover {
  transition: all 0.2s ease-in-out;
  transition-property: box-shadow;
}
.shadow-hover:hover {
  box-shadow: 0 0.25rem 0.25rem rgba(17, 17, 17, 0.02),
    0 0.75rem 2.25rem rgba(17, 17, 17, 0.04) !important;
}
.lift {
  transition: all 0.2s ease-in-out;
  transition-property: transform, box-shadow;
}
.lift:focus,
.lift:hover {
  transform: translateY(-0.25rem);
}
</style>