<template>
  <section class="about" id="about" data-aos="fade-up">
    <div class="container">
      <div class="row">
        <!-- Texte gauche -->
        <div class="col-12 col-lg-7 about-left text-end">
          <h3 class="text-end">


            <ScrambleText
              :className="'m-[7vw] max-w-[800px] font-mono font-medium text-[clamp(14px,4vw,32px)] text-white text-end'"
              :radius="10"
              :duration="2"
              :speed=".5"
              scrambleChars=".:"
            >
              I express my passion and put my skills into practice to create digital products and experiences. 
              My clients trust me for the design, development, and management of their web projects.
            </ScrambleText>
          </h3>
          <hr>
          <p class="text-start">
            As a freelancer, I collaborate with web agencies, companies of all sizes and industries, as well as individuals.
          </p>
        </div>

        <!-- Portrait droite -->
        <div class="col-12 col-lg-5 about-right">
          <div class="photo-portrait shape-blur-wrapper">
            <img src="/assets/img/portrait.jpg" alt="Portrait of Arnaud Monteux" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ScrambleText from "./ScrambleText.vue";
</script>

<style scoped>
.about {
  min-height: 100vh;
  padding: 100px 0px;
  display: flex;
  align-items: center;
}

.about-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media all and (min-width: 992px){
  .about-left {
    padding-right: 10%
  }

  h3.text-end {
    cursor: crosshair;
  }
}

.about-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.about .photo-portrait {
  width: 100%;
  height: 60vh;
  flex-shrink: 0;
  background: #C4C4C4;
  border-radius: .5rem;
}

.about .photo-portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: .5rem;
}

@media all and (min-width: 992px) {
  .about-left {
    border-right: 1px solid #F5EEE6;
    height: 80vh;
  }

  .about .photo-portrait {
    width: 90%;
  }
}

</style>