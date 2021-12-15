<template>
  <div class="wrapper">
    <img
      :src="`${$config.backdropImg}/${upcoming.backdrop_path}`"
      :alt="upcoming.title"
      class="img-fluid banner"
    />
    <div class="info d-flex flex-column align-items-start">
      <p class="title font-weight-bolder mb-0">
        {{ upcoming.title.slice(0, 25) }}
        <span v-if="upcoming.title.length > 25">...</span>
      </p>
      <small class="font-weight-light mb-2">
        {{
          getRealease(upcoming.release_date)
        }}
      </small>
    </div>
    <small class="rating shadow">
      <fa icon="star" /> {{ upcoming.vote_average }}
    </small>
  </div>
</template>

<script>
export default {
  props: ['upcoming'],
  methods: {
    getRealease(value) {
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
.wrapper {
  position: relative;
  text-align: center;
  color: white;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0 0 $rounded $rounded ;
    background-image: linear-gradient(transparent, black);
  }

  .banner {
    border-radius: $rounded;
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
    background: $color-secondary;
    filter: drop-shadow(0 0 1px $color-secondary);
  }
}
</style>
