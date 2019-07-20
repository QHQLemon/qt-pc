<template>
  <div class="header-left clearfix">
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
