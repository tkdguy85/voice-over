<template>
  <div class="voiceover-clip-container">       
    <h2>My Demos</h2>

    <!-- First Clip 1 -->
    <div class="voiceover-clip">
      <p>Commercial</p>
      <div class="voiceover-audio-container">
        <audio controls class="audio-sample">
          <source src='../audio/com_demo.mp3' type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/com_demo.mp3')" download>Download Commercial Here</a>
      </div>
    </div>
    
    <!-- Second Clip 1 -->
    <div class="voiceover-clip">
      <p>Narration</p>
      <div class="voiceover-audio-container">      
        <audio controls class="audio-sample">
          <source src='../audio/nar_demo_1.mp3' type="audio/mpeg">
        </audio>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/nar_demo_1.mp3')" download>Download Narration Here</a>
      </div>
    </div>
    
    <!-- Third Clip 1 -->
    <div class="voiceover-clip">
      <p>Animation</p>
      <div class="voiceover-audio-container">        
        <audio controls class="audio-sample">
          <source src='../audio/anim_demo.mp3' type="audio/mpeg">
        </audio>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/anim_demo.mp3')" download>Download Animation Here</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isChrome: false
    };
  },
  mounted() {
    // Displays the download link only if the browser is not Chrome
    const userAgent = navigator.userAgent.toLowerCase();
    this.isChrome = userAgent.includes('chrome') && !userAgent.includes('edge') && !userAgent.includes('opr');
  },
};
</script>

<style lang="scss">
  .voiceover-clip-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 0;

    @media (max-width: 600px) {
      display: block;
    }

    @media (max-width: 1400px) {
      padding-bottom: 50px;
    }

    .voiceover-clip {
      max-width: 500px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      @media (max-width: 600px) {
        display: block;
      }

      p {
        align-self: center;
      }
    }

    .voiceover-audio-container {
      display: flex;
      flex-direction: column;
    }

    .audio-download {
      text-decoration: none;
      text-align: left;
      color: #fff;
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 20px;
      margin-left: 18px;
      display: inline-block;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 1px;
        background-color: #ddd;
        transition: width 0.5s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }

      &:hover {
        color: #ddd;
      }
    }
  }
</style>