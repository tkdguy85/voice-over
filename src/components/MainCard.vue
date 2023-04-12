<template class="page-wrapper">
  <div class="container">
  
    <!-- Upper Logo -->
    <div class="logo-container">
      <img class="logo" src="../assets/logo.png" alt="Voice Over Logo">
      <div class="intro-name">
        <h1>Salena Metreger</h1>
        <p>Voice Over Artist</p>   
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-container">
      
      <!-- Contact And Demo Section -->
      <div class="contact-container">
        <!-- Contact Section -->
        <div class="contact-details">
          <h2>Contact Me:</h2>
          <a class="contact-email" href="mailto:salenamvo@gmail.com">
            <img class="email-logo" src="../assets/email.png" alt="Voice Over Logo">
            <p>salenamvo@gmail.com</p>
          </a>
        </div>
        <!-- TODO: Message Box to be moved to here -->
        
        <!-- Voiceover Section -->
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

      <!-- Main Photo -->
      <div class="hero-container">
        <div class="link">
          <img class="portrait" src="../assets/selfie.jpg" alt="Self portrait">
          <p>Work with me and let my voices bring some extra life to your projects! Let's go!</p>
        </div>
      </div>

      <!-- Biography section -->
      <div class="bio-container">
        <div class="about-me">
          <h1>About the Artist</h1>
          <p>Salena Metreger is a talented voice over artist with a dynamic range and a fun personality. A true professional with a background in marketing and business, she understands that each project is a representation of your Brand and Company and she will strive to bring your project to life quickly and professionally. She prides herself on being easy and fun to work with, able to take direction, and always reliable.</p>
        </div>
        <div class="equipment">
          <h1>Equipment</h1>
          <ul>
            <li>Sound Treated In-Home Studio</li>
            <li>Audio-Technica AT2020 Cardioid Condenser Studio XLR Microphone with Pop Filter</li>
            <li>Beyerdynamic DT 770 PRO Headphones</li>
            <li>Focusrite Scarlett Solo 3rd Gen USB Audio Interface</li>
            <li>Soundforge Audio Studio</li>
            <li>Thinkpad Custom Built Laptop</li>
          </ul>
        </div>
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

<style lang="scss">
  h1 {
    font-size: 34px;
  }

  h2 {
    font-size: 28px;
  }

  p {
    font-size: 20px;
  }

  .portrait {
    height: 100%;
    max-width: 600px;
    width: 80vw;
    border-radius: 20%;
  }

  .logo {
    height: 75px;
  }

  .email-logo {
    height: 36px;
    margin-right: 16px;
  }

  .intro-name {
    h1 {
      text-transform: uppercase;
    }  
  }

  .container {
    @media (max-width: 1000px) {
      margin: 10px 40px;
    }
    margin: 10px 200px;
  }

  .hero-container {
    text-align: center;
    padding-bottom: 50px;
  }

  .bio-container {
    text-align: left;
    padding-bottom: 100px;
    ul {
      padding-inline-start: 20px;
    }
  }

  .logo-container {
    @media (max-width: 800px) {
      display: block;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
  }

  .contact-container {
    @media (max-width: 800px) {
      display: block;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 50px;
    justify-content: space-between;
  }

  .contact-details {
    @media (max-width: 800px) {
      text-align: center;
    }
    text-align: left;
  }

  .contact-email {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: lightskyblue;
    font-size: 26px;
  }

  .voiceover-clip-container {
    @media (max-width: 800px) {
      display: block;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .voiceover-clip {
    @media (max-width: 800px) {
      display: block;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .audio-sample {
    padding: 20px;
    color: white;
  }

</style>