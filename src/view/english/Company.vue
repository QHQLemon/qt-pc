<template>
  <div class="company-wrapper">
    <div class="company-intro container">
      <div class="company-intro-top">
        <p class="company-intro-title">DONGGUAN KIYOTA PRECISION CO., LTD</p>
        <p class="company-intro-item">
          DKP, a Japanese sole-invested company was incorporated in Oct. 2004 in Humen, Dongguan city, Guandong province, China.
          Main products are module small precison hob-cut gears such as standard, helical, pulley and worm.
          Others include transmission shaft, housing, rotator and many sorts of cut or lathed parts.
          In future, we will make a continuous pursuit to achieve customers' satisfaction for quality, cost and delivery.
        </p>
      </div>
      <div class="company-intro-bottom">
        <div class="col-lg-6 company-intro-bottom-left">
          <p class="company-title">Company Policy</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>Quality uppermost
          </p>
          <p class="company-quality-inner">Aim at claim zero.</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>Delivery comittment
          </p>
          <p class="company-quality-inner">Keep the date is our motto.</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>Cost reduction
          </p>
          <p class="company-quality-inner">Review the cost through process Kaizen and no 3M ways.</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>Various actions to improve
          </p>
          <p class="company-quality-inner">ISO, 5S, suggestion activities enhance the quality.</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>Technology improvement
          </p>
          <p class="company-quality-inner">Make an effort to create technology innovation.</p>
        </div>
        <div class="col-lg-6 company-intro-bottom-right">
          <img src="../../assets/img/company.jpg" alt />
        </div>
      </div>
    </div>
    <div class="company-simple">
      <div class="container">
        <p class="company-title">Company Profile</p>
        <p v-for="(item, index) in companySimple" class="company-simple-item">
          <strong>{{item.title}}</strong>
          {{item.content}}
        </p>
      </div>
    </div>
    <div class="container company-history">
      <p class="company-title">Company History</p>
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
        {
          title: "COMPANY NAME ",
          content: "DONGGUAN KIYOTA PRECISION CO., LTD"
        },
        {
          title: "LOCATION",
          content:
            "No.22, Houhu road,ChenCun Village,HuMen Town,DongGuan City GuangDong Province"
        },
        {
          title: "COMPANY STYLE",
          content: "LOCAL COMPANY LIMITED (INVESTED BY JAPANESE ONLY)"
        },
        {
          title: "CAPITAL",
          content: "275 MILLION YEN"
        },
        { title: "AREA", content: "2232㎡" },
        {
          title: "BUSINESS SCOPE",
          content:
            "Production and sales of gear, shaft and mechanical spare parts"
        },
        { title: "REPRESENTIVE", content: "AOYAMA Shigeaki (Mr)" },
        { title: "INCORPORATION", content: "26th, Oct, 2004 " },
        { title: "COMPANY ID#", content: "914419007673331778" },
        { title: "TEL", content: "86-769-85235261/262" },
        { title: "FAX", content: "86-769-85235270" },
        { title: "EMAIL", content: " sales1@kiyotadg.com " },
        { title: "URL", content: " https://www.kiyotadg.com" },
        { title: "ZIP", content: "523922" },
        { title: "EMPLOYEES", content: "80" }
      ],
      companyHistory: [
        {
          time: "2019.July",
          content: `Urawa Yakin Kogyo Co.,Ltd transfered all shared stocks to Kiyota Co.,Ltd. MMI Co.,Ltd transferred all shared stocks to Ohta Seiko Co., Ltd. The board members have been changed accordingly.`
        },
        { time: "2018.Nov", content: " IATF 16949:2016 renewed." },

        {
          time: "2018.Mar",
          content: "Company license duration changed for long time."
        },
        { time: "2018.Mar", content: "EN ISO 13485:2016 certified." },
        { time: "2017.Dec", content: "ISO 14001:2015 renewed." },
        { time: "2017.Dec", content: "ISO 9001:2015 renewed." },
        { time: "2016.Sep", content: "ISO/TS 16949:2009 certified." },
        {
          time: "2016.July",
          content: "Company ID# changed to 914419007673331778."
        },
        {
          time: "2013.Dec",
          content:
            "Total capital amount increased up to 275 million yen by invested by MMI."
        },
        { time: "2013.Aug", content: "Move to present address." },
        {
          time: "2013.Apr",
          content: `Company representative changed to AOYAM Shigeaki and the board members changed accordingly. `
        },
        {
          time: "2013.Apr",
          content: `Ohta Seiko Co.,Ltd invested 50 million yen to acquired the right of management from Kiyota Co.,Ltd. Total capital amount increased up to 250 million yen.`
        },
        { time: "2012.Feb", content: "ISO 9001:2008 certified." },
        { time: "2011.Apr", content: "Board member changed." },
        {
          time: "2010.Jan",
          content:
            " 40 million yen invested and the total capital amount increased up to 200 million yen."
        },
        { time: "2009.Nov", content: "ISO 14001:2004 certified." },
        {
          time: "2007.May ",
          content: "Company representative changed to KINOSHITA Akio. "
        },
        {
          time: "2005.Oct",
          content: "The legal representative was changed to akiao kinoshita."
        },
        {
          time: "2004.Oct",
          content:
            "Incorporated in Humen Chigang.  The invested capital : 80 million yen. "
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
  font-size: 14px;
  padding-left: 100px;
  border-bottom: 1px solid #ccc;
}
.company-simple-item strong {
  flex: 0 0 40%;
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


