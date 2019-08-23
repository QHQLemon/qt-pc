<template>
  <div>
    <div class="container intro-consult">
      <div class="intro-consult-inner">
        <p>For any enquiry</p>
        <router-link class="btn btn-defalut my-btn" to="/English/consult">Contact from here</router-link>
      </div>
    </div>
    <div class="m-footer-wrapper">
      <div class="footer-company container">
        <div class="col-lg-6">
          <!-- <p class="company-name">东莞清田精密齿轮有限公司</p> -->
          <p class="company-name">DONGGUAN KIYOTA PRECISION CO., LTD</p>
          <p>Address: no.22, houhu road, chencun community, humen town, dongguan city,</br> guangdong province</p>
          <p>Tel: +86-769-85235261-2 ext. 828</p>
          <p>Fax: + 86-769-85235270</p>
          <p>E-mail：sales@kiyotadg.com</p>
        </div>
        <div class="col-lg-6">
          <p class="company-name">Head Office</p>
          <p>3-24-6 Naka-magome,Ohta-ku,Tokyo 143 ,Japan &nbsp;&nbsp; Zip 143-0027</p>
          <p>TEL : 03-3776-1020 &nbsp;&nbsp; FAX : 03-3776-1023</p>
          <p class="company-name">IWAKI Factory</p>
          <p>18-1,Yoshima Indstrial Zone,Iwaki,Fukushima-Ken 970-11,Japan &nbsp;&nbsp; Zip 970-1144 </p>
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

