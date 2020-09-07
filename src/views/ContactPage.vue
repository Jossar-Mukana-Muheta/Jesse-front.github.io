<template>
  <div class="container_page">
    <Contact />
  </div>
</template>

<script>
import Contact from "@/components/Contact";

export default {
  name: "ContactPage",
  components: {
    Contact
  }
};
</script>

<style lang="scss" scoped>
.container_page {
  margin-top: 30px;
}
</style>
