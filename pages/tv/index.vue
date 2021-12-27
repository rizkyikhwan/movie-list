<template>
  <main class="tv-series">
    <div class="container">
      <div class="row mb-4 mb-md-5">
        <div class="col-lg-4 mb-4 mb-md-0 order-1">
          <TvDiscover />
        </div>
        <div class="col-lg-8 mb-4 mb-md-0 order-lg-2">
          <TvOnAir />
        </div>
      </div>
      <TvTrending />
      <TvCategory />
      <TvAll />
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'TV Series - Latest Series Info',
    }
  }
}
</script>

<style lang="scss" scoped>
.tv-series {
  padding-top: 95px;
}

@media (max-width: $md) {
  .tv-series {
    padding-top: 10px;
  }
}
</style>