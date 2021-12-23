<template>
  <div class="row info-detail">
    <div class="col-lg-10 mb-4 mb-md-0">
      <div class="grid-detail mb-3">
        <div class="overview">
          <h5 class="title font-weight-bold">Overview</h5>
          <p class="text-justify">{{ movie.overview }}</p>
        </div>
        <div class="row">
          <div v-for="crew in crews" :key="crew.id" class="col-6 col-md-3">
            <h5 class="title font-weight-bold">{{ crew.job }}</h5>
            <p>{{ crew.name }}</p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h5 class="title font-weight-bold">Cast</h5>
        <div class="wrap-navigation d-none d-md-flex">
          <button id="prev-cast" class="btn-nav d-flex align-items-center bg-transparent">
            <fa icon="chevron-left" class="icon-nav" />
          </button>
          <button id="next-cast" class="btn-nav d-flex align-items-center bg-transparent">
            <fa icon="chevron-right" class="icon-nav" />
          </button>
        </div>
      </div>
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="actor in actors" :key="actor.id">
          <CardCast :actor="actor" />
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
    <div class="col-lg-2 grid-info">
      <div>
        <h5 class="title font-weight-bold">Status</h5>
        <p>{{ movie.status }}</p>
      </div>
      <div>
        <h5 class="title font-weight-bold">Release Date</h5>
        <p>{{ getRelease(movie.release_date) }}</p>
      </div>
      <div>
        <h5 class="title font-weight-bold">Language</h5>
        <p
          class="mb-0"
          v-for="(language, index) in movie.spoken_languages"
          :key="index"
        >
          {{ language.english_name }}
        </p>
      </div>
      <div>
        <h5 class="title font-weight-bold">Duration</h5>
        <p class="mb-0">
          {{ duration(movie.runtime) }}
        </p>
        <span>({{ movie.runtime }} Minutes)</span>
      </div>
      <div>
        <h5 class="title font-weight-bold">Budget</h5>
        <p>
          {{ currency(movie.budget) }}
        </p>
      </div>
      <div>
        <h5 class="title font-weight-bold">Revenue</h5>
        <p>
          {{ currency(movie.revenue) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie', 'crews', 'actors'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
          576: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 25,
          }
        },
        navigation: {
          nextEl: '#next-cast',
          prevEl: '#prev-cast'
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        }
      },
    }
  },
  methods: {
    duration(value) {
      let hour = Math.floor(value / 60)
      let minute = Math.round((value / 60 - hour) * 60)
      return value ? `${hour}h ${minute}m` : ''
    },
    currency(value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value)
    },
    getRelease(value) {
      return new Date(value).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.info-detail {
  font-size: calc(12px + .5vmin);
}

.grid-info {
  display: grid;
  gap: 17px;
}

.grid-detail {
  display: grid;
  gap: 1rem;
}

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

@media (max-width: $lg) {
  .grid-info {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: $sm) {
  .title {
    font-size: 1rem;
  }
}
</style>