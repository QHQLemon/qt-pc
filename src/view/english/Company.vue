<template>
  <div class="company-wrapper">
    <div class="company-intro container">
      <div class="company-intro-top">
        <p class="company-intro-title">DONGGUAN KIYOTA PRECISION CO., LTD</p>
        <p class="company-intro-item">
          <strong>DONGGUAN KIYOTA PRECISION CO., LTD</strong> founded in October 2004, is a foreign joint venture enterprise specializing in the production of precision gear, specializing in the production of gear (flat gear / helical gear / worm), transmission shaft and various mechanical parts. Since the formal operation in May 2005, our company has been expanding and improving processing and testing equipment to meet customer requirements. The pursuit of high quality and better service is our consistent goal, we hope to establish friendly relations of cooperation with customers, joint efforts, to develop the unlimited potential of the market, here welcome you to contact our company.
        </p>
      </div>
      <div class="company-intro-bottom">
        <div class="col-lg-6 company-intro-bottom-left">
          <p class="company-title">Quality policy</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>Quality first
          </p>
          <p
            class="company-quality-inner"
          >The company to do well in products as the primary work to meet customer requirements.</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>Adherence to satisfied
          </p>
          <p
            class="company-quality-inner"
          >Strictly comply with customer requirements for delivery on time.</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>Reduce the cost
          </p>
          <p class="company-quality-inner">Reduce waste, reduce cost and improve work efficiency.</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>Continuous improvement
          </p>
          <p
            class="company-quality-inner"
          >Improve the quality system, so that work procedures, standardization, and constantly improve the quality of products.</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>Innovation
          </p>
          <p
            class="company-quality-inner"
          >All staff have the courage to innovate and master new rules, new knowledge and new skills.</p>
        </div>
        <div class="col-lg-6 company-intro-bottom-right">
          <img src="../../assets/img/company.jpg" alt>
        </div>
      </div>
    </div>
    <div class="company-simple">
      <div class="container">
        <p class="company-title">Company profile</p>
        <p v-for="(item, index) in companySimple" class="company-simple-item">
          <strong>{{item.title}}</strong>
          {{item.content}}
        </p>
      </div>
    </div>
    <div class="container company-history">
      <p class="company-title">Corporate history</p>
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
          <h3>Our belief</h3>
          <p>"We live and contribute to society through manufacturing industry."</p>
          <p>"In manufacturing, the most important thing is to keep promises including quality, delivery and price committed with the customers."</p>
          <p>"Our belief is to sustain within severe competition these days while carrying forward through rationalization and technology improvement."</p>
        </li>
        <li class="talk-item">
          <h3>Business Philosophy</h3>
          <p>"We believe that the development of our company can contribute to the society and enrich the life of every employee”</p>
        </li>
        <li class="talk-item">
          <h3>Environmental Policy</h3>
          <p>"Protecting the environment is our common responsibility to abide by environmental laws and regulations and enhance environmental awareness; Standardize operation process, control pollution by science and technology: innovate energy saving and consumption reduction, implement environmental indicators; Full participation in control, continuous improvement."</p>
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
        {
          title: "Company Name ",
          content: "DONGGUAN KIYOTA PRECISION CO., LTD"
        },
        {
          title: "Address",
          content:
            "No.22, houhu road, chencun community industrial zone, humen town, dongguan city"
        },
        {
          title: "Types",
          content: "Limited liability company (foreign joint venture)"
        },
        {
          title: "Registering Capital",
          content: "Two hundred seventy-five million yen"
        },
        { title: "Area", content: "2232㎡" },
        {
          title: "Business Scope",
          content:
            "Production and sales of gear, shaft and mechanical spare parts"
        },
        { title: "Legal representative", content: "青山成昭" },
        { title: "Register Date", content: "October 26, 2004" },
        { title: "Registration ID", content: "914419007673331778" },
        { title: "TEL", content: "86-769-85235261/262" },
        { title: "FAX", content: "86-769-85235270" },
        { title: "Email", content: " sales@kiyotadg.com " },
        { title: "Url", content: " www.kiyotadg.com" },
        { title: "Zip Code", content: "523922" },
        { title: "Staff", content: "80" }
      ],
      companyHistory: [
        {
          time: "2019.July",
          content: "Change of shareholders and change of board members."
        },
        { time: "2018.Mar", content: "The term of operation is changed to long term." },
        { time: "2016.July", content: "The unified credit code is changed to 914419007673331778." },
        { time: "2013.Dec", content: 'Increase the shareholder "MMI" and change the registered capital to 275m yen.' },
        { time: "2013.Aug", content: "Move to present address." },
        {
          time: "2013.Apr",
          content: `The legal representative shall be changed to "castle peak chengzhao", and the members of the board of directors shall be changed at the same time.`
        },
        {
          time: "2013.Apr",
          content: `Daeda seiko co., LTD." invests 50 million and obtains the right to transfer shares, with a total capital of 250 million yen.`
        },
        { time: "2012.Feb", content: "The certification of ISO9001:2008" },
        { time: "2011.Apr", content: "Change of board members." },
        {
          time: "2010.Jan",
          content:
            "Additional capital of 40 million yen, the total capital of 20 million yen."
        },
        { time: "2009.Nov", content: "Certification, ISO14001:2004." },
        {
          time: "2007.May ",
          content:
            "Additional capital of 80 million yen, the total capital of 160 million yen."
        },
        {
          time: "2005.Oct",
          content: "The legal representative was changed to akiao kinoshita."
        },
        {
          time: "2004.Oct",
          content:
            "Established in humen town chigang foreign economic zone, capital 80 million yen."
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
  margin-top: 30px;
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
  display: inline-block;
  width: 100px;
  margin: 0 10px;
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
