<template>
  <div>
    <NavBar />
    <div class="container-fluid mt-5 pt-5">
      <Hero />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
 
import Hero from '@/components/Hero.vue'
import NavBar from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Hero,
    NavBar,
    Footer
  }
}
</script>
