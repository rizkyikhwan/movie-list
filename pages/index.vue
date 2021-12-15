<template>
  <section class="upcoming">
    <Upcoming />
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
.upcoming {
  padding-top: 80px;
}
@media (max-width: $md) {
  .upcoming {
    padding-top: 10px;
  }
}

</style>
