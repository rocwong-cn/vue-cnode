<template>
  <div id="app">
    <a href="/?tab=all">
      <img alt='logo' class="logo animated heartBeat" src="https://cnodejs.org/public/images/cnodejs.svg"/>
    </a>
    <Tabbar/>
    <router-view/>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue';
export default {
  components: {
    Tabbar,
  },
}
</script>

<style lang="scss">
html, body, #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f5f5f5;
  font-size: 14px;
}
a {
  text-decoration: none;
}
.logo {
  width: 200px;
  margin: 20px;
}
</style>
