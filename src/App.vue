<template>
  <HomePage/>
</template>

<script>
import HomePage from './pages/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Lora, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

*, 
::before, 
::after {
  box-sizing: border-box;
}

html {
  background-color: #001369;
  scroll-behavior: smooth;
}

body {
  background-image: linear-gradient(#001369, #000012, #001369);
  margin: 0;
}
</style>
