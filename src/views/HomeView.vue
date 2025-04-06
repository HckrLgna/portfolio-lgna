<template>
  <div>
    <NavBar />
      <Hero />
      <services />
      <AboutMe />
      <Projects />
      <ContactMe />
    <Footer></Footer>
  </div>
</template>

<script>
 
import Hero from '@/components/Hero.vue'
import NavBar from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Services from '@/components/Services.vue'
import Projects from '@/components/Projects.vue'
import AboutMe  from '@/components/AboutMe.vue'
import ContactMe from '@/components/ContactMe.vue'
export default {
  name: 'HomeView',
  components: {
    Hero,
    NavBar,
    Services,
    Projects,
    Footer,
    AboutMe,
    ContactMe
  }
}
</script>
