<template>
  <div id="don_section">
    <h2>Faire un Don</h2>
    <p>Vous souhaitez nous soutenir sur l'un de nos projets, Faites un don !</p>
    <div class="my-2">
      <v-btn
        elevation="10"
        depressed
        color="orange"
        href="https://www.paypal.com/paypalme/AssoJesse"
        ><i class="fa fa-heart"> Je soutiens</i></v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Don"
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#don_section {
  background-image: url("../assets/hands.jpg");
  background-size: contain;
  background-attachment: fixed;
  background-position: center;
  height: 400px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include desktop {
    background-size: cover;
  }
}

h2,
p,
i {
  color: white;
}
</style>
