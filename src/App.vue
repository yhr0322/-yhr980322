<template>
  <div id="app"> 
   
     <hr>
     <transition name="fade">
    <router-view/>
      </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  
} 
</script>
<style>

</style>
