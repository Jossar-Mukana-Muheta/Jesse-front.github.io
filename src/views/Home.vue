<template>
  <div class="home">
    <img id="logo" src="../assets/logo.png" alt="logo" />
    <Bandeau id="bandeau" />
    <Carousel id="carousel" />
    <About id="About" />
    <Chiffre />
    <Actualites id="actualites" />
    <Don />
    <Projet />
    <Galerie id="galerie" />
    <Contact id="contact" />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel";
import Bandeau from "@/components/Bandeau";
import About from "@/components/About";
import Chiffre from "@/components/Chiffre";
import Actualites from "@/components/Actualites";
import Don from "@/components/Don";
import Projet from "@/components/Projets";
import Galerie from "@/components/Galerie";
import Contact from "@/components/Contact";

export default {
  name: "Home",
  components: {
    Carousel,
    Bandeau,
    About,
    Chiffre,
    Actualites,
    Don,
    Projet,
    Galerie,
    Contact
  },
  mounted: function() {}
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#chiffre,
#About,
#actualites,
#contact {
  margin-top: 50px;
}

#contact {
  margin-bottom: 100px;
}
#logo {
  height: 160px;
  position: relative;
  top: -45px;
  background-color: white;
  border-radius: 50%;
  z-index: 3;

  @include desktop {
    min-height: 250px;
  }
}
</style>
