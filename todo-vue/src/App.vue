<template>
  <div id="app">
    <Login @update="writeFn"/>
  </div>
</template>

<script>
import Login from './components/auth/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  },
  methods : {
    writeFn : () => {
      document.write('emit예제')
    }
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
