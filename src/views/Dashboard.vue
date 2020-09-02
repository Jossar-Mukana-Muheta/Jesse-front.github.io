<template>
  <div class="container_page">
    <div class="sidebar">
      <div>
        <div class="sidebar_item">
          <v-card-title class="text-center">Dashboard</v-card-title>
          <div>
            <v-card class="mx-auto" max-width="300" tile dark>
              <v-list rounded>
                <v-subheader>Catégorie</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item v-for="(itemMenu, i) in listeMenu" :key="i">
                    <v-list-item-icon>
                      <v-icon v-text="itemMenu.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="itemMenu.text"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
            <div class="my-2">
              <v-btn small color="error" @click="logout()">Déconnexion</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <h1>Espace Administrateur</h1>

      <div id="admin-container">
        <div id="admin-actualites">
          <h2>Liste de vos événements</h2>
          <div class="container_actualites">
          <div class="items_actualites">
            <v-card dark v-for="(item_event, i) in event" :key="i" class="card">
              <div
                class="d-flex flex-column align-content-center flex-wrap justify-space-around"
              >
                <div>
                  <h5
                    v-text="item_event.title"
                  ></h5>

                  <p
                    v-text="item_event.soustitle"
                  ></p>
                  <v-spacer></v-spacer>
                  <p>{{ item_event.texte }}</p>
                </div>

                <v-avatar class="ma-3" size="70" tile>
                  <v-img :src="item_event.imageUrl"></v-img>
                </v-avatar>
                <div class="my-2">
                  <v-btn
                    small
                    color="error"
                    @click="deleteEvent(item_event._id)"
                    >Supprimer</v-btn
                  >
                </div>
              </div>
            </v-card>
          </div>
          <div class="container_formulaire">
            <h2>Ajouter un évenement</h2>
            <div class="container_formEvent">
              <FormAdmin />
            </div>
          </div>
        </div>
        </div>
        <div id="admin-projets">
          <h2>Liste de vos Projets</h2>
          <div class="container_projet">
            <div class="item_projets">
          <v-col v-for="(itemProjet, x) in projet" :key="x" cols="3">
            <v-card dark>
              <div class="d-flex flex-wrap justify-space-around">
                <div>
                  <h5
                    v-text="itemProjet.title"
                  ></h5>

                  <p
                    v-text="itemProjet.description"
                  ></p>
                  <v-spacer></v-spacer>
                  <p>{{ itemProjet.date }}</p>
                </div>

                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="itemProjet.imageUrl"></v-img>
                </v-avatar>
                <div class="my-2">
                  <v-btn
                    small
                    color="error"
                    @click="deleteProjet(itemProjet._id)"
                    >Supprimer</v-btn
                  >
                </div>
              </div>
            </v-card>
          </v-col>
          </div>
          <div class="container_formulaire2">
            <h2>Ajouter un projet</h2>
            <div class="container_formEvent">
            <ProjetForm />
            </div>
          </div>
          </div>
        </div>
        <div class="galerie_container">
          <div>
            <h2>Ajouter une photo à la galerie</h2>
            <div class="galerie_container">
              <Select />
            </div>
          </div>
        </div>
      </div>
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
      { text: "Galerie Photo", icon: "mdi-flag" }
    ]
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
    }
  },

  computed: {
    event() {
      return this.$store.state.evenements;
    },

    projet() {
      return this.$store.state.projets;
    }
  },

  created() {
    this.$store.dispatch("getAllEvent");
    this.$store.dispatch("getAllProjet");
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

p{
  font-size: 13px;
  margin: 0px;
}

.container_page {
  display: flex;
  flex-wrap: nowrap;
}

.body {
  width: 80vw;
}

.sidebar {
  width: 20vw;
  background-color: #ffb74d;

  .sidebar_item {
    display: flex;
    flex-direction: column;
    position: fixed;
  }
}

.container_actualites,.container_projet{
  display: flex;
}

h1,
h2 {
  margin: 50px;
}

.admin-actualites {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.items_actualites,.item_projets {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 60%;

  .card {
    margin: 5px;
    @include desktop {
      width: 40%;
      height: 300px;
      
    }
  }

  .container_formEvent {
    display: flex;
    justify-content: center;
    margin: 30px !important;
  }
}

.container_formulaire,.container_formulaire2{
  width: 40%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: $gray-apple;
  padding: 5px;
  margin: 5px;
}

#admin-actualites > div > div.container_formulaire > div{
  margin: 30px;
}

#admin-projets > div > div.container_formulaire2 > div{
  margin: 30%;
}
.galerie_container{
  input{
    margin: 30px !important;
  }
}



</style>
