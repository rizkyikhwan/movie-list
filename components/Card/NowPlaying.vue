<template>
  <div class="card-now-playing">
    <img
      :src="`${$config.banner}/${now_playing.backdrop_path}`"
      :alt="now_playing.title"
      class="img-fluid banner"
    />
    <div class="info d-flex flex-column align-items-start">
      <h6 v-if="now_playing.title" class="title font-weight-bold mb-1">
        {{ now_playing.title.slice(0, 25) }}
        <span v-if="now_playing.title.length > 25">...</span>
      </h6>
      <h6 v-else class="title font-weight-bold mb-1">
        {{ now_playing.name.slice(0, 25) }}
        <span v-if="now_playing.name.length > 25">...</span>
      </h6>
      <small v-if="now_playing.release_date" class="font-weight-light mb-2">
        {{
          getRelease(now_playing.release_date)
        }}
      </small>
      <small v-else class="font-weight-light mb-2">
        {{
          getRelease(now_playing.first_air_date)
        }}
      </small>
    </div>
    <small class="rating shadow">
      <fa icon="star" class="star" /> {{ now_playing.vote_average }}
    </small>
  </div>
</template>

<script>
export default {
  props: ['now_playing'],
  methods: {
    getRelease(value) {
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
.card-now-playing {
  position: relative;
  text-align: center;
  color: $text-white;

  &:hover .title {
    color: $color-secondary;
    filter: drop-shadow(0 0 1px $color-secondary);
    transition: .2s ease-in-out;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: $rounded ;
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  }

  .banner {
    border-radius: $rounded;
  }

  .title {
    letter-spacing: 1.25px;
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 14px;
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
}

.star {
  color: #fcda5f;
}
</style>
