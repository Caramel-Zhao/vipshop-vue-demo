const mongoose = require("mongoose")

//step1: 通过mongoose连接mongodb 27017
mongoose.connect("mongodb://127.0.0.1:27017/users",{
  useNewUrlParser:true,
  useUnifiedTopology:true
});


//step2: 监听连接的信息
mongoose.connection.on("connected",()=>{
  console.log("mongodb is connected")
})


const nodeMailer = require('nodemailer');

const Email = {
  config : {
    service: 'qq',
    auth: {
      user: '844261779@qq.com',
      pass: 'jwgafvjogjfabfge'
    }
  },
  get transporter(){
    return nodeMailer.createTransport(this.config);
  },
  get verify(){
    return Math.random().toString().substring(2,8);
  },
  get time(){
    return Date.now();
  }
};


module.exports = {
  mongoose,
  Email
}