<template>
  <div class="card-discover">
    <img :src="`${$config.banner}/${discover.backdrop_path}`" :alt="discover.title" class="img-fluid shadow poster">
      <div class="info">
        <h6 v-if="discover.title" class="title mb-n1">
          {{ discover.title.slice(0, 25) }}
          <span v-if="discover.title.length > 25">...</span>
        </h6>
        <h6 v-else class="title mb-n1">
          {{ discover.name.slice(0, 25) }}
          <span v-if="discover.name.length > 25">...</span>
        </h6>
        <small v-if="discover.release_date" class="font-weight-light">{{ getDate(discover.release_date) }}</small>
        <small v-else class="font-weight-light">{{ getDate(discover.first_air_date) }}</small>
      </div>
      <small class="rating shadow">
      <fa icon="star" class="star" /> {{ discover.vote_average }}
    </small>
  </div>
</template>

<script>
export default {
  props: ['discover'],
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
.card-discover {
  position: relative;
  color: $text-white;
  
  &:hover .title{
    color: $color-secondary;
    filter: drop-shadow(0 0 1px $color-secondary);
    transition: .2s ease-out;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 60%;
    bottom: 0;
    left: 0;
    border-radius: 0 0 $rounded $rounded;
    background-image: linear-gradient(transparent 5%, black);
  }
  
  .poster {
    border-radius: $rounded;
  }

  .info {
    position: absolute;
    bottom: 5px;
    left: 10px;

    .title {
      font-weight: 600;
      letter-spacing: 1.25px;
      font-size: .75rem;
    }
  }

  .rating {
    position: absolute;
    top: 0;
    right: 0;
    padding: 3px 6px;
    border-radius: 0 $rounded 0 $rounded;
    background: #414850;
    filter: drop-shadow(0 0 1px #414850);
  }

  .star {
    color: #fcda5f;
  }
}

@media (max-width: $lg) {
  .card-discover:hover .title {
    color: $color-primary;
    filter: none;
  }
}
</style>