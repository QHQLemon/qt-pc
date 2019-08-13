<template>
  <div class="home-wrapper">
    <div class="home-intro-top container">
      <div class="col-lg-4 intro-left">
        <p class="intro-title">
          東莞清田精密歯輪有限公司,精密歯車加工技術で世界に挑戦するグローバル日系企業です。
        </p>
        <p>歯車は、古来より私たち生活の色々な場面で創造されてきた人類の英知の結晶でした。近代に入り、歯車は工業のシンボルとなり、モーターや減速機など産業機械、自動車医療製品など駆動部分を幅広く支える重要な機械要素となりました。弊社は、永年中国で精密歯車加工で日本のみならず世界のモータ－産業の発展に寄与して参りました。</p>
        <p>
          <router-link tag="span" to="/Japanese/company" class="btn btn-lg my-btn btn-default">もっと知る</router-link>
        </p>
      </div>
      <div class="col-lg-8">
        <my-swiper></my-swiper>
      </div>
    </div>

    <div class="info-wrapper container">
      <h3>清田からのお知らせ</h3>
      <dl class="topic clearfix">
        <dt>2019年07月5日</dt>
        <dd>
          <strong>株式譲渡</strong>
          <br>「浦和冶金工业株式会社」は、株券500万円をすべて清田株式会社に譲渡しました。
          MMIは株式の2500万円を「大田セイコー」にすべて譲渡した。持分
          変更后、「清田株式会社」の出资额は10000万円で、登录资金36.36%。「大田
          セイコー株式会社「资本金は17500万円で、登录资金63.64%。
          役員変更も併行した
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
