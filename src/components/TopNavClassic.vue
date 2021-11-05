<template>
  <div id="top-nav-classic">
    <nav class="navbar navbar-expand-xl navbar-light @@classList">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarClassicCollapse">
          <ul class="navbar-nav">
            <li
              class="nav-item dropdown hovered"
              v-for="(item, i) in menu"
              :key="i"
              :class="{
                'dropdown hovered': item.text === 'Docs',
                'position-static': item.isStatic
              }"
            >
              <a class="nav-link" :href="item.link">{{ item.text }}</a>

              <!-- dropdown menu section -->
              <!-- OF `Home`, `Pages`, `Blog` -->
              <div
                class="dropdown-menu"
                v-if="
                  item.text === 'Home' ||
                  item.text === 'Pages' ||
                  item.text === 'Blog'
                "
              >
                <div class="card card-lg">
                  <div class="card-body">
                    <ul class="list-styled font-size-sm">
                      <li
                        class="list-styled-item"
                        v-for="(opt, j) in item.list"
                        :key="j"
                      >
                        <a class="list-styled-link" :href="opt.href">{{
                          opt.option
                        }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- OF `Catalog` -->
              <div class="dropdown-menu w-100" v-if="item.text === 'Catalog'">
                <div class="card card-lg">
                  <div class="card-body">
                    <div class="container">
                      <div class="row">
                        <div
                          class="col-4 col-md"
                          v-for="(tab, j) in item.listByCategory"
                          :key="j"
                        >
                          <!-- Heading -->
                          <div class="mb-5 font-weight-bold">
                            {{ tab.heading }}
                          </div>

                          <!-- Links -->
                          <ul class="list-styled mb-0 font-size-sm">
                            <li
                              class="list-styled-item"
                              v-for="(opt, k) in tab.options"
                              :key="k"
                            >
                              <a class="list-styled-link" :href="opt.href">{{
                                opt.option
                              }}</a>
                            </li>
                          </ul>
                        </div>
                        <div class="d-none d-md-flex flex-column col-md-3">
                          <!-- Card -->
                          <div
                            class="card mb-7 bg-cover"
                            style="min-height: 150px"
                          >
                            <!-- Background -->
                            <div class="card-bg">
                              <div
                                class="card-bg-img bg-cover"
                                :style="{
                                  'background-image': `url(${require('@/assets/img/products/product-2.jpg')})`,
                                  height: '100%',
                                  width: '100%'
                                }"
                              ></div>
                            </div>

                            <!-- Body -->
                            <div class="card-body my-auto px-7">
                              <a
                                class="
                                  stretched-link
                                  font-weight-bold
                                  text-body
                                "
                                href="./shop.html"
                              >
                                Men's Shirts
                              </a>
                            </div>
                          </div>

                          <!-- Card -->
                          <div class="card bg-cover" style="min-height: 150px">
                            <!-- Background -->
                            <div class="card-bg">
                              <div
                                class="card-bg-img bg-cover"
                                style="
                                  background-image: url(assets/img/products/product-3.jpg);
                                "
                              ></div>
                            </div>

                            <!-- Body -->
                            <div class="card-body my-auto px-7">
                              <a
                                class="
                                  stretched-link
                                  font-weight-bold
                                  text-body
                                "
                                href="./shop.html"
                              >
                                Floral Dresses
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="d-none d-md-flex flex-column col-md-3">
                          <!-- Card -->
                          <div class="card bg-cover" style="min-height: 330px">
                            <!-- Background -->
                            <div class="card-bg">
                              <div
                                class="card-bg-img bg-cover"
                                style="
                                  background-image: url(@/assets/img/products/product-111.jpg);
                                "
                              ></div>
                            </div>

                            <!-- Body -->
                            <div class="card-body my-auto text-center">
                              <a
                                class="stretched-link text-white"
                                href="./shop.html"
                              >
                                <h1
                                  class="mb-1 font-weight-bolder text-uppercase"
                                >
                                  50% off
                                </h1>
                                <h6>Women’s Watches</h6>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- OF `Shop` -->
              <div
                class="dropdown-menu"
                style="min-width: 650px"
                v-if="item.text === 'Shop'"
              >
                <div class="card card-lg">
                  <div class="card-body">
                    <div class="row">
                      <div class="col" v-for="(tab, i) in item.list" :key="i">
                        <!-- Heading -->
                        <div
                          class="mb-5 font-weight-bold"
                          v-if="tab.col[0].heading !== null"
                        >
                          {{ tab.col[0].heading }}
                        </div>

                        <!-- Links -->
                        <ul class="list-styled mb-7 font-size-sm">
                          <li
                            class="list-styled-item"
                            v-for="(opt, j) in tab.col[0].options"
                            :key="j"
                          >
                            <a class="list-styled-link" :href="opt.href">{{
                              opt.option
                            }}</a>
                          </li>
                        </ul>

                        <!-- Heading -->
                        <div
                          class="mb-5 font-weight-bold"
                          v-if="tab.col[1].heading !== null"
                        >
                          {{ tab.col[1].heading }}
                        </div>

                        <!-- Links -->
                        <ul class="list-styled mb-7 font-size-sm">
                          <li
                            class="list-styled-item"
                            v-for="(opt, j) in tab.col[1].options"
                            :key="j"
                          >
                            <a class="list-styled-link" :href="opt.href">{{
                              opt.option
                            }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <a
            class="navbar-brand mx-auto d-none d-xl-block"
            href="./overview.html"
          >
            Shopper.
          </a>
          <ul class="navbar-nav nav-divided">
            <li class="nav-item dropdown hovered">
              <!-- Toggle -->
              <a
                class="nav-link text-body dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                aria-expanded="true"
                >United States</a
              >

              <!-- Menu -->
              <div class="dropdown-menu">
                <div class="card card-lg">
                  <div class="card-body">
                    <ul class="list-styled font-size-sm">
                      <li
                        class="list-styled-item"
                        v-for="(item, i) in regions"
                        :key="i"
                      >
                        <a class="list-styled-link" href="item.link">
                          {{ item.text }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown hovered">
              <!-- Toggle -->
              <a
                class="nav-link text-body dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                aria-expanded="false"
                >USD</a
              >

              <!-- Menu -->
              <div class="dropdown-menu">
                <div class="card card-lg">
                  <div class="card-body">
                    <ul class="list-styled font-size-sm">
                      <li
                        class="list-styled-item"
                        v-for="(item, i) in exchangeRate"
                        :key="i"
                      >
                        <a class="list-styled-link" href="item.link">
                          {{ item.text }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown hovered">
              <!-- Toggle -->
              <a
                class="nav-link text-body dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                aria-expanded="false"
                >EN</a
              >

              <!-- Menu -->
              <div class="dropdown-menu">
                <div class="card card-lg">
                  <div class="card-body">
                    <ul class="list-styled font-size-sm">
                      <li
                        class="list-styled-item"
                        v-for="(item, i) in languages"
                        :key="i"
                      >
                        <a class="list-styled-link" href="item.link">
                          {{ item.text }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a class="nav-link" data-toggle="modal" href="#modalSearch">
                <i class="fa fa-search"></i>
              </a>
            </li>
            <li class="nav-item ml-lg-n4">
              <a class="nav-link" href="./account-orders.html">
                <i class="fa fa-user"></i>
              </a>
            </li>
            <li class="nav-item ml-lg-n4">
              <a class="nav-link" href="./account-wishlist.html">
                <i class="fa fa-heart"></i>
              </a>
            </li>
            <li class="nav-item ml-lg-n4" @click.stop="showShoppingCart = true">
              <a class="nav-link" href="#modalShoppingCart">
                <span data-cart-items="2">
                  <i class="fa fa-shopping-cart"></i>
                </span>
              </a>
              <cart v-model="showShoppingCart" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Cart from '../components/Cart'

export default {
  name: 'TopNavClassic',
  data: () => ({
    menu: [
      {
        link: '#!',
        text: 'Home',
        list: [
          { option: 'Default', href: './index.html' },
          { option: 'Classic', href: './index-classic.html' },
          { option: 'Fashion', href: './index-fashion.html' },
          { option: 'Boxed', href: './index-boxed.html' },
          { option: 'Simple', href: './index-simple.html' },
          { option: 'Asymmetric', href: './index-asymmetric.html' },
          { option: 'Sidenav', href: './index-sidenav.html' },
          { option: 'Landing', href: './index-landing.html' }
        ],
        isStatic: false
      },
      {
        link: '#!',
        text: 'Catalog',
        listByCategory: [
          {
            heading: 'Women',
            options: [
              {
                option: 'Clothing',
                href: './shop.html'
              },
              {
                option: 'Shoes',
                href: './shop.html'
              },
              {
                option: 'Dresses',
                href: './shop.html'
              },
              {
                option: 'Bags',
                href: './shop.html'
              },
              {
                option: 'Accessories',
                href: './shop.html'
              },
              {
                option: 'Sunglasses',
                href: './shop.html'
              },
              {
                option: 'Denim',
                href: './shop.html'
              },
              {
                option: 'Boots',
                href: './shop.html'
              },
              {
                option: 'Jewelry',
                href: './shop.html'
              }
            ]
          },
          {
            heading: 'Men',
            options: [
              {
                option: 'Clothing',
                href: './shop.html'
              },
              {
                option: 'Shoes',
                href: './shop.html'
              },
              {
                option: 'Coats & Jackets',
                href: './shop.html'
              },
              {
                option: 'Bags',
                href: './shop.html'
              },
              {
                option: 'Accessories',
                href: './shop.html'
              },
              {
                option: 'Sunglasses',
                href: './shop.html'
              },
              {
                option: 'Denim',
                href: './shop.html'
              },
              {
                option: 'Sneakers',
                href: './shop.html'
              },
              {
                option: 'Watches',
                href: './shop.html'
              }
            ]
          },
          {
            heading: 'Kids',
            options: [
              {
                option: 'Clothing',
                href: './shop.html'
              },
              {
                option: 'Shoes',
                href: './shop.html'
              },
              {
                option: 'Accessories',
                href: './shop.html'
              },
              {
                option: 'Sunglasses',
                href: './shop.html'
              },
              {
                option: 'Denim',
                href: './shop.html'
              },
              {
                option: 'Boots',
                href: './shop.html'
              }
            ]
          }
        ],
        isStatic: true
      },
      {
        link: '#!',
        text: 'Shop',
        list: [
          {
            col: [
              {
                heading: 'Shop',
                options: [
                  {
                    option: 'Default',
                    href: './shop.html'
                  },
                  {
                    option: 'Topbar',
                    href: './shop-topbar.html'
                  },

                  {
                    option: 'Collapse',
                    href: './shop-collapse.html'
                  },
                  {
                    option: 'Simple',
                    href: './shop-simple.html'
                  },
                  {
                    option: 'Masonry',
                    href: './shop-masonry.html'
                  }
                ]
              },
              {
                heading: 'Product',
                options: [
                  {
                    option: 'Default',
                    href: './product.html'
                  },
                  {
                    option: 'Images Left',
                    href: './product-images-left.html'
                  },

                  {
                    option: 'Image Grid',
                    href: './product-image-grid.html'
                  },
                  {
                    option: 'Image Slider',
                    href: './product-image-slider.html'
                  },
                  {
                    option: 'Images Stacked',
                    href: './product-images-stacked.html'
                  }
                ]
              }
            ]
          },
          {
            col: [
              {
                heading: 'Support',
                options: [
                  {
                    option: 'Shopping Cart',
                    href: './shopping-cart'
                  },
                  {
                    option: 'Checkout',
                    href: './checkout.html'
                  },

                  {
                    option: 'Order Completed',
                    href: './order-completed.html'
                  },
                  {
                    option: 'Shipping & Returns',
                    href: './shipping-and-returns.html'
                  }
                ]
              },
              {
                heading: 'Account',
                options: [
                  {
                    option: 'Order',
                    href: './account-order.html'
                  },
                  {
                    option: 'Orders',
                    href: './account-orders.html'
                  },

                  {
                    option: 'Wishlist',
                    href: './account-wishlist.html'
                  },
                  {
                    option: 'Personal Info',
                    href: './account-personal-info.html'
                  },
                  {
                    option: 'Addresses',
                    href: './account-addresses.html'
                  },
                  {
                    option: 'Addresses: New',
                    href: './account-addresses-edit.html'
                  }
                ]
              }
            ]
          },
          {
            col: [
              {
                heading: null,
                options: [
                  {
                    option: 'Payment',
                    href: './account-Payment.html'
                  },
                  {
                    option: 'Payment: New',
                    href: './account-payment-edit.html'
                  },

                  {
                    option: 'Payment: Choose',
                    href: './account-payment-choose.html'
                  },
                  {
                    option: 'Auth',
                    href: './auth.html'
                  }
                ]
              },
              {
                heading: 'Modals',
                options: [
                  {
                    option: 'Newsletter: Horizontal',
                    href: '#modalNewsletterHorizontal'
                  },
                  {
                    option: 'Newsletter: Vertical',
                    href: '#modalNewsletterHorizontal'
                  },

                  {
                    option: 'Product',
                    href: '#modalProduct'
                  },
                  {
                    option: 'Search',
                    href: '#modalSearch'
                  },
                  {
                    option: 'Shopping Cart',
                    href: '#modalShoppingCart'
                  },
                  {
                    option: 'Size Chart',
                    href: '#modalSizeChart'
                  },
                  {
                    option: 'Wait List',
                    href: '#modalWaitList'
                  }
                ]
              }
            ]
          }
        ],
        isStatic: false
      },
      {
        link: '#!',
        text: 'Pages',
        list: [
          { option: 'About', href: './about.html' },
          { option: 'Contact Us', href: './contact-us.html' },
          { option: 'Store Locator', href: './store-locator.html' },
          { option: 'FAQ', href: './faq.html' },
          { option: 'Coming Soon', href: './coming-soon.html' },
          { option: '404', href: './404.html' }
        ],
        isStatic: false
      },
      {
        link: '#!',
        text: 'Blog',
        list: [
          { option: 'Blog', href: './blog.html' },
          { option: 'Blog Post', href: './blog-post.html' }
        ],
        isStatic: false
      },
      {
        link: './docs/getting-started.html',
        text: 'Docs',
        isStatic: false
      }
    ],
    regions: [
      {
        href: '#!',
        text: 'United States'
      },
      {
        href: '#!',
        text: 'Canada'
      },
      {
        href: '#!',
        text: 'Germany'
      }
    ],
    exchangeRate: [
      { href: '#', text: 'USD' },
      { href: '#', text: 'EUR' }
    ],
    languages: [
      { href: '#', text: 'English' },
      { href: '#', text: 'French' },
      { href: '#', text: 'German' }
    ],
    showShoppingCart: false
  }),
  components: {
    Cart
  }
}
</script>

<style scoped>
/* // logo // */
.navbar-brand {
  display: inline-block;
  font-size: 1.75rem;
  line-height: inherit;
  white-space: nowrap;
}
.navbar-brand {
  font-weight: 600;
}
.navbar-light .navbar-brand {
  color: #111;
}

ul.navbar-nav {
  display: flex;
  flex-direction: row;
}
.navbar-light .navbar-nav .nav-link {
  color: #111;
}
.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: #ff6f61;
}
</style>
