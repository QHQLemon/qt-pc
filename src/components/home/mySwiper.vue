<template>
  <div class="swiper">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../../assets/img/pro1.jpg" alt="..." />
          <div class="carousel-caption">
            <!-- <h3>精密齿轮</h3>
            <p>发链接发了啥地方</p>-->
          </div>
        </div>
        <div class="item">
          <img src="../../assets/img/pro2.jpg" alt="..." />
          <!-- <div class="carousel-caption">...</div> -->
        </div>
        <div class="item">
          <img src="../../assets/img/pro3.jpg" alt="..." />
          <!-- <div class="carousel-caption">...</div> -->
        </div>
      </div>

      <!-- Controls -->
      <a
        class="left carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="right carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script >

<style scoped>


.swiper {
  width: 90%;
  transform: translateX(10%);
}
.item img {
}
.swiper .carousel-indicators {
  margin: 0 auto;
}
.swiper .carousel-indicators li {
  margin-right: 8px;
  border: 1px solid #ccc;
}
.swiper .carousel-indicators li.active {
  background: #ccc;
}
.carousel-control.left {
  background-image: none;
}
.carousel-control.right {
  background-image: none;
}

@media (max-width: 768px) {
  .swiper {
    transform: translateX(5%);
  }
}
@media (max-width: 568px){
  .swiper{
    display: none;
  }
}
</style>
