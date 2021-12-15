<template>
  <div class="card-trending">
    <img
      :src="`${$config.poster}/${trending.poster_path}`"
      :alt="trending.title"
      class="img-fluid shadow poster"
    />
    <div
      class="
        info
        d-flex
        flex-column
        align-items-start
        justify-content-center
        mt-1
        p-1
      "
    >
      <h6 v-if="trending.title" class="title mb-1 font-weight-bold">
        {{ trending.title.slice(0, 30) }}
        <span v-if="trending.title.length > 30">...</span>
      </h6>
      <h6 v-else class="title mb-1 font-weight-bold">
        {{ trending.name.slice(0, 30) }}
        <span v-if="trending.name.length > 30">...</span>
      </h6>
      <small :class="trending.media_type === 'tv' ? 'text-uppercase' : 'text-capitalize'">({{ trending.media_type }})</small>
      <p class="rating mb-1">
        <fa icon="star" class="star" /> {{ trending.vote_average }} ({{
          trending.vote_count
        }})
      </p>
      <small v-if="trending.release_date">{{ getDate(trending.release_date) }}</small>
      <small v-else>{{ getDate(trending.first_air_date) }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ['trending'],
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
.card-trending {
  position: relative;

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
  .card-trending .title {
    font-size: .9rem;
  }
}
</style>