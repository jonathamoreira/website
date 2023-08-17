<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
//import NavBar from '@/components/NavBar.vue'; está sendo importado globalmente no Main

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  }
}
</script>
