<template>
  <v-carousel
    class="carousel"
    cycle
    min-height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(link, i) in image" :key="i" :src="link.src">
      <v-row class="fill-height" align="center" justify="center">
        <div class="display-3">{{ link.text }}</div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      image: [
        {
          src:
            "https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2534&q=80",
          text: "Jeunesse"
        },
        {
          src:
            "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          text: "Espoir"
        },
        {
          src:
            "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          text: "Solidarité"
        },
        {
          src:
            "https://images.unsplash.com/photo-1547082688-9077fe60b8f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
          text: "Santé"
        },
        {
          src:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1309&q=80",
          text: "Education"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.carousel {
  height: 600px;
}
</style>
