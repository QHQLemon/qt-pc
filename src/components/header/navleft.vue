<template>
  <!-- <div class="header-left clearfix">
    <router-link tag="li" to="/home">
      <span class="glyphicon glyphicon-cog"></span>
    </router-link>
    <router-link tag="li" :to="{name: 'company'}">公司概况</router-link>
    <router-link tag="li" to="/product">产品</router-link>
    <router-link tag="li" to="/device">设备</router-link>
    <router-link tag="li" to="/cert">证书</router-link>
    <router-link tag="li" to="/life">社内生活</router-link>
    <router-link tag="li" to="/branch">全球网点</router-link>
    <router-link tag="li" to="/consult">咨询</router-link>
  </div>-->
  <ul class="nav navbar-nav nav-left" @click="change">
    <li>
      <router-link to="/company">公司概况</router-link>
    </li>
    <li>
      <router-link to="/product">产品</router-link>
    </li>
    <li>
      <router-link to="/device">设备</router-link>
    </li>
    <li>
      <router-link to="/cert">证书</router-link>
    </li>
    <li>
      <router-link to="/life">社内生活</router-link>
    </li>
    <li>
      <router-link to="/branch">全球网点</router-link>
    </li>
    <li>
      <router-link to="/consult">咨询</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    change(ev) {
    }
  }
};
</script >

<style scoped>
.nav.navbar-nav li .router-link-exact-active {
  background: #005ba9;
  color: #fff;
}

@media (max-width: 768px) {
  .nav.navbar-nav {
  }
  .nav.navbar-nav li {
    display: block;
    width: 100%;
  }
}
</style>
