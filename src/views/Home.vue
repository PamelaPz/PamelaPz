<template>
  <div>
    <NavBar />
    <div class="wrapper">
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
};
</script>
