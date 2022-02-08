<template>
  <div class="hello">
    <p>
      Mi nombre es Pamela, originaria de Querétaro, México. Soy una chica que
      ama programar y ver anime.
    </p>
    <p>
      Me gusta todo lo relacionado con la tecnología, las computadoras, los
      videojuegos, la innovación, las finanzas y el emprendimiento pero sobre
      todo me gusta crear, maquetar y programar.
    </p>
    <blockquote>
      <i>
        Trato de aprender nuevas cosas por que intentar es lo que cuenta y no
        importa el tiempo que me tome lograr mis objetivos.
      </i>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
