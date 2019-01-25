<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>OJEK</span>
        <span class="font-weight-light">LINE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="routers">
        <div class="router">
        <router-link to="/members">
          <span class="font-weight-bold navbar">MEMBER</span>
        </router-link>
        </div>
        <div class="router">
        <router-link to="/drivers">
          <span class="font-weight-bold navbar">DRIVER</span>
        </router-link>
        </div>
        <div class="router">
        <router-link to="/bookings">
          <span class="font-weight-bold navbar">BOOKING</span>
        </router-link>
        </div>
      </div>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
.navbar{
  color: black;
  text-align: center;
  margin: 5px;
  font-size: 15px;
}

.routers a{
  text-decoration: none;
}

.routers{
  width: 300px;
}

.router-link-active{
  border: 2px black solid;
  width: 20px;
}

.router{
  margin-right: 30px;
  width: 50px;
  display: inline;
  cursor: pointer;
}
</style>

