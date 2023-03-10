<template>
  <MainCard/>
  <MessageBox/>

</template>

<script>
import MainCard from './components/MainCard.vue'
import MessageBox from './components/MessageBox.vue'

export default {
  name: 'App',
  components: {
    MainCard,
    MessageBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
body {
  background: linear-gradient(#001369, #000, #001369);
  margin: 0;
}
</style>
