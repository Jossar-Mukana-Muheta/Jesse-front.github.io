<template>
  <div id="actualites_container">
    <h2>De Nouveaux Horizons</h2>
    <h5>Découvrez ici nos dernière actualités</h5>
    <Espace />
    <div class="card_container">
      <v-card
        elevation="20"
        class="mx-auto cardItem"
        max-width="400"
        v-for="(card, cr) in event"
        :key="cr"
      >
        <v-img :src="card.imageUrl" height="400px"></v-img>

        <v-card-title>
          {{ card.title }}
        </v-card-title>

        <v-card-subtitle>
          {{ card.soustitle }}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange" text>
            Details ...
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{ card.texte }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
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

  @include desktop {
    flex-direction: row;
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
