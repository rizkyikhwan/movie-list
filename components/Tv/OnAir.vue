<template>
  <section class="on-air">
    <h1 class="title">On Airing Today</h1>
    <div class="swiper" v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="show in on_air" :key="show.id">
          <NuxtLink :to="{name: 'tv-id', params: { id: show.id }}">
            <CardNowPlaying :now_playing="show" />
          </NuxtLink>
        </div>
      </div>
      <div id="tv-series" class="swiper-pagination" slot="pagination"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      on_air: [],
      swiperOption: {
        spaceBetween: 10,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '#tv-series',
          clickable: true,
        },
      }
    }
  },
  async fetch() {
    await this.getOnAir()
  },
  methods: {
    async getOnAir() {
      const response = await this.$axios.$get(`tv/airing_today?api_key=${process.env.apiKey}&language=en-US&page=1`)
      this.on_air = response.results.filter(now_play => now_play.backdrop_path != null).slice(0, 10)
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 2rem;
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