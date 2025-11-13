<template>
  <section class="skills">
    <ScrollVelocity
       :texts="[
        'PHP JS GULP SCSS GIT FIGMA',
        'SCSS VUE GULP WORDPRESS NPM',
      ]"
      :velocity="20"
      :damping="50"
      :stiffness="400"
      :velocity-mapping="{ input: [0, 1000], output: [0, 5] }"
      class-name="custom-scroll-text"
      parallax-class-name="custom-parallax"
      scroller-class-name="custom-scroller"
    />


  </section>
</template>

<script setup lang="ts">

import LiquidEther from './LiquidEther.vue'
  import ScrollVelocity from "./ScrollVelocity.vue";
</script>

<style scoped>  
.skills {
  position: relative;
}
.liquid-ether-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>