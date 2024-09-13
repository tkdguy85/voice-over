<template>
  <!-- Upper Logo -->
  <div class="logo-container">
    <img class="logo" src="../assets/logo.png" alt="Voice Over Logo">
    <div class="intro-name">
      <h1>Salena Metreger</h1>
      <p>Voice Over Artist</p>   
    </div>
  </div>
</template>

<style lang="scss">
  .logo {
    height: 75px;
  }

  .logo-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;

    @media (max-width: 600px) {
      display: block;
    }
  }

  .intro-name {
    h1 {
      text-transform: uppercase;
    }  
  }
</style>