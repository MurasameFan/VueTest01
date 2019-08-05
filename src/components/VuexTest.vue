<template>
<button @click="add()">添加</button>
</template>

<script>
// 使用vuex组件
import store from '../store/store'
export default {
  name: 'VuexTest',
  store,
  methods: {
    add () {
      console.log('添加了什么东西进来了!')
      debugger
      store.commit('increase')
    }
  }
}
</script>

<style scoped>

</style>
