<template>
  <div>
    <div class="margin-top-10vh"/>
    <div class="avatar"/>
    <div class="margin-top-5vh"/>
    <div class="text">
      姓名：{{ name }}<br>
      身高：{{ height }} 公分<br>
      體重：{{ weight }} 公斤<br>
      每日水量指標：1500 毫升
    </div>
    <tabbar selected="my" />
  </div>
</template>

<script>
import Tabbar from "./Tabbar";
import { mapState } from "vuex";

export default {
  components: {
    Tabbar
  },
  computed: {
    ...mapState({
      name: state => state.user.name,
      height: state => state.user.height,
      weight: state => state.user.weight
    })
  }
};
</script>

<style scoped>
.margin-top-10vh {
  margin-top: 10vh;
}
.margin-top-5vh {
  margin-top: 5vh;
}
.avatar {
  background-image: url("../../assets/avatar.jpg");
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: top center;
  border-radius: 50%;
  margin: auto;
}
.text {
  text-align: center;
  color: #606266;
}
</style>
