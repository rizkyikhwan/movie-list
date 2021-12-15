<template>
  <div class="container">
    <h1 class="h2">Upcoming</h1>
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="upcoming in upcomings" :key="upcoming.id">
        <CardUpcoming :upcoming="upcoming" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upcomings: [],
      swiperOption: {
        spaceBetween: 10,
        breakpoints: {
          576: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
  async fetch() {
    await this.getUpcoming()
  },
  methods: {
    async getUpcoming() {
      const data = await this.$axios.$get(
        `/movie/upcoming?api_key=${process.env.apiKey}&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      this.upcomings = data.results.slice(0, 10)
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  color: $color-primary;
  font-size: 16px;
  text-decoration: underline;
}

.swiper-pagination {
  position: relative;
}

.swiper-container-horizontal .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 0;
}
</style>