<template>
  <div class="branch-wrapper container">
    <p class="main-title">関連会社</p>
    <div class="branch-item " v-for="item in branchData">
      <p class="branch-title">{{item.bName}}</p>
      <hr>
      <p class="branch-dir">{{item.bDir}}</p>
      <div class="img-wrapper clearfix">
        <img :src="item.bImg" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      branchData: [
        {
          bName: "OHTA SEIKO CO., LTD.",
          bDir:
            "当社は1958年（昭和３３年）精密小型歯車の専門工場として発足し、時代の要請に応え逐次業務の拡張を図り、現在は精密小型歯車 のみならず電子機器・光学機器・OA機器等の超精密部品の機械加工及び組立を業務としております。",
          bImg: '/static/img/jp1.jpg'
        },
        {
          bName: "OHTA PRECISION ( M ) SDN. BHD.",
          bDir:
            "設立1994年で逸早く海外進出を実現させた工場です。アジアでの地の利を生かし、躍進しております。現在では欧米への輸出が増加して発展しています。",
          bImg: '/static/img/m1.jpg'
        },
        {
          bName: "OHTA PRECISION MANUFACTURING CO.,LTD. (THAILAND)",
          bDir:
            "日本企業の多く進出しているタイに2009年に販社を設立して、幅広いお客様に小型精密加工品を提供しております。",
          bImg: '/static/img/t1.jpg'
        },
      ]
    };
  }
};
</script >

<style scoped>
.main-title {
  text-align: left;
  margin-bottom: 50px;
}
.branch-item{
  margin-bottom: 60px;
}
.branch-title {
  font-weight: 550;
  font-size: 20px;
}
.branch-dir {
  text-indent: 2em;
  font-size: 16px;
}
.img-wrapper img {
  float: right;
  width: 900px;
}
hr{
  border: 2px solid #0059a0;
}
</style>
