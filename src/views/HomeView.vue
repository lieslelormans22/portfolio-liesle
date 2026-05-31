<script setup>
import { onMounted, ref } from 'vue'
import Footer from '@/components/Footer.vue'
import CoverflowCarousel from '@/components/CoverflowCarousel.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

import Fushi from '@/assets/Fushi.png'
import Chifuyu from '@/assets/Chifuyu.png'
import SnowJuni from '@/assets/SnowJuni.png'
import Yuta from '@/assets/Yuta.png'
import Juni from '@/assets/Juni.png'

useScrollAnimation()

const hobbyItems = ref([
  { img: Fushi },
  { img: Chifuyu },
  { img: SnowJuni },
  { img: Yuta },
  { img: Juni },
])

const tickerRef = ref(null)

onMounted(() => {
  const ticker = tickerRef.value
  const clone = ticker.innerHTML
  ticker.innerHTML += clone
})
</script>

<template>
  <div class="home">
    <section class="hero">
      <h1 class="hero-title">LIESLE</h1>
    </section>

    <div class="ticker">
      <div class="ticker-inner" ref="tickerRef">
        <span>HTML • JS SCRIPT • FIGMA • CSS • VUE.JS • PHOTOSHOP • ILLUSTRATOR • </span>
      </div>
    </div>

    <!-- GROTE AFBEELDING SECTIE -->
    <section class="hero-image-section">
      <div class="hero-image animate">
        <p class="top-left">YOUR LIFE<br>IS YOUR ART</p>
        <div class="placeholder-img"></div>
        <p class="bottom-right">DESIGN IS A SOLUTION<br>TO A PROBLEM. ART IS<br>A QUESTION TO A<br>PROBLEM</p>
      </div>
      <p class="creative-developer animate">CREATIVE DEVELOPER</p>
    </section>
  </div>

  <!-- ABOUT ME SECTIE -->
  <section class="about-section">
    <div class="about-top">
      <h2 class="about-title animate">ABOUT ME</h2>
      <div class="about-top-right">
        <p class="about-signature animate">Liesle Lormans</p>
      </div>
    </div>
    <div class="about-bottom animate">
      <div class="about-text">
        <h3>About me</h3>
        <p>Hallo! Ik ben Liesle, een student webdevelopment met een grote interesse in technologie en digitale creatie. Ik werk graag aan moderne websites en blijf mezelf voortdurend ontwikkelen binnen zowel webdevelopment als IT. Creativiteit, detail en een gestructureerde aanpak staan centraal in de manier waarop ik werk.</p>
      </div>
      <div class="about-text">
        <h3>About portfolio</h3>
        <p>Welkom op mijn portfolio! Hier deel ik een selectie van projecten die mijn groei en vaardigheden binnen webdevelopment en IT weerspiegelen. Elk project geeft een beeld van mijn passie voor design, development en het uitwerken van doordachte digitale oplossingen.</p>
      </div>
      <div class="about-placeholder"></div>
    </div>
    <hr class="about-divider" />
  </section>

  <!-- MY STRENGTHS SECTIE -->
  <section class="strengths-section animate">
    <div class="strengths-left">
      <div class="strengths-placeholder"></div>
    </div>
    <div class="strengths-right">
      <h2 class="strengths-title">MY STRENGTHS</h2>
      <ul class="strengths-list">
        <li><span>Creatief</span><span>#1</span></li>
        <li><span>Art skills</span><span>#2</span></li>
        <li><span>Communicatief</span><span>#3</span></li>
        <li><span>Zelfstandig</span><span>#4</span></li>
        <li><span>Team speler</span><span>#5</span></li>
      </ul>
    </div>
  </section>

  <!-- MY HOBBY SECTIE -->
  <section class="hobby-section animate">
    <div class="hobby-left">
      <h2 class="hobby-title">MY HOBBY</h2>
      <p>Tekenen is één van mijn grootste hobby's. Het helpt me om creatief te denken en ideeën visueel uit te werken. Ik haal er rust en inspiratie uit, en het heeft ook mijn oog voor detail en design verder ontwikkeld.</p>
      <p>Daarnaast maak ik in mijn vrije tijd ook commissions. Je kan me altijd contacteren voor vragen of samenwerkingen.</p>
      <a href="/contact" class="contact-link">contact me →</a>
    </div>
    <div class="hobby-right">
      <CoverflowCarousel
        :items="hobbyItems"
        :cardWidth="280"
        :cardHeight="320"
        :offset="260"
      />
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.home {
  padding-top: 60px;
  background-color: black;
  color: white;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  overflow: hidden;
  padding: 20rem ;
}

.hero-title {
  font-size: 20vw;
  font-weight: 900;
  letter-spacing: -6px;
  line-height: 0.8;
  text-align: center;
  display: inline-block;
  transform: scaleY(1.5);
  transform-origin: center;
  background-image: url('@/assets/flowers.jpg'); 
  background-size: cover;
  background-position: center;
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
}

.ticker {
  background-color: black;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  padding: 0.5rem 0;
  overflow: hidden;
  white-space: nowrap;
}

.ticker-inner {
  display: inline-block;
  animation: ticker 15s linear infinite;
}

.ticker-inner span {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  padding-right: 3rem;
}

@keyframes ticker {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.hero-image-section {
  padding: 4rem 2rem;
  
}

.hero-image {
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url('@/assets/Temple.png');
  background-size: cover;
  background-position: center;
}

.top-left {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.bottom-right {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: right;
}

.creative-developer {
  text-align: center;
  font-size: 0.75rem;
  letter-spacing: 3px;
  margin-top: 1rem;
}

.about-section {
  padding: 3rem 2rem;
}

.about-top {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.about-title {
  font-size: 8vw;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1;
}

.about-top-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}

.about-signature {
  font-family: 'Dancing Script', cursive;
  font-size: 4rem;
  color: white;
  text-align: center;
  margin-left: -10rem;
  transform: rotate(-15deg);
  display: inline-block;
  padding: 10rem 7rem;
}

.about-placeholder {
  width: 600px;
  height: 300px;
  background-image: url('@/assets/Purewhite.jpg');
  background-size: cover;
  background-position: center;
}

.about-bottom {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.about-text h3 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.about-text p {
  font-size: 0.85rem;
  line-height: 1.6;
  font-weight: 700;
  max-width: 400px;
}

.about-text {
  flex: 1;
}

.about-divider {
  border: none;
  border-top: 1px solid #555;
  margin-top: 2rem;
}

.strengths-section {
  display: flex;
  gap: 3rem;
  padding: 3rem 2rem;
}

.strengths-left {
  flex: 1;
}

.strengths-placeholder {
  width: 100%;
  height: 400px;
  background-image: url('@/assets/Think.png');
  background-size: cover;
  background-position: center;
}

.strengths-right {
  flex: 1;
}

.strengths-title {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 2.5rem;
}

.strengths-list {
  list-style: none;
  border-top: 1px solid #555;
}

.strengths-list li {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #555;
  font-size: 0.9rem;
  font-weight: 700;
}

.hobby-section {
  display: flex;
  gap: 3rem;
  padding: 3rem 2rem;
}

.hobby-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  padding-right: 1rem;
}

.hobby-title {
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: 2px;
}

.hobby-left p {
  font-size: 0.85rem;
  line-height: 1.6;
  color: #ccc;
}

.contact-link {
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 700;
  text-align: right;
}

.contact-link:hover {
  text-decoration: underline;
}

.hobby-right {
  flex: 1;
  align-items: center;
}

.arrow-btn {
  background: none;
  border: 2px solid white;
  color: white;
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>