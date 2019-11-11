const express = require('express');
const router = express.Router();
const loginModel = require('../models/login');
const { Email } = require('../models/dbConfig')


router.post('/', async (req, res, next) => {
  let { email , verify } = req.body;
  console.log(email);
  console.log(typeof verify);
  console.log(typeof req.session.verify);
  if( verify !== req.session.verify ){
    res.send({
      msg : '验证码错误',
      status : -1
    });
    return;
  }

  if( (Email.time - req.session.time)/1000 > 180 ){
    res.send({
      msg : '验证码已过期',
      status : -3
    });
    return;
  }

  req.session.email = email;

  let result = await loginModel.queryItem({ email })

  if(result.length === 0){
    let result = await loginModel.addItem({ email })
    if( result ){
      res.send({
        msg: '已新建账户',
        status: 0
      })
    }
  }else {
    res.send({
      msg: '已存在的账户',
      status: 0
    })
  }


});

router.get('/verify', async (req, res, next) => {
  let email = req.query.email;
  let verify = Email.verify;


  req.session.verify = verify;
  // req.session.email = email;
  req.session.time = Email.time;

  let mailOptions = {
    from: 'VIPShop 844261779@qq.com',
    to: email,
    subject: 'VIPShop邮箱验证码',
    text: `验证码：${verify} (3分钟内有效)`
  }

  Email.transporter.sendMail(mailOptions,(err)=>{

    if(err){
      res.send({
        msg : '验证码发送失败',
        status : -1
      });
    }
    else{
      res.send({
        msg : '验证码发送成功',
        status : 0
      });
    }

  });

});








module.exports = router;