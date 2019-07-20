<template>
  <div class="branch-wrapper container">
    <p class="main-title">全球网点</p>
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
            "1958年（昭和33年）我们以专业生产精密小型齿轮起家，顺应时代变化，逐步扩展业务，现在，不仅仅局限于制造精密小型齿轮，已经涉及至电子器械、光学仪器、自动化办公器械用品部件等超精密零件的机械加工及组装业。",
          bImg: '/static/img/jp1.jpg'
        },
        {
          bName: "OHTA PRECISION ( M ) SDN. BHD.",
          bDir:
            "设立于1994年，是当时为数不多进驻海外的日企工厂．利用亚洲的位置优越性，飞跃发展，现正迈步欧美市场，出口数量日渐增长。",
          bImg: '/static/img/m1.jpg'
        },
        {
          bName: "OHTA PRECISION MANUFACTURING CO.,LTD. (THAILAND)",
          bDir:
            "2009年进驻泰国的日企不在少数，我们先设立了营业所，将小型精密加工制品提供于各个领域的客户。",
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
