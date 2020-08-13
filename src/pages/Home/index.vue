<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
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
};
</script>

<style lang="less" scoped>
</style>