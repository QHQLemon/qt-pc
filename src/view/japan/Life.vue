<template>
  <div class="life-wrapper container">
    <div class="life-img-wrapper">
      <p class="life-img-title">多彩な活動</p>
      <div class="life-item">
        <p>
          <span class="glyphicon glyphicon-bell"></span>団創立活動
        </p>
        <div class="img-wrapper clearfix">
          <div class="img-item col-lg-4">
            <img src="../../assets/img/life/tj3.jpg" alt>
          </div>
          <div class="img-item col-lg-4">
            <img src="../../assets/img/life/tj4.jpg" alt>
          </div>
          <div class="img-item col-lg-4">
            <img src="../../assets/img/life/tj1.jpg" alt>
          </div>
          <div class="img-item col-lg-4">
            <img src="../../assets/img/life/tj2.jpg" alt>
          </div>
          <div class="img-item col-lg-4">
            <img src="../../assets/img/life/tj5.jpg" alt>
          </div>
          <div class="img-item col-lg-4">
            <img src="../../assets/img/life/tj6.jpg" alt>
          </div>
        </div>
      </div>

      <div class="life-item">
        <p>
          <span class="glyphicon glyphicon-bell"></span>忘年会
        </p>
        <div class="img-wrapper clearfix">
          <div class="img-item col-lg-4">
            <img src="../../assets/img/life/nh1.jpg" alt>
          </div>
          <div class="img-item col-lg-4">
            <img src="../../assets/img/life/nh3.jpg" alt>
          </div>
          <div class="img-item col-lg-4">
            <img src="../../assets/img/life/nh2.jpg" alt>
          </div>
        </div>
      </div>

      <div class="life-item">
        <p>
          <span class="glyphicon glyphicon-bell"></span>消防演習
        </p>
        <div class="img-wrapper clearfix">
          <div class="img-item col-lg-4">
            <img src="../../assets/img/life/xf2.jpg" alt>
          </div>
          <div class="img-item col-lg-4">
            <img src="../../assets/img/life/xf1.jpg" alt>
          </div>
          <div class="img-item col-lg-4">
            <img src="../../assets/img/life/xf3.jpg" alt>
          </div>
        </div>
      </div>
    </div>

    <div class="profit-box">
      <!-- <p class="life-img-title">清田的福利</p>
      <hr>-->
      <div class="profit-wrapper">
        <div class="profit-item">
          <p class="icon-wrapper">
            <span class="glyphicon glyphicon-yen"></span>
          </p>
          <p class="profit-title">賃金</p>
          <p class="profit-dir">競争力のある賃金を支給する</p>
        </div>
        <div class="profit-item">
          <p class="icon-wrapper">
            <span class="glyphicon glyphicon-gift"></span>
          </p>
          <p class="profit-title">賞金</p>
          <p class="profit-dir">年末の二重賃金</p>
        </div>
        <div class="profit-item">
          <p class="icon-wrapper">
            <span class="glyphicon glyphicon-time"></span>
          </p>
          <p class="profit-title">出勤</p>
          <p class="profit-dir">5日8時間勤務制,残業は別枠である</p>
        </div>
        <div class="profit-item">
          <p class="icon-wrapper">
            <span class="glyphicon glyphicon-bed"></span>
          </p>
          <p class="profit-title">休暇</p>
          <p class="profit-dir">また、国家法定休暇制度を実施する場合、1年に7日の有給休暇を、3 ~ 5年には10日の有給休暇が、6年以上では14日の有給休暇が取れる</p>
        </div>
        <div class="profit-item">
          <p class="icon-wrapper">
            <span class="glyphicon glyphicon-pushpin"></span>
          </p>
          <p class="profit-title">保険</p>
          <p class="profit-dir">法律で定められている社会保険のほかに、会社は従業員のために付加的な商業保険を購入します</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script >

<style scoped>
.life-wrapper {
}
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
  width: 220px;
  min-height: 250px;
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
  width: 90%;
}
.img-item img:hover {
  transform: scale(1.05);
}
.profit-box {
  margin-top: 100px;
}
</style>
