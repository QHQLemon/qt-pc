<template>
<div class="page-wrapper">
  <header class="m-page-header">
    <my-header></my-header>
  </header>
  <div class="m-page-main">
    <router-view></router-view>
  </div>
  <footer class="m-page-footer">
    <my-footer></my-footer>
  </footer>
</div>
</template>

<script>
import MyHeader from '@/components/eHeader/Nav'
import MyFooter from '@/components/eFooter/Footer'

export default{
  components: {
    MyHeader,
    MyFooter
  }

}
</script >

<style scoped>
.m-page-header{
  width: 100%;
}
.m-page-main{
  width: 100%;
  min-height: 600px;
  margin-top: 50px;
}
.m-page-footer{
  width: 100%;
}
.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
  position: relative;
  min-height: 1px;
  padding-right: 0;
  padding-left: 0;
}
@media (max-width: 768px) {
  .m-page-main{
    margin-top: 20px;
  }
}

</style>
