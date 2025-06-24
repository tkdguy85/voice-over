<template>
  <!-- Headshot -->
  <div class="contact-container">
    <div class="contact-headshot">
      <img class="head-shot" src="../assets/headshot-2.jpg" alt="Salena's Head-shot photo">
    </div>
    
    <!-- Contact Section -->
    <div class="contact-details">
      <h2>Contact Me:</h2>
      <!-- Email -->
      <a class="contact-email" href="mailto:salenamvo@gmail.com">
        <img class="email-logo" src="../assets/email.png" alt="Voice Over Logo">
        <p>salenamvo@gmail.com</p>
      </a>
      
      <!-- Phone -->
      <a class="contact-phone" href="tel:442-500-4421" >
        <img class="phone-logo" src="../assets/phone-2.png" alt="Voice Over Logo">
        <p>442-500-4421</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
  .contact-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    width: 60%;
    padding-bottom: 50px;

    @media (max-width: 1440px) {
      padding-bottom: 0;
      width: 100%;
    }

    
    .head-shot {
      max-width: 330px;
      max-height: 300px;
      margin: 20px 35px 0 0;
      border-radius: 50%;
      
      @media (max-width: 1400px) {
        margin: 50px 20px 50px 0;
      }
    }

    .contact-details {
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .email-logo {
        height: 36px;
        margin-right: 16px;
      }

      .phone-logo {
        height: 45px;
        margin-left: -5px;
        margin-right: 13px;
      }
    }

    .contact-email, 
    .contact-phone {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: lightskyblue;
      font-size: 26px;
      padding-top: 20px;
      justify-content: left;
    }
  }
</style>