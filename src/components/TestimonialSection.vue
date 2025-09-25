<template>
  <div class="testimonials" id="testimonials">
    <h1>Testimonials</h1>
    <div class="testimonial-container">
      <div class="testimonial-item" v-for="(photo, index) in testimonials" :key="index">
        <img class="testimonial" :src="photo.src" :alt="photo.alt">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          src: require('../assets/testimonials/alex-quote.png'),
          alt: ''
        },
        {
          src: require('../assets/testimonials/stacy-quote.png'),
          alt: ''
        },
        {
          src: require('../assets/testimonials/jonathan-quote.png'),
          alt: ''
        },
        {
          src: require('../assets/testimonials/mike-quote.png'),
          alt: ''
        },
        { 
          src: require('../assets/testimonials/ivar-quote.png'),
          alt: ''
        },
        { 
          src: require('../assets/testimonials/daniel-quote.png'),
          alt: ''
        }
      ]
    }
  }
}

</script>
<style lang="scss">
  .testimonial-container {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    gap: 20px;
    width: 100%;

    .testimonial-item {
      width: auto;
    }
    
    img {
      object-fit: contain;
      width: 500px;

      @media (min-width: 900px) {
        width: 400px;
      }

      @media (min-width: 1500px) {
        width: 350px;
      }
    }
  }
</style>