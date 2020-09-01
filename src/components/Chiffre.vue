<template>
  <div id="aboutUS_chiffre">
    <div class="aboutUs_item">
      <i class="fa fa-smile-o"></i>
      <h3>5k</h3>
      <span>Récoltés</span>
    </div>
    <div class="aboutUs_item">
      <i class="fa fa-trophy"></i>
      <h3>13</h3>
      <span>Projets</span>
    </div>
    <div class="aboutUs_item">
      <i class="fa fa-heartbeat"></i>
      <h3>800</h3>
      <span>Personnes aidés</span>
    </div>
    <div class="aboutUs_item">
      <i class="fa fa-users"></i>
      <h3>15</h3>
      <span>Bénévoles</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chiffre",

  data: () => ({}),

  mounted: function() {
    let bandeau = document.getElementsByClassName("aboutUs_item");

    window.addEventListener("scroll", function() {
      for (let i = 0; i < bandeau.length; i++) {
        if (window.pageYOffset >= bandeau[i].offsetTop - 400) {
          bandeau[i].style.opacity = "1";
        } else {
          bandeau[i].style.opacity = "0";
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

#aboutUS_chiffre {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
  .aboutUs_item {
    display: flex;
    align-items: center;
    flex-direction: column;
    border: solid whitesmoke 1px;
    border-radius: 5px;
    padding: 20px;
    min-width: 150px;
    margin: 20px;
    background-color: $gray-apple;
    opacity: 0;
    transition: all 1s ease-in-out;

    .fa {
      color: $brand;
    }

    i {
      font-size: 43px !important;
    }
  }
}
</style>
