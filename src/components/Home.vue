<template>
  <div>
    Hi, {{ name }}!<br>
    目前水量：{{ nowVolume }} 毫升<br>
    今日已喝：{{ todayDrink }} 毫升<br>
    今日剩餘：{{ todayRemaining }} 毫升<br>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      name: state => state.data.name,
      nowVolume: state => state.data.nowVolume,
      todayDrink: state => state.data.todayDrink,
      todayRemaining: state => state.data.todayRemaining
    })
  }
};
</script>
