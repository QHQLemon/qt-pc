<template>
  <div class="home-wrapper">
    <div class="home-intro-top container">
      <div class="col-lg-4 intro-left">
        <p class="intro-title">
          东莞清田精密齿轮有限公司
          世界に挑戦するグローバル中小企業です。
        </p>
        <p>
          当社の持っている、高品質の精密切削技術水準を多种类の数の少ないの形で、半導体生産加工製造装置と自動車生産設備などが複合部品中心;大量生産の形で、精密切削部品であるデジタルカメラや小型モータ製造用の歯車、産業設備用の部品など。販売部門アジアや欧米诸国に及ぶ。
        </p>
        <p>
          <router-link tag="span" to="/Japanese/company" class="btn btn-lg my-btn btn-default">もっと知る</router-link>
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
          <p>「当社は1958年（昭和３３年）精密小型歯車の専門工場として発足し、時代の要請に応え逐次業務の拡張を図り、現在は精密小型歯車 のみならず電子機器・光学機器・OA機器等の超精密部品の機械加工及び組立を業務としております。</p>
          <p>は目覚しいものがあり、機械加工部品に対する業界ニーズは、従来に増して品質の安定 ・価格の低価・納期の迅速が要望されこの要望に対して有効な対応をすることが当社の社会に対する責任と痛感しております。</p>
          <p>また、グローバル化も見据えた海外展開も今後加速して世界中のニーズも取り入れ、躍進して行きます。」</p>
        </blockquote>
        <p class="intro-people">——代表ご挨拶</p>
      </div>
    </div>

  <div class="intro-product container ">
      <div class="col-lg-6 intro-product-left">
        <p class="intro-title">製品ラインナップ</p>
        <p>多种多様な制品群(小型歯车、精密加工部品など)は、弊社の技术力の下で高品质、高精度、高レベルで完成されています。グローバリゼーションの視点から顧客のニーズを捉え、先進技術を活用して発展を続ける。当社労働者は今後も引き続き品質限界に挑戦して参ります。</p>
        <router-link tag="p" class="p-link" to="/Japanese/product">製品の詳細を知る-></router-link>
      </div>
      <div class="col-lg-6 img-box">
        <img src="../../assets/img/pro4.jpg" alt>
      </div>
    </div>

    <div class="intro-device">
      <p class="intro-title">設備概略</p>
      <p class="device-dire">
        "本公司的设备从通用机到专用机，都是根据本公司的自行设计进行的安装，从而形成了一套丰富的原创型附属装置。同时，优秀的生产技术人员使本公司能够自行完成生产设备制造及修理等事宜。本公司的特点之一即日本国内与海外分公司同步保有同等水平生产设备及品质检查设备。"
      </p>
      <router-link tag="span" to="/Japanese/device">設備をもっと知る</router-link>
    </div>



    <!-- <div class="intro-cert container">
      <div class="intro-cert-item">
        <div class="col-lg-6 col-lg-offset-1">
          <img src="../assets/img/IATF16949-2016/IATF16949-2016-1.png" alt>
        </div>
        <div class="col-lg-5">
          <p class="intro-title" style="color: #333;">资质证书</p>
          <p>最后，在全球一体化这有目共睹的环境下，我们将加快推进发展海外事业，对应全球需求，向全球跃进。"</p>
          <router-link tag="span" to="/life">查看更多证书-></router-link>
        </div>
      </div>
    </div> -->
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
  margin: 100px auto;
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
