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

</style>
