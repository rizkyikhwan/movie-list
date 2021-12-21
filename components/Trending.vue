<template>
  <section class="trending mb-5">
    <h1 class="title">Trending Movies</h1>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="chose-trending" @change="$fetch">
        <input v-model.lazy="query" value="week" type="radio" id="trending-1" class="d-none" />
        <input v-model.lazy="query" value="day" type="radio" id="trending-2" class="d-none" />
        <label for="trending-1" class="trending-1">
          <span>This Week</span>
        </label>
        <label for="trending-2" class="trending-2">
          <span>Today</span>
        </label>
      </div>
      <div class="wrap-navigation d-none d-md-flex">
        <button id="prev-trending" class="btn-nav d-flex align-items-center bg-transparent">
          <fa icon="chevron-left" class="icon-nav" />
        </button>
        <button id="next-trending" class="btn-nav d-flex align-items-center bg-transparent">
          <fa icon="chevron-right" class="icon-nav" />
        </button>
      </div>
    </div>
    <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="trending in trendings" :key="trending.id">
          <NuxtLink :to="{name: 'movies-id', params: { id: trending.id }}" class="link">
            <CardMovie :movie="trending" />
          </NuxtLink>
        </swiper-slide>
    </swiper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      trendings: [],
      query: 'week',
      swiperOption: {
        spaceBetween: 10,
        slidesPerView: 2,
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 10,
          }
        },
        navigation: {
          nextEl: '#next-trending',
          prevEl: '#prev-trending'
        }
      },
    }
  },
  async fetch() {
    await this.getTrending()
  },
  methods: {
    async getTrending() {
      const response = await this.$axios.$get(
        `/trending/movie/${this.query}?api_key=${process.env.apiKey}`
      )
      this.trendings = response.results
    },
  },
}
</script>

<style lang="scss" scoped>
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

.chose-trending {
  display: inline-block;
  background: $bg-card;
  border-radius: $rounded;
  filter: drop-shadow(0 0 2px $color-secondary);
}

@for $i from 1 through 2 {
  .trending-#{$i} {
    border-radius: $rounded;
    cursor: pointer;
    padding: 5px 10px;
    margin-bottom: 0;
    transition: .3s ease-in-out;
  }
}

@for $i from 1 through 2 {
  #trending-#{$i}:checked:checked ~ .trending-#{$i} {
    border-radius: $rounded;
    color: $toggle-text;
    background: $color-secondary;
    filter: drop-shadow(0 0 2px $color-secondary);
    transition: .3s ease-in-out;
  }
}

.swiper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr));
  padding: 5px 15px 0px 0px;
  z-index: 0;


  .link {
    color: $color-primary;
    text-decoration: none;
  }
}

@media (max-width: $sm) {
  .title {
    font-size: 1.25rem;
  }
}
</style>