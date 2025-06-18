<template>
  <div class="hero-container">
    <div class="link">

      <v-carousel height="400px" hide-delimiters>
        <v-carousel-item 
          v-for="(photo, index) in carouselPhotos" :key="index">
          <div class="portrait-container">
            <img class="portrait" :src="photo.src" :alt="photo.alt">
          </div>
        </v-carousel-item>
      </v-carousel>
      
      <p>Work with me and let my voices bring some extra life to your projects! Let's go!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselPhotos: [
        { 
          src: require('../assets/carousel/studio-shot.jpg'), 
          alt: 'Self portrait in studio' 
        },
        { 
          src: require('../assets/carousel/in-the-studio.jpg'), 
          alt: 'Salena in a studio booth' 
        },
        { 
          src: require('../assets/carousel/model-shot.jpg'), 
          alt: 'Model pose in black and white' 
        },
        { 
          src: require('../assets/carousel/headshot-side.png'), 
          alt: 'Salena\'s headshot' 
        },
        { 
          src: require('../assets/carousel/studio-pro.jpg'), 
          alt: 'Salena smiling in a studio booth' 
        }
      ]
    };
  }
}
</script>

<style lang="scss">
  .hero-container {
    text-align: center;
    padding-bottom: 50px;
    
    p {
      padding-top: 20px;
    }

    .portrait-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 20px 0;

      @media (max-width: 1200px) {
        flex-direction: column;
      }
      
      .portrait {
        height: 100%;
        max-width: 600px;
        width: 80vw;
        border-radius: 20%;
      }
    }
  }
</style>