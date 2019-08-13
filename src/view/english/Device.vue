<template>
  <div class="device-wrapper container">
    <div class="device-top">
      <p class="main-title">Equipment Outline</p>
      <p
        class="device-dire"
      >"Since our foundation in 2004, we have constantly invested in purchasing machineriessuch as two of Japan-made most advanced machining centers, over ten sets of Japanese CNC automatic lathing and hob cutters as well as one set of our original-designed and patented high speed dry hob cutter. Recently, because Chinese machineries industries have improved their technologies and services to satisfy our requirement of high precision and quality, thus we began to select these local ones, includingautomatic ultrasonic three-tank rinsing, hob cutting, worm rolling, wire-cutter, centerless, knurling to provide various manufacturing. On the other hand, for quality assurance, Japan-made high precision measurement equipment like three-dimension, surface roughness, roundness, gear tooth matching and gear shape are all available. "</p>
    </div>
    <div class="device-show">
      <p class="device-title">Equipment</p>
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
          devTitle: "North village 20G precision lathe",
          devImg: "../../static/img/device/北村20G精密车床.jpg"
        },
        {
          devTitle: "Beijing 8-FN gear hobbing machine",
          devImg: "../../static/img/device/北井8-FN滚齿机.jpg"
        },
        {
          devTitle: "Beijing hi-pro-2a gear hobbing machine",
          devImg: "../../static/img/device/北井HI-PRO-2A滚齿机.jpg"
        },
        {
          devTitle: "Beijing hi-pro-3n gear hobbing machine ",
          devImg: "../../static/img/device/北井HI-PRO-3N滚齿机 .jpg"
        },
        {
          devTitle: "Beijing hi-pro-3u gear hobbing machine",
          devImg: "../../static/img/device/北井HI-PRO-3U滚齿机.jpg"
        },
        {
          devTitle: "Bin. Well 60SP gear hobbing machine",
          devImg: "../../static/img/device/滨.井60SP滚齿机.jpg"
        },
        {
          devTitle: "Fanuc processing center",
          devImg: "../../static/img/device/发那科加工中心.jpg"
        },
        {
          devTitle: "Toyota external round mill",
          devImg: "../../static/img/device/丰田外圆磨.jpg"
        },
        {
          devTitle: "Thread rolling machine",
          devImg: "../../static/img/device/滚丝机.jpg"
        },
        {
          devTitle: "Tianjin B0203 computer lathe",
          devImg: "../../static/img/device/津上B0203电脑车床.jpg"
        },
        {
          devTitle: "Tianjin M06J",
          devImg: "../../static/img/device/津上M06J.jpg"
        },
        {
          devTitle: "Zon MO6J lathe",
          devImg: "../../static/img/device/津上MO6J车床.jpg"
        },
        {
          devTitle: "Tianjin MO6SD compound machining lathe",
          devImg: "../../static/img/device/津上MO6SD复合加工车床.jpg"
        },
        {
          devTitle: "Six axis in line cutting",
          devImg: "../../static/img/device/六轴中走丝线切割.jpg"
        },
        {
          devTitle: "Ningjiang YK3608 gear hobbing machine",
          devImg: "../../static/img/device/宁江YK3608滚齿机.jpg"
        },
        {
          devTitle: "Glory centerless grinding",
          devImg: "../../static/img/device/荣光无心磨.jpg"
        },
        {
          devTitle: "Centerless grinding machine",
          devImg: "../../static/img/device/无心磨床.jpg"
        },
        {
          devTitle: "A16 computer lathe in west iron city",
          devImg: "../../static/img/device/西铁城A16电脑车床.jpg"
        },
        {
          devTitle: "A16 computer lathe in west iron city",
          devImg: "../../static/img/device/西铁城A20电脑车床.jpg"
        },
        {
          devTitle: "Xi tie cheng L20 computer lathe",
          devImg: "../../static/img/device/西铁城L20电脑车床.jpg"
        },
        {
          devTitle: "Roundness instrument",
          devImg: "../../static/img/device/圆度仪.jpg"
        },
        {
          devTitle: "2.5 dimensional",
          devImg: "../../static/img/device/2.5次元.jpg"
        },
        {
          devTitle: "Gear tester",
          devImg: "../../static/img/device/齿轮测试仪.jpg"
        },
        {
          devTitle: "Gear mesh",
          devImg: "../../static/img/device/齿轮啮合仪.jpg"
        },
        {
          devTitle: "Contourgraph",
          devImg: "../../static/img/device/轮廓仪.jpg"
        },
        {
          devTitle: "Sanfeng three dimensional",
          devImg: "../../static/img/device/三丰三次元.jpg"
        },
        {
          devTitle: "Automatic ultrasonic cleaning machine",
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
.divice-item:hover {
  transform: scale(1.05);
}
</style>
