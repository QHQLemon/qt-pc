<template>
  <div class="home-wrapper">
    <!-- <div class="home-intro-top container">
      <div class="col-lg-6 intro-left">
        <p class="intro-title">
          东莞清田精密齿轮有限公司，
          挑战世界水准之国际化中小企业
        </p>
        <p>
          本公司拥有着高品质精密切削技术水准，以多种类少数量的形式，
          生产加工半导体制造装置及汽车生产设备等复合型零件为主；
          以大量生产的形式，制造精密切削零件——数码相机或小型马达用齿轮，产业设备用零件等等。销售领域遍及亚洲及欧美诸国。
        </p>
        <p>
          <router-link tag="span" to="/company" class="btn btn-lg my-btn btn-default">了解更多</router-link>
        </p>
      </div>
      <div class="col-lg-6 gif-wrapper">
        <img src="../assets/img/timg.gif" alt>
      </div>
    </div>-->
    <div class="home-intro-top container">
      <div class="col-lg-4 intro-left">
        <p class="intro-title">
          东莞清田精密齿轮有限公司，
          挑战世界水准之国际化中小企业
        </p>
        <p>
          本公司拥有着高品质精密切削技术水准，以多种类少数量的形式，
          生产加工半导体制造装置及汽车生产设备等复合型零件为主；
          以大量生产的形式，制造精密切削零件——数码相机或小型马达用齿轮，产业设备用零件等等。销售领域遍及亚洲及欧美诸国。
        </p>
        <p>
          <router-link tag="span" to="/Japanese/company" class="btn btn-lg my-btn btn-default">了解更多</router-link>
        </p>
      </div>
      <div class="col-lg-8">
        <my-swiper></my-swiper>
      </div>
    </div>

    <!-- <div class="talk-wrapper">
      <ol>
        <li class="talk-dot active"></li>
        <li class="talk-dot"></li>
        <li class="talk-dot"></li>
      </ol>
      <ul class="talk-content">
        <li class="talk-item talk-active">
          <h3>我们的信条</h3>
          <p> <svg style="top:-5px;left:0;transform:rotate(-180deg)" viewBox="0 0 24 24" fill="#2196F3" class="hp hn bk"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg>
          我们从事于制造行业，为了给社会做贡献，也为了生活。制造业最重要的是遵守并履行规定。"
          只有遵守并履行规定才能不失信于和顾客在品质，交期及价格上达成的共识。
          贯彻探求工作的合理化到底，致力钻研于技术水平的提高，在这竞争激烈的新时代生存下去。<svg style="bottom:-5px;right:0" viewBox="0 0 24 24" fill="#2196F3" class="hp hn bk"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg></p>
        </li>
        <li class="talk-item">
          <h3>经营的理念</h3>
          <p> <svg style="top:-5px;left:0;transform:rotate(-180deg)" viewBox="0 0 24 24" fill="#2196F3" class="hp hn bk"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg>提供超出顾客期望的割品是我公司发展的基本理念、相信公司的发能给社会做出贡献,丰富每个员工的生活”。<svg style="bottom:-5px;right:0" viewBox="0 0 24 24" fill="#2196F3" class="hp hn bk"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg></p>
        </li>
        <li class="talk-item">
          <h3>环境方针</h3>
          <p> <svg style="top:-5px;left:0;transform:rotate(-180deg)" viewBox="0 0 24 24" fill="#2196F3" class="hp hn bk"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg>保护环境是我们共同的责任遵守环保法规,提升环境意识;规范作业流程,科技控制污染:创新节能降耗,落实环境指标;全员参与控制,持续改进提高。<svg style="bottom:-5px;right:0" viewBox="0 0 24 24" fill="#2196F3" class="hp hn bk"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg></p>
        </li>
      </ul>
    </div>-->
    <!-- <div class="container">
      <div class="content-wrapper">
        <div class="content-item">
          <img src="../assets/img/cl.png" alt>
          <p class="item-title">产品阵容</p>
          <p
            class="item-detail"
          >多式多样的产品群（小型齿轮，精密加工零部件等）在我司殷实的技术能力下以高品质，高精度的高水平得以完成。从全球化的视点捕捉顾客的需求，灵活运用先进技术，不断发展前进。我司工人今后仍将继续挑战品质极限。</p>
        </div>
        <div class="content-item">
          <img src="../assets/img/cl.png" alt>
          <p class="item-title">产品阵容</p>
          <p
            class="item-detail"
          >多式多样的产品群（小型齿轮，精密加工零部件等）在我司殷实的技术能力下以高品质，高精度的高水平得以完成。从全球化的视点捕捉顾客的需求，灵活运用先进技术，不断发展前进。我司工人今后仍将继续挑战品质极限。</p>
        </div>
        <div class="content-item">
          <img src="../assets/img/cl.png" alt>
          <p class="item-title">产品阵容</p>
          <p
            class="item-detail"
          >多式多样的产品群（小型齿轮，精密加工零部件等）在我司殷实的技术能力下以高品质，高精度的高水平得以完成。从全球化的视点捕捉顾客的需求，灵活运用先进技术，不断发展前进。我司工人今后仍将继续挑战品质极限。</p>
        </div>
      </div>
    </div>-->

    <!-- <div class="intro-device container has-shadow">
      <p class="intro-title">设备概略</p>
      <p
        class="device-dire"
      >"本公司的设备从通用机到专用机，都是根据本公司的自行设计进行的安装，从而形成了一套丰富的原创型附属装置。同时，优秀的生产技术人员使本公司能够自行完成生产设备制造及修理等事宜。本公司的特点之一即日本国内与海外分公司同步保有同等水平生产设备及品质检查设备。"</p>
      <router-link tag="span" to="/device">了解更多设备</router-link>
    </div>

    <div class="intro-product container">
      <div class="col-lg-6 intro-product-left">
        <p class="intro-title">产品展示</p>
        <p>多式多样的产品群（小型齿轮，精密加工零部件等）在我司殷实的技术能力下以高品质，高精度的高水平得以完成。从全球化的视点捕捉顾客的需求，灵活运用先进技术，不断发展前进。我司工人今后仍将继续挑战品质极限。</p>
        <router-link tag="p" class="p-link" to="/product">了解产品详细信息-></router-link>
      </div>
      <div class="col-lg-6 img-box">
        <img src="../assets/img/pro4.jpg" alt>
      </div>
    </div>-->

    <div class="info-wrapper container">
      <h3>清田公告栏</h3>
      <dl class="topic clearfix">
        <dt>2019年07月5日</dt>
        <dd>
          <em>股权转让</em>
          <br>“浦和冶金工业株式会社”将股权500万日元全部转让给“清田株式会社”，
          “株式会社MMI”将股权2500万日元全部转让给“大田精工株式会社”。股权
          变更后，“清田株式会社”出资额10000万日元，占注册资本36.36%；“大田
          精工株式会社“出资额17500万日元，占注册资本63.64%。
          同时进行董事会成员变更
          <br>
        </dd>
      </dl>
    </div>
    <!-- <div class="intro-talk">
      <div class="col-lg-6">
        <img src="../assets/img/logo.png" alt>
      </div>
      <div class="col-lg-6 intro-talk-right"
        <blockquote>
          <p>"1958年（昭和33年）我们以专业生产精密小型齿轮起家，顺应时代变化，逐步扩展业务，现在，不仅仅局限于制造精密小型齿轮，已经涉及至电子器械、光学仪器、自动化办公器械用品部件等超精密零件的机械加工及组装业。</p>
          <p>当今社会，机电一体化发展扩大的速度及其多样性足以让世人叹为观止，在我们机械加工零部件业内，身临其境的感受是，在原有的基础上更提高了对「安定的高品质·低价格·短交期」的要求。于是妥善有效地对应这些要求就成了我们的责任。</p>
          <p>最后，在全球一体化这有目共睹的环境下，我们将加快推进发展海外事业，对应全球需求，向全球跃进。"</p>
        </blockquote>
        <p class="intro-people">——代表致辞</p>
      </div>
    </div>-->
  </div>
</template>

<script>
// import Swiper from '@/components/home/swiper'
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
