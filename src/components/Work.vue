<template>
  <section class="work" id="work" data-aos="fade-up">
    <div class="container">
      <div class="row" data-aos="fade-up">
        <div class="col-12 col-lg-6">
          <h2>WORK.</h2>
        </div>
        <div class="col-12 col-lg-6 text-end">
          <h3>
            Discover some of my latest projects, where every line of code creates unique experiences.
          </h3>
        </div>
      </div>
      <hr /><hr />

      <div
        class="row g-4"
        v-for="(project, index) in projects"
        :key="index"
        data-aos="fade-up"
      >
        <div class="col-12 col-lg-6">
          <h4>{{ project.title }}</h4>
          <p>{{ project.description }}</p>
          <hr />
          <p class="technos">{{ project.technos }}</p>
          <hr />
          <a class="btn button" :href="project.link" target="_blank">SEE.</a>
        </div>
        <div class="col-12 col-lg-6">
          <div class="photo-project">
            <a :href="project.link" target="_blank">
              <img :src="project.image" :alt="project.alt" />
            </a>

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
          </div>
        </div>
        <hr />
      </div>
    </div>
  </section>
</template>

<script setup>
// Liste des projets (équivalent de ton tableau PHP)
import LiquidEther from './LiquidEther.vue'

const projects = [
  {
    title: "Luca Consulting",
    description:
      "As part of this collaboration with the Studio Bento, I was tasked with redesigning the website for the Luca Consulting, architectural agency. The development was carried out based on a detailed mockup and specifications.",
    technos:
      "Web Development | Full-Stack Development | WordPress | Custom Theme | Figma | HTML CSS JS PHP | ACF",
    link: "https://luca-consulting.com/",
    image: "/assets/img/works/luca.png",
    alt: "Project Luca Consulting",
  },
  {
    title: "Toulouse tournages",
    description:
      "An interactive web platform exploring the filming locations of the Toulouse region — from iconic landmarks to hidden spots — alongside the movies and productions that brought them to life on screen.",
    technos:
      "Web Development | Front-End Development | WordPress | Custom Theme | Figma | HTML CSS JS PHP | ACF",
    link: "https://www.toulouse-tournages.fr/",
    image: "/assets/img/works/toulouse-tournages.png",
    alt: "Project Toulouse tournages",
  },
  {
    title: "Provence Méditerranée",
    description:
      "Website for the Provence Méditerranée tourism office — showcasing the region's destinations, cultural heritage, and local experiences to visitors from across the world.",
    technos:
      "Web Development | Front-End Development | WordPress | Custom Theme | HTML CSS JS PHP | ACF",
    link: "https://www.provencemed.com/",
    image: "/assets/img/works/provence-mediterranee.png",
    alt: "Project Provence Méditerranée",
  },
  {
    title: "Paris & Co",
    description:
      "As part of this collaboration with the Sharing agency, I was tasked with redesigning the website for the Paris&Co association, the territorial innovation agency of Paris and its metropolitan area. The development was carried out based on a detailed mockup and specifications.",
    technos:
      "Web Development | Integration | WordPress | Elementor | Adobe Xd | HTML CSS JS PHP",
    link: "https://www.parisandco.com/",
    image: "/assets/img/works/paris-co.png",
    alt: "Project Paris&Co",
  },
  {
    title: "Lovell Consulting",
    description:
      "During this project in collaboration with the Sharing agency, I was tasked with developing the website for Lovell Consulting, a consulting firm specialized in risk management and IT security governance. The development was carried out based on a detailed mockup and specifications.",
    technos: "Web Development | Integration | WordPress | Elementor | Adobe Xd",
    link: "https://lovell-consulting.com/",
    image: "/assets/img/works/lovell.png",
    alt: "Project Lovell Consulting",
  },
  {
    title: "Actif Signal",
    description:
      "As part of this collaboration, I was tasked with creating a complete showcase website based on a mockup provided by the client: Actif Signal. The site was built using WordPress and the Elementor builder.",
    technos: "Web Development | Integration | WordPress | Elementor | Adobe Xd",
    link: "https://www.actif-signal.fr/",
    image: "/assets/img/works/actif-signal.png",
    alt: "Project Actif Signal",
  },
  // {
  //   title: "Mutuelle Française des Chemins de Fer",
  //   description:
  //     "During this project in collaboration with the Efficience Digitale agency, I was tasked with developing and designing part of the website for MFCF – Mutuelle Française des Chemins de Fer. The development was carried out based on a detailed mockup and specifications.",
  //   technos: "Web Development | Integration | Web design | WordPress | Elementor | Figma",
  //   link: "https://www.mutuelle-cheminots.fr/",
  //   image: "/assets/img/works/mfcf.png",
  //   alt: "Project MFCF",
  // },
  {
    title: "Groupe FIDEIP - Palamatic France",
    description:
      "During this project, in close collaboration with the web and marketing teams of the FIDEIP – Palamatic France group, I was tasked with developing a custom, tailor-made WordPress theme.",
    technos: "Web Development | Theme development | Integration | WordPress | DIVI",
    link: "https://www.fideip.fr/",
    image: "/assets/img/works/fideip.png",
    alt: "Project Groupe FIDEIP",
  },
]
</script>

<style scoped>
.work {
    padding: 100px 0px;
}

.work .row {
    margin: 40px 0;
}

.work .text-end {
  display: flex;
  align-items: flex-end;

}


.work .text-right {
    display: flex;
    align-items: flex-end;
}

.work .photo-project {
    width: 100%;
    height: 35vh;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
}

.work .photo-project a{
    height: 100%;
}

.work .photo-project img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
    transition: transform .8s ease-in-out;
}

.work .photo-project:hover img {
    transform: scale(1.025);
    /* Zoom au survol */
}


@media all and (min-width: 992px) {
    .work .photo-project {
        height: 45vh;
    }
}

.liquid-ether-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

</style>
