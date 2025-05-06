<template>
      <Hero />
      <services />
      <AboutMe />
      <Resume />
      <Projects />
      <Banner />
      <ContactMe />
    <Footer></Footer>
</template>

<script>
 
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'
import Services from '@/components/Services.vue'
import Projects from '@/components/Projects.vue'
import AboutMe  from '@/components/AboutMe.vue'
import ContactMe from '@/components/ContactMe.vue'
import Banner from '@/components/Banner.vue'
import Resume from '@/components/Resume.vue' 
export default {
  name: 'HomeView',
  components: {
    Hero,
    Services,
    Projects,
    Resume,
    Banner,
    Footer,
    AboutMe,
    ContactMe
  }
}
</script>
