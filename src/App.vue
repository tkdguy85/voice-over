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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
