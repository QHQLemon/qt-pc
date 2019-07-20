<template>
  <div class="home-wrapper">
    <div class="home-intro-top container">
      <div class="col-lg-4 intro-left">
        <p class="intro-title">
          DONGGUAN KIYOTA PRECISION CO., LTD,
          Challenge the world standard of international smes
        </p>
        <p>
         The company has a high quality precision cutting technology level, in the form of more kinds and less quantity, production and processing of semiconductor manufacturing equipment and automotive production equipment and other complex parts mainly; In the form of mass production, precision cutting parts are made -- digital cameras or small motor gears, industrial equipment parts, etc. The sales field covers Asia, Europe and America.
        </p>
        <p>
          <router-link tag="span" to="/company" class="btn btn-lg my-btn btn-default">learn more</router-link>
        </p>
      </div>
      <div class="col-lg-8">
        <my-swiper></my-swiper>
      </div>
    </div>
    <div class="intro-talk">
      <div class="col-lg-6">
        <img src="../../assets/img/logo.png" alt>
      </div>
      <div class="col-lg-6 intro-talk-right">
        <!-- <p class="intro-title ">代表致辞</p> -->
        <blockquote>
          <p>"Our company was established in 1958, starting mainly producing precision small gears. With the business enhancement to meet the customers’ requirement, at this present not only these gears we are manufacturing and assembling high-precision parts used for electronics, optics and OA equipment.</p>
          <p>Along with remarkable and swift mechatronics development and diversification, high quality, low cost and fast delivery from the customers needs have been much more expected than before. Therefore, we deeply understand it is our responsibility to take effective actions to suit for these requirements.</p>
          <p>Moreover, we accelerate to expand the business globally with incorporating the needs in the world."</p>
        </blockquote>
        <p class="intro-people">——Message from the President</p>
      </div>
    </div>

  <div class="intro-product container ">
      <div class="col-lg-6 intro-product-left">
        <p class="intro-title">Product introduction</p>
        <p>Under the solid technical ability of our company, the multiform and diverse product group (small gear, precision machining parts, etc.) can be completed with high quality and high precision. From the global point of view to capture the needs of customers, flexible use of advanced technology, continuous development and progress. Our workers will continue to challenge the limits of quality.</p>
        <router-link tag="p" class="p-link" to="/English/product">To know the product details-></router-link>
      </div>
      <div class="col-lg-6 img-box">
        <img src="../../assets/img/pro4.jpg" alt>
      </div>
    </div>

    <div class="intro-device">
      <p class="intro-title">Equipment</p>
      <p class="device-dire">
        "本公司的设备从通用机到专用机，都是根据本公司的自行设计进行的安装，从而形成了一套丰富的原创型附属装置。同时，优秀的生产技术人员使本公司能够自行完成生产设备制造及修理等事宜。本公司的特点之一即日本国内与海外分公司同步保有同等水平生产设备及品质检查设备。"
      </p>
      <router-link tag="span" to="/English/device">Learn more about equipment</router-link>
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
  box-shadow: -1px -1px 5px 0 rgba(26,26,67,.05), -12px 20px 125px -25px rgba(50,50,93,.5), -18px 20px 75px -37.5px rgba(0,0,0,.6);
}
.intro-product {
  min-height: 300px;
  margin-top: 100px;
}

.intro-product img {
  height: 350px
}
.intro-product-left{
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
.intro-device{
  min-height: 300px;
  margin-top: 150px ;
  text-align:center;
}
.device-dire{
  margin: 0 auto;
  width: 700px;
  font-size: 16px;
  font-style: italic;
  line-height: 40px;
  margin-bottom: 50px;
}
.intro-device span{
  border:1px solid #ccc;
  padding:10px 15px;
  font-weight: 550;
  color: #0059a0;
  cursor: pointer;
}
</style>
