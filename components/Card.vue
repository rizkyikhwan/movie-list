<template>
  <div class="card-movie">
    <img
      :src="`${$config.poster}/${show.poster_path}`"
      :alt="show.title"
      class="img-fluid shadow poster"
    />
    <div
      class="info d-flex flex-column align-items-start justify-content-center mt-1 p-1"
    >
      <h6 v-if="show.title" class="title mb-1 font-weight-bold">
        {{ show.title.slice(0, 30) }}
        <span v-if="show.title.length > 30">...</span>
      </h6>
      <h6 v-else class="title mb-1 font-weight-bold">
        {{ show.name.slice(0, 30) }}
        <span v-if="show.name.length > 30">...</span>
      </h6>
      <p class="rating mb-1">
        <fa icon="star" class="star" /> {{ show.vote_average }} ({{
          show.vote_count
        }})
      </p>
      <small v-if="show.release_date">{{ getDate(show.release_date) }}</small>
      <small v-else>{{ getDate(show.first_air_date) }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
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