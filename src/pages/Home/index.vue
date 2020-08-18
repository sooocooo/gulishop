<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"/>
    <Brand />
  </div>
</template>

<script>
import ListContainer from "../Home/ListContainer";
import Recommend from "../Home/Recommend";
import Rank from "../Home/Rank";
import Like from "../Home/Like";
import Floor from "../Home/Floor";
import Brand from "../Home/Brand";

import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    // this.$store.dispatch('getCategoryList')

    this.$store.dispatch("getFloorList"); //此刻vuex中有数据了;
  },

  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style lang="less" scoped>
</style>