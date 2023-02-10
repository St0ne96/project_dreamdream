const { Good } = require('../models')

//상품상세조회
const findOneGoods = async (id) => {
    const goods = await Good.findByPk(id)
    return goods
}
//상품 전체 조회
const findAllGoods = async () => {
    return await Good.findAll()
}

module.exports = {
    findOneGoods,
    findAllGoods
}