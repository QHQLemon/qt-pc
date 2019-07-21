let express = require('express');
let bodyParser = require('body-parser');
let history = require('connect-history-api-fallback');
let path = require('path');
let nodemailer = require('nodemailer')
let https = require('https')
let fs = require("fs")
let http = require('http')

const httpsOption = {
  key:  fs.readFileSync('./https/2538690_www.kiyotadg.com.key'),
  cert: fs.readFileSync('./https/2538690_www.kiyotadg.com.crt')
}

let app = express();
app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')));;

app.post('/subMsg', function(request, response){
  let postData = request.body.params;
  console.log(postData);
  var transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
      user: '328858582@qq.com',
      pass: 'fwghjfeukibpcbda'
    }
  })
  // var str = '姓名：' + postData.cName +'；  公司：' + postData.cCompany +' ；电话：' + postData.cPhone +'； 邮箱：' + postData.cEmial +' ；咨询内容: ' + postData.cContent;
  // console.log(str)
  var mailOptions = {
    from: '328858582@qq.com',
    // to: 'kerry_huang@kiyotadg.com',
    to: "18277751842@163.com",
    subject: '咨询信息',
    // text: str,
    html: `<h2>网站咨询信息如下：</h2>
    <h3>姓名:`  + postData.cName  +`</h3>
    <h3>公司: ` + postData.cCompany +`</h3>
    <h3>电话: ` + postData.cPhone +`</h3>
    <h3>邮箱: ` + postData.cEmial +`</h3>
    <h3>咨询内容: ` + postData.cContent + `</h3>`

  }

  transporter.sendMail(mailOptions, function(err, info){
    if(err){
      console.log(err);
      return;
    }
    console.log('ok');
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(packData('200', '发送成功', 'hahaha'));
    response.end()
  })

})

function packData(static, desc, data) {
  return JSON.stringify({
    static,
    desc,
    data
})
}

app.use(function(req, res, next){
  console.log('res, req');
  next()
})
// app.listen(8081, function(){
//   console.log('success listen ...8081')
// })
http.createServer(app).listen(80, function(){
  console.log('success listen ...80')
});
https.createServer(httpsOption, app).listen(443, function(){
  console.log('443')
})
