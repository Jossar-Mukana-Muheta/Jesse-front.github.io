<template>
  <div class="gallerie-containter">
    <div>
      <h2>Gallerie Photo</h2>
      <h5>Visionnez nos plus beaux souvenirs.</h5>
      <Espace />
    </div>
    <div class="gallerie_items">
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card>
            <v-container fluid>
              <v-row>
                <div class="btn_plus">
                  <v-btn
                    class="mx-2 buttonPlus"
                    fab
                    dark
                    color="orange"
                    @click="enterGalerie"
                  >
                    <v-icon dark>mdi-plus</v-icon>
                  </v-btn>
                  <h3>Visitez</h3>
                </div>
                <v-col
                  v-for="(image, itemImage) in $data.image"
                  :key="itemImage"
                  class="d-flex child-flex"
                  cols="4"
                >
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="image.url"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                            >J</v-progress-circular
                          >
                        </v-row>
                      </template>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Espace from "@/components/Espace";

export default {
  name: "Galerie",
  components: {
    Espace
  },
  computed: {
    galerieStore() {
      return this.$store.state.destination;
    }
  },
  data: function() {
    return {
      image: [
        {
          url:
            "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1593113616828-6f22bca04804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1508779544523-dd1b27685be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1404&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1521220609214-a8552380c7a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1516510717845-1d1758eb0824?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
      ]
    };
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
  min-height: 400px;
  background-image: url(https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
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

  button{

    @include desktop{
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
