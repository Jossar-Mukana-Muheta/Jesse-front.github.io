<template>
  <v-footer dark padless width="100%">
    <v-card
      flat
      tile
      class="orange darken-2 lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="(iconItem, item) in icons"
          :key="item"
          class="mx-4 white--text"
          icon
          :href="iconItem.link"
        >
          <v-icon size="24px">{{ iconItem.social }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Suivez-nous sur les différents réseaux sociaux ou nous contacter par
        mail.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Association JESSE</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        social: "mdi-facebook",
        link:
          "https://www.facebook.com/jesseassociation/?hc_ref=ARRwk3uHtXCMfjF97wWlB6F-8GF8_WFpXC04m57-a2ZcT79Hc8FiI-NmBqrNNx4tAtc&fref=nf&__tn__=kC-R"
      },
      { social: "mdi-gmail", link: "mailto:asso.jesse@hotmail.com" },
      {
        social: "mdi-instagram",
        link: "https://instagram.com/asso_jesse?igshid=18djmml509d5m"
      }
    ]
  })
};
</script>
