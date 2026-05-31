<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)
</script>

<template>
  <nav>
    <RouterLink to="/" class="logo">LIESLE LORMANS</RouterLink>
    <RouterLink to="/projecten" class="portfolio-link">PORTFOLIO</RouterLink>
    <button class="menu-btn" @mouseenter="menuOpen = true" @mouseleave="menuOpen = false">
      MENU
      <div v-if="menuOpen" class="dropdown">
        <div class="dropdown-left">
          <div class="placeholder-img"></div>
          <div class="social-circles">
            <a href="https://www.instagram.com/sulieka_/" target="_blank" rel="noopener noreferrer">
              <img class="social-icon" src="@/assets/Instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/liesle-lormans-2282b1297/" target="_blank" rel="noopener noreferrer">
              <img class="social-icon" src="@/assets/LinkedIn.png" alt="LinkedIn" />
            </a>
            <a href="https://x.com/sulieka_" target="_blank" rel="noopener noreferrer">
              <img class="social-icon" src="@/assets/Twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
        <div class="dropdown-right">
          <p>
            <RouterLink to="/">ABOUT ME</RouterLink>
          </p>
          <p>
            <RouterLink to="/projecten">MY WORK</RouterLink>
          </p>
          <p>
            <RouterLink to="/contact">CONTACT</RouterLink>
          </p>
          <p>
            <RouterLink to="/werkplekleren">WERKPLEKLEREN</RouterLink>
          </p>
        </div>
      </div>
    </button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
}

.logo, .portfolio-link {
  color: white;
  text-decoration: none;
  font-weight: 900;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.menu-btn {
  background: none;
  border: none;
  color: white;
  font-weight: 900;
  font-size: 0.9rem;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
}

.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: black;
  width: 800px;
  height: 300px;
  display: flex;
  gap: 2rem;
  padding: 1rem;
  border-top: 1px solid white;
}

.dropdown-left .placeholder-img {
  width: 400px;
  height: 200px;
  background-image: url('@/assets/flowers.jpg');
  background-size: cover;
  background-position: center;
}

.social-circles {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.social-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.dropdown-right {
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: flex-start;
  gap: 1rem;
}

.dropdown-right p {
  width: 500px;
  text-align: left;
}

.dropdown-right a {
  color: white;
  text-decoration: none;
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: 2px;
}
.dropdown-right p:hover {
  background-color: #ccc;
  color: black;
}
</style>