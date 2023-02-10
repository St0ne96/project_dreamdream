const { findOneGoods, findAllGoods } = require('../repositories/good.repository')



//상품 한개 조회
const getGoodsOne = async (req, res) => {
    const { id } = req.params

    try {
        const goods = await findOneGoods(id)
        res.json(goods)

    } catch (err) {
        if (!goods) {
            return res.status(404).json({ message: "잘못된 페이지 입니다" })
        }
        res.status()
    }

    // const goods = await findOneGoods(id)
    // if (!goods) {
    //     return res.status(404).json(goods)
    // }
    // res.json({ goods })
}

const getGoods = async (req, res) => {
    const goodsAll = await findAllGoods()
    if (!goodsAll) {
        return res.status(404).json({ message: "없거나 잘못됨" })
    }

    res.json(goodsAll)
}

module.exports = { getGoodsOne, getGoods }