<template>
  <div class="gallerie-containter">
    <div>
      <h2>Gallerie Photo</h2>
      <h5>Visionnez nos plus beaux souvenirs.</h5>
      <Espace />
    </div>
    <div class="gallerie_items">
      <GalerieItems />
    </div>
  </div>
</template>

<script>
import Espace from "@/components/Espace";
import GalerieItems from "@/components/GalerieItems";

export default {
  name: "Galerie",
  components: {
    Espace,
    GalerieItems
  },
  computed: {
    galerieStore() {
      return this.$store.state.destination;
    }
  },
  data: function() {
    return {};
  },

  methods: {
    enterGalerie() {
      this.$router.push("/GaleriePage");
    }
  }
};
</script>

<style lang="scss">
@import "../scss/main.scss";

.gallerie-containter {
  margin-top: 30px;
}
.gallerie_items {
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
  margin-top: 30px;
}

#galerie > div.gallerie_items > div > div > div {
  margin: 20px;
}

.btn_plus {
  position: absolute;
  z-index: 36;
  bottom: vh;
  top: 45%;
  left: 41%;
  display: flex;
  flex-direction: column;

  button {
    @include desktop {
      height: 70px !important;
      width: 70px !important;
    }
  }

  @include desktop {
    left: 45%;
  }

  &:hover h3 {
    opacity: 1;
  }

  h3 {
    color: orange;
    transition: all 1s ease-in-out;
    opacity: 0;
  }
}
</style>
