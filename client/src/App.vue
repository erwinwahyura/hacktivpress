<template>
  <div id="app">
    <Navbar :nilailogin="islogin"></Navbar>
    <br><br>
    <router-view :nilailogin="islogin"></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  name: 'app',
  data () {
    return {
      islogin: false
    }
  },
  created () {
    if (localStorage.getItem('token') !== null) {
      this.islogin = true
    } else {
      this.islogin = false
      this.$router.push('/login')
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
  margin-top: 0px;
}
</style>
