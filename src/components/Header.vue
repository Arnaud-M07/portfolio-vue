<template>
  <header>
    <nav class="navbar navbar-expand-lg header header-hide">
      <div class="container">
        <div class="d-flex">
          <a class="navbar-brand white" href="#hero-banner">Arnaud<br>Monteux</a>
          <a class="navbar-taggline d-none d-md-block" href="#hero-banner">Developer & Designer</a>
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
            header.style.backgroundColor = 'rgba(20, 20, 20, 0.3)'; // Modifier la couleur de fond
            header.style.backdropFilter = 'blur(10px)'; // Modifier le filtre de fond
          } else {
            header.classList.add('header-show');
            header.style.backgroundColor = 'transparent'; // Réinitialiser la couleur de fond
            header.style.backdropFilter = 'none'; // Réinitialiser le filtre de fond
          }
      } else {
        header.classList.remove('header-show');
        header.style.backgroundColor = 'transparent'; // Réinitialiser la couleur de fond
        header.style.backdropFilter = 'none'; // Réinitialiser le filtre de fond
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
      transition: transform .8s ease, background-color .8s ease;
      transform: translateY(0);
  }

  .header-show {
      transform: translateY(-100%);
  }

  header .container {
      /* border-bottom: 1px solid #F3DBC6; */
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
      background-color: transparent;
      /* background-color: #1414144d; */
      /* backdrop-filter: blur(10px); */
      /* box-shadow: 0px 2px 10px #1414144d; */
  }

  .navbar-brand {
      font-family: "Migra";
      font-size: 20px;
      line-height: 16px;
      display: flex;
      align-items: center;
      color: var(--white);
      transition: .2s ease-in-out;
  }

  .navbar-brand:hover {
      color: var(--orange);
      /* transition: .3s ease-in-out; */
  }



  .navbar-taggline {
      font-family: "Tusker-grotesk";
      letter-spacing: 0;
      text-transform: uppercase;
      color: var(--white);
      text-decoration: none;
      font-size: 32px;
      margin-bottom: 0;
      transition: letter-spacing 0.5s ease-in-out;
  }

  .navbar-taggline:hover {
      letter-spacing: 0.20em;
  }

  header nav .nav-link {
      font-family: "Tusker-grotesk-var2";
      color: var(--white);
      text-transform: uppercase;
      font-size: 16px;
      padding-right: 0;
  }

  header nav .nav-link:hover {
      color: var(--orange);
  }
</style>
