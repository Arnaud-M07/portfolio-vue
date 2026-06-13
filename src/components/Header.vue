<template>
  <header>
    <nav class="navbar navbar-expand-lg header header-hide" aria-label="Main navigation">
      <div class="container">
        <div class="d-flex">
          <a class="navbar-brand white" href="#hero-header">Arnaud<br>Monteux</a>
          <a class="navbar-taggline d-none d-md-block" href="#hero-header">Developer & Designer</a>
        </div>
        <div>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#about">About.</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#work">Work.</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact.</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Fonction - Masquer le header au scroll
function masquerHeaderAuScroll() {
    let prevScrollPos = window.scrollY;
    let header = document.querySelector('.header-hide');
    let navbar = document.querySelector('.navbar');
    let scrollThresholdNavbar = 300; // Ajuster la distance de déclenchement pour la navbar
    let scrollThresholdBackground = 100; // Ajuster la distance de déclenchement pour le background

    window.onscroll = function () {
      let currentScrollPos = window.scrollY;

      if (currentScrollPos > scrollThresholdNavbar) {
        if (prevScrollPos > currentScrollPos) {
          navbar.classList.remove('header-show');
        } else {
          navbar.classList.add('header-show');
        }
      } else {
        navbar.classList.remove('header-show');
      }

      if (currentScrollPos > scrollThresholdBackground) {
          if (prevScrollPos > currentScrollPos) {
            header.classList.remove('header-show');
          } else {
            header.classList.add('header-show');
          }
      } else {
        header.classList.remove('header-show');
      }

      prevScrollPos = currentScrollPos;
    };
}

//  ??????
document.addEventListener("DOMContentLoaded", function () {
    masquerHeaderAuScroll();
});

</script>

<style scoped>

  /* Header scroll effect */
  .header-hide {
    transition: transform .8s ease;
    transform: translateY(0);
  }
  
  .header-show {
    transform: translateY(-100%);
  }

  header .container {
    padding: 0px;
  }

  .navbar {
    z-index: 100;
    padding-left: 5vw;
    padding-right: 5vw;
    position: fixed;
    top: 0;
    width: 100%;
    height: 10vh;
    background-color: rgba(20, 20, 20, 0.3);
    backdrop-filter: blur(10px);
  }

  .navbar-brand {
    font-family: "Migra";
    font-size: 1.25rem;
    line-height: 1rem;
    display: flex;
    align-items: center;
    color: var(--white);
    transition: .2s ease-in-out;
  }

  .navbar-brand:hover {
    color: var(--orange);
  }



  .navbar-taggline {
    font-family: "Tusker-grotesk";
    letter-spacing: 0;
    text-transform: uppercase;
    color: var(--white);
    text-decoration: none;
    font-size: 2rem;
    margin-bottom: 0;
    transition: letter-spacing 0.5s ease-in-out;
  }

  .navbar-taggline:hover {
    letter-spacing: .2rem;
  }

  header nav .nav-link {
    font-family: "Tusker-grotesk-var2";
    color: var(--white);
    text-transform: uppercase;
    font-size: 1rem;
    padding-right: 0;
  }

  header nav .nav-link:hover {
    color: var(--orange);
  }
</style>
