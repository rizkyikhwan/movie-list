<template>
  <div class="review">
    <h5 class="font-weight-bold mb-2 title">User Reviews</h5>
    <div v-if="reviews.length" class="grid-reviews">
      <div v-for="review in reviews" :key="review.id" class="review">
        <div class="wrapper">
          <img
            :src="`https://secure.gravatar.com/avatar/${review.author_details.avatar_path}`"
            alt="Profile Review"
            class="img-fluid shadow picture"
          />
          <div class="profile">
            <p class="mb-0">{{ review.author_details.username }}</p>
            <small class="mb-0">
              Rating : <fa icon="star" class="star" />
              {{
                review.author_details.rating ? review.author_details.rating : 0
              }}
              / 10
            </small>
            <small class="d-block">at {{ getCreated(review.created_at) }}</small>
          </div>
        </div>
        <div class="reviewer">
          <p v-if="!readMore[review.id]" class="mt-n3">
            {{ review.content.substring(0, 100) + '...' }}
          </p>
          <p v-if="readMore[review.id]" class="mt-2">{{ review.content }}</p>
          <button @click="showMore(review.id)" v-if="!readMore[review.id]" class="btn-review">Show more</button>
          <button @click="showLess(review.id)" v-if="readMore[review.id]" class="btn-review">Show less</button>
        </div>
      </div>
      <div class="d-flex justify-content-center my-2" v-if="reviews.length < dataLength.length">
        <button class="button" @click="$fetch">Load More</button>
      </div>
    </div>
    <p v-else>No reviews yet :(</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      readMore: {},
      reviews: [],
      dataLength: [],
      limit: 2,
    }
  },
  async fetch() {
    await this.getReview()
  },
  methods: {
    async getReview() {
      const response = await this.$axios.$get(`/movie/${this.$route.params.id}/reviews?api_key=${process.env.apiKey}&language=en-US&page=1`)
      const data = response.results.slice(this.reviews.length, this.reviews.length + this.limit)
      this.reviews.push(...data)
      this.dataLength = response.results
    },
    getCreated(value) {
      return new Date(value).toLocaleString('en-US', {
        localeMatcher: 'lookup'
      })
    },
    showMore(id) {
      this.$set(this.readMore, id, true)
    },
    showLess(id) {
      this.$set(this.readMore, id, false)
    },
  },
}
</script>

<style lang="scss" scoped>
.grid-reviews {
  display: grid;
  row-gap: 25px;
}

.title {
  letter-spacing: 1px;
}

.wrapper {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 10px;

  .picture {
    border-radius: $rounded;
  }
}

.reviewer {
  white-space: pre-line;
  text-align: justify;
  font-size: 14px;

  .btn-review {
    background: $bg-select;
    color: $color-primary;
    border: 0;
    border-radius: $rounded;
    padding: 4px 8px;
  }
}

.star {
  color: #fcda5f;
}

.button {
  padding: 4px 8px;
  border: 0;
  border-radius: $rounded;
  color: $text-black;
  background-image: linear-gradient(35deg, $button-primary, $button-secondary);
  filter: drop-shadow(0 2px 4px $color-secondary);
  gap: .25rem;
}

@media (max-width: $sm) {
  .title {
    font-size: 1rem;
  }
}
</style>