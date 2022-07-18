<template>
  <div class="skills section">
    <section class="skills-content">
      <h3>Tecnologías que conozco</h3>
      <div class="skills-content-row">
        <Skin img-skill="js.png" name-skill="JavaScrip" />
        <Skin img-skill="html.png" name-skill="HTML" />
        <Skin img-skill="css-3.png" name-skill="CSS" />
        <Skin img-skill="git.png" name-skill="Git" />
        <Skin img-skill="vue.png" name-skill="Vue.js" />
        <Skin img-skill="sass.png" name-skill="SASS" />
        <Skin img-skill="bootstrap.png" name-skill="Bootstrap" />
        <Skin img-skill="react.png" name-skill="React.js" />
        <Skin img-skill="laravel.png" name-skill="Laravel" />
        <Skin img-skill="angular.png" name-skill="Angular" />
        <Skin img-skill="stylus.svg" name-skill="Stylus" />
      </div>
    </section>
    <section class="skills-content">
      <h3>Tecnologías que uso</h3>
      <div class="skills-content-row">
        <Skin img-skill="vue.png" name-skill="Vue.js" />
        <Skin img-skill="react.png" name-skill="React.js" />
        <Skin img-skill="stylus.svg" name-skill="Stylus" />
        <Skin img-skill="html.png" name-skill="HTML" />
        <Skin img-skill="js.png" name-skill="JavaScrip" />
        <Skin img-skill="git.png" name-skill="Git" />
        <Skin img-skill="sass.png" name-skill="SASS" />
        <Skin img-skill="css-3.png" name-skill="CSS" />
      </div>
    </section>
  </div>
</template>

<script>
import Skin from "./FigureCircle.vue";

export default {
  components: {
    Skin,
  },
};
</script>

<style></style>
