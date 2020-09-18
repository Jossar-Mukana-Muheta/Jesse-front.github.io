<template>
  <v-app>
    <v-main>
      <TheNavbar />
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// @ is an alias to /src
import TheNavbar from "@/components/TheNavbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    TheNavbar,
    Footer
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 3px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
