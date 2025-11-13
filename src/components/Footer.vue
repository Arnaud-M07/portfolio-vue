<template>
  <footer>
    <p>Arnaud Monteux © {{ currentYear }}</p>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Générer dynamiquement l'année côté client
const currentYear = new Date().getFullYear()
</script>

<style scoped>
footer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 20px;
}
</style>