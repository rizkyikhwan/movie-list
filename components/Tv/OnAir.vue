<template>
  <section class="on-air">
    <h1 class="title">On Airing</h1>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="show in on_air" :key="show.id">
        <CardNowPlaying :now_playing="show" />
      </swiper-slide>
      <div id="tv-series" class="swiper-pagination" slot="pagination"></div>
    </swiper>
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
      this.on_air = response.results.slice(0, 10)
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