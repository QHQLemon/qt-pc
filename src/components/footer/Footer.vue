

<template>
  <div>
    <div class="container intro-consult">
      <div class="intro-consult-inner">
        <p>如果您想了解更多关于我们的信息</p>
        <router-link class="btn btn-defalut my-btn" to="/consult">请联系我们</router-link>
      </div>
    </div>
    <div class="m-footer-wrapper">
      <div class="footer-company container">
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
          <p class="company-name">东莞清田精密齿轮有限公司</p>
          <p class="company-name">DONGGUAN KIYOTA PRECISION CO., LTD</p>
          <p>地址：广东省东莞市虎门镇陈村社区厚虎路22号</p>
          <p>电话：+86-769-85235261-2分机828</p>
          <p>传真：+86-769-85235270</p>
          <p>E-mail：sales1@kiyotadg.com</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
          <p class="company-name">总公司</p>
          <p>地址：日本国东京都大田区中馬込3-24-6 邮编143-0027</p>
          <p>电话：+81-3-3776-1020 传真：+81-3-3776-1023</p>
          <p class="company-name">磐城工厂</p>
          <p>地址：日本国福岛县磐城市好间工业团地18-1 邮编970-1144</p>
          <p>电话：+81-246-36-6961 传真：+81-246-36-6964</p>
        </div>
      </div>
      <div class="divider"></div>
      <p
        class="footer-right"
      >Copyright © 2019 DONGGUAN KIYOTA PRECISION CO., LTD. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script >

<style scoped>
.intro-consult{
  height: 144px;
  margin-top: 50px;
  border: 1px solid rgb(248, 250, 250);
  background-image: url('../../assets/img/software.png');
  background-size: 50%;
  background-position: 50%;
  background-repeat: no-repeat;
}
.intro-consult-inner{
  background: rgba(250, 250,250, 0.92);
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 40px;
}
.intro-consult-inner p{
  color: #000;
  font-size: 16px;
  font-weight: 550;
}
.m-footer-wrapper {
  margin-top: 30px;
  background: rgb(248, 250, 250);
}
.company-name {
  color: #005ba9;
  font-size: 16px;
  font-weight: 550;
}
.footer-company {
  padding-top: 30px;
}
.footer-right {
  text-align: center;
  line-height: 30px;
  font-size: 12px;
}
.col-12{
  text-align: center;
}


</style>
