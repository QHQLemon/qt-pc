<template>
  <!-- <div class="header-left clearfix">
    <router-link tag="li" :to="{name: 'eHome'}">
      <span class="glyphicon glyphicon-cog"></span>
    </router-link>
    <router-link tag="li" :to="{name: 'eCompany'}">Company</router-link>
    <router-link tag="li" :to="{name: 'eProduct'}">Product</router-link>
    <router-link tag="li" :to="{name: 'eDevice'}">Equipment</router-link>
    <router-link tag="li" :to="{name: 'eCert'}">Certificate</router-link>
    <router-link tag="li" :to="{name: 'eLife'}">Life</router-link>
    <router-link tag="li" :to="{name: 'eBranch'}">Associated Company</router-link>
    <router-link tag="li" :to="{name: 'eConsult'}">Contact</router-link>
  </div>-->
  <ul class="nav navbar-nav nav-left">
    <li>
      <router-link :to="{name: 'eCompany'}">Company</router-link>
    </li>
    <li>
      <router-link :to="{name: 'eProduct'}">Product</router-link>
    </li>
    <li>
      <router-link :to="{name: 'eDevice'}">Equipment</router-link>
    </li>
    <li>
      <router-link :to="{name: 'eCert'}">Certificate</router-link>
    </li>
    <li>
      <router-link :to="{name: 'eLife'}">Life</router-link>
    </li>
    <li>
      <router-link :to="{name: 'eBranch'}">Associated Company</router-link>
    </li>
    <li>
      <router-link :to="{name: 'eConsult'}">Contact</router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script >

<style scoped>
.nav.navbar-nav li .router-link-exact-active {
  background: #005ba9;
  color: #fff;
}

@media (max-width: 768px) {
  .nav.navbar-nav{
  }
  .nav.navbar-nav li{
    display: block;
    width: 100%;
  }

}
</style>
