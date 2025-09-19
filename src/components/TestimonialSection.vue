<template>
  <div class="testimonials" id="testimonials">
    <h1>Testimonials</h1>
    <v-carousel 
      hide-delimiters 
      cycle 
      show-arrows="always"
      class="testimonial-carousel"
      >
      <template v-slot:prev="{ props }">
        <v-btn
          color="#000"
          variant="elevated"
          @click="props.onClick"
        >Last quote</v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn
          color="#000"
          variant="elevated"
          @click="props.onClick"
        >Next quote</v-btn>
      </template>
      <v-carousel-item 
        v-for="(photo, index) in testimonials" :key="index">
        <div class="testimonial-container">
          <img class="testimonial" :src="photo.src" :alt="photo.alt">
        </div>
      </v-carousel-item>
    </v-carousel>
    
    <!-- Testimonial 1 -->
    <!-- <p class="testimonial">
      "Every project comes out great and often early. She’s always doing more than we expect and that’s why we keep coming back to her!”
    </p>
    <p class="attribute">- Alex Stankus, Black Horizon Brewing Owner </p> -->

    <!-- Testimonial 2 -->
    <!-- <p class="testimonial">
      “Every time I hear her voice, it’s like a warm hug.” 
    </p>
    <p class="attribute">– Stacy Berro, Voice Artist</p> -->
    
    <!-- Testimonial 3 -->
    <!-- <p class="testimonial">
      "Salena is so cool. I love to see physication and visual acting. It is so important. I will certainly remember Ms. Salena." 
    </p>
    <p class="attribute">- Jonathan M J - Performance Production</p> -->
    
    <!-- Testimonial 4 -->
    <!-- <p class="testimonial">
      "Took direction well. A bright, young, even child-like voice. I hear her having a future in animation." 
    </p>
    <p class="attribute">- Mike S - Beard Boy Productions</p> -->
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
  .testimonials {
    // .testimonial {
    //   font-weight: bold;
    //   font-size: 16px;
    //   width: 60%;
      
    //   @media (max-width: 800px) {
    //     width: 80%;
    //   }
    // }

    .attribute {
      font-size: 14px;
      margin-left: 30px;
      font-style: italic;
      padding-bottom: 20px;
      width: 60%;

      @media (max-width: 600px) {
        width: 80%;
      }
    }

    .testimonial-carousel {
      height: auto !important;

      .testimonial-container {
        margin: 0;

        img {
          margin-left: auto;
          margin-right: auto;
          display: block;
        }
      }
    }

    .v-window__controls {
      @media (max-width: 1000px) {
        align-items: flex-end;
      }
    }

    .v-carousel .v-window-item,
    .v-carousel .v-window__container {
      transition-duration: 1500ms !important;
      transition-timing-function: cubic-bezier(.4,0,.2,1) !important;
    }

    .v-btn:hover {
      background-color: #333 !important;
      transform: translateY(-1px);
    }
  }
</style>