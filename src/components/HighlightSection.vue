<template>
  <div class="highlights" id="highlights">
    <h1>Highlights</h1>
    <div class="highlights-container">
      <!-- <div class="highlight-item" v-for="(item, index) in highlights">

      </div> -->
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
          image: "",
          alt: "Fusion Magazine logo",
          link: "https://fusionmagazine.jp/magazine-posts/salena-metreger",
        },
        {
          title: "Colorado WebFest Finalist",
          image: "",
          alt: "Colorado Webfest Competition logo",
          link: "",
        },
        {
          title: "2026 Influential Women",
          image: "",
          alt: "Influential Women magazine article featuring a headshot of Voiceover Artist Salena Metreger",
          link: "",
        },
      ]
    }
  }
}

</script>
<style lang="scss">
  .highlight-container {
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
  }
</style>