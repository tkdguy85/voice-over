<template>
  <div class="recents" id="samples">
    <h1>Samples</h1>
    
    <div class="sample-container">
      <div class="voiceover-container">
        <!-- Clip 1 -->
        <div class="voiceover-clip">
          <p>Social Media Reel</p>
          <audio controls class="audio-sample">
            <source src='../audio/social_media_reel.mp3' type="audio/mpeg">
          </audio>
        </div>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/social_media_reel.mp3')" download>Download Social Media Reel Here</a>
        
        <!-- Clip 2 -->
        <div class="voiceover-clip">
          <p>Commercial Sample</p>
          <audio controls class="audio-sample">
            <source src='../audio/bhbc_sample.wav' type="audio/mpeg">
          </audio>
        </div>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/bhbc_sample.wav')" download>Download Commercial Sample Here</a>
        
        <!-- Clip 3 -->
        <div class="voiceover-clip">
          <p>Character Sample</p>
          <audio controls class="audio-sample">
            <source src='../audio/shanti_sample.mp3' type="audio/mpeg">
          </audio>
        </div>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/shanti_sample.mp3')" download>Download Character Sample Here</a>
        
        <!-- Clip 4 -->
        <div class="voiceover-clip">
          <p>Explainer Sample</p>
          <audio controls class="audio-sample">
            <source src='../audio/weiser_sample.mp3' type="audio/mpeg">
          </audio>
        </div>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/weiser_sample.mp3')" download>Download Explainer Sample Here</a>

        <!-- Clip 5 -->
        <div class="voiceover-clip">
          <p>Narration Romance</p>
          <audio controls class="audio-sample">
            <source src='../audio/narration_romance.mp3' type="audio/mpeg">
          </audio>
        </div>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/narration_romance.mp3')" download>Download Narration Romance Here</a>
      </div>

      <div class="voiceover-container">
        <!-- Clip 6 -->
        <div class="voiceover-clip">
          <p>Narration SciFi</p>
          <audio controls class="audio-sample">
            <source src='../audio/narration_scifi.mp3' type="audio/mpeg">
          </audio>
        </div>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/narration_scifi.mp3')" download>Download Narration SciFi Here</a>
        
        <!-- Clip 7 -->
        <div class="voiceover-clip">
          <p>Narration Southern</p>
          <audio controls class="audio-sample">
            <source src='../audio/narration_southern.mp3' type="audio/mpeg">
          </audio>
        </div>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/narration_southern.mp3')" download>Download Narration Southern Here</a>
        
        <!-- Clip 8 -->
        <div class="voiceover-clip">
          <p>Phone Tree</p>
          <audio controls class="audio-sample">
            <source src='../audio/phone_tree.mp3' type="audio/mpeg">
          </audio>
        </div>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/phone_tree.mp3')" download>Download Phone Tree Here</a>

        <!-- Clip 9 -->
        <div class="voiceover-clip">
          <p>Audio Drama Emotional</p>
          <audio controls class="audio-sample">
            <source src='../audio/audiodrama_emotional.mp3' type="audio/mpeg">
          </audio>
        </div>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/audiodrama_emotional.mp3')" download>Download Audio Drama Emotional Here</a>

        <!-- Clip 10 -->
        <div class="voiceover-clip">
          <p>Audio Drama Playful</p>
          <audio controls class="audio-sample">
            <source src='../audio/audiodrama_playful.mp3' type="audio/mpeg">
          </audio>
        </div>
        <a v-if="!isChrome" class="audio-download" :href="require('../audio/audiodrama_playful.mp3')" download>Download Audio Drama Playful Here</a>
      </div>


      <!-- Video/Audio Clip -->
      <div class="video-container">
        <div class="video-clip">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/xTlXnvjjcSU?si=LDvgBwd9rANJkRDK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
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
  .sample-container {
    display: flex;
    flex-direction: column;
    
    .audio-sample {
      padding: 10px 0;
    }

    @media (min-width: 1400px) {
      flex-direction: row;
      gap: 50px;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    @media (min-width: 1660px) {
      justify-content: space-between;
    }

    .voiceover-container + .voiceover-container {
      padding-bottom: 50px;
      
      @media (min-width: 1400px) {
        padding-bottom: 0;
      }
    }

    .voiceover-clip {
      padding-bottom: 10px;
    }

    .audio-download {
      text-decoration: none;
      color: #fff;
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 20px;
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

  .video-container {
    iframe, video {
      width: 100%;
      height: 100%;

      @media (min-width: 600px) {
        width: 545px;
        height: 315px;
      }
    }
  }
</style>