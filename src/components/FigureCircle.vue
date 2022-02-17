<template>
  <div class="circle">
    <div class="circle-contaier">
      <img
        class="circle-imgSkill"
        :src="require(`@/assets/img/skills/${imgSkill}`)"
        :alt="nameSkill"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: ["imgSkill", "nameSkill"],
};
</script>

<style lang="stylus"></style>
