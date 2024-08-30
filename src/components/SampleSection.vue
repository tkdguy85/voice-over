<template>
  <div class="recents">
    <h1>Samples</h1>
    
    <div class="sample-container">
      <div class="voiceover-container">
        <!-- Clip 1 -->
        <div class="voiceover-clip">
          <p>Commercial Sample</p>
          <audio controls class="audio-sample">
            <source src='../audio/bhbc_sample.wav' type="audio/mpeg">
          </audio>
        </div>
        
        <!-- Clip 2 -->
        <div class="voiceover-clip">
          <p>Character Sample</p>
          <audio controls class="audio-sample">
            <source src='../audio/shanti_sample.mp3' type="audio/mpeg">
          </audio>
        </div>
        
        <!-- Clip 3 -->
        <div class="voiceover-clip">
          <p>Explainer Sample</p>
          <audio controls class="audio-sample">
            <source src='../audio/weiser_sample.mp3' type="audio/mpeg">
          </audio>
        </div>
      </div>

      <!-- Video/Audio Clip -->
      <div class="video-container">
        <div class="video-clip">
          <video width="560" height="315" controls>
            <source src="../audio/BHBC-7-year-anniv.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .sample-container {
    display: flex;
    flex-direction: column;

    @media (min-width: 1400px) {
      flex-direction: row;
      justify-content: space-between;
    }

    .voiceover-container {
      padding-bottom: 50px;
      
      @media (min-width: 1400px) {
        padding-bottom: 0;
      }
    }
  }
</style>