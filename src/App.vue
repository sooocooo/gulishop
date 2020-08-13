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
};
</script>

<style lang="less" scoped>
</style>