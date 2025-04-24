
<template>
    <Navbar />
    <main>
      <router-view/>
    </main>
</template>
<script>
import Navbar from "@/components/Header.vue";
export default{
  components:{
    Navbar
  }
}
</script>
<style>
*{
  font-family: Poppins, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>