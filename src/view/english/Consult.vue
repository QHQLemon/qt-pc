<template>
  <div class="consult-wrapper container">
    <div class="consult-content">
      <p class="main-title">Contact</p>
      <p>Please transmit and please push the confirmation button, after I enter it in an/the item in the case that mail inquires it.</p>
      <hr >
      <div class="form-horizontal">
        <div class="form-group">
          <label for="inputName" class="col-sm-3 control-label">Name</label>
          <div class="col-sm-9">
            <input type="text" v-model="cName"  class="form-control" id="inputName" placeholder="Name">
          </div>
        </div>
        <div class="form-group">
          <label for="inputCompany" class="col-sm-3 control-label">Company</label>
          <div class="col-sm-9">
            <input type="text" v-model="cCompany" class="form-control" id="inputCompany" placeholder="Company">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPhone" class="col-sm-3 control-label">Phone Number</label>
          <div class="col-sm-9">
            <input type="text" v-model="cPhone" class="form-control" id="inputPhone" placeholder="Phone Number">
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail" class="col-sm-3 control-label">E-Mail</label>
          <div class="col-sm-9">
            <input type="email" v-model="cEmial" class="form-control" id="inputEmail" placeholder="E-Mail">
          </div>
        </div>
        <div class="form-group">
          <label for="inputContent"  class="col-sm-3 control-label">Inquiry Contents</label>
          <div class="col-sm-9">
            <textarea class="form-control" v-model="cContent" name="" id=""  rows="6" placeholder="Inquiry Contents"></textarea>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-9">
              <p><span class="glyphicon glyphicon-asterisk"></span> Please confirm that the information is correct, press the "confirm" button, and your inquiry will be sent to you by email or telephone
              </p>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-9">
            <button  @click="submitMsg" class="btn btn-primary">confirm</button>
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
  width: 600px;
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
</style>
