<template>
  <div>
    <Header />
    <router-view></router-view>

    <Footer v-if="!$route.meta.isHide" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
  mounted() {
     this.getCategoryList();
  },
  methods: {
      getCategoryList() {
      this.$store.dispatch("getCategoryList");
    },
  },
};
</script>

<style></style>
