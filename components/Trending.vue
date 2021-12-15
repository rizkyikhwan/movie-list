<template>
  <section class="trending">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="title">Trending Movies & TV Series</h1>
      <div class="wrap-navigation d-none d-md-flex">
        <button id="prev" class="btn-nav d-flex align-items-center bg-transparent">
          <fa icon="chevron-left" class="icon-nav" />
        </button>
        <button id="next" class="btn-nav d-flex align-items-center bg-transparent">
          <fa icon="chevron-right" class="icon-nav" />
        </button>
      </div>
    </div>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="trending in trendings" :key="trending.id">
        <CardTrending :trending="trending" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      trendings: [],
      swiperOption: {
        spaceBetween: 10,
        slidesPerView: 2,
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
        navigation: {
          nextEl: '#next',
          prevEl: '#prev'
        }
      },
    }
  },
  async fetch() {
    await this.getTrending()
  },
  methods: {
    async getTrending() {
      const data = await this.$axios.$get(
        `/trending/all/week?api_key=${process.env.apiKey}`
      )
      this.trendings = data.results
    },
  },
}
</script>

<style lang="scss" scoped>
.trending {
  min-height: 100vh;
}

.title {
  font-size: 1.75rem;
}

.wrap-navigation {
  gap: 1.5rem;

  .btn-nav {
    border: 0;
    border-radius: $rounded;
    transition: .2s ease;
  }

  .swiper-button-disabled {
    opacity: 0.25;
  }

  .icon-nav {
    font-size: 1.5rem;
    color: $color-secondary;
    filter: drop-shadow(0 0 2px $color-secondary);
  }
}

.swiper {
  padding: 5px 15px 0px 0px;
  z-index: 0;
}

@media (max-width: $sm) {
  .title {
    font-size: 1.25rem;
  }
}
</style>