<template>
  <div id="top-navigation">
    <nav class="navbar navbar-expand-xl navbar-light @@classList">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarClassicCollapse">
          <ul class="navbar-nav">
            <li
              class="nav-item dropdown hovered"
              v-for="(item, i) in menu"
              :key="i"
            >
              <a class="nav-link" :href="item.link">{{ item.text }}</a>
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
            <li class="nav-item ml-lg-n4">
              <a class="nav-link" data-toggle="modal" href="#modalShoppingCart">
                <span data-cart-items="2">
                  <i class="fa fa-shopping-cart"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopNavigation',
  data: () => ({
    menu: [
      {
        link: '#!',
        text: 'Home'
      },
      {
        link: '#!',
        text: 'Catalog'
      },
      {
        link: '#!',
        text: 'Shop'
      },
      {
        link: '#!',
        text: 'Pages'
      },
      {
        link: '#!',
        text: 'Blog'
      },
      {
        link: './docs/getting-started.html',
        text: 'Docs'
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
    ]
  })
}
</script>

<style scoped>
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
}
.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link {
  font-weight: 500;
  outline: 0;
  box-shadow: none;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}
.navbar-light .navbar-brand {
  color: #111;
}
.navbar-brand {
  font-weight: 300;
}
.navbar-brand {
  display: inline-block;
  font-size: 1.75rem;
  line-height: inherit;
  white-space: nowrap;
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
/* .dropdown {
  display: inline-block;
} */

.dropdown,
.dropleft,
.dropright,
.dropup {
  position: relative;
}

/* .dropdown-toggle,
.dropright-toggle {
  overflow: hidden;
} */

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}
</style>
