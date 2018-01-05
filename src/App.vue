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
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    dataFetcher: null,
  }),
  created() {
    setInterval(this.getData, 500);
  },
  destroyed() {
    clearInterval(this.dataFetcher);
  },
  methods: mapActions(['getData']),
};
</script>

<style scoped>
.margin-top-40px {
  margin-top: 40px;
}
</style>
