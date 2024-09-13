<template class="page-wrapper">
  <div class="container">
  
    <!-- Upper Logo -->
    <LogoBanner />
  
    <!-- Contact And Demo Section -->
    <div class="intro-container">
      <!-- Contact Section -->
      <ContactSection />
      
      <!-- Voiceover Section -->
      <VoiceoverSection />
    </div>

    <!-- Main Photo -->
    <HeroSection />

    <!-- Biography section -->
    <div class="bio-container">
      <!-- Bio & Equipment -->
      <BioSection />
      
      <!-- Samples -->
      <SampleSection />
    
      <!-- Testimonials -->
      <TestimonialSection />

    </div>
    <!-- Bodalgo Badge -->
    <div class="logo-badge">
      <a href="https://www.bodalgo.com/en/voice-over-talents/salena-metreger?referer=badge" rel="noopener" target="_blank"><img alt="Professional Voice Talents" title="Professional Voice Talents" width="200" src="https://www.bodalgo.com/voice-over-talents/badge/salena-metreger/3/200"></a>
    </div>
  </div>
</template>

<script>
import LogoBanner from '../components/LogoBanner.vue'
import HeroSection from '../components/HeroSection.vue'
import BioSection from '../components/BioSection.vue'
import ContactSection from '../components/ContactSection.vue'
import VoiceoverSection from '../components/VoiceoverSection.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import SampleSection from '../components/SampleSection.vue'

export default {
  components: {
    LogoBanner,
    HeroSection,
    BioSection,
    ContactSection,
    VoiceoverSection,
    TestimonialSection,
    SampleSection
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

  .container {
    margin: 10px 200px;

    @media (max-width: 1000px) {
      margin: 10px 40px;
    }
  }

  .bio-container {
    text-align: left;
    padding-bottom: 100px;
    
    ul {
      padding-inline-start: 20px;
    }
  }

  .about-me,
  .equipment,
  .recents,
  .testimonials {
    padding-bottom: 50px;

    @media (max-width: 800px) {
      padding-bottom: 30px;
    }
  }

  .intro-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    padding-bottom: 50px;
    justify-content: space-between;

    @media (max-width: 1400px) {
      flex-direction: column;
      justify-self: center;
    }
  }

  .audio-sample {
    padding: 10px 20px;
    color: white;
  }

</style>