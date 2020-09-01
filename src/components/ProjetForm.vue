<template>
  <v-row align="center">
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="titre"
        :counter="30"
        :rules="titreRules"
        label="Titre"
        required
      ></v-text-field>
      <p>{{ titre }}</p>
      <v-text-field
        v-model="date"
        :counter="30"
        :rules="dateRules"
        label="Date(ex: Mai 2020)"
        required
      ></v-text-field>

      <v-col cols="12" md="12">
        <v-textarea
          v-model="description"
          :counter="400"
          :rules="descriptionRules"
          solo
          name="input-7-4"
          label="description du projets"
        ></v-textarea>
      </v-col>

      <v-file-input
        label="Ajouter une Photo"
        filled
        prepend-icon="mdi-camera"
      ></v-file-input>

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
  name: "ProjetForm",
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
      date: "",
      dateRules: [
        v => !!v || "Le sous-titre est obligatoire !",
        v =>
          (v && v.length <= 30) ||
          "Le titre ne doit pas dépasser 30 caractères."
      ],
      description: "",
      descriptionRules: [
        v => !!v || "Le texte est obligatoire !",
        v =>
          (v && v.length <= 400) ||
          "Le titre ne doit pas dépasser 400 caractères."
      ],
      url:
        "https://trello-attachments.s3.amazonaws.com/5ecaa717b0402111e8f281c9/960x720/02097c29d88bbd2eeec3757c0c29f9f1/WhatsApp_Image_2020-05-22_at_11.32.21-4.jpeg.jpg",
      checkbox: false
    };
  },

  methods: {
    validate() {
      // Création objet événement
      let projet = {
        title: this.titre,
        description: this.description,
        date: this.date,
        url: this.url
      };

      this.$store.dispatch("CreateOneProjet", projet).then(() => {
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
#admin-actualites > div:nth-child(3) > div > form {
  display: flex;
  flex-direction: column;
}

#admin-actualites > button {
  margin: 20px;
}

#admin-actualites > div:nth-child(3) > div > form > input {
  margin: 20px;
}

.row {
  display: flex !important;
  justify-content: center !important;
}

form {
  width: 60vw;
  margin-bottom: 30px;
}
</style>
