<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  cardWidth: {
    type: Number,
    default: 160,
  },
  cardHeight: {
    type: Number,
    default: 200,
  },
  offset: {
    type: Number,
    default: 130,
  },
})

const current = ref(Math.floor(props.items.length / 2))

function next() { current.value = (current.value + 1) % props.items.length }
function prev() { current.value = (current.value - 1 + props.items.length) % props.items.length }

function getStyle(index) {
  const configs = [
    { scale: 0.6, opacity: 0.4, offset: -props.offset * 2 },
    { scale: 0.8, opacity: 0.7, offset: -props.offset },
    { scale: 1.0, opacity: 1.0, offset: 0 },
    { scale: 0.8, opacity: 0.7, offset: props.offset },
    { scale: 0.6, opacity: 0.4, offset: props.offset * 2 },
  ]
  const cfg = configs[index]
  return `
    position: absolute;
    left: calc(50% + ${cfg.offset}px - ${props.cardWidth / 2}px);
    width: ${props.cardWidth}px;
    height: ${props.cardHeight}px;
    background-color: #333;
    transform: scale(${cfg.scale});
    opacity: ${cfg.opacity};
    transition: all 0.4s ease;
    border-radius: 4px;
    overflow: hidden;
  `
}
</script>

<template>
  <div class="carousel-wrapper">
    <div class="carousel-track" :style="`height: ${cardHeight}px`">
      <div v-for="i in 5" :key="i" :style="getStyle(i - 1)">
        <img
          v-if="items[(current - 2 + i - 1 + items.length) % items.length].img"
          :src="items[(current - 2 + i - 1 + items.length) % items.length].img"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
      </div>
    </div>
    <div class="carousel-arrows">
      <button class="arrow-btn" @click="prev">«</button>
      <button class="arrow-btn" @click="next">»</button>
    </div>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.carousel-track {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-arrows {
  display: flex;
  gap: 1rem;
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