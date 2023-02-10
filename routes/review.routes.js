const express = require('express')
const ReviewController = require('../controllers/review.controller')
const reviewController = new ReviewController()
const { auth_middleware } = require('../middleware/auth.middleware')

const router = express.Router()

//리뷰 전체 조회
// router.get('/')

//해당 상품의 리뷰 조회
router.get('/:goods_id', reviewController.getCommentsOfGoods)

//리뷰 작성
router.post('/:goods_id', auth_middleware, reviewController.postCommentsOfGoods)

module.exports = router
