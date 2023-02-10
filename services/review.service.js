const ReviewRepository = require('../repositories/review.repository')

class ReviewService {

    reviewRepository = new ReviewRepository()

    //상품별 댓글 조회
    findCommentofGoods = async () => {
        const goods = await this.reviewRepository.findCommentofGoods(goods_id)

        goods.sort((a, b) => {
            return b.createdAt - a.createdAt
        })

        return goods.map(review => {
            return {
                stars: review.stars,
                goodsId: review.goods_id,
                content: review.content,
                createdAt: review.createdAt
            }
        })

    }

    //상품별 댓글 작성
    createCommentsOfGoods = async (goods_id, stars, content, customer_id) => {
        const createReviews = await this.reviewRepository.createCommentsOfGoods(
            goods_id, stars, content, customer_id
        )
        return createReviews
        // return {
        //     stars: createReviews.stars,
        //     content: createReviews.content,
        //     goods_id: createReviews.goods_id,
        //     customer_id: createReviews.customer_id
        // }
    }
}


module.exports = ReviewService