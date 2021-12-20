<template>
  <div class="card-movie">
    <img
      :src="`${$config.poster}/${movie.poster_path}`"
      :alt="movie.title"
      class="img-fluid shadow poster"
    />
    <div
      class="info d-flex flex-column align-items-start justify-content-center mt-1 p-1"
    >
      <h6 v-if="movie.title" class="title mb-1 font-weight-bold">
        {{ movie.title.slice(0, 30) }}
        <span v-if="movie.title.length > 30">...</span>
      </h6>
      <h6 v-else class="title mb-1 font-weight-bold">
        {{ movie.name.slice(0, 30) }}
        <span v-if="movie.name.length > 30">...</span>
      </h6>
      <p class="rating mb-1">
        <fa icon="star" class="star" /> {{ movie.vote_average }} ({{
          movie.vote_count
        }})
      </p>
      <small v-if="movie.release_date">{{ getDate(movie.release_date) }}</small>
      <small v-else>{{ getDate(movie.first_air_date) }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie'],
  methods: {
    getDate(value) {
      return new Date(value).toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card-movie {
  position: relative;

  &:hover .title {
    color: $color-secondary;
    filter: drop-shadow(0 0 1px $color-secondary);
    transition: .2s ease-in-out;
  }

  .poster {
    border-radius: $rounded;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(transparent, black);
    }
  }

  .title {
    max-width: 150px;
    letter-spacing: .5px;
    font-size: .95rem;
  }

  .release {
    font-size: 12px;
    font-weight: 200;
  }

  .rating {
    font-size: 11px;

    .star {
      color: #fcda5f;
    }
  }
}

@media (max-width: $lg) {
  .card-movie .title {
    font-size: .9rem;
  }
}
</style>