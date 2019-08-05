<template>
  <div id="app">
    <h1>{{muramsg}}</h1>
    <img src="./assets/logo.png">
    <router-link to="/about">About</router-link>
    <router-link to="/vuextest">VuexTest</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      muramsg: 'Hello Murasame!'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
