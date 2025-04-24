<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img :src="require('@/assets/logo.png')" alt="logo" height="50px" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li
            class="nav-item px-3"
            v-for="(item, index) in navItems"
            :key="index"
          >
            <router-link class="nav-link nav-link-customize" :to="item.to">
              {{ $t(item.text) }}
            </router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ currentLanguage === "en" ? "English" : "Español" }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#" @click="changeLanguage('en')"
                  >English</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#" @click="changeLanguage('es')"
                  >Español</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from "@/components/buttons/MaterialButton.vue";
export default {
  components: {
    Button,
  },
  name: "Navbar",
  data() {
    return {
      navItems: [
        { text: "navbar.home", to: "#home" },
        { text: "navbar.services", to: "#services" },
        { text: "navbar.projects", to: "#projects" },
        { text: "navbar.resume", to: "#resume" },
        { text: "navbar.about", to: "#about-me" },
        { text: "navbar.contact"  , to: "#contact" },
      ],
      currentLanguage: "en", // Default language
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-shadow");
      } else {
        navbar.classList.remove("navbar-shadow");
      }
    },
  changeLanguage(lang){
    this.currentLanguage = lang;
    this.$i18n.locale = lang; // Change the locale in Vue I18n
    
  }
}
};
</script>

<style scoped>
* {
  background: #f9f9ff;
  color: #222222;
}
.nav-link-customize {
  position: relative;
  padding-bottom: 8px; /* Adjust padding as needed */
}

.nav-link-customize::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: #ff6347; /* Change this color to match your design */
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link-customize:hover::after,
.nav-link-customize.active-link::after {
  width: 100%;
  left: 0;
}
.navbar-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}
</style>
