<template>
  <div class="header-left clearfix">
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
  </div>
</template>

<script>
export default {};
</script >

<style scoped>
.header-left li {
  color: #000;
  padding: 8px 15px;
  cursor: pointer;
  margin-top: 16px;
  border-radius: 2px;
}
.header-left li:hover {
  background: rgb(248, 250, 250);
}

.header-left li:first-child{
  padding-top: 5px;
}
.header-left li:first-child:hover {
  background: #fff;
}
.header-left li .glyphicon-cog {
  font-size: 24px;
  color: #005ba9;
}
.header-left li.router-link-exact-active{
  background: #005ba9;
  color: #fff;
}
.header-left li.router-link-exact-active:first-of-type{
  background: #fff;
  color: #005ba9;
}
</style>
