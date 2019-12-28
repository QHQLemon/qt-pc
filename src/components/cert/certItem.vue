<template>
<div class="cert-item">
  <img :src="certData.certImg" alt="">
</div>
</template>

<script>
export default{
  props: ['certData']
}
</script >

<style scoped>

img{
  width: 90%;
  margin-left: 50px;
}
@media (max-width: 768px) {
  img{
    margin: 0;
    transform: translateX(5%);
  }
}

</style>
