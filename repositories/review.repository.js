const { Good, Review } = require('../models')

class ReviewRepository {

    //상품별 댓글 조회
    findCommentofGoods = async (goods_id) => {
        const goods = await Review.findAll({ where: { goods_id } })
        return goods
    }

    //상품별 댓글 달기
    createCommentsOfGoods = async (goods_id, stars, content, customer_id) => {
        const reviewCreate = await Review.create({
            stars,
            content,
            goods_id,
            customer_id
        })
        return reviewCreate
    }

}

// const goods = await Good.findByPk(goods_id, {
//     include: [{ model: Customer, as: 'customer', attributes: ['nickname'] }],
//     attributes: { exclude: ['customer_id'] }
// })

module.exports = ReviewRepository