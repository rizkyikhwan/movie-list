<template>
  <section class="now-playing">
    <h1 class="title">Now Playing in Theaters</h1>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="now_playing in now_playings" :key="now_playing.id">
        <NuxtLink :to="{name: 'movies-id', params: { id: now_playing.id }}">
          <CardNowPlaying :now_playing="now_playing" />
        </NuxtLink>
      </swiper-slide>
      <div id="movie" class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      now_playings: [],
      swiperOption: {
        spaceBetween: 10,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '#movie',
          clickable: true,
        },
      },
    }
  },
  async fetch() {
    await this.getNowPlaying()
  },
  methods: {
    async getNowPlaying() {
      const response = await this.$axios.$get(
        `/movie/now_playing?api_key=${process.env.apiKey}&language=en-US&page=1`
      )
      this.now_playings = response.results.slice(0, 10)
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 2rem;
}

.link {
  color: $color-primary;
  font-size: 16px;
  text-decoration: underline;
}

.swiper {
  border-radius: $rounded;
}

.swiper-pagination {
  position: relative;
}

.swiper-container-horizontal .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 0;
}

@media (max-width: $sm) {
  .title {
    font-size: 1.25rem;
  }
}
</style>