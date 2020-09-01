<template>
  <div>
    <h2>Qui Sommes-nous</h2>
    <h5>
      Les <span class="orange-text">enfants</span> d'aujoud'hui, sont
      <span class="orange-text">l'espoir</span> de DEMAIN !
    </h5>
    <Espace />
    <div id="text">
      <p>
        JESSE est une association à but non lucrative née d’une initiative
        sociale et solidaire à l’échelle locale menée dès 2011. Les premières
        actions de l’association se concentrent sur le social de proximité par
        le biais, notamment, de maraudes et de soutien aux familles les plus
        démunies.<br />
        C’est en 2014 que l’association est créée de façon officielle. Dans le
        même temps elle effectue sa première action d’envergure internationale
        en faveur d’un village au Sénégal, sur la thématique de la santé et du
        développement durable, montrant la volonté de JESSE d’œuvrer dans le
        monde.
      </p>
    </div>
  </div>
</template>

<script>
import Espace from "@/components/Espace";

export default {
  name: "About",
  components: {
    Espace
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.orange-text {
  color: orangered;
}

#text {
  background-color: $gray-apple;

  @include desktop {
    margin: 70px;
    padding: 40px;
  }
}
</style>
