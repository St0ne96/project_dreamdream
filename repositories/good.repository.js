const { Good } = require('../models')

class GoodRepository{
    constructor(){}

    createGood = async (seller, goodsname, explain, image, price) => {
        try {
            const good = await Good.create({
                seller, goodsname, explain, image, price,
            });
            
            return good;
        } catch (error) {
            throw new Error(error);
        }
    };
}

module.exports = GoodRepository; 


// //상품상세조회
// const findOneGoods = async (id) => {
//     const goods = await Good.findByPk(id)
//     return goods
// }
// //상품 전체 조회
// const findAllGoods = async () => {
//     return await Good.findAll()
// }

// module.exports = {
//     findOneGoods,
//     findAllGoods
// }

