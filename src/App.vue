<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hr>
    <one/>
    <hr>
    <two/>
    <hr>
  </div>
</template>

<script>
import one from './components/one.vue'
import two from './components/two.vue'


export default {
  name: 'App',
  components: {
    one,
    two,
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
  margin: 60px auto 20px;
  width: 80%;
  ;
}
</style>
