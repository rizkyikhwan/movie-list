<template>
  <main class="tv-series">
    <div class="container">
      <div class="row mb-4 mb-md-5">
        <div class="col-lg-4 mb-4 mb-md-0">
          <TvDiscover />
        </div>
        <div class="col-lg-8 mb-4 mb-md-0">
          <TvOnAir />
        </div>
      </div>
      <TvTrending />
    </div>
  </main>
</template>

<script>
export default {

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