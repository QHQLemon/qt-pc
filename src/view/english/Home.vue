<template>
  <div class="home-wrapper">
    <div class="home-intro-top container">
      <div class="col-lg-4 intro-left">
        <p class="intro-title">
          DONGGUAN KIYOTA PRECISION CO., LTD,
          Challenge the world standard of international smes
        </p>
        <p>The company has a high quality precision cutting technology level, in the form of more kinds and less quantity, production and processing of semiconductor manufacturing equipment and automotive production equipment and other complex parts mainly; In the form of mass production, precision cutting parts are made -- digital cameras or small motor gears, industrial equipment parts, etc. The sales field covers Asia, Europe and America.</p>
        <p>
          <router-link tag="span" to="/company" class="btn btn-lg my-btn btn-default">learn more</router-link>
        </p>
      </div>
      <div class="col-lg-8">
        <my-swiper></my-swiper>
      </div>
    </div>


    <div class="info-wrapper container">
      <h3>Notice from DONGGUAN KIYOTA PRECISION CO., LTD</h3>
      <dl class="topic clearfix">
        <dt>July 5, 2019</dt>
        <dd>
          <em>Equity Transfer</em>
          <br>Puhe metallurgical industry co., ltd. transferred all the equity of 5 million yen to kiyota co., LTD.
          "MMI" will transfer the equity of 25 million yen to "daeda seiko co., LTD." equity
          After the change, the capital contribution of "kiyota corporation" is 100 million yen, accounting for 36.36% of the registered capital; "Field
          Seiko corporation "contributed 175 million yen, accounting for 63.64% of the registered capital.
          Also conduct board member changes
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
