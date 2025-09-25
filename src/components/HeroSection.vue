<template>
  <div class="hero-container">
    <v-carousel 
      progress="#fff" 
      hide-delimiters 
      cycle 
      show-arrows="always"
    >
      <template v-slot:prev="{ props }">
        <v-btn
          color="#000"
          variant="elevated"
          @click="props.onClick"
        >Last photo</v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn
          color="#000"
          variant="elevated"
          @click="props.onClick"
        >Next photo</v-btn>
      </template>
      <v-carousel-item 
        v-for="(photo, index) in carouselPhotos" :key="index">
        <div class="portrait-container">
          <img class="portrait" :src="photo.src" :alt="photo.alt">
        </div>
      </v-carousel-item>
    </v-carousel>
    
    <p class="hero-text">Whatever your goal, I'm here to help you bring it to life.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselPhotos: [
        { 
          src: require('../assets/carousel/studio-shot.png'), 
          alt: 'Self portrait in studio' 
        },
        { 
          src: require('../assets/carousel/in-the-studio.png'), 
          alt: 'Salena in a studio booth' 
        },
        { 
          src: require('../assets/carousel/model-shot.png'), 
          alt: 'Model pose in black and white' 
        },
        { 
          src: require('../assets/carousel/profile-shot.png'), 
          alt: 'Salena\'s head-shot' 
        },
        { 
          src: require('../assets/carousel/studio-selfie.png'), 
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

    .portrait-container {
      align-content: center;
      padding-top: 30px;

      .portrait {        
        max-height: 500px;
        max-width: 500px;
        border-radius: 15%;
        
        @media (max-width: 600px) {
          max-height: 300px;
          max-width: 300px;
        }
      }
    }

    .hero-text {
      @media (max-width: 1000px) {
        padding-top: 30px;
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