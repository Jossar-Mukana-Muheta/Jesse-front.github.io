<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="orange lighten-2"
      dark
      disable-resize-watcher
    >
      <v-list nav dense>
        <v-list-item-group v-model="item" color="secondary">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/">
                  Accueil
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/GaleriePage">
                  Galerie
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/Contact">
                  Contact
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      height="150px"
      app
      color="#F57F17"
      dense
      dark
      shrink-on-scroll
      src="https://images.unsplash.com/photo-1570120090708-6014886db15d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
      fade-img-on-scroll
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="hidden-sm-and-down" text>
        <router-link to="/">
          Accueil
        </router-link>
      </v-btn>

      <v-btn class="hidden-sm-and-down" text>
        <router-link to="/GaleriePage">
          Galerie
        </router-link>
      </v-btn>
      <v-btn class="hidden-sm-and-down" text>
        <router-link to="/Contact">
          Contact
        </router-link>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      appTitle: "JESSE",
      drawer: false,
      item: 0
    };
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 10px !important;
}

.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  z-index: 1;
}

#app > div > div > header {
  z-index: 1;
}
</style>
