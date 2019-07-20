<template>
  <div class="branch-wrapper container">
    <p class="main-title">Associated Company</p>
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
            "Our company was established in 1958, starting mainly producing precision small gears. With the business enhancement to meet the customers’ requirement, at this present not only these gears we are manufacturing and assembling high-precision parts used for electronics, optics and OA equipment.",
          bImg: '/static/img/jp1.jpg'
        },
        {
          bName: "OHTA PRECISION ( M ) SDN. BHD.",
          bDir:
            "OPM is earlier founded in 1994 abroad and has been advancement in Asia with a geographical advantage.Currently, the amount of export to Europe and USA records a remarkable increase.",
          bImg: '/static/img/m1.jpg'
        },
        {
          bName: "OHTA PRECISION MANUFACTURING CO.,LTD. (THAILAND)",
          bDir:
            "OPTM is established in 2009 initially as a trading company in Thailand where lots of Japanese firms have been developed.The company is delivering small precision manufacturing parts to wide range of customers there.",
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
