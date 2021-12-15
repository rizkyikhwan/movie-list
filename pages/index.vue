<template>
  <main class="home">
    <div class="container">
      <div class="row mb-4 mb-md-5">
        <div class="col-md-8 mb-4 mb-md-0">
          <NowPlaying />
        </div>
        <div class="col-md-4 mb-4 mb-md-0">
          <PopularSeries />
        </div>
      </div>
      <Trending />
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 95px;
}
@media (max-width: $lg) {
  .home {
    padding-top: 10px;
  }
}
</style>
