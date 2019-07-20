<template>
  <div class="m-header-wrapper has-shadow">
    <div class="m-header-main container">
      <div class="header-left col-lg-8">
        <nav-left></nav-left>
      </div>
      <div class="header-right col-lg-4">
        <nav-right></nav-right>
      </div>
    </div>
  </div>
</template>

<script>
import NavLeft from '@/components/header/navleft'
import NavRight from '@/components/header/navright'

export default {
  components: {
    NavLeft,
    NavRight
  }
};
</script >

<style scoped>
.m-header-wrapper {
  height: 68px;
}
.m-header-main {
  height: 100%;
}
</style>
