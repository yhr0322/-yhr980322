<template>
  <div id="app"> 
     <ul>
     <router-link to="/" tag="li" exact></router-link>
     </ul>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
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
  font-size:35px;
}
</style>
