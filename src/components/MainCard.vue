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
        <p>Email me at</p>
        <img class="email" src="../assets/email.png" alt="Voice Over Logo">
        <br>
        <a class="contact-email" href="mailto:salenamvo@gmail.com">salenamvo@gmail.com</a>
        <p>Or fill out the contact form below!</p>
      </div>
      <!-- Message Box to be moved to here -->
      
      <div class="voiceover-clip-container">
        
        <h2>My Demos</h2>
        <!-- First Clip 1 -->
        <div class="voiceover-clip">
          <p>Commercial Demo 1</p>
          <audio controls class="audio-sample">
            <source src='../audio/com_demo_1.mp3' type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <!-- Second Clip 1 -->
        <div class="voiceover-clip">
          <p>Commercial Demo 2</p>
          <audio controls class="audio-sample">
            <source src='../audio/com_demo_2.mp3' type="audio/mpeg">
          </audio>
        </div>
        
        <!-- Third Clip 1 -->
        <div class="voiceover-clip">
          <p>Narration Demo 1</p>
          <audio controls class="audio-sample">
            <source src='../audio/nar_demo_1.mp3' type="audio/mpeg">
          </audio>
        </div>
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

<style>
  h1 {
    font-size: 34px;
  }

  p {
    font-size: 24px;
  }

  img {
    height: 400px;
    border-radius: 20%;
  }

  .logo {
    height: 75px;
  }

  .email {
    height: 50px;
  }

  .intro-name {
    text-transform: uppercase;
  }

  .main-container, .logo-container {
    margin: 10px 200px;
  }

  .hero-container {
    text-align: center;
    padding-bottom: 50px;
  }

  .bio-container {
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

  .contact-email {
    text-decoration: none;
    color: lightskyblue;
    font-size: 26px;
  }

  .voiceover-clip-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .voiceover-clip {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .audio-sample {
    padding: 20px;
    color: white;
  }

</style>