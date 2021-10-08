<template>
  <div>
    <nav class="navbar navbar-expand-xl navabar-light">
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
            <v-menu open-on-hover top offset-y>
              <template v-slot:activator="{ on, attrs }">
                <li class="nav-item dropdown hovered">
                  <!-- Toggle -->
                  <a
                    class="nav-link text-body dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    aria-expanded="true"
                    v-bind="attrs"
                    v-on="on"
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
              </template>
            </v-menu>
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
                <!-- <i class="fas fa-search"></i>
               -->
                <font-awesome-icon :icon="['fas', 'search']" />
              </a>
            </li>
            <li class="nav-item ml-lg-n4">
              <a class="nav-link" href="./account-orders.html">
                <font-awesome-icon :icon="['fas', 'user']" />
              </a>
            </li>
            <li class="nav-item ml-lg-n4">
              <a class="nav-link" href="./account-wishlist.html">
                <font-awesome-icon :icon="['fas', 'heart']" />
              </a>
            </li>
            <li class="nav-item ml-lg-n4">
              <a class="nav-link" data-toggle="modal" href="#modalShoppingCart">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" />
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
  name: 'NavigationBar',
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
.navbar .container,
.navbar .container-fluid,
.navbar .container-lg,
.navbar .container-md,
.navbar .container-sm,
.navbar .container-xl {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

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
.dropdown {
  display: inline-block;
}

.dropdown,
.dropleft,
.dropright,
.dropup {
  position: relative;
}

.dropdown-toggle,
.dropright-toggle {
  overflow: hidden;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.flex-row {
  flex-direction: row !important;
}

@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl > .container,
  .navbar-expand-xl > .container-fluid,
  .navbar-expand-xl > .container-lg,
  .navbar-expand-xl > .container-md,
  .navbar-expand-xl > .container-sm,
  .navbar-expand-xl > .container-xl {
    flex-wrap: nowrap;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar:not(.navbar-vertical).navbar-expand-xl .navbar-nav:first-child {
    margin-left: -1rem;
  }
  .navbar:not(.navbar-vertical).navbar-expand-xl .navbar-nav:last-child {
    margin-right: -1rem;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  .navbar-nav .hovered > .dropdown-menu {
    transition: all 0.2s ease-in-out;
    transition-property: visibility, transform, opacity;
  }
  .navbar-nav .dropdown > .dropdown-menu {
    left: 50%;
    transform: translate(-50%, 0.5rem);
  }
  .navbar-nav .dropdown > .dropdown-menu,
  .navbar-nav .dropright > .dropdown-menu {
    display: block !important;
    visibility: hidden;
    transform-origin: top center;
    opacity: 0;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .d-xl-block {
    display: block !important;
  }
}

@media (min-width: 992px) {
  .ml-lg-n4,
  .mx-lg-n4 {
    margin-left: -1rem !important;
  }
}
</style>
