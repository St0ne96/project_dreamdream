const express = require('express')
const router = express.Router()

const { getGoodsOne, getGoods } = require('../controllers/good.controller')

//상품 전체 조회(상품 목록 페이지)
router.get('/', getGoods)

//상품 상세 조회 페이지
router.get('/:id', getGoodsOne)

module.exports = router