<template>
  <!-- <div class="header-left clearfix">
    <router-link tag="li" :to="{name: 'jHome'}">
      <span class="glyphicon glyphicon-cog"></span>
    </router-link>
    <router-link tag="li" :to="{name: 'jCompany'}">企業案内</router-link>
    <router-link tag="li" :to="{name: 'jProduct'}">製品</router-link>
    <router-link tag="li" :to="{name: 'jDevice'}">設備</router-link>
    <router-link tag="li" :to="{name: 'jCert'}">証書</router-link>
    <router-link tag="li" :to="{name: 'jLife'}">社内生活</router-link>
    <router-link tag="li" :to="{name: 'jBranch'}">関連会社</router-link>
    <router-link tag="li" :to="{name: 'jConsult'}">お問い合わせ</router-link>
  </div> -->
    <ul class="nav navbar-nav nav-left">
    <li><router-link :to="{name: 'jCompany'}">企業案内</router-link></li>
    <li><router-link :to="{name: 'jProduct'}">製品</router-link></li>
    <li><router-link :to="{name: 'jDevice'}">設備</router-link></li>
    <li><router-link :to="{name: 'jCert'}">証書</router-link></li>
    <li><router-link :to="{name: 'jLife'}">社内生活</router-link></li>
    <li><router-link :to="{name: 'jBranch'}">関連会社</router-link></li>
    <li><router-link :to="{name: 'jConsult'}">お問い合わせ</router-link></li>
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
  .nav.navbar-nav li{
    display: block;
    width: 100%;
  }

}
</style>
