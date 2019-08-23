<template>
  <div class="product-wrapper">
    <div class="main-intro">
      <p class="main-title">製品ラインナップ</p>
    </div>
    <div class="intro-show container">
      <div class="intro-show-left col-lg-4">
        <div class="total clearfix">
            <span>製品目録</span>
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
          proTitle: "組み合わせ歯車製品群",
          proDire: ["", ""],
          proImg: "/static/img/pro1.jpg"
        },
        {
          proNo: 2,
          proTitle: "インターナルギア",
          proDire: ["", ""],
          proImg: "/static/img/pro2.jpg"
        },
        {
          proNo: 3,
          proTitle: "スパギア",
          proDire: ["モジュ-ル: M0.2 ~ M1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro3.jpg"
        },
        {
          proNo: 4,
          proTitle: "ヘリカルギア",
          proDire:["モジュ-ル: M0.2 ~ M1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro4.jpg"
        },
        {
          proNo: 5,
          proTitle: "ウォームホイル製品群",
          proDire:["モジュ-ル: M0.2 ~ M1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro5.jpg"
        },
        {
          proNo: 6,
          proTitle: "ウォームギア製品群",
          proDire:["モジュ-ル: M0.2 ~ M1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro6.jpg"
        },
        {
          proNo: 7,
          proTitle: "プーリ製品群",
          proDire: ["歯形：MXL/XL/S2M/S3M/T2.5/2GT/HTD3M", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro8.jpg"
        },
        {
          proNo: 8,
          proTitle: "切削品製品群",
          proDire: ["", ""],
          proImg: "/static/img/pro9.jpg"
        },
        {
          proNo: 9,
          proTitle: "リードスクリュー製品群",
          proDire: ["", ""],
          proImg: "/static/img/pro10.jpg"
        },
        {
          proNo: 10,
          proTitle: "精密軸製品群",
          proDire: ["", ""],
          proImg: "/static/img/pro11.jpg"
        },
        {
          proNo: 11,
          proTitle: "スプライン加工製品群",
          proDire: ["", ""],
          proImg: "/static/img/pro12.jpg"
        },
        {
          proNo: 12,
          proTitle: "かさ歯製品群",
          proDire:["モジュ-ル: M0.2 ~ M1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro13.jpg"
        },
        {
          proNo: 13,
          proTitle: "焼結ギア製品群",
          proDire:["モジュ-ル: M0.2 ~ M1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro14.jpg"
        },
        {
          proNo: 14,
          proTitle: "樹脂材ギア製品群",
          proDire:["モジュ-ル: M0.2 ~ M1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro15.jpg"
        },
        {
          proNo: 15,
          proTitle: "軸ギア",
          proDire:["モジュ-ル: M0.2 ~ M1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro16.jpg"
        },
        {
          proNo: 16,
          proTitle: "ヘリカル歯シャフト",
          proDire:["モジュ-ル: M0.2 ~ M1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro17.jpg"
        },
        {
          proNo: 17,
          proTitle: "2段ギア",
          proDire:["モジュ-ル: M0.2 ~ M1.5", "外径: Φ2.5mm ~ Φ130mm"],
          proImg: "/static/img/pro18.jpg"
        },
        {
          proNo: 18,
          proTitle: "ラック製品群",
          proDire: ["", ""],
          proImg: "/static/img/pro19.jpg"
        },
        {
          proNo: 19,
          proTitle: "組立製品群",
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
  padding: 15px 10px;
  margin-left: 10px;
  background: rbg(248, 250, 250);
  color: #000;
  font-weight: 550;
  margin-bottom: 30px;
  border-radius:5px;
}

.total span{
  font-size: 18px;
  font-weight: 800;
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
