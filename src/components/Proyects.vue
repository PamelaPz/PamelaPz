<template>
  <section class="proyects section">
    <h3>Proyectos</h3>
    <div class="proyects-content">
      <div class="proyects-content-left">
        <ul class="proyects-list">
          <li>
            <a class="proyects-items active" href="">Título del proyecto</a>
          </li>
          <li><a class="proyects-items" href="">Título del proyecto</a></li>
          <li><a class="proyects-items" href="">Título del proyecto</a></li>
          <li><a class="proyects-items" href="">Título del proyecto</a></li>
          <li><a class="proyects-items" href="">Título del proyecto</a></li>
        </ul>
      </div>
      <div class="proyects-content-right">
        <Rectangle />
      </div>
    </div>
  </section>
</template>

<script>
import Rectangle from "@/components/Rectangle.vue";

export default {
  components: {
    Rectangle,
  },
};
</script>
