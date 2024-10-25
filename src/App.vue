<template>
<div>
  <v-app id="app">
  <Navigation-Drawer/>
  <router-view></router-view>
  </v-app>
</div>
 
</template>

<script>
import NavigationDrawer from './components/layouts/NavigationDrawer.vue'

export default{
  components: {
    NavigationDrawer
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
}

</style>