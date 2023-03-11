<template>
  <div class="logo-container">
    <img class="logo" src="../assets/logo.png" alt="Voice Over Logo">
    <div class="intro-name">
      <h1>Salena Metreger</h1>
      <p>Voice Over Artist</p>   
    </div>
  </div>
  <div class="main-container">
    <div class="contact-container">
      <div class="contact-details">
        <h1>Contact Me:</h1>
        <p>Email logo to</p>
        <a href="mailto:test@email.com">test@email.com</a>
      </div>
      <!-- Message Box to be moved to here -->
      <div class="voiceover-clips">
        <a class="audio-sample" href="#">Sample #1 </a>
        <a class="audio-sample" href="#">Sample #2 </a>
        <a class="audio-sample" href="#">Sample #3 </a>
      </div>
    </div>

    <div class="hero-container">
      <div class="link">
        <img src="../assets/selfie.jpg" alt="Self portrait">
        <p>Work with me and let my voices bring some extra life to your projects! Let's go!</p>
      </div>
    </div>

    <div class="bio-container">
      <div class="about-me">
        <h1>About the Artist</h1>
        <p>Salena Metreger is a talented voice over artist with a dynamic range and a fun personality. A true professional with a background in marketing and business, she understands that each project is a representation of your Brand and Company and she will strive to bring your project to life quickly and professionally. She prides herself on being easy and fun to work with, able to take direction, and always reliable.</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
  img {
    height: 200px;
    border-radius: 20%;
  }
  .logo {
    height: 75px;
  }

  .main-container, .logo-container {
    margin: 10px 200px;
  }

  .hero-container, 
  .bio-container {
    display: flex;
    flex-direction: row;
    text-align: left;

  }

  .logo-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
  }

  .contact-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 50px;
    justify-content: space-between;
  }

  .contact-details {
    text-align: left;
  }

  .voiceover-clips {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .audio-sample {
    padding: 20px;
    color: white;
  }


</style>