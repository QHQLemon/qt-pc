<template>
  <div class="company-wrapper">
    <div class="company-intro container">
      <div class="company-intro-top">
        <p class="company-intro-title">東莞清田精密歯車有限公司</p>
        <p class="company-intro-item">
          <strong> 東莞清田精密歯輪有限公司</strong>は、日系独資企業として２００４年１０月に東莞市虎門鎮に創業致しました。以来、精密歯車（ハスバ、ヘリカル、プーリ、ウオーム）、伝動シャフト、ハウジング、固定子各種切削品の加工を手掛けて参りました。今後も、品質、コスト、納期全てにわたり、お客様のご期待に応えるよう努力して参ります。
        </p>
      </div>
      <div class="company-intro-bottom">
        <div class="col-lg-6 company-intro-bottom-left">
          <p class="company-title">会社方針</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>品質第一
          </p>
          <p class="company-quality-inner">全社全員一丸となってなって、不良クレームゼロを目指します。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>納期順守
          </p>
          <p class="company-quality-inner">お約束した納期は、必ず守る事をモットーにしてします。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>コストダウン
          </p>
          <p class="company-quality-inner">工程改善、３Ｍ排除を通じ、コストの見直しをします。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>改善活動
          </p>
          <p class="company-quality-inner">４件のＩＳＯ、５Ｓ活動や改善提案を通じて、改善活動を継続して行きます。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>技術革新
          </p>
          <p class="company-quality-inner">多能工化や熟練化を基礎に、創意創造を重ね、技術力の向上に努めます。</p>
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

    <!-- <div class="talk-wrapper">
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
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      companySimple: [
        { title: "会社名", content: "東莞清田精密歯車有限公司" },
        {
          title: "会社住所",
          content: "东莞市虎门镇陈村社区厚虎路22号"
        },
        { title: "会社形態", content: "有限責任会社(外国人合弁)" },
        { title: "登録資本", content: "２億７５００万円" },
        { title: "工場面積", content: "2232㎡" },
        {
          title: "経営範囲",
          content: "歯車、シャフト等の切削品の製造＆び贩売"
        },
        { title: "法定代表者", content: "青山成昭" },
        { title: "成立日", content: "2004年10月26日" },
        { title: "統一信用コード", content: "914419007673331778" },
        { title: "TEL", content: "86-769-85235261/262" },
        { title: "FAX", content: "86-769-85235270" },
        { title: "Email", content: " sales@kiyotadg.com " },
        { title: "ホームページ", content: " www.kiyotadg.com" },
        { title: "郵便番号", content: "523922" },
        { title: "従業員数", content: "80" }
      ],
      companyHistory: [
        {
          time: "2019年07月",
          content: `「浦和冶金工業株式会社」は、全株式を清田株式会社に譲渡;「株式会社MMI」は、全株式を大田精工株式会社に譲渡。`
        },
        { time: "2018年11月", content: "更新AITF 16949:2016。" },

        { time: "2018年03月", content: "経営期限を長期に変更する。" },
        { time: "2018年03月", content: "認証EN ISO 13485:2016。" },
        { time: "2017年12月", content: "更新ISO 141401:2015。" },
        { time: "2017年12月", content: "更新ISO 9001:2015。" },
        { time: "2016年09月", content: "認証ISO/TS 16949:2009" },
        { time: "2016年07月", content: "統一信用コードは9144673331778へ変更される。" },
        { time: "2013年12月", content: "MMI株式会社より増資を受け、資本金は2億7500万円に増額。" },
        { time: "2013年08月", content: "現在の住所に移転する。" },
        {
          time: "2013年04月",
          content:
            "法定代表が「青山成昭」に変更されると同时に、役员が変更された。"
        },
        {
          time: "2013年04月",
          content:
            "“「大田精工株式会社」は5000万を投資し、キヨタ株式会社より経営権を譲渡され、資本金総額は2億5000万円。"
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
          content: "追加資本金8000万円,資本金総額1億6000万円。"
        },
        { time: "2005年10月", content: "法定代表を「木下昭男」に変更。" },
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
