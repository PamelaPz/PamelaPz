<template>
  <section class="proyects section">
    <h3>Proyectos</h3>
    <div class="proyects-content">
      <div class="proyects-content-left">
        <ul class="proyects-list">
          <li v-for="(project, index) in projects" :key="project.id">
            <a
              class="proyects-items"
              :index="index"
              :class="project.id == id ? 'active' : ''"
              @click="clickToSite(project)"
              >{{ project.title }}</a
            >
          </li>
        </ul>
      </div>
      <div class="proyects-content-right">
        <a :href="link" target="_blank" rel="noopener noreferrer">
          <img
            class="wp-sites"
            :src="require(`@/assets/img/projects/${image}`)"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      image: "calculator-tip.png",
      link: "https://tip-calculator-pamelapz.vercel.app/",
      id: 0,
    };
  },
  computed: {
    ...mapState(["projects"]),
  },
  methods: {
    clickToSite(data) {
      this.image = data.portada;
      this.link = data.link;
      this.id = data.id;
    },
  },
};
</script>
