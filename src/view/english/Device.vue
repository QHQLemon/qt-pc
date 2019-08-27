<template>
  <div class="device-wrapper container">
    <div class="device-top">
      <p class="main-title">Equipment Outline</p>
      <p
        class="device-dire"
      >Since our foundation in 2004, we have constantly invested in purchasing machineriessuch as two of Japan-made most advanced machining centers, over ten sets of Japanese CNC automatic lathing and hob cutters as well as one set of our original-designed and patented high speed dry hob cutter. Recently, because Chinese machineries industries have improved their technologies and services to satisfy our requirement of high precision and quality, thus we began to select these local ones, including　automatic ultrasonic rinsing facility, hob cutting, worm rolling, wire-cutter, centerless, knurling to manufacture . On the other hand, for quality assurance, Japan-made high precision measurement equipment like three-dimension, surface roughness, roundness, gear tooth matching and gear shape are all line-up and available.
      </p>
      </div>
    <div class="device-show">
      <p class="device-title">MACHINERIES INTRODUCTION</p>
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
          devTitle: "KITAMURA NC Lathe",
          devImg: "../../static/img/device/北村20G精密车床.jpg"
        },
        {
          devTitle: "KITAI 8-FN gear hobbing ",
          devImg: "../../static/img/device/北井8-FN滚齿机.jpg"
        },
        {
          devTitle: "KITAI HIPRO 2A gear hobbing ",
          devImg: "../../static/img/device/北井HI-PRO-2A滚齿机.jpg"
        },
        {
          devTitle: "KITAI HIPRO 3N gear hobbing  ",
          devImg: "../../static/img/device/北井HI-PRO-3N滚齿机 .jpg"
        },
        {
          devTitle: "KITAI HIPRO 3U gear hobbing ",
          devImg: "../../static/img/device/北井HI-PRO-3U滚齿机.jpg"
        },
        {
          devTitle: "HAMAI 60SP gear hobbing ",
          devImg: "../../static/img/device/滨.井60SP滚齿机.jpg"
        },
        {
          devTitle: "FANUC ROBODRILL (machinng center)",
          devImg: "../../static/img/device/发那科加工中心.jpg"
        },
        {
          devTitle: "External round mill",
          devImg: "../../static/img/device/丰田外圆磨.jpg"
        },
        {
          devTitle: "Nurling machine",
          devImg: "../../static/img/device/滚丝机.jpg"
        },
        {
          devTitle: "TSUGAMI B0203 CNC automatic lathe",
          devImg: "../../static/img/device/津上B0203电脑车床.jpg"
        },
        {
          devTitle: "TSUGAMI M06J CNC automatic lathe",
          devImg: "../../static/img/device/津上M06J.jpg"
        },
        {
          devTitle: "TSUGAMI MO6J CNC automatic lathe",
          devImg: "../../static/img/device/津上MO6J车床.jpg"
        },
        {
          devTitle: "TSUGAMI MO6SD CNC automatic lathe ",
          devImg: "../../static/img/device/津上MO6SD复合加工车床.jpg"
        },
        {
          devTitle: "Six axis wire cutting",
          devImg: "../../static/img/device/六轴中走丝线切割.jpg"
        },
        {
          devTitle: "Ningjiang YK3608 gear hobbing ",
          devImg: "../../static/img/device/宁江YK3608滚齿机.jpg"
        },
        {
          devTitle: "Centerless grinding machine (Taiwan)",
          devImg: "../../static/img/device/荣光无心磨.jpg"
        },
        {
          devTitle: "Centerless grinding machine(China)",
          devImg: "../../static/img/device/无心磨床.jpg"
        },
        {
          devTitle: "CITIZEN A16 CNC automatic lathe",
          devImg: "../../static/img/device/西铁城A16电脑车床.jpg"
        },
        {
          devTitle: "CITIZEN A16 CNC automatic lathe",
          devImg: "../../static/img/device/西铁城A20电脑车床.jpg"
        },
        {
          devTitle: "CITIZEN L20 CNC automatic lathe",
          devImg: "../../static/img/device/西铁城L20电脑车床.jpg"
        },
        {
          devTitle: "Mitutoyo roundness measurement ",
          devImg: "../../static/img/device/圆度仪.jpg"
        },
        {
          devTitle: "2.5 dimension measurement",
          devImg: "../../static/img/device/2.5次元.jpg"
        },
        {
          devTitle: "OSAKA SEIMITSU gear form measurement",
          devImg: "../../static/img/device/齿轮测试仪.jpg"
        },
        {
          devTitle: "OSAKA SEIMITSU gear match measurement",
          devImg: "../../static/img/device/齿轮啮合仪.jpg"
        },
        {
          devTitle: "Mitutoyo surface roundness contour measurement",
          devImg: "../../static/img/device/轮廓仪.jpg"
        },
        {
          devTitle: "Mitutoyo three dimension measurement",
          devImg: "../../static/img/device/三丰三次元.jpg"
        },
        {
          devTitle: "Automatic ultrasonic rinsing facility ",
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
  width: 1070px;
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
  width: 380px;
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
  line-height: 20px;
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
.divice-item:hover {
  transform: scale(1.05);
}
</style>
