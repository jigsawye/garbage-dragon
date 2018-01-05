<template>
  <div>
    <mt-header
      fixed
      title="Drink More Water"
    />
    <mt-tabbar v-model="selected">
      <mt-tab-item
        id="home"
        @click.native="$router.push({ name: 'Home' })"
      >
        <i
          class="fa fa-home"
          aria-hidden="true"
          slot="icon"
        />
        主頁
      </mt-tab-item>
      <mt-tab-item
        id="my"
        @click.native="$router.push({ name: 'My' })"
      >
        <i
          class="fa fa-user-circle"
          aria-hidden="true"
          slot="icon"
        />
        我的
      </mt-tab-item>
      <mt-tab-item
        id="achievement"
        @click.native="$router.push({ name: 'Achievement' })"
      >
        <i
          class="fa fa-trophy"
          aria-hidden="true"
          slot="icon"
        />
        成就
      </mt-tab-item>
    </mt-tabbar>
    <div class="margin-top-40px"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ""
    };
  },
  mounted() {
    this.selected = this.$route.name.toLowerCase();
    this.$store.dispatch("getData");
  }
};
</script>

<style scoped>
.margin-top-40px {
  margin-top: 40px;
}
</style>
