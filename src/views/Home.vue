<template>
  <div>
    <NavBar />
    <h1>Frontend Developer</h1>
    <Soy />
    <section>
      <h3>Tecnologías que conozco</h3>
      <div style="display: flex">
        <Skin />
        <Skin />
        <Skin />
        <Skin />
        <Skin />
        <Skin />
        <Skin />
        <Skin />
      </div>
    </section>
    <section>
      <h3>Tecnologías que uso</h3>
      <div style="display: flex">
        <Skin />
        <Skin />
        <Skin />
        <Skin />
        <Skin />
        <Skin />
      </div>
    </section>
    <section>
      <h3>Proyectos</h3>
      <div style="display: flex">
        <div style="width: 50%">
          <ul>
            <li>Título del proyecto</li>
            <li>Título del proyecto</li>
            <li>Título del proyecto</li>
            <li>Título del proyecto</li>
            <li>Título del proyecto</li>
          </ul>
        </div>
        <div style="width: 50%">
          <Rectangle />
        </div>
      </div>
    </section>
    <footer>
      <h4>
        Te invito a conocer más sobre mi carrera profesional en mi LinkedIn.
        Gracias por visitarme!
      </h4>
      <p>© 2022. Hecho con ❤ por Pamela.pz. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Soy from "@/components/Soy.vue";
import Skin from "@/components/FigureCircle.vue";
import Rectangle from "@/views/Rectangle.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Soy,
    Skin,
    Rectangle,
  },
};
</script>

<style lang="stylus">
footer
  background-color: rgba(19,70,62,.1)
</style>
