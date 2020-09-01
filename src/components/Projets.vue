<template>
  <div>
    <div>
      <h2>De Nombreux Défis Nous Attendent</h2>
      <h5>Nos futurs projets</h5>
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

        <v-card-title>Date</v-card-title>

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
    items: [
      {
        src:
          "https://trello-attachments.s3.amazonaws.com/5ecaa717b0402111e8f281c9/720x960/b09eebcbacdfb4629eb2db7c5e38dbb8/WhatsApp_Image_2020-05-22_at_11.32.21-3.jpeg.jpg"
      },
      {
        src:
          "https://trello-attachments.s3.amazonaws.com/5ecaa717b0402111e8f281c9/960x720/02097c29d88bbd2eeec3757c0c29f9f1/WhatsApp_Image_2020-05-22_at_11.32.21-4.jpeg.jpg"
      },
      {
        src:
          "https://trello-attachments.s3.amazonaws.com/5ecaa717b0402111e8f281c9/960x720/124d486b582ef6fde6b0132e932d3ac4/WhatsApp_Image_2020-05-22_at_11.32.22-2.jpeg.jpg"
      },
      {
        src:
          "https://trello-attachments.s3.amazonaws.com/5ecaa717b0402111e8f281c9/960x720/7fe82fe165634145a22a77fde1e6e84b/WhatsApp_Image_2020-05-22_at_11.32.22-3.jpeg.jpg"
      }
    ]
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
