<template>
  <section class="browse-by-category mb-5">
    <h1 class="title">Browse By Category</h1>
    <div class="d-flex justify-content-between align-items-end mb-4">
      <div class="grid">
        <select v-model="category" @change="$fetch" class="form-control">
          <option v-for="category in categorys" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
        <NuxtLink :to="{name: 'movie-category', query: { genre: category, page: 1 }}" class="route">View All</NuxtLink>
      </div>
      <div class="wrap-navigation d-none d-md-flex">
        <button id="prev-by-category" class="btn-nav d-flex align-items-center bg-transparent">
          <fa icon="chevron-left" class="icon-nav" />
        </button>
        <button id="next-by-category" class="btn-nav d-flex align-items-center bg-transparent">
          <fa icon="chevron-right" class="icon-nav" />
        </button>
      </div>
    </div>
    <div v-swiper="swiperOption" class="swiper" >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="movie in movies" :key="movie.id">
          <NuxtLink :to="{name: 'movie-id', params: { id: movie.id }}" class="link">
            <Card :show="movie" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      categorys: [],
      category: '28',
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
          nextEl: '#next-by-category',
          prevEl: '#prev-by-category'
        }
      },
    }
  },
  async fetch() {
    await this.getCategory()

    await this.getMovie()
  },
  methods: {
    async getCategory() {
      const response = await this.$axios.$get(`/genre/movie/list?api_key=${process.env.apiKey}&language=en-US`)
      this.categorys = response.genres.filter(genre => genre.name !== 'Documentary')
    },
    async getMovie() {
      const response = await this.$axios.$get(`/discover/movie?api_key=${process.env.apiKey}&language=en-US&with_genres=${this.category}`)
      this.movies = response.results
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.75rem;
}

.form-control {
  max-width: 200px;
  background-color: $bg-select;
  color: $color-primary;
  border: 1px solid $bg-select;
  border-radius: $rounded;
  padding: 0.375rem 0.5rem;

  &:focus {
    box-shadow: none;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: start;
  align-items: center;
  gap: 25px;
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
    font-size: 1.25rem;
  }
}
</style>