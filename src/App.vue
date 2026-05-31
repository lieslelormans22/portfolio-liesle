<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  padding: 0 20rem;
  background-color: black;
  color: white;
  font-family: 'Arial Black', Arial, sans-serif;
}

.animate {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>