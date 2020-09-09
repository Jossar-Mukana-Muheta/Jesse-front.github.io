<template>
  <div class="container_page">
    <div class="deconnexion">
      <v-btn
                      small
                      color="error"
                      @click="logout()"
                      >Deconnexion</v-btn
                    >
    </div>
    <div class="evenements">
      <h2>Gestion des Evenements</h2>
      <div class="evenements_content">
        <div class="form">
          <h4>Ajouter un événements</h4>
          <FormAdmin />
        </div>
        <div class="liste">
          <h4>Liste de vos événements</h4>
          <div class="text--primary" 
          v-for="(item_event, i) in event"
                :key="i"
          >
            <v-hover>
              <template v-slot="{ hover }">
                <div
                  :class="`elevation-${hover ? 24 : 6}`"
                  class="mx-auto pa-6 transition-swing card_item"
                >
                  <h5 v-text="item_event.title"></h5>
                  <p>{{item_event.soustitle}}</p>
                  <p>{{item_event.texte}}</p>
                  <v-avatar class="ma-3" size="70" tile>
                    <v-img :src="item_event.imageUrl"></v-img>
                  </v-avatar>
                   <v-btn
                      small
                      color="error"
                      @click="deleteEvent(item_event._id)"
                      >Supprimer</v-btn
                    >
                </div>
              </template>
            </v-hover>
          </div>
        </div>
      </div>
    </div>
  
      <div class="projets">
      <h2>Gestion des Projets</h2>
      <div class="projets_content">
        <div class="form">
          <h4>Ajouter un projet</h4>
          <ProjetForm />
        </div>
        <div class="liste">
          <h4>Liste de vos projets</h4>
          <div class="text--primary" 
          v-for="(item_event, i) in projet"
                :key="i"
          >
            <v-hover>
              <template v-slot="{ hover }">
                <div
                  :class="`elevation-${hover ? 24 : 6}`"
                  class="mx-auto pa-6 transition-swing card_item"
                >
                  <h5 v-text="item_event.title"></h5>
                  <p>{{item_event.soustitle}}</p>
                  <p>{{item_event.texte}}</p>
                  <v-avatar class="ma-3" size="70" tile>
                    <v-img :src="item_event.imageUrl"></v-img>
                  </v-avatar>
                   <v-btn
                      small
                      color="error"
                      @click="deleteProjet(item_event._id)"
                      >Supprimer</v-btn
                    >
                </div>
              </template>
            </v-hover>
          </div>
        </div>
      </div>
    
    </div>
    <div class="galerie">
      <h2>Gestion de la galerie Photo</h2>
      <Select/>
    </div>
  </div>
</template>

<script>
import FormAdmin from "@/components/FormAdmin";
import ProjetForm from "@/components/ProjetForm";
import Select from "@/components/select";

export default {
  name: "Dashboard",
  components: {
    FormAdmin,
    ProjetForm,
    Select
  },

  data: () => ({
    listeMenu: [
      { text: "Evenements", icon: "mdi-clock" },
      { text: "Projets", icon: "mdi-account" },
      { text: "Galerie Photo", icon: "mdi-flag" },
    ],
  }),

  methods: {
    deleteEvent: function(id) {
      let identifiant = id;
      this.$store.dispatch("deleteOneEvent", identifiant);
    },
    deleteProjet: function(id) {
      let identifiant = id;
      this.$store.dispatch("deleteOneProjet", identifiant);
    },
    logout: function() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },

  computed: {
    event() {
      return this.$store.state.evenements;
    },

    projet() {
      return this.$store.state.projets;
    },
  },

  created() {
    this.$store.dispatch("getAllEvent");
    this.$store.dispatch("getAllProjet");
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.container_page {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  
}

.evenements_content, .projets_content {
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;

  @include desktop{
    flex-direction: row;
  }

  .form {
    @include desktop {
      width: 40%;
    }
  }
  .liste {
    margin-bottom: 20px;
    @include desktop {
      width: 60%;
    }
  }
}

.card_item{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
}

h4{
  margin-bottom: 10px;
  text-decoration: underline;
}

.projets{
  background-color: $gray-apple;
}

p {
  font-size: 13px;
  margin: 0px;
}

h2{
  margin: 50px;
}

.deconnexion{
  margin-top: 20px;
  text-align: right;
}

</style>
