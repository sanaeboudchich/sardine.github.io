<template>

  <section id="content">
    <Headeer />
      <Case />
      
     </section>

</template>

<script>

import Case from './components/Case.vue'
import Headeer from './components/Headeer.vue';



export default {
  name: 'Profil4',
  components:{
    Case,
    Headeer
  }
}

</script>



<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  list-style: none;
  text-decoration: none;
  scroll-behavior: smooth;
  font-family: 'Poppins';
}

</style>
