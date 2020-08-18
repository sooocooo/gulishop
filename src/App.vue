<template>
  <div>
    <Hearder />
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHide" />
  </div>
</template>

<script>

import Footer from "./components/Footer";
import Hearder from "./components/Hearder";
export default {
  name: "App",
  components: {
    Hearder,
    Footer,
  },
  mounted() {
    // this.$store.dispatch('getCategoryList')
    this.getCategoryList();
  },
  methods: {
    getCategoryList() {
      this.$store.dispatch("getCategoryList"); //mapstate在TypeNav中展示
    },
  }
};
</script>

<style lang="less" scoped>
</style>