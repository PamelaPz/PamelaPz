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
        link: "https://pamelapz-old.vercel.app/",
        portada: "pamelapz-old.png",
      },
      {
        id: 2,
        title: "Danone Responsive",
        link: "https://prueba-ia-pamelapz.vercel.app/",
        portada: "danone-responsive.png",
      },
      {
        id: 3,
        title: "Replica de sitio",
        link: "https://prototipo-replica-pamelapz.vercel.app/",
        portada: "replica-site.png",
      },
      {
        id: 4,
        title: "LandingPage Tooring",
        link: "https://tooring-landing-page.vercel.app/",
        portada: "landing-tooring.png",
      },
      {
        id: 5,
        title: "Propuesta E-Firma",
        link: "https://e-firma-layout.vercel.app/",
        portada: "efirma-propuesta.png",
      },
      {
        id: 6,
        title: "Profile Card",
        link: "https://profile-card-component.pamelapz.vercel.app/",
        portada: "profile-card-challenge.png",
      },
      {
        id: 7,
        title: "Conferencias",
        link: "https://sitio-conferencias.pamelapz.vercel.app/",
        portada: "conferencias-maquetado.png",
      },
      {
        id: 8,
        title: "Carrito",
        link: "https://proyecto-carrito-pamelapz.vercel.app/",
        portada: "carrito-compras.png",
      },
      {
        id: 9,
        title: "Buscador",
        link: "https://proyecto-buscador.vercel.app/",
        portada: "buscador-autos.png",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
