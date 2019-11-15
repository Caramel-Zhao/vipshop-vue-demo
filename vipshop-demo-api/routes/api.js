const express = require('express');
const router = express.Router();



/* GET users listing. */
router.get('/homeInfo', (req, res, next) => {
  res.json(require('../public/HomePageInfo'))

});

router.get('/recommendInfo', (req, res, next) => {
  res.json(require('../public/RecommendInfo'))

});

router.get('/categoryInfo', (req, res, next) => {
  res.json(require('../public/CategoryInfo'))

});
//categoryProducts
router.get('/categoryProductsInfo', (req, res, next) => {
  res.json(require('../public/CategoryProductsInfo'))

});

router.get('/lastInfo', (req, res, next) => {
  res.json(require('../public/LastInfo'))

});

router.get('/hotSearch', (req, res, next) => {
  res.json(require('../public/HotSearch'))

});

router.get('/internationalInfo', (req, res, next) => {
  res.json(require('../public/InternationalInfo'))

});

router.get('/userInfo', (req, res, next) => {
  res.json(require('../public/UserInfo'))

});


module.exports = router;