<template>
  <div id="actualites_container">
    <h2>De Nouveaux Horizons</h2>
    <h5>Découvrez ici nos dernière actualités</h5>
    <Espace />
    <div class="card_container">
      <v-hover v-for="(card, cr) in event" :key="cr">
        <template v-slot="{ hover }">
          <v-card
            class="mx-auto cardItem transition-swing"
            :class="`elevation-${hover ? 24 : 6}`"
            max-width="400"
          >
            <v-img
              :src="card.imageUrl"
              height="200px"
              class="white--text align-end"
            >
              <v-card-title>
                {{ card.title }}
              </v-card-title>
            </v-img>

            <v-card-subtitle>
              {{ card.soustitle }}
            </v-card-subtitle>

            <v-divider></v-divider>

            <v-card-text>
              {{ card.texte }}
            </v-card-text>
          </v-card>
        </template>
      </v-hover>
    </div>
  </div>
</template>

<script>
import Espace from "@/components/Espace";

export default {
  name: "Actualites",
  components: {
    Espace
  },
  data: () => ({
    show: false
  }),
  methods: {
    increment() {
      this.$store.commit("INCREMENT");
    }
  },

  mounted: function() {
    let bandeau = document.getElementsByClassName("v-card");

    window.addEventListener("scroll", function() {
      for (let i = 0; i < bandeau.length; i++) {
        if (window.pageYOffset >= bandeau[i].offsetTop - 500) {
          bandeau[i].style.opacity = "1";
        } else {
          bandeau[i].style.opacity = "0";
        }
      }
    });
  },
  created() {
    this.$store.dispatch("getAllEvent");
  },

  computed: {
    event() {
      return this.$store.state.evenements;
    },

    projet() {
      return this.$store.state.projets;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#actualites_div > div {
  margin-bottom: 30px;
}

.card_container {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 100px;

  @include desktop {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .cardItem {
    margin-top: 30px;
  }
}

v-card {
  transition: all 3s ease-in-out;
  opacity: 0;
}
</style>
