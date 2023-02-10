const { Cart } = require('../models')

class CartRepository {

    //장바구니 넣기
    //장바구니 get할때 user값 필요없음
    //user_id 쿠키 jwt verify해서 값을 넘겨줌

    //유저별 장바구니 조회
    getCart = async (customer_id) => {
        const readCart = await Cart.findAll({ where: { customer_id } })
        return readCart
    }

    //cart post

    postCart = async (goods_id, quantity, customer_id) => {
        const newCart = await Cart.create({ goods_id, quantity, customer_id })
        return newCart
    }

    patchCart = async (goods_id, quantity, customer_id) => {
        const updateCart = await Cart.update({ quantity }, { where: { goods_id, customer_id } })
        return updateCart
    }

    deleteCart = async (id) => {
        const cancelCart = await Cart.destroy({ where: { id } })
        return cancelCart
    }
}

module.exports = CartRepository