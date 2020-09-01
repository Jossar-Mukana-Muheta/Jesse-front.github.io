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
            "https://trello-attachments.s3.amazonaws.com/5ecaa09e24808c133677963a/1080x670/07abf088c08c6d9406c26a380878625b/WhatsApp_Image_2020-05-22_at_11.55.39.jpeg.jpg",
          text: "Jeunesse"
        },
        {
          src:
            "https://trello-attachments.s3.amazonaws.com/5ebac847ca3e243615b35294/5eca9faec8e56474b2758498/a12c6222bebfc5ed72fe674bfe983ea1/WhatsApp_Image_2020-05-17_at_15.11.22.jpeg",
          text: "Espoir"
        },
        {
          src:
            "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          text: "Solidarité"
        },
        {
          src:
            "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
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
