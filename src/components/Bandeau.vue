<template>
  <v-toolbar id="tool" color="white" dark class="d-flex justify-center mb-6 ">
    <v-toolbar-items class="flex-sm-wrap">
      <v-btn text color="black">
        <h2><span class="colored">J</span>eunesse</h2>
      </v-btn>

      <v-divider inset vertical></v-divider>

      <v-btn text color="black">
        <h2><span class="colored">E</span>ducation</h2>
      </v-btn>

      <v-divider inset vertical></v-divider>

      <v-btn text color="black">
        <h2><span class="colored">S</span>anté</h2>
      </v-btn>

      <v-btn text color="black">
        <h2><span class="colored">S</span>olidarite</h2>
      </v-btn>

      <v-btn text color="black">
        <h2><span class="colored">E</span>spoir</h2>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Bandeau"
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.v-btn.v-size--default,
.v-btn.v-size--large {
  font-size: 0.4rem;

  @include desktop {
    font-size: 1.2rem;
  }
}
.colored {
  color: $brand-primary;
  font-style: italic;
}
</style>
