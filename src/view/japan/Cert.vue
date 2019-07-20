<template>
  <div class="cert-wrapper container">
    <p class="main-title">資質証明書</p>
    <div class="cert-content">
      <div class="col-lg-4">
        <ul class="item-box">
          <li @click="changeCert(item)" v-for="item in certData" :class="index == item.certNo ? 'active' : ''"> {{item.certTitle}}</li>
        </ul>
      </div>
      <div class="col-lg-8">
        <cert-item :certData="certItem"></cert-item>
      </div>
    </div>
  </div>
</template>

<script>
import CertItem from '@/components/cert/certItem'
export default{
  components: {
    CertItem
  },
  data(){
    return {
      certData:[
        {
          certNo: 1,
          certTitle: 'IATF16949:2016',
          certImg: '/static/img/IATF16949-2016/IATF16949-2016-2.png'
        },
         {
          certNo: 2,
          certTitle: 'ISO13485:2016',
          certImg: '/static/img/ISO13485-2016/ISO13485-2016-1.png'
        },
         {
          certNo: 3,
          certTitle: 'ISO14001:2015',
          certImg: '/static/img/ISO14001-2015/ISO14001-2015-2.png'
        },
         {
          certNo: 4,
          certTitle: 'ISO9001:2015',
          certImg: '/static/img/ISO9001-2015/ISO9001-2015-2.png'
        },
      ],
      index: 1,
      certItem: ""
    }
  },
  methods: {
    changeCert(data){
      this.index = data.certNo;
      this.certItem = data;
    }
  },
  mounted(){
    this.index = this.certData[0].certNo;
    this.certItem = this.certData[0];
  }
}
</script >

<style scoped>
.cert-wrapper{
  padding: 0 50px;
}
.main-title{
  text-align: left;
  line-height: 60px;
  border-bottom:2px solid #0059a0;
  width:180px;
}
.item-box{
  display: flex;
  flex-direction: column;
}
.item-box li{
  margin-top: 20px;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 8px 10px;
  width: 200px;
  text-align: center;
}
.item-box li.active{
  background: rgb(248, 250, 250);
  color: #0059a0;
  font-weight: 550;
}
</style>
