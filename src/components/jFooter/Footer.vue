<template>
  <div>
    <div class="container intro-consult">
      <div class="intro-consult-inner">
        <p>もしあなたが私達についてもっと情報を知りたいなら</p>
        <router-link class="btn btn-defalut my-btn" to="/Japanese/consult">私たちに連絡してください</router-link>
      </div>
    </div>
    <div class="m-footer-wrapper">
      <div class="footer-company container">
        <div class="col-lg-6">
          <!-- <p class="company-name">东莞清田精密齿轮有限公司</p> -->
          <p class="company-name">東莞清田精密歯車有限公司</p>
          <p>住所:広东省东莞市虎门镇陈村コミュニティ厚虎路22番</p>
          <p>TEL :+86-76 -8523 - 261-2子机828</p>
          <p>FAX : + 86- 7639 -85235270</p>
          <p>E-mail：sales@kiyotadg.com</p>
        </div>
        <div class="col-lg-6">
          <p class="company-name">＜本社＞</p>
          <p>〒143-0027　東京都大田区中馬込3-24-6</p>
          <p>TEL : 03-3776-1020 &nbsp;&nbsp;　　FAX : 03-3776-1023</p>
          <p class="company-name">＜いわき工場＞</p>
          <p>〒970-1144　福島県いわき市好間工業団地18-1</p>
          <p>TEL : 0246-36-6961 &nbsp;&nbsp; FAX : 0246-36-6964</p>
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
  margin-left: 200px;
}
.footer-right {
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 12px;
}
</style>

