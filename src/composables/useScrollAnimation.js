import { onMounted, ref } from 'vue'

export function useScrollAnimation() {
  const elements = ref([])

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll('.animate').forEach((el) => {
      observer.observe(el)
    })
  })

  return { elements }
}