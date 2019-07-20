<template>
  <div class="company-wrapper">
    <div class="company-intro container">
      <div class="company-intro-top">
        <p class="company-intro-title">東莞清田精密歯車有限公司</p>
        <p class="company-intro-item">
          <strong>東莞清田精密歯車有限公司</strong> は2004年10月に创立して、精密歯车を生产することを主とする外资合资企业で、専门に歯车を生产します(平歯车/斜め歯车/蜗棒)、及び各种の机械部品です。2005年5月の生产开始以来、弊社は绝えず加工及び検査设备を拡充、改善してお客様のニーズを満たすようにします。高品质、より良いサービスを追求するのは弊社の一贯した目标で、弊社はお客様との友好的な协力関系を确立し、共に努力し、この无限な潜在力の市场を开拓し、ここで弊社との连络を歓迎します。
        </p>
      </div>
      <div class="company-intro-bottom">
        <div class="col-lg-6 company-intro-bottom-left">
          <p class="company-title">品質方針</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>品質第一
          </p>
          <p class="company-quality-inner">当社は制品を第一に仕事をすることで、顾客の要望に応えている。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>納期を厳守する
          </p>
          <p class="company-quality-inner">顧客の要求した納期を厳守し、納期どおりに納品する。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>コストを下げる
          </p>
          <p class="company-quality-inner">無駄を減らし、コストを下げ、仕事の効率を高める。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>改善を続ける
          </p>
          <p class="company-quality-inner">品質体系を改善し、仕事のプログラム化、正規化、製品の品質を絶えず向上させる。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>勇敢に革新する
          </p>
          <p class="company-quality-inner">全员新しいルール、新しい知识、新しい技能を身につけること。</p>
        </div>
        <div class="col-lg-6 company-intro-bottom-right">
          <img src="../../assets/img/company.jpg" alt>
        </div>
      </div>
    </div>
    <div class="company-simple">
      <div class="container">
        <p class="company-title">会社概要</p>
        <p v-for="(item, index) in companySimple" class="company-simple-item">
          <strong>{{item.title}}</strong>
          {{item.content}}
        </p>
      </div>
    </div>
    <div class="container company-history">
      <p class="company-title">会社沿革</p>
      <div class="history-item" v-for="item in companyHistory">
        <span class="glyphicon glyphicon-record"></span>
        <p>
          <strong>{{item.time}}</strong>
          <span class="content-item">{{item.content}}</span>
        </p>
      </div>
    </div>

    <div class="talk-wrapper">
      <ol>
        <li class="talk-dot active"></li>
        <li class="talk-dot"></li>
        <li class="talk-dot"></li>
      </ol>
      <ul class="talk-content has-shadow">
        <li class="talk-item talk-active">
          <h3>私たちの信条</h3>
          <p>「 私たちは物を作る仕事をして、社会に貢献し、毎日の生活をしています。物を作る仕事で一番大切な事は決めたことを守ることです。</p>
          <p>決めたことを守ることによって、お客様に約束した品質と納期と価格を守ることができます。</p>
          <p>徹底的に仕事に合理化を図り、技術の向上に努め、競争の激しいこの新しい時代を生き抜こう。」</p>
        </li>
        <li class="talk-item">
          <h3>経営の理念</h3>
          <p>「 お客様の期待を超える部品を提供することは我が社の発展の基本理念であり、会社の発给が社会に贡献できると信じて、すべての従业员の生活を豊かにします 」。</p>
        </li>
        <li class="talk-item">
          <h3>環境方針</h3>
          <p>「 环境保护は私达の共通の责任は环境法规を遵守して、环境意识を高める;作業の流れを規範化し、科学技術の汚染を制御する。革新的エネルギー消費量の削減、環境指標の実行。全員がコントロールに参加し、改善を続けている。」</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companySimple: [
        { title: "会社名", content: "東莞清田精密歯車有限公司" },
        {
          title: "会社のあて先",
          content: "东莞市虎门镇陈村コミュニティ工业区厚虎路22日"
        },
        { title: "会社のタイプ", content: "有限責任会社(外国人合弁)" },
        { title: "登録資本", content: "二億七千五百万円" },
        { title: "工場面積", content: "2232㎡" },
        {
          title: "経営範囲",
          content: "歯车、ベルト及び机械部品を生产及び贩売します"
        },
        { title: "法定代表者", content: "青山成昭" },
        { title: "成立日", content: "2004年10月26日" },
        { title: "登録番号", content: "914419007673331778" },
        { title: "TEL", content: "86-769-85235261/262" },
        { title: "FAX", content: "86-769-85235270" },
        { title: "Email", content: " sales@kiyotadg.com " },
        { title: "アドレス", content: " www.kiyotadg.com" },
        { title: "邮编", content: "523922" },
        { title: "スタッフ", content: "80" }
      ],
      companyHistory: [
        {
          time: "2019年07月",
          content: "株主を変更すると同時に取締役会のメンバーも変更する。"
        },
        { time: "2018年03月", content: "経営期限を長期に変更する。" },
        { time: "2016年07月", content: "統一信用コードは9144673331778へ変更される。" },
        { time: "2013年12月", content: "株主のMMIを増やすとともに、資本金は27500万円に変更する。" },
        { time: "2013年08月", content: "現在の住所に移転する。" },
        {
          time: "2013年04月",
          content:
            "法定代表が「青山成昭」に変更されると同时に、役员が変更された。"
        },
        {
          time: "2013年04月",
          content:
            "“「大田(テジョン)精密」は5000万ウォンを投資し、株式の売却・経営権の委譲を受けており、資本金総額は2万5000円。"
        },
        { time: "2012年02月", content: "认证ISO9001:2008" },
        { time: "2011年04月", content: "董事会成员变更。" },
        {
          time: "2010年01月",
          content: "追加資本金4000万円,資本金総額20000万円。"
        },
        { time: "2009年11月", content: "认证ISO14001:2004。" },
        {
          time: "2007年05月 ",
          content: "追加資本金8000万円,資本金総額16万円。"
        },
        { time: "2005年10月", content: "法定代表から「木下昭男」に変更。" },
        {
          time: "2004年10月",
          content: "虎门镇赤冈外経工业区で设立され、资本金は8000万円。"
        }
      ]
    };
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
$(function() {});
</script >

<style scoped>
.company-intro-title {
  font-size: 30px;
  color: #0059a0;
  font-weight: 550;
  text-align: center;
}
.company-intro-item {
  font-size: 16px;
  width: 800px;
  margin: 20px auto;
  text-indent: 2em;
}
.company-intro-bottom {
  margin-top: 50px;
}

.company-intro-bottom-right img {
  height: 400px;
}
.company-intro-bottom-left {
  padding: 20px 100px;
}
.company-title {
  font-size: 24px;
  font-weight: 550;
  color: #0059a0;
}
.glyphicon-ok {
  color: #0059a0;
  margin-right: 8px;
}
.company-quality-inner-title {
  font-weight: 550;
}
.company-simple {
  margin-top: 50px;
  min-height: 400px;
}
.company-simple .container {
  padding: 50px 100px;
}
.company-simple .company-title {
  margin-bottom: 20px;
}
.company-simple-item {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  padding-left: 100px;
  border-bottom: 1px solid #ccc;
}
.company-simple-item strong {
  display: inline-block;
  width: 200px;
}
.company-history {
  padding: 50px 100px;
}
.company-history .company-title {
  margin-bottom: 30px;
}
.history-item {
  padding: 10px 100px;
}
.history-item .glyphicon-record {
  font-size: 16px;
  color: #0059a0;
}
.history-item p {
  display: inline-block;
}
.history-item p strong {
  margin: 0 20px;
}
.content-item {
  display: inline-block;
  width: 600px;
  vertical-align: top;
}

.talk-wrapper {
  min-height: 300px;
  position: relative;
  margin-top: 100px;
}
.talk-wrapper .talk-content {
  border: 1px solid #ccc;
  margin: 0 auto;
  width: 600px;
  height: 400px;
  padding: 50px;
}
.talk-wrapper ul li {
  display: none;
}
.talk-wrapper ul li h3 {
  text-align: center;
  color: #0059a0;
  font-weight: 550;
  margin-bottom: 30px;
}
.talk-wrapper ul li p {
  font-style: italic;
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
</style>
