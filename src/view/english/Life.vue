<template>
  <div class="life-wrapper container">

    <div class="life-img-wrapper">
      <p class="life-img-title">Variety activities and events</p>
      <div class="life-item">
        <p>
          <span class="glyphicon glyphicon-bell"></span>Team work
        </p>
        <div class="img-wrapper clearfix">
          <div class="img-item col-md-4">
            <img src="../../assets/img/life/tj8.jpg" alt />
          </div>
          <div class="img-item col-md-4">
            <img src="../../assets/img/life/tj9.jpg" alt />
          </div>

          <div class="img-item col-md-4">
            <img src="../../assets/img/life/tj7.jpg" alt />
          </div>
          <div class="img-item col-md-4">
            <img src="../../assets/img/life/tj2.jpg" alt />
          </div>
          <div class="img-item col-md-4">
            <img src="../../assets/img/life/tj5.jpg" alt />
          </div>
          <div class="img-item col-md-4">
            <img src="../../assets/img/life/tj6.jpg" alt />
          </div>
        </div>
      </div>

      <div class="life-item">
        <p>
          <span class="glyphicon glyphicon-bell"></span>Annual dinner
        </p>
        <div class="img-wrapper clearfix">
          <div class="img-item col-md-4">
            <img src="../../assets/img/life/nh1.jpg" alt>
          </div>
          <div class="img-item col-md-4">
            <img src="../../assets/img/life/nh3.jpg" alt>
          </div>
          <div class="img-item col-md-4">
            <img src="../../assets/img/life/nh2.jpg" alt>
          </div>
        </div>
      </div>

      <div class="life-item">
        <p>
          <span class="glyphicon glyphicon-bell"></span>Fire Drill
        </p>
        <div class="img-wrapper clearfix">
          <div class="img-item col-md-4">
            <img src="../../assets/img/life/xf2.jpg" alt>
          </div>
          <div class="img-item col-md-4">
            <img src="../../assets/img/life/xf1.jpg" alt>
          </div>
          <div class="img-item col-md-4">
            <img src="../../assets/img/life/xf3.jpg" alt>
          </div>
        </div>
      </div>
    </div>

    <div class="profit-box">
      <div class="profit-wrapper">
        <div class="profit-item col-md-2">
          <p class="icon-wrapper">
            <span class="glyphicon glyphicon-yen"></span>
          </p>
          <p class="profit-title">Salary </p>
          <p class="profit-dir">Attractive monthly salary</p>
        </div>
        <div class="profit-item col-md-2">
          <p class="icon-wrapper">
            <span class="glyphicon glyphicon-gift"></span>
          </p>
          <p class="profit-title">Bonus</p>
          <p class="profit-dir">Year-end double income</p>
        </div>
        <div class="profit-item col-md-2">
          <p class="icon-wrapper">
            <span class="glyphicon glyphicon-time"></span>
          </p>
          <p class="profit-title">Work day and time</p>
          <p class="profit-dir">Eight-hour/day & five-day/week system, other job hours count in overtime. </p>
        </div>
        <div class="profit-item col-md-2">
          <p class="icon-wrapper">
            <span class="glyphicon glyphicon-pushpin"></span>
          </p>
          <p class="profit-title">Insurance</p>
          <p class="profit-dir">Legal social insurance and other commercial insurance provided.</p>
        </div>
        <div class="profit-item col-md-2">
          <p class="icon-wrapper">
            <span class="glyphicon glyphicon-bed"></span>
          </p>
          <p class="profit-title">Paid holidays</p>
          <p class="profit-dir">7 days for over one year career employees, 10 days for 3-5 years, 14 days for over 6 years.  </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script >

<style scoped>
.life-top {
  padding-top: 50px;
  text-align: center;
}
.life-top-title {
  font-size: 36px;
  font-weight: 550;
  color: #0059a0;
}
.life-top-dir {
  margin-top: 50px;
  font-size: 16px;
  font-style: italic;
}
.profit-wrapper {
  margin-top: 100px;
  display: flex;
  align-content: space-between;
  justify-content: space-around;
}
.profit-wrapper .profit-item {
  padding: 20px 30px;
  text-align: center;
}
.profit-wrapper .profit-item p {
  margin-top: 12px;
}
.profit-item:hover {
  transform: scale(1.05);
}
.icon-wrapper {
  width: 80px;
  height: 80px;
  background: rgb(248, 250, 250);
  border: 1px solid #ccc;
  text-align: center;
  line-height: 80px;
  border-radius: 50%;
  margin: 0 auto;
}
.icon-wrapper span {
  font-size: 24px;
  color: #0059a0;
}
.profit-title {
  font-weight: 550;
  font-size: 18px;
}

.life-img-title {
  font-size: 30px;
  text-align: center;
  font-weight: 550;
  line-height: 80px;
  color: #0059a0;
}
.life-item {
  margin-top: 50px;
}
.life-item p {
  font-size: 16px;
  font-weight: 550;
  border-bottom: 3px solid #0059a0;
  line-height: 50px;
  width: 200px;
}
.life-item p span {
  font-size: 18px;
  margin-right: 10px;
  color: #0059a0;
}
.img-item {
  text-align: center;
  margin-top: 20px;
}
.img-item img {
  width: 95%;
}
.img-item img:hover {
  transform: scale(1.05);
}
.profit-box {
  margin-top: 100px;
}

@media (max-width: 768px) {
  .container {
    margin: 0 15px;
  }
  .life-item {
    margin-top: 10px;
  }
  .img-item {
    margin-top: 12px;
  }
  .img-item img:hover {
    transform: scale(1);
  }
  .profit-wrapper {
    margin-top: 50px;
    flex-wrap: wrap;
  }
  .profit-wrapper .profit-item {
    width: 50%;
  }
  .profit-wrapper .profit-item:last-child{
    width: 80%;
  }
  .profit-item:hover {
  transform: scale(1);
}
.icon-wrapper{
  height: 60px;
  width: 60px;
  line-height: 60px;
}
.icon-wrapper span{
  font-size: 20px;
}
.life-img-title{
  font-size: 24px;
}
}
</style>
