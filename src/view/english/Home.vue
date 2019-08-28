<template>
  <div class="home-wrapper">
    <div class="home-intro-top container">
      <div class="col-lg-4 intro-left">
        <p class="intro-title">
          Dongguan Kiyota Precision Co.,Ltd (DKP),
          Japanese gear maker, globally challenging in the market around the world.
        </p>
        <p>Gears have been long and widely spread and used in our daily lives, which can be seen wisdom of human beings. Nowadays they came to symbolize the industry,  with these mechanical elements supporting broad range of drive parts of motors and transmissions for industrial machineries, vehicles and medical equipment. DKP's precison gear cutting technology has played an important role of the development in motor industories both Japan and abroad. </p>
        <p>
          <router-link tag="span" to="/English/company" class="btn btn-lg my-btn btn-default">For more in details, click here.</router-link>
        </p>
      </div>
      <div class="col-lg-8">
        <my-swiper></my-swiper>
      </div>
    </div>


    <div class="info-wrapper container">
      <h3>Notice from DKP</h3>
      <dl class="topic clearfix">
        <dt>July 5, 2019</dt>
        <dd>
          <strong>Stock transfer </strong>
          <br>Urawa Yakin Kogyo Co., Ltd. transferred all their shhared stock of 5 million yen to Kiyota Co., Ltd.  Man Machine Interface Co., Ltd (MMI) transferd all their shared stocks of 25 million yen to Ohta Seiko Co., LTD.  This stock transfer resulted as following amounts and ratio as Ohta Seiko (175 million yen : 63.64%) and Kiyota (100 million yen : 36.36%).  The board members have changed accordingly.
          <br>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
// import Swiper from '@/components/home/swiper'
import MySwiper from "@/components/home/mySwiper";

export default {
  components: {
    MySwiper
  }
};
</script >

<style scoped>
.home-wrapper {
  margin-top: 20px;
}

.info-wrapper {
  margin-top: 100px;
  width: 900px;
  border: 2px solid #ccc;
}
.info-wrapper h3 {
  margin: 0 0 0 0;
  padding: 7px 0 10px 30px;
  border-bottom: 5px solid #005ba9;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.1em;
}
.topic {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 320px;
  margin: 0 0 0 0;
  font-size: 14px;
  line-height: 2;
  padding-bottom: 50px;
}
.topic dt {
  width: 200px;
  margin: 10px 0 0 0;
  padding: 10px 0 0 40px;
  font-weight: bold;
  color: #005ba9;
}
.topic dd em {
  font-weight: 550;
}
.topic dd {
  width: 600px;
  padding: 20px 80px 0 0;
}

.intro-title {
  color: #005ba9;
  font-size: 24px;
  font-weight: 550;
}
.intro-left {
  margin: 50px auto;
}
.intro-talk {
  background: rgb(248, 250, 250);
  min-height: 500px;
  margin-top: 100px;
}
.intro-talk img {
  width: 500px;
}
.intro-talk-right {
  margin-top: 60px;
}
.intro-talk p {
  font-style: italic;
  font-size: 18px;
}
.intro-people {
  text-align: right;
  margin-right: 20px;
}
.intro-cert {
  margin-top: 200px;
}
.intro-cert img {
  height: 600px;
  box-shadow: -1px -1px 5px 0 rgba(26, 26, 67, 0.05),
    -12px 20px 125px -25px rgba(50, 50, 93, 0.5),
    -18px 20px 75px -37.5px rgba(0, 0, 0, 0.6);
}
.intro-product {
  min-height: 300px;
  margin-top: 100px;
}

.intro-product img {
  height: 350px;
}
.intro-product-left {
  padding: 75px 100px;
}

.intro-product-left p {
  width: 400px;
}
.intro-product .p-link {
  color: #005ba9;
  cursor: pointer;
}
.intro-cert-item .col-lg-6 {
  margin-bottom: 200px;
}
.intro-device {
  min-height: 300px;
  margin-top: 150px;
  text-align: center;
}
.device-dire {
  margin: 0 auto;
  width: 700px;
  font-size: 16px;
  font-style: italic;
  line-height: 40px;
  margin-bottom: 50px;
}
.intro-device span {
  border: 1px solid #ccc;
  padding: 10px 15px;
  font-weight: 550;
  color: #0059a0;
  cursor: pointer;
}
</style>
