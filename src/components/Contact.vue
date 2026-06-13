<template>
  <section class="contact" id="contact" data-aos="fade-up" aria-label="Contact">
    <div class="container">
      <div class="row flex-column-reverse flex-sm-row">
        <div class="col-12 col-sm-6 order-2 order-sm-2">
          <h2>CONTACT.</h2>
        </div>
        <div class="col-12 col-sm-6 order-1 order-sm-1 text-right">
          <div class="text-right">
            <h3>For more information,<br> feel free to contact me.</h3>
          </div>
        </div>
      </div>
      <hr>
      <hr>
      <div class="row">
        <div class="col-12 col-lg-6">
            <p>For any questions regarding your project, I am at your disposal.
                Feel free to contact me via the email below or check out my Malt profile.
                I would be happy to discuss with you.
            </p>
            <br>
            <!-- EMAIL ROW -->
            <hr>
            <div class="row row-contacts">
              <div class="col">
                <h3>EMAIL.</h3>
              </div>
              <div class="col">
                <a class="btn button" href="mailto:arnaudmonteux@gmail.com" aria-label="Send an email">SEA.</a>
              </div>
            </div>
            <!-- GITHUB ROW -->
            <hr>
            <div class="row row-contacts">
              <div class="col">
                <h3>Github.</h3>
              </div>
              <div class="col">
                <a class="btn button" href="https://github.com/Arnaud-M07" target="_blank" rel="noopener noreferrer" aria-label="View GitHub profile">SEX.</a>
              </div>
            </div>
            <hr>

            <!-- MALT ROW -->
            <div class="row row-contacts">
              <div class="col">
                <h3>MALT.</h3>
              </div>
              <div class="col">
                <a class="btn button" href="https://www.malt.fr/profile/arnaudmonteux" target="_blank" aria-label="View Malt profile">SUN.</a>
              </div>
            </div>
            <hr>
        </div>
        <!-- COL PHOTO -->
        <div class="col-12 col-lg-6">
          <div class="wrapper">
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
                style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import LiquidEther from './LiquidEther.vue'
</script>

<style scoped>
  .contact {
    padding: 1.875rem 0;
  }

  .contact .row {
    margin-top: 2.5rem;
  }

  .contact .row-contacts {
    margin: 0;
    display: flex;
    align-items: center;
  }

  .contact .text-right {
      display: flex;
      align-items: flex-end;
  }

  .contact .col-list {
      display: flex;
      align-items: center;
      margin-bottom: 2.5rem;
  }

  .wrapper {
    position: relative;
    min-height: 435px;
    border-radius: 1rem;
    overflow: hidden;
  }

  .liquid-ether-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
