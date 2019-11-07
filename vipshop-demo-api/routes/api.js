const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');



/* GET users listing. */
router.get('/homeInfo', (req, res, next) => {
  let file = path.join(__dirname, "../public/HomePageInfo.json");
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.send({
        status: -1,
        msg: err
      })
    } else {
      res.send(data)
    }
  })
});

router.get('/recommendInfo', (req, res, next) => {
  let file = path.join(__dirname, "../public/RecommendInfo.json");
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.send({
        status: -1,
        msg: err
      })
    } else {
      res.send(data)
    }
  })
});

router.get('/categoryInfo', (req, res, next) => {
  let file = path.join(__dirname, "../public/CategoryInfo.json");
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.send({
        status: -1,
        msg: err
      })
    } else {
      res.send(data)
    }
  })
});
//categoryProducts
router.get('/categoryProductsInfo', (req, res, next) => {
  let file = path.join(__dirname, "../public/CategoryProductsInfo.json");
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.send({
        status: -1,
        msg: err
      })
    } else {
      res.send(data)
    }
  })
});

module.exports = router;