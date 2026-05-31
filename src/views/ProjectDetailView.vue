<script setup>
import Footer from '@/components/Footer.vue'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { projects } from '@/data/projects.js'

const route = useRoute()
const router = useRouter()

const project = computed(() => projects.find((p) => p.id === Number(route.params.id)))
const volgendProject = computed(() => projects.find((p) => p.id === project.value?.volgendProject))
</script>

<template>
  <div class="project-detail" v-if="project">

    <section class="detail-hero">
      <div class="detail-hero-img" :style="project.heroImg ? `background-image: url(${project.heroImg})` : ''">
        <div class="detail-hero-overlay">
        </div>
      </div>
      <div class="detail-hero-text">
        <h1 class="detail-title">{{ project.titel }}</h1>
        <p class="detail-subtitle">{{ project.subtitel }}</p>
      </div>
    </section>

    <section class="detail-info">
      <div class="detail-info-left">
        <h2>Over dit project</h2>
        <template v-if="Array.isArray(project.beschrijving)">
          <p v-for="(alinea, index) in project.beschrijving" :key="index">{{ alinea }}</p>
        </template>
        <p v-else>{{ project.beschrijving }}</p>
        <div class="detail-tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
      <div class="detail-info-right">
        <div class="detail-meta">
          <div class="meta-item">
            <p class="meta-label">JAAR</p>
            <p class="meta-value">{{ project.jaar }}</p>
          </div>
          <div class="meta-item">
            <p class="meta-label">CATEGORIE</p>
            <p class="meta-value">{{ project.categorie }}</p>
          </div>
          <div class="meta-item" v-if="project.link">
            <p class="meta-label">LINK</p>
            <a :href="project.link" target="_blank" class="meta-link">Bekijk project →</a>
          </div>
        </div>
      </div>
    </section>

    <section class="detail-images">
      <div v-for="(img, index) in project.extraImgs" :key="index" class="detail-img"
        :style="img ? `background-image: url(${img}); background-size: cover;` : ''">
      </div>
    </section>

    <section class="next-project" v-if="volgendProject" @click="router.push({ name: 'project-detail', params: { id: volgendProject.id } })">
      <p class="next-label">VOLGEND PROJECT</p>
      <h2 class="next-title">{{ volgendProject.titel }} →</h2>
    </section>

    <Footer />
  </div>

  <div v-else class="not-found">
    <p>Project niet gevonden.</p>
    <router-link to="/projecten">← Terug naar projecten</router-link>
  </div>
</template>

<style scoped>
.project-detail {
  padding-top: 60px;
  background-color: black;
  color: white;
  min-height: 100vh;
}

/* HERO */
.detail-hero {
  position: relative;
  height: 60vh;
}

.detail-hero-img {
  width: 100%;
  height: 100%;
  background-color: #333;
  background-size: cover;
  background-position: center;
}

.detail-hero-text {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
}

.detail-title {
  font-size: 4vw;
  font-weight: 900;
  letter-spacing: -2px;
}

.detail-subtitle {
  font-size: 0.85rem;
  color: #ccc;
  letter-spacing: 2px;
}

/* INFO */
.detail-info {
  display: flex;
  gap: 4rem;
  padding: 4rem 2rem;
  border-bottom: 1px solid #333;
}

.detail-info-left {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-info-left h2 {
  font-size: 1.5rem;
  font-weight: 900;
}

.detail-info-left p {
  font-size: 0.9rem;
  line-height: 1.8;
  color: #ccc;
  max-width: 500px;
}

.detail-tags {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.tag {
  border: 1px solid white;
  padding: 0.3rem 1rem;
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.detail-info-right {
  flex: 1;
}

.detail-meta {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.meta-label {
  font-size: 0.7rem;
  color: #777;
  letter-spacing: 2px;
  margin-bottom: 0.25rem;
}

.meta-value {
  font-size: 0.9rem;
  font-weight: 700;
}

.meta-link {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
}

.meta-link:hover {
  text-decoration: underline;
}

/* EXTRA AFBEELDINGEN */
.detail-images {
  display: flex;
  gap: 1.5rem;
  padding: 3rem 2rem;
}

.detail-img {
  flex: 1;
  height: 300px;
  background-color: #333;
}

/* VOLGEND PROJECT */
.next-project {
  padding: 4rem 2rem;
  border-top: 1px solid #333;
  cursor: pointer;
}

.next-project:hover .next-title {
  text-decoration: underline;
}

.next-label {
  font-size: 0.75rem;
  color: #777;
  letter-spacing: 3px;
  margin-bottom: 1rem;
}

.next-title {
  font-size: 3vw;
  font-weight: 900;
}
.detail-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2));
}

.detail-hero-img {
  position: relative; /* NIEUW */
  width: 100%;
  height: 100%;
  background-color: #333;
  background-size: cover;
  background-position: center;
}
</style>