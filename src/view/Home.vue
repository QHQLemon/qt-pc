<template>
  <div class="home-wrapper">
    <div class="home-intro-top container">
      <div class="col-lg-4 intro-left">
        <p class="intro-title">
          东莞清田精密齿轮有限公司，
          挑战世界水准之国际化中小企业
        </p>
        <p>
          东莞清田精密齿轮有限公司
是一家以精密齿轮加工技术向世界挑战的全球日资企业。
齿轮自古以来在我们的日常生活中得到了广泛的推广和使用，是人类智慧的结晶。如今，齿轮成为工业的象征，成为广泛支撑马达、减速机等产业机械、汽车医疗产品等驱动部分的重要机械要素.我公司多年来在中国通过精密齿轮加工，不仅对日本，也为世界马达产业的发展做出了贡献。
        </p>
        <p>
          <router-link tag="span" to="/Japanese/company" class="btn btn-lg my-btn btn-default">了解更多</router-link>
        </p>
      </div>
      <div class="col-lg-8">
        <my-swiper></my-swiper>
      </div>
    </div>

    <div class="info-wrapper container">
      <h3>清田公告栏</h3>
      <dl class="topic clearfix">
        <dt>2019年07月5日</dt>
        <dd>
          <strong>股权转让</strong>
          <br>“浦和冶金工业株式会社”将股权500万日元全部转让给“清田株式会社”，
          “株式会社MMI”将股权2500万日元全部转让给“大田精工株式会社”。股权
          变更后，“清田株式会社”出资额10000万日元，占注册资本36.36%；“大田
          精工株式会社“出资额17500万日元，占注册资本63.64%。
          同时进行董事会成员变更
          <br>
        </dd>
      </dl>
    </div>

  </div>
</template>

<script>
import MySwiper from "@/components/home/mySwiper";

export default {
  components: {
    MySwiper
  },
  mounted() {
    $(".talk-dot").click(function() {
      console.log("aaa");
      $(".talk-active").removeClass("talk-active");
      $(".active").removeClass("active");
      $(this).addClass("active");
      $(".talk-item")
        .eq($(this).index())
        .addClass("talk-active");
    });
  }
};
</script >

<style scoped>
.home-wrapper {
  margin-top: 20px;
}
.home-intro-top {
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

.content-wrapper {
  display: flex;
  justify-content: space-around;
  margin: 100px 0;
  padding: 0 40px;
}
.intro-title {
  color: #005ba9;
  font-size: 24px;
  font-weight: 900;
}
.intro-left {
  margin: 100px auto;
}
.content-item {
  width: 346px;
  padding: 22px;
}
.content-item img {
  width: 60px;
  height: 60px;
}
.content-item .item-title {
  color: #0d47a1;
  font-size: 16px;
  font-weight: 550;
  line-height: 40px;
  height: 40px;
  margin-bottom: 0;
}
.content-item p {
  font-size: 16px;
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
  padding: 20px 0;
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
.gif-wrapper {
}
.gif-wrapper img {
  height: 420px;
}

.talk-wrapper {
  min-height: 300px;
  position: relative;
  background: rgb(248, 250, 250);
  margin: 100px 0;
}
.talk-wrapper .talk-content {
  margin: 0 auto;
  width: 1100px;
  height: 400px;
  padding: 50px 0;
  line-height: 2.5em;
}
.talk-wrapper ul li {
  display: none;
}
.talk-wrapper ul li h3 {
  text-align: center;
  font-weight: 550;
  font-weight: 990;
  font-size: 34px;
}
.talk-wrapper ul li p {
  font-style: italic;
  position: relative;
  padding: 50px;
  font-size: 20px;
  text-align: center;
}
.talk-wrapper ul li.talk-active {
  display: inline-block;
}
.talk-wrapper ol {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}
.talk-wrapper .talk-dot {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-right: 5px;
}
.talk-wrapper .talk-dot.active {
  border: 2px solid #0059a0;
}
.hp {
  width: 40px;
}
.hn {
  height: 40px;
}
.bk {
  position: absolute;
}
</style>
