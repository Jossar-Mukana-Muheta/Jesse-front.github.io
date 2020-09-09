<template>
  <v-row align="center">
    <v-form ref="form" v-model="valid" enctype="multipart/form-data">
      <v-text-field
        v-model="titre"
        :counter="30"
        :rules="titreRules"
        label="Titre"
        required
      ></v-text-field>
      <p>{{ titre }}</p>
      <v-text-field
        v-model="soustitre"
        :counter="45"
        :rules="soustitreRules"
        label="Sous-Titre"
        required
      ></v-text-field>

      <v-col cols="12" md="12">
        <v-textarea
          v-model="texte"
          :counter="800"
          :rules="texteRules"
          solo
          name="input-7-4"
          label="Texte"
        ></v-textarea>
      </v-col>

      <input type="file" ref="uploadBtn" @change="loadFile" />

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Valider
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Effacer formulaire
      </v-btn>
    </v-form>
  </v-row>
</template>

<script>
export default {
  name: "FormAdmin",
  data() {
    return {
      valid: true,
      titre: "",
      titreRules: [
        v => !!v || "Le titre est obligatoire !",
        v =>
          (v && v.length <= 30) ||
          "Le titre ne doit pas dépasser 30 caractères."
      ],
      soustitre: "",
      soustitreRules: [
        v => !!v || "Le sous-titre est obligatoire !",
        v =>
          (v && v.length <= 45) ||
          "Le titre ne doit pas dépasser 45 caractères."
      ],
      texte: "",
      texteRules: [
        v => !!v || "Le texte est obligatoire !",
        v =>
          (v && v.length <= 800) ||
          "Le titre ne doit pas dépasser 800 caractères."
      ],
      file: "",
      checkbox: false
    };
  },

  methods: {
    loadFile() {
      this.file = this.$refs.uploadBtn.files[0];
    },

    validate() {
      // Création objet événement

      let event = {
        title: this.titre,
        soustitle: this.soustitre,
        texte: this.texte
      };

      let formData = new FormData();

      formData.append("image", this.file);
      formData.append("event", JSON.stringify(event));

      this.$store.dispatch("CreateOneEvent", formData).then(() => {
        this.reset();
      });
    },

    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.row {
  display: flex !important;
  justify-content: center !important;
}

form {
  width: min-content;
  margin-bottom: 30px;
}

input,
button {
  margin-bottom: 20px;
}
</style>
