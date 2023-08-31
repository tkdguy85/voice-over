<template>
  <MainCard/>
  <!-- TODO: Future update of Message Box component and delivery -->
  <!-- <MessageBox/> -->

</template>

<script>
import MainCard from './components/MainCard.vue'
// TODO: Message Box Setup
// import MessageBox from './components/MessageBox.vue'

export default {
  name: 'App',
  components: {
    MainCard,
    // TODO: Message Box
    // MessageBox
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

*, ::before, ::after {
  box-sizing: border-box;
}

html {
  background-color: #001369;
}

body {
  background-image: linear-gradient(#001369, #000012, #001369);
  margin: 0;
}
</style>
