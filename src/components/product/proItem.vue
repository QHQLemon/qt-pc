<template>
  <div class="pro-item">
    <h3>{{proData.proTitle}}</h3>
    <hr />
    <p v-for="item in proData.proDire">{{item}}</p>
    <div class="img-item">
      <img :src="proData.proImg" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: ["proData"]
};
</script >

<style scoped>
.pro-item h3{
  margin-top: 0;
}
.img-item{
  text-align: center;
}
.pro-item img {
  max-width: 750px;
  max-height: 450px;
  margin: auto;
}
hr {
  border: 2px solid #0059a0;
}
@media (max-width: 768px) {
  .pro-item img {
    width: 90%;
  }
  h3{
    font-size: 18px;
  }
}
</style>
