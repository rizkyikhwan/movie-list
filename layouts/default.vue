<template>
  <main>
    <Navbar />
    <Nuxt
      keep-alive
      :keep-alive-props="{
        exclude: [
          'Pagination',
          'pages/search.vue',
          'pages/movie/category.vue',
          'pages/movie/all-movies.vue',
          'pages/tv/category.vue',
          'pages/tv/all-series.vue'
        ]
      }"
    />
    <Footer />
  </main>
</template>

<script>
export default {}
</script>

<style>
</style>