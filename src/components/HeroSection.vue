<template>
  <div class="hero-container">
    <div class="link">
      <div class="portrait-container">
        <img class="portrait" src="../assets/studio-shot.jpg" alt="Self portrait in studio">
      </div>

      <p>Work with me and let my voices bring some extra life to your projects! Let's go!</p>
    </div>
  </div>
</template>

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