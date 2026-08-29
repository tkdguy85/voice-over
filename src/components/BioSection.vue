<template>
  <!-- About Section -->
  <div class="about-me" id="about">
    <h1>About the Artist</h1>

    <p>Salena Metreger, based in southern California, is a versatile voice-over artist known for bringing scripts to life with professionalism, creativity, and unmatched energy. With an MBA and a background in marketing, business, and creative writing, she approaches every project with audiences in mind. From warm, inviting tones to young, conversational deliveries to authoritative and knowledgeable, she transitions effortlessly between styles, tailoring each performance to meet client needs. She’s known for her top-tier service, professional reliability, and a lighthearted joy that makes her a favorite among returning clients. Recently, she was featured in Fusion Magazine's voiceover edition in September 2025.
    <br>
    <br>
    Salena’s work ranges from character-driven roles in webtoons and video games to serving as the event voice for <strong><em>Black Horizon Brewing Company</em></strong>. She lends her voice to commercials, product training videos, social media reels, and more.</p> 
  </div>

  <!-- Equipment Section-->
  <div class="equipment">
    <h1>Equipment</h1>
    <ul>
      <li>Sound Treated In-Home Studio</li>
      <li>Sennheiser MK4 Cardioid XLR with Shock Mount and Pop Filter</li>
      <li>Beyerdynamic DT 770 PRO Headphones</li>
      <li>Focusrite Scarlett Solo 3rd Gen USB Audio Interface</li>
      <li>Reaper</li>
      <li>Thinkpad Custom Built Laptop</li>
    </ul>
  </div>
  
  <!-- Podcast Section -->
  <div class="podcast">
    <h1>Podcast</h1>
    <p>Salena is a Colorado Webfest winning producer, writer, director, audio designer, and talent. Taking what she's learned from the Producer chair and applying it to her work as voiceover artist.</p>

    <div class="podcast-links">
      <div class="podcast-logo-block">
        <a href="https://greatvoicepodcast.podbean.com" target="_blank" rel="noopener noreferrer">
          <img class="podcast-logo" src="../assets/great_voice_logo.jpg" alt="Great Voice Podcast Logo">
        </a>
        <p><a href="https://greatvoicepodcast.podbean.com" target="_blank" rel="noopener noreferrer" class="podcast-link">The Great Voice Podcast</a> is an industry show about voiceover where you can listen as host <strong><em>Susan Berkley</em></strong> teaches students how to break down a script and bring it to life as well as hear from industry guests.</p>
      </div>

      <div class="podcast-logo-block">
        <a href="https://rss.com/podcasts/vsc-coldreads-hottakes/#episodes" target="_blank" rel="noopener noreferrer">
          <img class="podcast-logo" src="../assets/cold_reads_and_hot_takes_logo.jpg" alt="Cold Reads and Hot Takes Podcast Logo">
        </a>
        <p><a href="https://rss.com/podcasts/vsc-coldreads-hottakes/#episodes" target="_blank" rel="noopener noreferrer" class="podcast-link">Cold Read/Hot Takes</a> is a monthly showcase of audio entertainment created, performed, and produced by members of the <strong><em>Voice Support Community (VSC)</em></strong> and features audio monologues, dialogues, and group performances from a wide variety of genres and styles.</p>
      </div>

      <div class="podcast-logo-block">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img class="podcast-logo" src="../assets/coming-soon.jpg" alt="At the Seam Podcast logo">
        </a>
        <p><a href="#" target="_blank" rel="noopener noreferrer" class="podcast-link">At the Seam Podcast</a></p>
        <p>Coming Soon!!!</p>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
  .about-me,
  .podcast {
    p {
      padding-bottom: 20px;

      &:last-child {
        padding-bottom: 0;
      }
    }
  }
  
  .equipment {
    li {
      margin-left: 20px;
      padding-left: 10px;
      font-size: 18px;
    }
  }

  .podcast-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 50px;
    width: 100%;

    .podcast-logo-block {
      min-width: 0;
      text-align: center;

      p {
        font-size: 20px;
        margin-top: 25px;
        margin-bottom: 50px;
      }
    }

    .podcast-logo {
      border-radius: 15px;
      margin-top: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
      
      
      &:hover {
        transform: scale(1.05);
      }
    }
    
    img {
      object-fit: contain;
      width: 100%;
      height: auto;
    }

    .podcast-link {
      text-decoration: none;
      color: lightskyblue;
      font-weight: bold;
    }
  }

</style>