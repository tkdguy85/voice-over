<template>
  <div class="voiceover-clip-container">       
    <h2>My Demos</h2>

    <!-- First Clip 1 -->
    <div class="voiceover-clip">
      <p>Commercial</p>
      <audio controls class="audio-sample">
        <source src='../audio/com_demo_1.mp3' type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
    
    <!-- Second Clip 1 -->
    <div class="voiceover-clip">
      <p>Commercial</p>
      <audio controls class="audio-sample">
        <source src='../audio/com_demo_2.mp3' type="audio/mpeg">
      </audio>
    </div>
    
    <!-- Third Clip 1 -->
    <div class="voiceover-clip">
      <p>Narration</p>
      <audio controls class="audio-sample">
        <source src='../audio/nar_demo_1.mp3' type="audio/mpeg">
      </audio>
    </div>
    
    <!-- Fourth Clip 1 -->
    <div class="voiceover-clip">
      <p>Animation</p>
      <audio controls class="audio-sample">
        <source src='../audio/anim_demo.mp3' type="audio/mpeg">
      </audio>
    </div>

  </div>
</template>

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
      align-items: center;
      justify-content: space-between;

      @media (max-width: 600px) {
        display: block;
      }
    }
  }
</style>