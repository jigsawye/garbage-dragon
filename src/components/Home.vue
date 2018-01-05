<template>
  <div>
    <div class="margin-top-10vh"/>
    <div class="text">
      目前水量：{{ nowVolume }} 毫升<br>
      今日已喝：{{ todayDrink }} 毫升<br>
      今日剩餘：{{ todayRemaining }} 毫升<br>
    </div>
    <div class="margin-top-5vh"/>
    <div
      class="bubble"
      data-preset="bubble"
      data-pattern-size="150"
    />
    <div class="percent-text">{{ nowPercent }}%</div>
    <tabbar/>
  </div>
</template>

<script>
import Tabbar from "./Tabbar";
import { mapState } from "vuex";
import loadingBar from "../../assets/loading-bar.min";

export default {
  components: {
    Tabbar
  },
  data() {
    return {
      bubble: null
    };
  },
  computed: {
    ...mapState({
      nowVolume: state => state.data.today.nowVolume,
      todayDrink: state => state.data.today.todayDrink,
      todayRemaining: state => state.data.today.todayRemaining
    }),
    nowPercent() {
      return ~~(
        this.todayDrink /
        (this.todayDrink + this.todayRemaining) *
        100
      );
    }
  },
  watch: {
    nowPercent: function() {
      this.bubble.set(this.nowPercent);
    }
  },
  mounted() {
    this.bubble = new ldBar(".bubble");
    this.bubble.set(this.nowPercent);
  }
};
</script>

<style scoped>
@import "../../assets/loading-bar.css";
.margin-top-10vh {
  margin-top: 10vh;
}
.margin-top-5vh {
  margin-top: 5vh;
}
.text {
  text-align: center;
  color: #606266;
}
.bubble {
  width: 100% !important;
  height: 80vw !important;
  text-align: center;
  font-size: 24px;
}
.percent-text {
  color: #3298dd;
  text-align: center;
  font-size: 24px;
}
</style>

<style>
.ldBar-label {
  display: none;
}
</style>

