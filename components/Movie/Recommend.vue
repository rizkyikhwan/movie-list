<template>
  <div class="recommend-mov my-3">
    <div class="d-flex justify-content-between">
      <h5 class="font-weight-bold title">Recommendation Movies</h5>
      <div class="wrap-navigation d-none d-md-flex">
        <button id="prev-recommend" class="btn-nav d-flex align-items-center bg-transparent">
          <fa icon="chevron-left" class="icon-nav" />
        </button>
        <button id="next-recommend" class="btn-nav d-flex align-items-center bg-transparent">
          <fa icon="chevron-right" class="icon-nav" />
        </button>
      </div>
    </div>
    <swiper v-if="recommended.length" :options="swiperOption" class="swiper">
      <swiper-slide v-for="(recommend, index) in recommended" :key="index">
        <NuxtLink :to="{name: 'movies-id', params: {id: recommend.id}}" class="link">
          <CardMovie :movie="recommend" />
        </NuxtLink>
      </swiper-slide>
    </swiper>
    <p v-else>No recommendation yet :(</p>
  </div>
</template>

<script>
export default {
  props: ['recommended'],
  data() {
    return {
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
          nextEl: '#next-recommend',
          prevEl: '#prev-recommend'
        }
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  letter-spacing: 1px;
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

  .link {
    color: $color-primary;
    text-decoration: none;
  }
}

@media (max-width: $sm) {
  .title {
    font-size: 1rem;
  }
}
</style>