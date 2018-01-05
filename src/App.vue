<template>
  <div>
    <mt-header
      fixed
      title="Drink More Water"
    />
    <div class="margin-top-40px"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getData");
  }
};
</script>

<style scoped>
.margin-top-40px {
  margin-top: 40px;
}
</style>
