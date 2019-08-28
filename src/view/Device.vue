<template>
  <div class="device-wrapper container">
    <div class="device-top">
      <p class="main-title">设备概略</p>
      <p
        class="device-dire"
      >"我司自2004年创业以来，不断投资、更新设备，拥有两台先进的日本制造加工中心、十几台日系制造的CNC自动车床、十几台日本制造的滚齿机，还有大田精工自主设计开发并享有专利的干式高速滚齿机。一方面，中国国内制造的设备技术力量和服务也得到了提高，可以满足本公司所要求的高精密加工和质量的要求。超声波自动清洗机、滚齿机、滚丝机、线切割、无心磨、压花机等国内设备的投放，满足各种加工需求。另一方面，在质量保证体制方面，配备了三次元，轮廓议、圆度仪、齿轮测试仪等日本制的高精度测量仪器。"</p>
    </div>
    <div class="device-show">
      <p class="device-title">设备展示</p>
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
          devTitle: "北村 NC 车床",
          devImg: "../../static/img/device/北村20G精密车床.jpg"
        },
        {
          devTitle: "北井 8FN 滚齿机",
          devImg: "../../static/img/device/北井8-FN滚齿机.jpg"
        },
        {
          devTitle: "北井 HIPRO 2A 滚齿机",
          devImg: "../../static/img/device/北井HI-PRO-2A滚齿机.jpg"
        },
        {
          devTitle: "北井 HIPRO 3N 滚齿机 ",
          devImg: "../../static/img/device/北井HI-PRO-3N滚齿机 .jpg"
        },
        {
          devTitle: "北井 HIPRO3U 滚齿机",
          devImg: "../../static/img/device/北井HI-PRO-3U滚齿机.jpg"
        },
        {
          devTitle: "滨井 60SP 滚齿机",
          devImg: "../../static/img/device/滨.井60SP滚齿机.jpg"
        },
        {
          devTitle: "发那科加工中心",
          devImg: "../../static/img/device/发那科加工中心.jpg"
        },
        {
          devTitle: "外圆磨",
          devImg: "../../static/img/device/丰田外圆磨.jpg"
        },
        { devTitle: "滚丝机", devImg: "../../static/img/device/滚丝机.jpg" },
        {
          devTitle: "津上 B0203 电脑车床",
          devImg: "../../static/img/device/津上B0203电脑车床.jpg"
        },
        {
          devTitle: "津上 M06J 车床",
          devImg: "../../static/img/device/津上M06J.jpg"
        },
        {
          devTitle: "津上 M06J 车床",
          devImg: "../../static/img/device/津上MO6J车床.jpg"
        },
        {
          devTitle: "津上 MO6SD 复合加工车床",
          devImg: "../../static/img/device/津上MO6SD复合加工车床.jpg"
        },
        {
          devTitle: "六轴中走丝线切割",
          devImg: "../../static/img/device/六轴中走丝线切割.jpg"
        },
        {
          devTitle: "宁江 YK3608 滚齿机",
          devImg: "../../static/img/device/宁江YK3608滚齿机.jpg"
        },
        {
          devTitle: "无心磨床（台湾）",
          devImg: "../../static/img/device/荣光无心磨.jpg"
        },
        {
          devTitle: "无心磨床（中国）",
          devImg: "../../static/img/device/无心磨床.jpg"
        },
        {
          devTitle: "西铁城 A16 CNC自动车床",
          devImg: "../../static/img/device/西铁城A16电脑车床.jpg"
        },
        {
          devTitle: "西铁城 A20 CNC自动车床",
          devImg: "../../static/img/device/西铁城A20电脑车床.jpg"
        },
        {
          devTitle: "西铁城 L20 CNC自动车床",
          devImg: "../../static/img/device/西铁城L20电脑车床.jpg"
        },

        { devTitle: "三丰圆度仪", devImg: "../../static/img/device/圆度仪.jpg" },
        { devTitle: "2.5次元 測定機", devImg: "../../static/img/device/2.5次元.jpg" },
        {
          devTitle: "大阪精密齿轮测试仪",
          devImg: "../../static/img/device/齿轮测试仪.jpg"
        },
        {
          devTitle: "大阪精密齿轮啮合仪",
          devImg: "../../static/img/device/齿轮啮合仪.jpg"
        },
        { devTitle: "三丰轮廓仪", devImg: "../../static/img/device/轮廓仪.jpg" },
        {
          devTitle: "三丰三次元",
          devImg: "../../static/img/device/三丰三次元.jpg"
        },
        {
          devTitle: "超声波自动清洗机",
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
  width: 150px;
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
  justify-content: space-between;
}
.divice-item:hover{
  transform:  scale(1.05);
}
</style>
