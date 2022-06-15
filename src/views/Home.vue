<template>
  <div>
    <NavBar />
    <div class="wrapper" id="iam">
      <div class="redes">
        <ul class="redes-container">
          <li class="redes-item">
            <a
              href="https://www.linkedin.com/in/pamela-perez-02/"
              target="_blank"
              ><p class="redes-item-name">
                L<span class="name">inkedin</span>
              </p></a
            >
            <span class="separator">|</span>
          </li>
          <li class="redes-item">
            <a href="https://github.com/PamelaPz" target="_blank"
              ><p class="redes-item-name">
                G<span class="name">itHub</span>
              </p></a
            >
            <span class="separator">|</span>
          </li>
          <li class="redes-item">
            <a href="https://platzi.com/p/pamelapz-15/" target="_blank"
              ><p class="redes-item-name">
                P<span class="name">latzi</span>
              </p></a
            >
            <span class="separator">|</span>
          </li>
          <li class="redes-item">
            <a href="https://twitter.com/JPZCode" target="_blank"
              ><p class="redes-item-name">
                T<span class="name">witter</span>
              </p></a
            >
          </li>
        </ul>
      </div>
      <h1>Frontend Developer</h1>
      <Soy />
      <Skills />
      <Proyects />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Soy from "@/components/Soy.vue";
import Skills from "@/components/Skills.vue";
import Proyects from "@/components/Proyects.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Soy,
    Skills,
    Proyects,
    Footer,
  },
  data() {
    return {
      redes: [
        { name: "Linkedin" },
        { name: "GitHub" },
        { name: "Instagram" },
        { name: "Twitter" },
      ],
    };
  },
  methods: {},
};
</script>
