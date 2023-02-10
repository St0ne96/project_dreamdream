const CartRepository = require('../repositories/cart.repository')

class CartService {

    cartRepository = new CartRepository()

    getCart = async (customer_id) => {
        const getcart = await this.cartRepository.getCart(customer_id)
        return getcart
    }

    postCart = async (goods_id, quantity, customer_id) => {
        const createCart = await this.cartRepository.postCart(
            goods_id, quantity, customer_id
        )
        return createCart
    }

    patchCart = async (goods_id, quantity, customer_id) => {
        const updateCart = await this.cartRepository.patchCart(goods_id, quantity, customer_id)
        return updateCart
    }

    deleteCart = async (id) => {
        const remove = await this.cartRepository.deleteCart(id)
        return remove
    }

}


module.exports = CartService