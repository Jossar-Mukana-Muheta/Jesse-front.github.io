<template>
  <div>
    <div>
      <h2>De Nombreux Défis Nous Attendent</h2>
      <h5>Nos projets</h5>
      <Espace />
    </div>
    <div id="projet_div">
      <v-card
        :loading="loading"
        class="mx-auto my-12 carditems"
        max-width="374"
        v-for="(projet_item, i) in projet"
        :key="i"
      >
        <v-carousel>
          <v-carousel-item
            :src="projet_item.imageUrl"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>

        <v-card-title>{{ projet_item.title }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ml-4"></div>
          </v-row>
          <div>
            <ul>
              <li>
                {{ projet_item.description }}
              </li>
            </ul>
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Thématique</v-card-title>

        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>{{ projet_item.date }}</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import Espace from "@/components/Espace";

export default {
  name: "CartProjet",
  components: {
    Espace
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  },
  computed: {
    projet() {
      return this.$store.state.projets;
    }
  },

  created() {
    this.$store.dispatch("getAllProjet");
  }
};
</script>

<style lang="scss" scoped>
.my-4 {
  color: black;
}

#projet_div {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
}
</style>
