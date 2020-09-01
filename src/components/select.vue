<template>
  <div>
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
      class=" d-flex justify-center formulaire"
    >
      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Selectionner une catégorie']"
        label="Selectionner la catégorie"
        required
      ></v-select>

      <v-text-field
        v-model="titre"
        :counter="20"
        :rules="titreRules"
        label="Titre"
        required
      ></v-text-field>

      <input required type="file" ref="uploadBtn" @change="loadFile" />

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Valider
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    titre: "",
    titreRules: [
      v => !!v || "Le titre est requis",
      v => (v && v.length <= 20) || "Moins de 20 lettres"
    ],

    select: null,
    items: ["jeunesse", "education", "sante", "solidarite", "espoir"],
    lazy: false,
    file: ""
  }),

  methods: {
    loadFile() {
      this.file = this.$refs.uploadBtn.files[0];
    },

    validate() {
      // Création objet événement

      let data = {
        title: this.titre,
        categorie: this.select
      };

      let formData = new FormData();
      let selection = this.select;

      formData.append("image", this.file);
      formData.append(selection, JSON.stringify(data));
      formData.append("select", selection);

      this.$store.dispatch("AddImage", { formData, selection }).then(() => {});
    },

    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.formulaire {
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 24vw;
  }
}
</style>
