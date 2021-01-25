<template>
  <div class="company-wrapper">
    <div class="company-intro container">
      <div class="company-intro-top">
        <p class="company-intro-title">東莞清田精密歯車有限公司</p>
        <p class="company-intro-item">
          <strong> 東莞清田精密歯輪有限公司</strong>は、日系独資企業として2004年10月に東莞市虎門鎮に創業致しました。以来、精密歯車（ハスバ、ヘリカル、プーリ、ウオーム）、伝動シャフト、ハウジング、固定子各種切削品の加工を手掛けて参りました。今後も、品質、コスト、納期全てにわたり、お客様のご期待に応えるよう努力して参ります。
        </p>
      </div>
      <div class="company-intro-bottom">
        <div class="col-lg-6 company-intro-bottom-left">
          <p class="company-title">会社方針</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>品質第一
          </p>
          <p class="company-quality-inner">不良クレームゼロを目指します。</p>
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
          <p class="company-quality-inner">ＩＳＯ、５Ｓ、提案活動を通じて、品質を向上させます。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>技術革新
          </p>
          <p class="company-quality-inner">創意創造を重ね、技術力の向上に努めます。</p>
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
        <p class="item-content">
          <strong>{{item.time}}</strong>
          <span class="content-item">{{item.content}}</span>
        </p>
      </div>
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
          title: "会社住所",
          content: "东莞市虎门镇陈村社区厚虎路22号"
        },
        { title: "会社形態", content: "現地法人（日系独資）" },
        { title: "資本金", content: "２億7500万円" },
        { title: "工場面積", content: "2232㎡" },
        {
          title: "経営範囲",
          content: "歯車、シャフト、機械部品等の製造販売"
        },
        { title: "法定代表者", content: "青山成昭" },
        { title: "創業日", content: "2004年10月26日" },
        { title: "統一信用コード", content: "914419007673331778" },
        { title: "TEL", content: "86-769-85235261/262" },
        { title: "FAX", content: "86-769-85235270" },
        { title: "Email", content: " sales1@kiyotadg.com " },
        { title: "ホームページ", content: " https://www.kiyotadg.com" },
        { title: "郵便番号", content: "523922" },
        { title: "従業員数", content: "80" }
      ],
      companyHistory: [
        {
          time: "2019年07月",
          content: `浦和冶金工業株式会社は、全株式を清田株式会社に譲渡; 株式会社MMIは、全株式を大田精工株式会社に譲渡。同時に取締役会メンバーも変更。`
        },
        { time: "2018年11月", content: "IAITF 16949:2016の更新。" },

        { time: "2018年03月", content: "経営期限を長期に変更。" },
        { time: "2018年03月", content: "EN ISO 13485:2016の認証受ける。" },
        { time: "2017年12月", content: "ISO 14001:2015の更新。" },
        { time: "2017年12月", content: "ISO 9001:2015の更新。" },
        { time: "2016年09月", content: "ISO/TS 16949:2009の認証受ける。" },
        { time: "2016年07月", content: "統一信用コードは9144673331778へ変更される。" },
        { time: "2013年12月", content: "MMI株式会社より，増資を受け、資本金は2億7500万円に増額。" },
        { time: "2013年08月", content: "現在の住所に移転。" },
        {
          time: "2013年04月",
          content:
            "法定代表を「青山成昭」に変更。役員会メンバ－も変更。"
        },
        {
          time: "2013年04月",
          content:
            "大田精工株式会社は5000万円を投資し、キヨタ株式会社より経営権を譲渡される、資本金総額は2億5000万円。"
        },
        { time: "2012年02月", content: "ISO 9001:2008の認証受ける。" },
        { time: "2011年04月", content: "取締役メンバ－変更。" },
        {
          time: "2010年01月",
          content: "追加資本金4000万円,資本金総額20000万円。"
        },
        { time: "2009年11月", content: "认证ISO 14001:2004。" },
        {
          time: "2007年05月 ",
          content: "追加資本金8000万円,資本金総額1億6000万円。"
        },
        { time: "2005年10月", content: "法定代表を「木下昭男」に変更。" },
        {
          time: "2004年10月",
          content: "虎門鎮赤崗外経工業区に創業、資本金8000万円。"
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
  max-width: 800px;
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
  display: flex;
  height: 40px;
  font-size: 14px;
  padding-left: 100px;
  border-bottom: 1px solid #ccc;
}
.company-simple-item strong {
  display: inline-block;
  width: 25%;
}
.company-history {
  padding: 50px 100px;
}
.company-history .company-title {
  margin-bottom: 30px;
}
.history-item {
  padding: 10px 100px;
  display: flex;
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
  max-width: 600px;
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

@media (max-width: 768px) {
  .company-intro-title {
    font-size: 24px;
  }
  .container {
    margin: 0 15px;
  }
  .company-intro-bottom,
  .company-simple {
    margin-top: 20px;
  }
  .company-intro-bottom-left {
    padding: 10px;
  }
  .company-title {
    font-size: 20px;
  }
  .company-intro-bottom-right img {
    display: none;
  }
  .company-simple .container,
  .company-history {
    padding: 10px;
  }
  .company-simple-item {
    padding-left: 0;
  }
  .history-item{
    padding: 0;
  }
  .history-item .item-content{
    display: flex;
    flex-direction: column;
  }
  .content-item{
    padding-left: 20px;
  }
}
@media (min-width: 768px) {
  .company-simple-item {
    line-height: 40px;
  }
}
</style>

