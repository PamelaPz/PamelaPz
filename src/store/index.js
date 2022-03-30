import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isActive: false,
    projects: [
      {
        id: 0,
        title: "Calculator Tip",
        link: "https://tip-calculator-pamelapz.vercel.app/",
        portada: "calculator-tip.png",
      },
      {
        id: 1,
        title: "PamelaPz Anterior",
        link: "https://pamelapz.vercel.app/",
        portada: "",
      },
      {
        id: 2,
        title: "Danone Responsive",
        link: "https://prueba-ia-pamelapz.vercel.app/",
        portada: "",
      },
      {
        id: 3,
        title: "Propuesta E-Firma",
        link: "https://e-firma-layout.vercel.app/",
        portada: "",
      },
      {
        id: 4,
        title: "Profile Card",
        link: "https://profile-card-component.pamelapz.vercel.app/",
        portada: "",
      },
      {
        id: 5,
        title: "Conferencias",
        link: "https://sitio-conferencias.pamelapz.vercel.app/",
        portada: "",
      },
      {
        id: 6,
        title: "LandingPage Tooring",
        link: "https://tooring-landing-page.vercel.app/",
        portada: "",
      },
      {
        id: 7,
        title: "Buscador",
        link: "https://proyecto-buscador.vercel.app/",
        portada: "",
      },
      {
        id: 8,
        title: "Carrito",
        link: "https://proyecto-carrito-pamelapz.vercel.app/",
        portada: "",
      },
      {
        id: 9,
        title: "Enviar Emails",
        link: "https://proyecto-enviar-email-pamelapz.vercel.app/",
        portada: "",
      },
      {
        id: 10,
        title: "Blog de viajes",
        link: "https://js-blog-travels.vercel.app/",
        portada: "",
      },
      {
        id: 11,
        title: "Replica de sitio",
        link: "https://prototipo-replica-pamelapz.vercel.app/",
        portada: "",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
