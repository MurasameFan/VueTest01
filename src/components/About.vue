<template>
  <div>HHHHHHHH
    <h1>{{hellomura}}</h1>
    <h2>{{vuexshow}}</h2>
  </div>
</template>

<script>
import store from '../store/store'
export default {
  name: 'About',
  store,
  data () {
    return {
      hellomura: 'Hello Murasame!Come and Scratch it!',
      vuexshow: store.state.count
    }
  }
}

</script>

<style scoped>
  h1{
    color:rebeccapurple;
  }

</style>
