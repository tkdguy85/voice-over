<template>
  <div class="highlights" id="highlights">
    <h1>Highlights</h1>
    <div class="highlights-container">
      <div class="highlight-item" v-for="(item, index) in highlights" :key="index">
        <div class="highlight-image_wrapper">
          <img class="highlight-image" :src="item.image" :alt="item.alt">
        </div>
        <div class="highlight-content">
          <p class="highlight-title">{{ item.title }}</p>
          <a class="highlight-link" :href="item.link" v-if="item.link" target="_blank">Read More Here</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      highlights: [
        {
          title: "Fusion Magazine Featured Voice Artist",
          image: require("../assets/highlights/fusion-logo.png"),
          alt: "Fusion Magazine logo",
          link: "https://fusionmagazine.jp/magazine-posts/salena-metreger",
        },
        {
          title: "Colorado WebFest Finalist",
          image: require("../assets/highlights/laurel-col-webfest.png"),
          alt: "Colorado Webfest Competition logo",
          link: "",
        },
        {
          title: "2026 Influential Women",
          image: require("../assets/highlights/influential-women-salena.png"),
          alt: "Influential Women magazine article featuring a headshot of Voiceover Artist Salena Metreger",
          link: "",
        },
      ]
    }
  }
}
</script>
<style lang="scss">
  .highlights-container {
    display: grid;
    width: 100%;
    gap: 30px;
    text-align: center;

    @media (min-width: 1100px) {
      gap: 40px;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1300px) {
      gap: 50px;
      grid-template-columns: repeat(3, 1fr);
    }

    .highlight-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      margin-top: 50px;
      height: 100%;

      @media (min-width: 1100px) {
        justify-content: space-between;
        margin-top: 30px;
      }
      
      @media (min-width: 1300px) {
        margin-top: 0;
      }

      .highlight-image_wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        max-width: 300px;
        object-position: center;
        flex: 1;

        @media (min-width: 1100px) {
          max-width: 400px;
        }
        
        @media (min-width: 1300px) {
          max-width: 500px;
        }

        img {
          width: 100%;
          object-fit: cover;
        }
      }
      
      
      .highlight-content {
        margin-top: 50px;
      }
      
      .highlight-link {
        text-decoration: none;
        color: lightskyblue;
        transition: transform 0.3s ease;
        
        &:hover {
          color: white;
        }
      }   
    }
  }
</style>