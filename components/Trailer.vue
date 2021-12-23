<template>
  <div class="wrap-trailer">
    <iframe
      :src="`${$config.trailer}/embed/${trailer.key}?version=3&enablejsapi=1`"
      frameBorder="0"
      allowFullScreen
      class="trailer shadow"
      />
  </div>
</template>

<script>
export default {
  props: ['trailer']
}
</script>

<style lang="scss" scoped>
.wrap-trailer {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 950px;
  transform: translate(-50%, -50%);
}

.trailer {
  width: 100%;
  aspect-ratio: 16/9;
}
</style>