<template>
  <section class="hero-header" ref="heroHeader" id="hero-header" aria-label="Introduction">
    <div class="container">
      <div class="row">
        <!-- Left part -->
        <div class="col-12 col-sm-6">
          <p class="pre-header" id="animatedHeading1">creative</p>
          <h1 ref="headingH1">
            <div class="heading-h1 mx-0" id="animatedHeading2">Designer</div><span>&</span><br>
            <div id="animatedHeading3">Developer</div>
          </h1>
        </div>
        <!-- Right part -->
        <div class="col-12 col-sm-6">
          <div class="right-part">
            <h2 class="is-style-h3 text-end">
              Freelance web developer & designer,
              I enjoy minimalist, and abstract designs. 
              I draw inspiration from nature and art.
            </h2>
            <a class="btn button" href="#contact" aria-label="Contact">CONTACT ME.</a>
          </div>
        </div>
      </div>
    </div>

    <!-- LiquidEther Background -->
    <div class="liquid-ether-container">
      <LiquidEther
        :colors="['#48FF28', '#A2FFC6', '#9EF19E']"
        :mouseForce="20"
        :cursorSize="100"
        :isViscous="false"
        :viscous="30"
        :iterationsViscous="32"
        :iterationsPoisson="32"
        :resolution="0.5"
        :isBounce="false"
        :autoDemo="true"
        :autoSpeed="0.5"
        :autoIntensity="2.2"
        :takeoverDuration="0.25"
        :autoResumeDelay="3000"
        :autoRampDuration="0.6"
        style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: -1;"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LiquidEther from './LiquidEther.vue'

// Animated headings
onMounted(() => {
  const animatedHeading1 = document.getElementById('animatedHeading1');
  const animatedHeading2 = document.getElementById('animatedHeading2');
  const animatedHeading3 = document.getElementById('animatedHeading3');

  animatedHeading1?.classList.add('slide-in');
  animatedHeading2?.classList.add('slide-in');
  animatedHeading3?.classList.add('slide-in');

  // Apparition du span après 1.3s
  const h1Span = document.querySelector('h1 span');
  setTimeout(() => {
    h1Span?.parentElement?.classList.add('visible');
  }, 1300);
});

// Background fade (optionnel, tu peux utiliser le LiquidEther à la place)
</script>

<style scoped>
.hero-header {
  height: 100svh;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
}

/* Left part */
.hero-header .pre-header {
  font-family: "Migra";
  font-size: 2rem;
  color: var(--beige);
  margin-bottom: 0px;
  z-index: 2;
}

/* Right part */
.hero-header .right-part {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 3vh;
}

.hero-header .right-part h3 {
  margin-bottom: 1rem;
  max-width: 576px;
}

@media all and (min-width: 768px) {
  .hero-header .right-part h3 {
    margin-bottom: 1.875rem;
  }
}

.heading-h1 {
  display: inline-block;
}

.hero-header .button {
  z-index: 2;
}

/* Heading animation */
#animatedHeading1,
#animatedHeading2,
#animatedHeading3 {
  transform: translateY(500px) rotate(10deg);
  transition: transform .8s ease-out;
}

#animatedHeading1.slide-in,
#animatedHeading2.slide-in,
#animatedHeading3.slide-in {
  transform: translateY(0) rotate(0);
}

#animatedHeading2 { transition-delay: 0.3s; }
#animatedHeading3 { transition-delay: 0.6s; }

/* LiquidEther container full size */
.liquid-ether-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

@media all and (min-width: 768px) {
  .liquid-ether-container {
    z-index: 1;
  }
}
</style>
