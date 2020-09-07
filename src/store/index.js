import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.prototype.$axios = axios;
const baseURL = "http://localhost:8080/";

//import authHeader from "../auth/auth-header";
axios.defaults.withCredentials = true;

Vue.use(Vuex);

let user = JSON.parse(localStorage.getItem("user"));

export default new Vuex.Store({
  state: {
    evenements: null,
    projets: null,
    accessToken: null,
    jeunesse: null,
    education: null,
    solidarite: null,
    sante: null,
    espoir: null
  },

  getters: {
    autorise() {
      return this.$store.accessToken;
    },

    getjeunesse() {
      return this.$store.jeunesse;
    }
  },

  mutations: {
    // set and UPDATE
    SET_EVENT(state, data) {
      state.evenements = data;
    },

    SET_PROJET(state, data) {
      state.projets = data;
    },

    SET_AUTH(state, data) {
      state.accessToken = data;
    },

    SET_GALERIE(state, data) {
      let choice = data.categorie;
      switch (choice) {
        case "jeunesse":
          state.jeunesse = data;
          break;
        case "education":
          state.education = data;
          break;
        case "solidarite":
          state.solidarite = data;
          break;
        case "sante":
          state.sante = data;
          break;
        case "espoir":
          state.espoir = data;
          break;
        default:
          console.log("erreur de catégorie");
      }
    },

    LOAD_GALERIE(state, data) {
      let choice = data[0].categorie;
      switch (choice) {
        case "jeunesse":
          state.jeunesse = data;
          break;
        case "education":
          state.education = data;
          break;
        case "solidarite":
          state.solidarite = data;
          break;
        case "sante":
          state.sante = data;
          break;
        case "espoir":
          state.espoir = data;
          break;
        default:
          console.log("erreur de catégorie");
      }
    }
  },

  actions: {
    login({ commit }, userData) {
      const config = {
        method: "post",
        url: baseURL + "api/auth/login/",
        credentials: "include",
        data: {
          email: userData.email,
          password: userData.password
        }
      };

      axios(config)
        .then(response => {
          let accessToken = response.data.accessToken;
          localStorage.setItem("user", JSON.stringify(accessToken));
          commit("SET_AUTH", accessToken);
          localStorage.setItem("user", JSON.stringify(accessToken));
        })
        .catch(error => {
          error;
        });
    },

    logout() {
      localStorage.removeItem("user");
    },

    //////////////////////////////////////// Ajout photo à la galerie

    getAllJeunesse({ commit }, selection) {
      let catégorie = selection;

      const config = {
        method: "get",
        url: baseURL + "api/" + catégorie + "/"
      };

      axios(config)
        .then(response => {
          let newdata = response.data;
          commit("LOAD_GALERIE", newdata);
        })
        .catch(error => {
          error;
        });
    },

    // Ajouter image
    AddImage({ commit }, { formData, selection }) {
      let catégorie = selection;
      let user = JSON.parse(localStorage.getItem("user"));

      const config = {
        method: "post",
        url: baseURL + "api/" + catégorie + "/",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + user
        },
        data: formData
      };

      axios(config)
        .then(response => {
          let newdata = response.data;
          commit("SET_GALERIE", newdata);
        })
        .catch(error => {
          error;
        });
    },

    ////////////////// Evénements

    // Récupérer tous les évenements
    getAllEvent({ commit }) {
      axios
        .get(baseURL + "api/events/")
        .then(response => {
          let newdata = response.data;
          commit("SET_EVENT", newdata);
        })
        .catch(error => {
          error;
        });
    },

    // Créer un événement
    CreateOneEvent({ dispatch }, formData) {
      const config = {
        method: "post",
        url: baseURL + "api/events/",
        headers: {
          Authorization: "Bearer " + user
        },
        data: formData
      };

      axios(config)
        .then(() => {
          dispatch("getAllEvent");
        })
        .catch(error => {
          error;
        });
    },

    // Supprimer un événement
    deleteOneEvent({ dispatch }, id) {
      const config = {
        method: "delete",
        url: baseURL + "api/events/:",
        headers: {
          Authorization: "Bearer " + user
        },
        data: {
          id: id
        }
      };

      axios(config)
        .then(() => {
          dispatch("getAllEvent");
        })
        .catch(error => {
          error;
        });
    },

    // Récupération tous les projets
    getAllProjet({ commit }) {
      axios
        .get(baseURL + "api/projets/")
        .then(response => {
          let newdata = response.data;
          commit("SET_PROJET", newdata);
        })
        .catch(error => {
          error;
        });
    },

    // Créer un projet
    CreateOneProjet({ dispatch }, formData) {
      const config = {
        method: "post",
        url: baseURL + "api/projets/",
        headers: {
          Authorization: "Bearer " + user
        },
        data: formData
      };

      axios(config)
        .then(() => {
          dispatch("getAllProjet");
        })
        .catch(error => {
          error;
        });
    },

    // Supprimer un projet
    deleteOneProjet({ dispatch }, id) {
      const config = {
        method: "delete",
        url: baseURL + "api/projets/:",
        headers: {
          Authorization: "Bearer " + user
        },
        data: {
          id: id
        }
      };

      axios(config)
        .then(() => {
          dispatch("getAllProjet");
        })
        .catch(error => {
          error;
        });
    }
  }
});
