<template>
  <div id="don_section">
    <h2>Faire un Don</h2>
    <p>Vous souhaitez nous soutenir sur l'un de nos projets, Faites un don !</p>
    <div class="my-2">
      <v-btn
        elevation="10"
        depressed
        color="orange"
        href="https://www.cotizup.com/asso-jesse"
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
#don_section {
  background-image: url("../assets/hands.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 400px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2,
p,
i {
  color: white;
}
</style>
