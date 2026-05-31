<script setup>
</script>

<template>
    <!-- FOOTER -->
<footer class="footer">
  <hr class="footer-divider" />
  <div class="footer-portfolio">
    <h3>PORTFOLIO</h3>
    <div class="footer-categories">
      <span>⁌ GRAPHIC DESIGNS ⁌</span>
      <span>⁌ ANIMATIONS & ART ⁌</span>
      <span>⁌ WEBDEVELOPMENT ⁌</span>
    </div>
  </div>
  <hr class="footer-divider" />
  <div class="footer-bottom">
    <div class="footer-nav">
      <span>ABOUT ME</span>
      <span>WORK</span>
      <span>CONTACT</span>
    </div>
    <div class="footer-socials">
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
    <div class="footer-legal">
      <span>TERMS OF CONDITIONS</span>
      <span>|</span>
      <span>PRIVACY POLICY</span>
    </div>
  </div>
</footer>
</template>

<style scoped>
/* FOOTER */
.footer {
  padding: 2rem;
  background-color: black;
}

.footer-divider {
  border: none;
  border-top: 1px solid #555;
  margin: 1rem 0;
}

.footer-portfolio {
  text-align: center;
  padding: 1.5rem 0;
}

.footer-portfolio h3 {
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 3px;
  margin-bottom: 1rem;
}

.footer-categories {
  display: flex;
  justify-content: space-around;
  font-size: 0.85rem;
  font-weight: 900;
  letter-spacing: 2px;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
}

.footer-nav {
  display: flex;
  gap: 5rem;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 2px;
}

.footer-socials {
  display: flex;
  gap: 1rem;
}

.social-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: block;
}

.footer-legal {
  display: flex;
  gap: 1rem;
  font-size: 0.7rem;
  letter-spacing: 1px;
}

.social-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>