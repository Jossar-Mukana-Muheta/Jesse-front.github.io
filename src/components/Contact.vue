<template>
  <div>
    <div class="contact_container">
      <h2>Contact</h2>
      <h5>
        N'hésitez pas à nous contacter pour toutes vos demandes d'informations.
      </h5>
      <Espace />
    </div>
    <div class="contact_items">
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        >
          <v-card-title>FRANCE</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"
          ><v-icon>mdi-map-marker-radius</v-icon></v-card-subtitle
        >

        <v-card-text class="text--primary">
          <div>1 Avenue Jean Jaurè</div>

          <div>93430 Villetaneuse</div>
          <div>Centre socioculturel Clara Zetkin</div>
          <div><v-icon>mdi-gmail </v-icon> asso.jesse@hotmail.com</div>
        </v-card-text>
      </v-card>
      <v-card class="mx-auto" max-width="50vw">
        <v-card-actions class="white justify-center">
          <v-btn
            v-for="(social, i) in socials"
            :key="i"
            :color="social.color"
            class="white--text"
            fab
            icon
            small
            :href="social.lien"
          >
            <v-icon>{{ social.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import Espace from "@/components/Espace";

export default {
  name: "Contact",
  components: {
    Espace
  },
  data: () => ({
    socials: [
      {
        icon: "mdi-facebook",
        color: "indigo",
        lien:
          '"https://www.facebook.com/jesseassociation/?hc_ref=ARRwk3uHtXCMfjF97wWlB6F-8GF8_WFpXC04m57-a2ZcT79Hc8FiI-NmBqrNNx4tAtc&fref=nf&__tn__=kC-R"'
      },
      {
        icon: "mdi-instagram",
        color: "red darken-1",
        lien: "https://instagram.com/asso_jesse?igshid=18djmml509d5m"
      },
      {
        icon: "mdi-gmail",
        color: "red lighten-3",
        lien: "mailto:asso.jesse@hotmail.com"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.contact_items {
  /*background-image: url(https://images.unsplash.com/photo-1485841890310-6a055c88698a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @include desktop {
    flex-direction: row;
  }
}

.contact_container {
  margin-bottom: 50px;
}

h4 {
  margin: 30px;
}

v-card {
  margin: 50px !important;
}

#contact > div.contact_items > div {
  margin: 50px;
}
</style>
