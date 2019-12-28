<template>
  <div class="consult-wrapper container">
    <div class="consult-content">
      <p class="main-title">お問い合わせ</p>
      <p>下記フォーム内の項目にご記入の上、確認ボタンを押して送信してください。</p>
      <hr >
      <div class="form-horizontal">
        <div class="form-group">
          <label for="inputName" class="col-sm-3 control-label">お名前</label>
          <div class="col-sm-9">
            <input type="text" v-model="cName"  class="form-control" id="inputName" placeholder="お名前">
          </div>
        </div>
        <div class="form-group">
          <label for="inputCompany" class="col-sm-3 control-label">会社名</label>
          <div class="col-sm-9">
            <input type="text" v-model="cCompany" class="form-control" id="inputCompany" placeholder="会社名">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPhone" class="col-sm-3 control-label">TEL</label>
          <div class="col-sm-9">
            <input type="text" v-model="cPhone" class="form-control" id="inputPhone" placeholder="TEL">
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail" class="col-sm-3 control-label">E-Mail</label>
          <div class="col-sm-9">
            <input type="email" v-model="cEmial" class="form-control" id="inputEmail" placeholder="E-Mail">
          </div>
        </div>
        <div class="form-group">
          <label for="inputContent"  class="col-sm-3 control-label">お問い合わせ内容</label>
          <div class="col-sm-9">
            <textarea class="form-control" v-model="cContent" name="" id=""  rows="6" placeholder="問い合わせ内容"></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-9">
              <p><span class="glyphicon glyphicon-asterisk"></span>以上の内容でよろしければ、確認ボタンを押してください。
              </p>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-9">
            <button  @click="submitMsg" class="btn btn-primary">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cName: "",
      cCompany: "",
      cPhone: "",
      cEmial: "",
      cContent: ""
    }
  },
  methods: {
    submitMsg(){
      console.log(this.cName, this.cCompany, this.cPhone, this.cEmial, this.cContent);
      var self = this;
      this.axios.post('/subMsg', {params:{
        cName: self.cName,
        cCompany: self.cCompany,
        cPhone: self.cPhone,
        cEmial: self.cEmial,
        cContent: self.cContent
      }}).then(function (response){
        console.log('ok');
        alert("咨询内容已提交，您咨询的内容将会以邮件或电话的方式发送给您！");
        self.cName = "";
        self.cCompany = "";
        self.cPhone = "";
        self.cEmial = "";
        self.cContent = "";
      })
    }
  }
};
</script >

<style scoped>
.consult-content {
  max-width: 600px;
  min-height: 600px;
  margin: 0 auto;
}
.control-label {
  text-align: center;
}
.form-horizontal{
  padding: 0 20px;
}
.form-group label{
  text-align: center;
}
@media (max-width: 768px) {
  .container{
    padding: 0 15px;
  }
}
</style>
