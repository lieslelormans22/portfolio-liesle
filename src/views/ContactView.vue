<script setup>
import Footer from '@/components/Footer.vue'
import { reactive, ref } from 'vue'

const form = reactive({
  naam: '',
  telefoon: '',
  email: '',
  message: '',
})

const verzonden = ref(false)

async function sendEmail() {
  const response = await fetch('https://formspree.io/f/mjgzdknd', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      naam: form.naam,
      telefoon: form.telefoon,
      email: form.email,
      message: form.message,
    }),
  })

  if (response.ok) {
    verzonden.value = true
    form.naam = ''
    form.telefoon = ''
    form.email = ''
    form.message = ''
  }
}
</script>

<template>
  <div class="contact">
    <div class="contact-content">

      <!-- LINKS -->
      <div class="contact-left">
        <h1 class="contact-title">CONTACT</h1>
        <p class="contact-desc">Hier komt een beschrijving van het project dat gehighlight is</p>

        <h2 class="socials-title">MIJN SOCIALS</h2>
        <div class="socials">
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

        <h2 class="email-title">E-MAIL ADRESS</h2>
        <p class="email">lieslelormans1@gmail.com</p>
      </div>

      <!-- RECHTS: FORM -->
       <div class="card">
        <div class="contact-right">
          <h2 class="form-title">CONTACT FORM</h2>
          <div class="form">
            <div class="form-group">
              <label>naam + voornaam:</label>
              <input type="text" v-model="form.naam" />
            </div>
            <div class="form-group">
              <label>telefoon nummer:</label>
              <input type="text" v-model="form.telefoon" />
            </div>
            <div class="form-group">
              <label>email adres:</label>
              <input type="email" v-model="form.email" />
            </div>
            <div class="form-group">
              <label>message:</label>
              <textarea v-model="form.message"></textarea>
            </div>
            <p v-if="verzonden" style="color: lightgreen;">Bericht verzonden! ✓</p>
            <button class="submit-btn" @click="sendEmail">send →</button>
          </div>
        </div>
      </div>

    </div>
    <Footer />
  </div>
</template>

<style scoped>
.contact {
  padding-top: 60px;
  background-color: black;
  color: white;
  min-height: 100vh;
}

.contact-content {
  display: flex;
  gap: 4rem;
  padding: 3rem 2rem;
}

.contact-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3.5rem;
}

.contact-title {
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -2px;
}

.contact-desc {
  font-size: 0.85rem;
  color: #ccc;
  max-width: 300px;
  margin: 0 auto;
}

.socials-title, .email-title {
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 2px;
}

.socials {
  display: flex;
  gap: 1rem;
  margin: 0 auto;
}

.social-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #555;
  display: block;
}

.email {
  font-size: 0.85rem;
  color: #ccc;
}

.contact-right {
  width: 700px;
  height: 550px;
  background-color: #1a1a1a;
  border-radius: 30px;
  transition: all .2s;
  padding: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-right:hover {
 transform: scale(0.98);
 border-radius: 20px;
}

.card:hover {
 box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}

.card {
  width: 700px;
  height: 550px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 30px;
  transition: all .3s;
}

.form-title {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.form-group label {
  font-size: 0.75rem;
  color: #ccc;
  letter-spacing: 1px;
}

.form-group input,
.form-group textarea {
  background: none;
  border: none;
  border-bottom: 1px solid #555;
  color: white;
  padding: 0.5rem 0;
  font-size: 0.85rem;
  outline: none;
  width: 100%;
}

.form-group textarea {
  height: 80px;
  resize: none;
}

.submit-btn {
  background-color: #555;
  border: none;
  color: white;
  padding: 0.75rem;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-top: 1rem;
  width: 100%;
}

.submit-btn:hover {
  background-color: white;
  color: black;
}

.social-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>