<template>
  <div class="company-wrapper">
    <div class="company-intro container">
      <div class="company-intro-top">
        <p class="company-intro-title">东莞清田精密齿轮有限公司</p>
        <p class="company-intro-item">
          <strong>东莞清田精密齿轮有限公司</strong> 创立于2004年10月，是以生产精密齿轮为主的外商合资企业，专业生产齿轮（平齿轮/斜齿轮/蜗杆）、传动轴以及各种机械零配件。自2005年5月正式投产经营以来我司不断的扩充、改善加工及检测设备，以力争满足客户要求；追求高品质、更好的服务是我司一贯秉持的目标，我司希望能够与客户建立友好的合作关系，共同努力，开拓这无限潜力的市场，在此欢迎您与我司联系。
        </p>
      </div>
      <div class="company-intro-bottom">
        <div class="col-lg-6 company-intro-bottom-left">
          <p class="company-title">质量方针</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>品质第一
          </p>
          <p class="company-quality-inner">全公司以做好产品做为首要工作，以满足顾客要求。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>严守纳期
          </p>
          <p class="company-quality-inner">严格遵守顾客要求之交货期，做到准时交货。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>降低成本
          </p>
          <p class="company-quality-inner">减少浪费，降低成本，提高工作效率。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>持续改进
          </p>
          <p class="company-quality-inner">改进质量体系，使工作程序化、规范化、不断提升产品质量。</p>
          <p class="company-quality-inner-title">
            <span class="glyphicon glyphicon-ok"></span>勇于创新
          </p>
          <p class="company-quality-inner">全员勇于创新并掌握新规则、新知识、新技能。</p>
        </div>
        <div class="col-lg-6 company-intro-bottom-right">
          <img src="../assets/img/company.jpg" alt>
        </div>
      </div>
    </div>
    <div class="company-simple">
      <div class="container">
        <p class="company-title">公司概要</p>
        <p v-for="(item, index) in companySimple" class="company-simple-item">
          <strong>{{item.title}}</strong>
          {{item.content}}
        </p>
      </div>
    </div>
    <div class="container company-history">
      <p class="company-title">公司沿革</p>
      <div class="history-item" v-for="item in companyHistory">
        <span class="glyphicon glyphicon-record"></span>
        <p>
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
        { title: "公司名称", content: "东莞清田精密齿轮有限公司" },
        { title: "公司地址", content: "东莞市虎门镇陈村社区工业区厚虎路22号" },
        { title: "公司类型", content: "有限责任公司（外商合资）" },
        { title: "注册资本", content: "贰亿柒仟伍佰万日元" },
        { title: "工场面积", content: "2232㎡" },
        { title: "经营范围", content: "生产和销售齿轮、传动轴以及机械零配件" },
        { title: "法定代表人", content: "青山成昭" },
        { title: "成立日期", content: "2004年10月26日" },
        { title: "注册号", content: "914419007673331778" },
        { title: "TEL", content: "86-769-85235261/262" },
        { title: "FAX", content: "86-769-85235270" },
        { title: "Email", content: " sales@kiyotadg.com " },
        { title: "网址", content: " https://www.kiyotadg.com" },
        { title: "邮编", content: "523922" },
        { title: "工作人员", content: "80人" }
      ],
      companyHistory: [
        {
          time: "2019年07月",
          content: `“浦和冶金工业株式会社”将全部股权转让给“清田株式会社”，
                    “株式会社MMI”将全部股权转让给“大田精工株式会社”，
                    同时董事会成员变更。`
        },
        { time: "2018年11月", content: "换证IATF 16949:2016。" },

        { time: "2018年03月", content: "经营期限变更为长期。" },
        { time: "2018年03月", content: "认证EN ISO 13485:2016。" },
        { time: "2017年12月", content: "换证ISO 14001:2015。" },
        { time: "2017年12月", content: "换证ISO 9001:2015。" },
        { time: "2016年09月", content: "认证ISO/TS 16949:2009。" },

        {
          time: "2016年07月",
          content: "统一信用代码变更为914419007673331778。"
        },
        {
          time: "2013年12月",
          content: "增加股东“株式会社MMI”，同时注册资本变更为27500万日元。"
        },
        { time: "2013年08月", content: "迁至现在地址。" },
        {
          time: "2013年04月",
          content: "法定代表人变更为“青山成昭”，同时董事会成员变更。"
        },
        {
          time: "2013年04月",
          content:
            "“大田精工株式会社”投资5000万及获股份转让经营权，总资本金为25000万日元。"
        },
        { time: "2012年02月", content: "认证ISO 9001:2008。" },
        { time: "2011年04月", content: "董事会成员变更。" },
        {
          time: "2010年01月",
          content: "追加资本金4000万日元，总资本金为20000万日元。"
        },
        { time: "2009年11月", content: "认证ISO 14001:2004。" },
        {
          time: "2007年05月 ",
          content: "追加资本金8000万日元，总资本金为16000万日元。"
        },
        { time: "2005年10月", content: "法定代表人变更为“木下昭男”。" },
        {
          time: "2004年10月",
          content: "成立于虎门镇赤岗外经工业区，资本金8000万日元。"
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


