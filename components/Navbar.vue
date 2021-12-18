<template>
  <nav class="d-flex align-items-center py-3 w-100 navbar">
    <div class="container d-flex justify-content-between align-items-center">
      <NuxtLink :to="{ name: 'index' }">
        <img src="/logo/logo-movie.png" alt="logo" class="logo" />
      </NuxtLink>

      <ul class="mb-0 nav-list" :class="isOpen ? 'active' : ''">
        <li class="mx-3 nav-item">
          <NuxtLink :to="{ name: 'index' }" class="link">Movies</NuxtLink>
        </li>
        <li class="mx-3 nav-item">
          <NuxtLink :to="{ name: 'tv-show' }" class="link">TV Series</NuxtLink>
        </li>
        <li class="mx-3 nav-item">
          <div class="d-flex">
            <input
              class="form-control mr-2"
              type="text"
              placeholder="Search..."
            />
            <button class="btn-search">
              <fa icon="search" class="icon" />
            </button>
          </div>
        </li>
        <li class="mx-3 nav-item d-none d-lg-block">
          <button @click="toggleDarkMode" class="btn-mode">
            <span v-if="$colorMode.preference == 'light'">
              <fa icon="sun" />
            </span>
            <span v-else>
              <fa icon="moon" />
            </span>
          </button>
        </li>
      </ul>

      <div class="d-flex d-lg-none align-items-center">
        <button @click="toggleDarkMode" class="btn-mode mr-3">
          <span v-if="$colorMode.preference == 'light'">
            <fa icon="sun" />
          </span>
          <span v-else>
            <fa icon="moon" />
          </span>
        </button>
        <button class="border-0 bg-transparent" @click="toggleNav">
          <div class="menu-bar" :class="isOpen ? 'is-active' : ''">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: null,
    }
  },
  methods: {
    toggleDarkMode() {
      if (this.$colorMode.preference !== 'light') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    },
    toggleNav() {
      this.isOpen = !this.isOpen
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar')
      navbar.classList.toggle('sticky', window.scrollY > 20)
    })
  },
}
</script>

<style lang="scss" scoped>
@media (min-width: $lg) {
  .sticky {
    background: $bg-navbar;
    box-shadow: 0px 10px 15px -15px rgba(0, 0, 0, 0.25);
  }
}

.navbar {
  position: fixed;
  transition: 0.2s ease-in-out;
  z-index: 99;

  .logo {
    width: 90px;
    filter: drop-shadow(0 1px 2px rgba($color: #000, $alpha: 0.5));
  }

  .link {
    color: $color-primary;
    text-decoration: none;
    transition: 0.2s ease-in-out;
  }

  .nuxt-link-exact-active {
    color: $color-secondary;
    transition: 0.2s ease-in-out;
  }

  .nav-list {
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-item {
      list-style: none;

      .form-control {
        background: $form-search;
        border: $border-form;
        color: #6c757d;

        &:focus {
          border-color: $color-secondary;
          filter: drop-shadow(0 0 2px $color-secondary);
          box-shadow: none;
        }
      }

      .btn-search {
        display: inline-block;
        border: 2px solid $color-secondary;
        border-radius: $rounded;
        padding: 0 10px;
        background: none;
        transition: 0.3s ease-in-out;

        &:hover {
          background: $color-secondary;
          filter: drop-shadow(0 0 5px $color-secondary);
        }
      }
    }
  }

  .btn-mode {
    color: #fff;
    padding: 2px 5px;
    border-radius: $rounded;
    border: 1px solid $color-secondary;
    filter: drop-shadow(0 0 5px $color-secondary);
    background: $color-secondary;
  }
}

.icon {
  color: $color-primary;
}

@media (max-width: $lg) {
  .navbar {
    background: $bg-navbar;
    box-shadow: 0px -10px 15px -15px rgba(0, 0, 0, 0.25);
    bottom: 0;
    left: 0;
    z-index: 99;

    .nav-list {
      position: absolute;
      right: 2.5%;
      width: 95%;
      bottom: -250px;
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: $bg-navbar;
      border-radius: $rounded;
      box-shadow: 0px 0px 30px -15px rgba(0, 0, 0, 0.25);
      transition: 0.3s ease-in-out;
      z-index: 98;

      .nav-item {
        width: 91%;
        margin: 10px 0;

        .btn-search {
          display: inline-block;
          border: 2px solid $color-secondary;
          border-radius: $rounded;
          padding: 0 10px;
          background: $color-secondary;
          filter: drop-shadow(0 0 2px $color-secondary);
        }
      }
    }
    .active {
      bottom: 110%;
    }
  }

  .bar {
    display: block;
    border-radius: $rounded;
    width: 25px;
    height: 3px;
    margin: 5px 0 5px auto;
    background: $color-secondary;
    filter: drop-shadow(0 0px 2px $color-secondary);
    transition: 0.3s ease-in-out;

    &:first-child {
      width: 21.5px;
    }

    &:nth-child(2) {
      width: 15.5px;
    }
  }

  .menu-bar.is-active .bar:nth-child(2) {
    opacity: 0;
  }

  .menu-bar.is-active .bar:nth-child(1) {
    width: 25px;
    transform: translateY(8px) rotate(45deg);
  }

  .menu-bar.is-active .bar:nth-child(3) {
    width: 25px;
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>