<template>
  <div>
    <div class="container_items">
      <v-hover class="item" v-for="(card, x) in cardItems" :key="x">
        <template v-slot="{ hover }">
          <v-card class="mx-auto" max-width="200" :color="card.color">
            <v-btn
              text
              color="deep-purple accent-4"
              @click="choiceGalerie(card.titre)"
              :class="`elevation-${hover ? 24 : 6}`"
              class="transition-swing"
            >
              <v-img
                height="50"
                width="50"
                :src="require(`../assets/${card.src}`)"
                contain
              ></v-img>
              <br />
              {{ card.titre }}
            </v-btn>
          </v-card>
        </template>
      </v-hover>
    </div>

    <div class="carousel">
      <v-carousel height="90vh">
        <v-carousel-item
          v-for="(item, i) in getJeunesse"
          :key="i"
          :src="item.imageUrl"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalerieItems",

  data() {
    return {
      selection: "Jeunesse",

      cardItems: [
        {
          src: "jeunesse.png",
          titre: "jeunesse",
          color: "#9ec1cf"
        },
        {
          src: "education.png",
          titre: "education",
          color: "#9ee09e"
        },
        {
          src: "sante.png",
          titre: "sante",
          color: "#cc99c9"
        },
        {
          src: "solidarite.png",
          titre: "solidarite",
          color: "#feb144"
        },
        {
          src: "espoir.png",
          titre: "espoir",
          color: "#ff6663"
        }
      ]
    };
  },

  methods: {
    choiceGalerie(data) {
      this.selection = data;
      this.$store.dispatch("getAllJeunesse", this.selection).then(() => {});
    }
  },

  computed: {
    getJeunesse() {
      let result = "";

      switch (this.selection) {
        case "jeunesse":
          result = this.$store.state.jeunesse;
          break;
        case "education":
          result = this.$store.state.education;
          break;
        case "solidarite":
          result = this.$store.state.solidarite;
          break;
        case "sante":
          result = this.$store.state.sante;
          break;
        case "espoir":
          result = this.$store.state.espoir;
          break;
        default:
          result = this.$store.state.jeunesse;
      }

      return result;
    }
  },

  created() {
    this.$store.dispatch("getAllJeunesse", this.selection).then(() => {});
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

h1 {
  margin: 50px;
}

.carousel {
  margin: 40px;
  display: flex;
  justify-content: center;

  div:first-child {
    max-width: 80vw;
  }
}

.container_items {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.item {
  margin: 10px;
}

img {
  height: 150px;
}
</style>
