<template>
  <!-- <div class="m-header-wrapper has-shadow">
    <div class="m-header-main container">
      <div class="header-left col-lg-8">
        <nav-left></nav-left>
      </div>
      <div class="header-right col-lg-4">
        <nav-right></nav-right>
      </div>
  </div>-->
  <nav class="navbar navbar-default navbar-static-top m-header-wrapper has-shadow">
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span class="sr-only"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" :to="{name: 'jHome'}">
          <span class="glyphicon glyphicon-cog"></span>
        </router-link>
      </div>
      <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style>
        <nav-left></nav-left>
        <nav-right></nav-right>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLeft from "./navleft";
import NavRight from "./navright";

export default {
  components: {
    NavLeft,
    NavRight
  },
  mounted() {
    var a = document.querySelector(".navbar-toggle");
    $(".nav-left li a").on("click", function() {
      a.click();
    });
  }
};
</script >

<style scoped>
.navbar {
  background: #fff;
}
.container {
  padding: 0 15px;
}
.navbar-brand .glyphicon.glyphicon-cog {
  color: #005ba9;
}
</style>
