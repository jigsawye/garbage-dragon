<template>
  <div>
    姓名：{{ name }}<br>
    身高：{{ height }} 公分<br>
    體重：{{ weight }} 公斤<br>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      name: state => state.user.name,
      height: state => state.user.height,
      weight: state => state.user.weight
    })
  }
};
</script>
