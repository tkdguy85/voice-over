<template>
  <div class="testimonials" id="testimonials">
    <h1>Testimonials</h1>
    <div class="testimonial-container">
      <div class="testimonial-item" v-for="(quote, index) in testimonials" :key="index">
        <p class="testimonial-quote">&ldquo;{{ quote.quote }}&rdquo;</p>
        <p class="testimonial-name">{{ quote.name }}</p>
        <p class="testimonial-title">{{ quote.title }}</p>
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
          quote: "Every project comes out great and often early. She's always doing more than we expect and that's why we keep coming back to her",
          name: 'Alex S.',
          title: 'Business Owner'
        },
        {
          quote: "I enjoyed working with Salena. She has great communication and strives to do the best to give you the best possible outcome. I appreciate your work Salena, thank you.",
          name: 'Daniel P.',
          title: 'Video Producer and Video Editor'
        },
        {
          quote: "Working with Salena has been fun and smooth. Great delivery. I strongly recommend her.",
          name: 'Ivar R.',
          title: 'Video Producer'
        },
        {
          quote: "Salena is so cool. I love to see physication and visual acting. It is so important. I will certainly remember Ms. Salena.",
          name: 'Jonathan M.',
          title: 'Performance Productions'
        },
        { 
          quote: "Took direction well. A bright and even child-like voice. I hear her having a future in animation.",
          name: 'Mike S.',
          title: 'Beard Boy Productions'
        },
        { 
          quote: "Every time I hear her voice, it's like a warm hug.",
          name: 'Stacy B.',
          title: 'Voice Artist'
        }
      ]
    }
  }
}

</script>
<style lang="scss">
  .testimonial-container {
    display: grid;
    grid-template-columns: repeat(1fr);
    width: 100%;
    gap: 30px;
    text-align: center;

    @media (min-width: 1100px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1300px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .testimonial-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px 40px;
      border: 1px solid #fff;
      box-shadow: 15px 15px 10px #000;

      @media (min-width: 1100px) {
        min-height: 200px;
        padding: 30px;
      }
      
      @media (min-width: 1300px) {
        padding: 20px;
        min-height: 275px;
      }
      
    }

    .testimonial-quote {
      font-style: italic;
      font-size: 18px;
      padding-bottom: 20px;
    }

    .testimonial-name {
      font-weight: bold;
      font-size: 20px;
    }

    .testimonial-title {
      font-size: 16px;
    }
  }
</style>