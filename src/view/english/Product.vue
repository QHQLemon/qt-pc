<template>
  <div class="product-wrapper">
    <div class="main-intro">
      <p class="main-title">Product Introduction</p>
    </div>
    <div class="intro-show container">
      <div class="intro-show-left col-sm-4">
        <div class="total clearfix" v-show="showFlag">
          <span>Product Introduction</span>
          <div class="scroll-wrap" id="wrap">
            <ul class="product-wrapper">
              <li
                class="product-item"
                v-for="item in productData"
                :class="item.proNo == index ? 'active' : ''"
                @click="changeIndex(item)"
              >{{item.proTitle}}</li>
            </ul>
          </div>
        </div>
        <div class="total clearfix" v-show="!showFlag">
          <span>Product Introduction</span>
          <ul class="product-wrapper">
            <li
              class="product-item"
              v-for="item in productData"
              :class="item.proNo == index ? 'active' : ''"
              @click="changeIndex(item)"
            >{{item.proTitle}}</li>
          </ul>
        </div>
      </div>
      <div class="intro-show-right col-sm-8">
        <pro-item :proData="nowPro"></pro-item>
      </div>
    </div>
  </div>
</template>

<script>
import ProItem from "@/components/product/proItem";
import swiper from "../../assets/js/swiper";
export default {
  components: {
    ProItem
  },
  data() {
    return {
      index: 1,
      showFlag: false,
      productData: [
        {
          proNo: 1,
          proTitle: "Combination gears",
          proDire: ["", ""],
          proImg: "/static/img/pro1.jpg"
        },
        {
          proNo: 2,
          proTitle: "Internal gear",
          proDire: ["", ""],
          proImg: "/static/img/pro2.jpg"
        },
        {
          proNo: 3,
          proTitle: "Spur gear",
          proDire: ["Module: M0.2 ~ M1.5", "Outer dimension: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro3.jpg"
        },
        {
          proNo: 4,
          proTitle: "Helical gear",
          proDire: ["Module: M0.2 ~ M1.5", "Outer dimension: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro4.jpg"
        },
        {
          proNo: 5,
          proTitle: "Worm wheel",
          proDire: ["Module: M0.2 ~ M1.5", "Outer dimension: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro5.jpg"
        },
        {
          proNo: 6,
          proTitle: "Worm gear",
          proDire: ["Module: M0.2 ~ M1.5", "Outer dimension: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro6.jpg"
        },
        {
          proNo: 7,
          proTitle: "Pulley products",
          proDire: [
            "tooth form:MXL/XL/S2M/S3M/T2.5/2GT/HTD3M etc.and special of the tooth form",
            "outer dimension: Φ2.5mm ~ Φ130mm"
          ],
          proImg: "/static/img/pro8.jpg"
        },
        {
          proNo: 8,
          proTitle: "Cutting products",
          proDire: ["", ""],
          proImg: "/static/img/pro9.jpg"
        },
        {
          proNo: 9,
          proTitle: "Leadscrew",
          proDire: ["", ""],
          proImg: "/static/img/pro10.jpg"
        },
        {
          proNo: 10,
          proTitle: "Precision shafts ",
          proDire: ["", ""],
          proImg: "/static/img/pro11.jpg"
        },
        {
          proNo: 11,
          proTitle: "Spline products",
          proDire: ["", ""],
          proImg: "/static/img/pro12.jpg"
        },
        {
          proNo: 12,
          proTitle: "Bevel gear",
          proDire: ["Module: M0.2 ~ M1.5", "Outer dimension: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro13.jpg"
        },
        {
          proNo: 13,
          proTitle: "Sinter gear products",
          proDire: ["Module: M0.2 ~ M1.5", "Outer dimension: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro14.jpg"
        },
        {
          proNo: 14,
          proTitle: "Plastic material gear products",
          proDire: ["Module: M0.2 ~ M1.5", "Outer dimension: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro15.jpg"
        },
        {
          proNo: 15,
          proTitle: "Spur gear shaft",
          proDire: ["Module: M0.2 ~ M1.5", "Outer dimension: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro16.jpg"
        },
        {
          proNo: 16,
          proTitle: "Helical gear shaft",
          proDire: ["Module: M0.2 ~ M1.5", "Outer dimension: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro17.jpg"
        },
        {
          proNo: 17,
          proTitle: "Double reduction gear ",
          proDire: ["Module: M0.2 ~ M1.5", "Outer dimension: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro18.jpg"
        },
        {
          proNo: 18,
          proTitle: "Rack products",
          proDire: ["", ""],
          proImg: "/static/img/pro19.jpg"
        },
        {
          proNo: 19,
          proTitle: "Assembly products",
          proDire: ["", ""],
          proImg: "/static/img/pro20.jpg"
        }
      ],
      nowPro: ""
    };
  },
  methods: {
    changeIndex(data) {
      this.index = data.proNo;
      this.nowPro = data;
    }
  },
  mounted() {
    this.nowPro = this.productData[0];
    this.index = this.productData[0].proNo;
    let a = document.body.clientWidth;
    if (a > 768) {
      this.showFlag = false;
    } else {
      this.showFlag = true;
    }

    const wrap = document.getElementById("wrap");
    swiper({
      wrap,
      dir: "x",
      backOut: "none",
      scrollBar: false
    });

    var $this = this;
    window.addEventListener("resize", function() {
      let clientWidth = document.body.clientWidth;
      if (clientWidth < 768) {
        $this.showFlag = true;
      } else {
        $this.showFlag = false;
      }
    });
  }
};
</script >
<style scoped>
.intro-show {
  margin-top: 50px;
}

.total {
  padding: 10px 0px;
  width: 300px;
  background: rbg(248, 250, 250);
  color: #000;
  font-weight: 550;
  margin-bottom: 30px;
  border-radius: 5px;
}

.total span {
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

ul.product-wrapper {
  padding-left: 10px;
  font-size: 14px;
  font-weight: 300;
}
@media (max-width: 768px) {
  .total {
    margin: 0;
    width: 100%;
    padding: 0 15px;
  }
  .product-item:hover {
    background: #0059a0;
    color: #fff;
  }
  .product-item {
    margin-top: 5px;
  }
  ul.product-wrapper {
    padding-left: 10px;
  }
  .intro-show-right {
    padding: 0 15px;
  }
  .intro-show {
    margin-top: 30px;
  }

  ul.product-wrapper {
    display: flex;
    width: 2400px;
  }
  .scroll-wrap {
    width: 100%;
    overflow: hidden;
  }
  .intro-show-right {
    margin-top: 30px;
  }
}
</style>
