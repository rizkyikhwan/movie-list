<template>
  <div class="footer pt-4 pb-3">
    <img src="/logo/logo-movie.png" alt="logo" class="logo" />
    <p class="pt-3">
      © 2021 <a href="https://github.com/rizkyikhwan">Rizky Ikhwan</a>
    </p>
    <div class="grid-contact">
      <a
        v-for="contact in contacts"
        :key="contact.id"
        :href="contact.link"
        target="___blank"
      >
        <fa :icon="[contact.prefix, contact.icon]" class="icon" />
      </a>
    </div>
    <p class="pt-3"
      >Built with <a href="https://nuxtjs.org/" class="link">Nuxt.js</a> &
      <a href="https://vuejs.org/" class="link">Vue.js</a></p
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          prefix: 'fab',
          icon: 'github',
          link: 'https://github.com/rizkyikhwan',
        },
        {
          prefix: 'fab',
          icon: 'instagram',
          link: 'https://www.instagram.com/rizkykhwan_/',
        },
        {
          prefix: 'fab',
          icon: 'linkedin',
          link: 'https://www.linkedin.com/in/rizkyikhwan/',
        },
        { prefix: 'fas', icon: 'globe', link: 'https://rizkyikhwan.my.id/' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background: $bg-footer;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  .logo {
    max-width: 200px;
    animation: pulse 5s infinite ease;
  }

  p {
    font-size: 14px;
  }

  .grid-contact {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 25px;
    place-items: center;

    .icon {
      font-size: 24px;
      color: $color-primary;
      filter: drop-shadow(0 0 1px $color-secondary);
    }
  }
}

a {
  color: $color-primary;
  text-decoration: underline;
}


@keyframes pulse {
  0%,
  100% {
    filter: drop-shadow(0 0 1px $color-secondary);
  }
  50% {
    filter: drop-shadow(0 0px 4px $color-secondary);
  }
}
</style>