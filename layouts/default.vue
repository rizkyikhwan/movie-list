<template>
  <main>
    <Navbar />
    <Nuxt
      keep-alive
      :keep-alive-props="{
        include: ['pages/index.vue', 'pages/tv/index.vue', 'pages/movie/_id.vue', 'pages/tv/_id.vue']
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