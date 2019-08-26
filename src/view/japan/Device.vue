<template>
  <div class="device-wrapper container">
    <div class="device-top">
      <p class="main-title">設備概略</p>
      <p
        class="device-dire"
      >"弊社は、２００４年の創業以来、随時、設備投資し、最新鋭の日本製マシニングセンター２台、日系メーカーのＣＮＣ自動旋盤１０数台、日本製歯切り盤１０数台ばかりでなく、大田精工が独自設計開発し特許権を有するドライ式高速歯切り盤もラインアップ。一方、中国国内製の諸設備も技術力やサービスが向上し、弊社が求める高精密や加工や品質要求に応えることが証明されました。そこで、超音波自動三層洗浄機、ホブ盤、転造盤ワイアカット、センタレス、ローレット盤も取りそろえ、各種加工を支えています。一方、品質保証体制には、三次元、形状、真円度、歯車測定機、歯車試験機などいずれも日本製高精度な計測機器を取り揃えました。"</p>
    </div>
    <div class="device-show">
      <p class="device-title">設備のご紹介</p>
      <div class="device-img-box">
        <div class="divice-item has-shadow" v-for="item in deviceData">
          <p class="divice-name">{{item.devTitle}}</p>
          <img :src="item.devImg" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deviceData: [
        {
          devTitle: "北村 NC 旋盤",
          devImg: "../../static/img/device/北村20G精密车床.jpg"
        },
        {
          devTitle: "北井 8FN HOB盤",
          devImg: "../../static/img/device/北井8-FN滚齿机.jpg"
        },
        {
          devTitle: "北井 HIPRO 2A HOB盤",
          devImg: "../../static/img/device/北井HI-PRO-2A滚齿机.jpg"
        },
        {
          devTitle: "北井 HIPRO 3N HOB盤",
          devImg: "../../static/img/device/北井HI-PRO-3N滚齿机 .jpg"
        },
        {
          devTitle: "北井 HIPRO 3U HOB盤",
          devImg: "../../static/img/device/北井HI-PRO-3U滚齿机.jpg"
        },
        {
          devTitle: "浜井 60SP HOB盤",
          devImg: "../../static/img/device/滨.井60SP滚齿机.jpg"
        },
        {
          devTitle: "ファナック　ロボドリル　",
          devImg: "../../static/img/device/发那科加工中心.jpg"
        },
        {
          devTitle: "円筒研削盤",
          devImg: "../../static/img/device/丰田外圆磨.jpg"
        },
        { devTitle: "ローレット機", devImg: "../../static/img/device/滚丝机.jpg" },
        {
          devTitle: "津上 B0203 CNC旋盤",
          devImg: "../../static/img/device/津上B0203电脑车床.jpg"
        },
        {
          devTitle: "津上 MO6J CNC旋盤",
          devImg: "../../static/img/device/津上M06J.jpg"
        },
        {
          devTitle: "津上 MO6J CNC旋盤",
          devImg: "../../static/img/device/津上MO6J车床.jpg"
        },
        {
          devTitle: "津上 MO6SD CNC複合機",
          devImg: "../../static/img/device/津上MO6SD复合加工车床.jpg"
        },
        {
          devTitle: "六軸ワイヤーカット",
          devImg: "../../static/img/device/六轴中走丝线切割.jpg"
        },
        {
          devTitle: "寧江 YK3608 HOB盤",
          devImg: "../../static/img/device/宁江YK3608滚齿机.jpg"
        },
        {
          devTitle: "センタレス（台湾）",
          devImg: "../../static/img/device/荣光无心磨.jpg"
        },
        {
          devTitle: "センタレス（中国）",
          devImg: "../../static/img/device/无心磨床.jpg"
        },
        {
          devTitle: "シチズン　A16　CNC自動旋盘",
          devImg: "../../static/img/device/西铁城A16电脑车床.jpg"
        },
        {
          devTitle: "シチズン　L20　CNC自動旋盘盤",
          devImg: "../../static/img/device/西铁城A20电脑车床.jpg"
        },
        {
          devTitle: "シチズン　L20　CNC自動旋盘",
          devImg: "../../static/img/device/西铁城L20电脑车床.jpg"
        },
        { devTitle: "ミツトヨ　真円度測定機", devImg: "../../static/img/device/圆度仪.jpg" },
        { devTitle: "2.5次元 測定機", devImg: "../../static/img/device/2.5次元.jpg" },
        {
          devTitle: "大阪精密歯車試験機",
          devImg: "../../static/img/device/齿轮测试仪.jpg"
        },
        {
          devTitle: "大阪精密歯車噛み合い試験機",
          devImg: "../../static/img/device/齿轮啮合仪.jpg"
        },
        { devTitle: "ミツトヨ　形状測定機", devImg: "../../static/img/device/轮廓仪.jpg" },
        {
          devTitle: "ミツトヨ　三次元機",
          devImg: "../../static/img/device/三丰三次元.jpg"
        },
        {
          devTitle: "超音波自動洗浄機",
          devImg: "../../static/img/device/wash.jpg"
        },
      ]
    };
  }
};
</script >

<style scoped>
.device-dire {
  margin: 0 auto;
  width: 970px;
  font-size: 16px;
  font-style: italic;
  line-height: 40px;
  margin-bottom: 50px;
  text-align: center;
}
.device-title {
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  color: #000;
  font-weight: 550;
  width: 220px;
  border-bottom: 3px solid #0059a0;
}
.divice-item {
  border: 1px solid #ccc;
  width: 320px;
  margin-top: 50px;
  text-align: center;
  padding: 20px;
}
.divice-item p {
  color: #000;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 550;
}
.divice-item img {
  width: 100%;
}
.device-img-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.divice-item:hover{
  transform:  scale(1.05);
}
</style>
