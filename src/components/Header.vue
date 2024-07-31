<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">
            <img :src="require('@/assets/logo.png')" alt="logo" height="50px"  >
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item px-3" v-for="(item, index) in navItems" :key="index">
              <router-link class="nav-link" :to="item.to">{{ item.text }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        navItems: [
          { text: 'Home', to: '/' },
          { text: 'Projects', to: '/' },
          { text: 'About', to: '/' },
          { text: 'Contact', to: '/' },
           
        ],
      };
    },
  };
  </script>
  
<style scoped>
  .nav-link {
  position: relative;
  padding-bottom: 8px; /* Adjust padding as needed */
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: #FF6347; /* Change this color to match your design */
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active-link::after {
  width: 100%;
  left: 0;
}
  </style>
  