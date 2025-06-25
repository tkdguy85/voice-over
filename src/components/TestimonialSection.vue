<template>
  <div class="testimonials" id="testimonials">
    <h1>Testimonials</h1>
    
    <!-- Testimonial 1 -->
    <p class="testimonial">
      "Every project comes out great and often early. She’s always doing more than we expect and that’s why we keep coming back to her!”
    </p>
    <p class="attribute">- Alex Stankus, Black Horizon Brewing Owner </p>

    <!-- Testimonial 2 -->
    <p class="testimonial">
      “Every time I hear her voice, it’s like a warm hug.” 
    </p>
    <p class="attribute">– Stacy Berro, Voice Artist</p>


    <!-- <p class="testimonial">
      "She is a very gifted actress with unique vocal qualities. I would have no hesitation recommending Salena to any project. She would be an asset to any production she was cast in." 
    </p>
    <p class="attribute">- Bunny - Del Mar Media Arts</p> -->
    
    <!-- Testimonial 3 -->
    <p class="testimonial">
      "Salena is so cool. I love to see physication and visual acting. It is so important. I will certainly remember Ms. Salena." 
    </p>
    <p class="attribute">- Jonathan M J - Performance Production</p>
    
    <!-- Testimonial 4 -->
    <p class="testimonial">
      "Took direction well. A bright, young, even child-like voice. I hear her having a future in animation." 
    </p>
    <p class="attribute">- Mike S - Beard Boy Productions</p>
  </div>
</template>

<style lang="scss">
  .testimonial {
    font-weight: bold;
    font-size: 16px;
    width: 60%;
    
    @media (max-width: 800px) {
      width: 80%;
    }
  }

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
</style>