const ReviewService = require('../repositories/review.repository')

class ReviewController {

    reviewService = new ReviewService()

    //상품별 댓글 조회 
    getCommentsOfGoods = async (req, res, next) => {
        const { goods_id } = req.params

        const goodsComments = await this.reviewService.findCommentofGoods(goods_id)

        res.status(200).json({ data: goodsComments })
    }

    //상품별 댓글 작성
    postCommentsOfGoods = async (req, res) => {
        const { goods_id } = req.params
        const { stars, content } = req.body

        if (!res.locals.user) {
            return res.status(500).json({ message: "로그인 하세요" })
        }

        const { id } = res.locals.user

        const goodsComments = await this.reviewService.createCommentsOfGoods(
            goods_id,
            stars,
            content,
            id
        )

        res.status(200).json({ data: goodsComments })
    }
}



module.exports = ReviewController
