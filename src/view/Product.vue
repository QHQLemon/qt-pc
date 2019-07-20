<template>
  <div class="product-wrapper">
    <div class="main-intro">
      <p class="main-title">产品展示</p>
    </div>
    <div class="intro-show container">
      <div class="intro-show-left col-lg-4">
        <div class="total clearfix">
          <!-- <li class="main"> -->
            <span>产品目录</span>
            <ul class="product-wrapper">
              <li
                class="product-item"
                v-for="item in productData"
                :class="item.proNo == index ? 'active' : ''"
                @click="changeIndex(item)"
              >{{item.proTitle}}</li>
            </ul>
          <!-- </li> -->
          <!-- <li class="main"><span>检测结果展示</span>
            <ul class="product-wrapper">
              <li class="product-item">齿轮的齿形、齿向检测结果(JIS)</li>
              <li class="product-item">齿轮的齿距、跳动检测结果(JIS)</li>
              <li class="product-item">齿轮的齿形、齿向检测结果(ISO)</li>
              <li class="product-item">齿轮的齿距、跳动检测结果(ISO)</li>
              <li class="product-item">蜗杆的齿形、齿向检测结果</li>
              <li class="product-item">蜗杆齿距、跳动检测结果</li>
              <li class="product-item">齿轮的啮合结果(JIS/ISO)</li>
              <li class="product-item">齿轮的啮合结果(JGMA)</li>
            </ul>
          </li>-->
        </div>
      </div>
      <div class="intro-show-right col-lg-8">
        <pro-item :proData="nowPro"></pro-item>
      </div>
    </div>
  </div>
</template>

<script>
import ProItem from "@/components/product/proItem";
export default {
  components: {
    ProItem
  },
  data() {
    return {
      index: 1,
      productData: [
        {
          proNo: 1,
          proTitle: "组合齿轮系列",
          proDire: ["", ""],
          proImg: "/static/img/pro1.jpg"
        },
        {
          proNo: 2,
          proTitle: "内齿轮",
          proDire: ["", ""],
          proImg: "/static/img/pro2.jpg"
        },
        {
          proNo: 3,
          proTitle: "直齿轮系列",
          proDire: ["模数: M0.2 ~ m1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro3.jpg"
        },
        {
          proNo: 4,
          proTitle: "斜齿轮",
          proDire: ["模数: M0.2 ~ m1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro4.jpg"
        },
        {
          proNo: 5,
          proTitle: "蜗轮系列",
          proDire: ["模数: M0.2 ~ m1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro5.jpg"
        },
        {
          proNo: 6,
          proTitle: "蜗杆系列",
          proDire: ["模数: M0.2 ~ m1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro6.jpg"
        },
        {
          proNo: 7,
          proTitle: "皮带轮系列",
          proDire: ["齿形：MXL/XL/S2M/S3M/T2.5/2GT/HTD3M", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro8.jpg"
        },
        {
          proNo: 8,
          proTitle: "切削品系列",
          proDire: ["", ""],
          proImg: "/static/img/pro9.jpg"
        },
        {
          proNo: 9,
          proTitle: "丝杆系列",
          proDire: ["", ""],
          proImg: "/static/img/pro10.jpg"
        },
        {
          proNo: 10,
          proTitle: "精密轴系列",
          proDire: ["", ""],
          proImg: "/static/img/pro11.jpg"
        },
        {
          proNo: 11,
          proTitle: "花健系列",
          proDire: ["", ""],
          proImg: "/static/img/pro12.jpg"
        },
        {
          proNo: 12,
          proTitle: "伞齿/端面齿系列",
          proDire: ["模数: M0.2 ~ m1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro13.jpg"
        },
        {
          proNo: 13,
          proTitle: "粉末冶金齿轮系列",
          proDire: ["模数: M0.2 ~ m1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro14.jpg"
        },
        {
          proNo: 14,
          proTitle: "塑料齿轮系列",
          proDire: ["模数: M0.2 ~ m1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro15.jpg"
        },
        {
          proNo: 15,
          proTitle: "轴齿轮",
          proDire: ["模数: M0.2 ~ m1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro16.jpg"
        },
        {
          proNo: 16,
          proTitle: "斜齿轴",
          proDire: ["模数: M0.2 ~ m1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro17.jpg"
        },
        {
          proNo: 17,
          proTitle: "两段齿轮",
          proDire: ["模数: M0.2 ~ m1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro18.jpg"
        },
        {
          proNo: 18,
          proTitle: "齿条系列",
          proDire: ["", ""],
          proImg: "/static/img/pro19.jpg"
        },
        {
          proNo: 19,
          proTitle: "组装品系列",
          proDire: ["", ""],
          proImg: "/static/img/pro20.jpg"
        },
      ],
      nowPro: ""
    };
  },
  methods: {
    changeIndex(data) {
      console.log(data);
      this.index = data.proNo;
      this.nowPro = data;
    }
  },
  mounted(){
    this.nowPro = this.productData[0];
    this.index = this.productData[0].proNo;
  }
};
</script >

<style scoped>
.intro-show {
  margin-top: 50px;
}
.total  {
  padding: 15px 30px;
  margin-left: 50px;
  width: 300px;
  background: rbg(248, 250, 250);
  color: #000;
  font-weight: 550;
  margin-bottom: 30px;
  border-radius:5px;
}

.total span{
  font-size: 16px;
}

.product-item {
  border-radius: 5px;
  padding: 5px 8px;
  margin-right: 5px;
  margin-top: 20px;
  cursor: pointer;
}
.product-item.active {
  background: #0059a0;
  color: #fff;
}
.product-item:hover {
  background: #ddd;
}
.intro-show-right {
  padding-left: 30px;
}
</style>
