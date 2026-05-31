<script setup>
import { ref, onMounted, computed } from 'vue'
import CoverflowCarousel from '@/components/CoverflowCarousel.vue'
import Footer from '@/components/Footer.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { projects } from '@/data/projects.js'
import portfolioImg from '@/assets/Portfolio.png'
import Yuta from '@/assets/Yuta.png'
import Juni from '@/assets/Juni.png'
import Retime from '@/assets/Retime.png'
import Dashboard from '@/assets/Dashboard.png'
useScrollAnimation()

const projectItems = ref([
  { img: portfolioImg },
  { img: Yuta },
  { img: Retime },
  { img: Dashboard },
  { img: Juni },
])

// Filter per categorie
const recenteProjecten = computed(() => projects.filter((p) => 
  Array.isArray(p.categorie) ? p.categorie.includes('Recent') : p.categorie === 'Recent'
))
const werkplekleren = computed(() => projects.filter((p) => 
  Array.isArray(p.categorie) ? p.categorie.includes('Werkplekleren') : p.categorie === 'Werkplekleren'
))
const design = computed(() => projects.filter((p) => 
  Array.isArray(p.categorie) ? p.categorie.includes('Design') : p.categorie === 'Design'
))
const webDesigns = computed(() => projects.filter((p) => 
  Array.isArray(p.categorie) ? p.categorie.includes('Web Design') : p.categorie === 'Web Design'
))
const art = computed(() => projects.filter((p) => 
  Array.isArray(p.categorie) ? p.categorie.includes('Art') : p.categorie === 'Art'
))
const personalProject = computed(() => projects.filter((p) => 
  Array.isArray(p.categorie) ? p.categorie.includes('Personal Project') : p.categorie === 'Personal Project'
))

function enableDragScroll(el) {
  let isDown = false
  let startX
  let scrollLeft

  el.addEventListener('mousedown', (e) => {
    isDown = true
    el.style.cursor = 'grabbing'
    startX = e.pageX - el.offsetLeft
    scrollLeft = el.scrollLeft
  })

  el.addEventListener('mouseleave', () => {
    isDown = false
    el.style.cursor = 'grab'
  })

  el.addEventListener('mouseup', () => {
    isDown = false
    el.style.cursor = 'grab'
  })

  el.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - startX) * 2
    el.scrollLeft = scrollLeft - walk
  })
}

onMounted(() => {
  document.querySelectorAll('.project-slider').forEach(enableDragScroll)
})
</script>

<template>
  <div class="projects">

    <section class="projects-hero">
      <CoverflowCarousel :items="projectItems" :cardWidth="480" :cardHeight="600" :offset="390" />
      <h1 class="projects-title animate">MY PROJECTS</h1>
      <button class="view-btn animate">view projects →</button>
    </section>

    <section class="highlight-section animate">
  <h2 class="highlight-label">PROJECT HIGHLIGHT #1</h2>
  <div class="highlight-content">
    <div class="highlight-img-wrapper">
      <div class="highlight-img-small top" :style="`background-image: url(${projects.find(p => p.id === 3)?.extraImgs[0]}); background-size: cover;`"></div>
      <div class="highlight-img-main" :style="`background-image: url(${projects.find(p => p.id === 3)?.heroImg}); background-size: cover;`"></div>
      <div class="highlight-img-small bottom" :style="`background-image: url(${projects.find(p => p.id === 3)?.extraImgs[1]}); background-size: cover;`"></div>
    </div>
    <div class="highlight-text">
      <h3>Dashboard</h3>
      <p>Voor werkplekleren 1 heb ik een dashboard ontworpen dat als een soort cv fungeert.</p>
      <router-link :to="{ name: 'project-detail', params: { id: 3 } }" class="view-btn">view project →</router-link>
    </div>
  </div>
</section>

<section class="highlight-section animate">
  <h2 class="highlight-label">PROJECT HIGHLIGHT #2</h2>
  <div class="highlight-content">
    <div class="highlight-img-wrapper">
      <div class="highlight-img-small top" :style="`background-image: url(${projects.find(p => p.id === 4)?.extraImgs[0]}); background-size: cover;`"></div>
      <div class="highlight-img-main" :style="`background-image: url(${projects.find(p => p.id === 4)?.heroImg}); background-size: cover;`"></div>
      <div class="highlight-img-small bottom" :style="`background-image: url(${projects.find(p => p.id === 4)?.extraImgs[1]}); background-size: cover;`"></div>
    </div>
    <div class="highlight-text">
      <h3>Retime</h3>
      <p>Vanaf 2027 wordt tijdregistratie een wettelijke standaard in België. Retime speelt hierop in door tijdsregistratie mensgericht te maken.</p>
      <router-link :to="{ name: 'project-detail', params: { id: 4 } }" class="view-btn">view project →</router-link>
    </div>
  </div>
</section>

    <section class="all-projects">
      <h2 class="all-projects-title animate">ALL PROJECTS</h2>

      <div class="project-category animate" v-if="recenteProjecten.length">
        <h3 class="category-title">RECENTE PROJECTEN</h3>
        <hr />
        <div class="project-slider">
          <div class="project-slide">
            <router-link
              v-for="project in recenteProjecten"
              :key="project.id"
              :to="{ name: 'project-detail', params: { id: project.id } }"
              class="project-card"
            >
              <div class="project-img" :style="project.heroImg ? `background-image: url(${project.heroImg}); background-size: cover; background-position: center;` : ''"></div>
              <p class="project-title">{{ project.titel }}</p>
              <p class="project-subtitle">{{ project.subtitel }}</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="project-category animate" v-if="werkplekleren.length">
        <h3 class="category-title">WERKPLEKLEREN</h3>
        <hr />
        <div class="project-slider">
          <div class="project-slide">
            <router-link
              v-for="project in werkplekleren"
              :key="project.id"
              :to="{ name: 'project-detail', params: { id: project.id } }"
              class="project-card"
            >
              <div class="project-img" :style="project.heroImg ? `background-image: url(${project.heroImg}); background-size: cover; background-position: center;` : ''"></div>
              <p class="project-title">{{ project.titel }}</p>
              <p class="project-subtitle">{{ project.subtitel }}</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="project-category animate" v-if="design.length">
        <h3 class="category-title">DESIGN</h3>
        <hr />
        <div class="project-slider">
          <div class="project-slide">
            <router-link
              v-for="project in design"
              :key="project.id"
              :to="{ name: 'project-detail', params: { id: project.id } }"
              class="project-card"
            >
              <div class="project-img" :style="project.heroImg ? `background-image: url(${project.heroImg}); background-size: cover; background-position: center;` : ''"></div>
              <p class="project-title">{{ project.titel }}</p>
              <p class="project-subtitle">{{ project.subtitel }}</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="project-category animate" v-if="webDesigns.length">
        <h3 class="category-title">WEB DESIGNS</h3>
        <hr />
        <div class="project-slider">
          <div class="project-slide">
            <router-link
              v-for="project in webDesigns"
              :key="project.id"
              :to="{ name: 'project-detail', params: { id: project.id } }"
              class="project-card"
            >
              <div class="project-img" :style="project.heroImg ? `background-image: url(${project.heroImg}); background-size: cover; background-position: center;` : ''"></div>
              <p class="project-title">{{ project.titel }}</p>
              <p class="project-subtitle">{{ project.subtitel }}</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="project-category animate" v-if="art.length">
        <h3 class="category-title">ART</h3>
        <hr />
        <div class="project-slider">
          <div class="project-slide">
            <router-link
              v-for="project in art"
              :key="project.id"
              :to="{ name: 'project-detail', params: { id: project.id } }"
              class="project-card"
            >
              <div class="project-img" :style="project.heroImg ? `background-image: url(${project.heroImg}); background-size: cover; background-position: center;` : ''"></div>
              <p class="project-title">{{ project.titel }}</p>
              <p class="project-subtitle">{{ project.subtitel }}</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="project-category animate" v-if="personalProject.length">
        <h3 class="category-title">PERSONAL PROJECT</h3>
        <hr />
        <div class="project-slider">
          <div class="project-slide">
            <router-link
              v-for="project in personalProject"
              :key="project.id"
              :to="{ name: 'project-detail', params: { id: project.id } }"
              class="project-card"
            >
              <div class="project-img" :style="project.heroImg ? `background-image: url(${project.heroImg}); background-size: cover; background-position: center;` : ''"></div>
              <p class="project-title">{{ project.titel }}</p>
              <p class="project-subtitle">{{ project.subtitel }}</p>
            </router-link>
          </div>
        </div>
      </div>

    </section>

    <Footer />
  </div>
</template>

<style scoped>
.projects {
  padding-top: 60px;
  background-color: black;
  color: white;
  min-height: 100vh;
}

.projects-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
}

.projects-title {
  font-size: 6vw;
  font-weight: 900;
  letter-spacing: -2px;
}

.view-btn {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 2rem;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-decoration: none;
  display: inline-block;
}

.view-btn:hover {
  background-color: white;
  color: black;
}

.highlight-section {
  padding: 3rem 2rem;
}

.highlight-label {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 2rem;
}

.highlight-content {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.highlight-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
}

.highlight-text h3 {
  font-size: 1.2rem;
  font-weight: 400;
  font-family: cursive;
}

.highlight-text p {
  font-size: 0.85rem;
  color: #ccc;
  max-width: 400px;
}

.all-projects {
  padding: 3rem 2rem;
}

.all-projects-title {
  font-size: 8vw;
  font-weight: 900;
  text-align: center;
  margin-bottom: 3rem;
}

.project-category {
  margin-bottom: 3rem;
}

.category-title {
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

hr {
  border: none;
  border-top: 1px solid #555;
  margin-bottom: 1.5rem;
}

.project-slider {
  overflow-x: auto;
  scrollbar-width: none;
  cursor: grab;
}

.project-slider::-webkit-scrollbar {
  display: none;
}

.project-slide {
  display: flex;
  gap: 1.5rem;
  width: max-content;
}

.project-card {
  cursor: pointer;
  width: 300px;
  flex-shrink: 0;
  text-decoration: none;
  color: white;
  display: block;
}

.project-img {
  width: 100%;
  height: 200px;
  background-color: #333;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 1px;
}

.project-subtitle {
  font-size: 0.8rem;
  color: #ccc;
}

.highlight-img-wrapper {
  flex: 1;
  position: relative;
  height: 400px;
}

.highlight-img-main {
  position: absolute;
  left: 0;
  top: 40px;
  width: 80%;
  height: 320px;
  background-color: #444;
  z-index: 1;
}

.highlight-img-small {
  position: absolute;
  width: 40%;
  height: 120px;
  background-color: #666;
  z-index: 2;
}

.highlight-img-small.top {
  top: 0;
  left: 50%;
}

.highlight-img-small.bottom {
  bottom: 0;
  left: -20%;
}
</style>