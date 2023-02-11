const express = require('express')
const router = express.Router()

const GoodController = require('../controllers/good.controller')
const goodController = new GoodController();

const {upload} = require("../middleware/multer.js");

router.post("/goods/new", upload.single("image"), goodController.createGood)


//상품 전체 조회(상품 목록 페이지)
//router.get('/', getGoods)

//상품 상세 조회 페이지
// router.get('/:id', getGoodsOne)

module.exports = router