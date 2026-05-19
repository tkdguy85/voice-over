<template>
  <div class="highlights" id="highlights">
    <h1>Highlights</h1>
    <div class="highlights-container">
      <div class="highlight-item" v-for="(item, index) in highlights" :key="index">
        <img class="highlight-image" :src="item.image" :alt="item.alt">
        <div class="highlight-content">
          <p class="highlight-title">{{ item.title }}</p>
          <a class="highlight-link" :href="item.link" v-if="item.link">Read More</a>
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

    .highlight-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 30px 50px;
      border: 1px solid #fff;
      box-shadow: 15px 15px 10px #000;

      img {
        max-width: 300px;
      }

      @media (min-width: 1100px) {
        min-height: 200px;
        padding: 30px;
      }
      
      @media (min-width: 1300px) {
        padding: 20px;
        min-height: 300px;
      }
      
    }
  }
</style>