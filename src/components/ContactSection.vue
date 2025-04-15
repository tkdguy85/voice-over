<template>
  <!-- Headshot -->
  <div class="contact-container">
    <img class="head-shot" src="../assets/salena-headshot.jpg" alt="The Lovely Salena's Head-shot photo">
    
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
  .contact-container
  {
    padding-bottom: 0;

    @media (max-width: 1400px) {
      padding-bottom: 50px;
    }
  }

  .contact-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  
    .head-shot {
      max-width: 330px;
      max-height: 300px;
      margin: 10px 35px 0 0px;
      border-radius: 20%;

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
      justify-content: left;
    }
  }
</style>