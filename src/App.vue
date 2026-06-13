<template>
  <div id="app">
    <Header />
    <main>
      <HeroHeader />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import HeroHeader from './components/HeroHeader.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style>

</style>
