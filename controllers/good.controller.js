const GoodService = require("../services/good.service");
// const { findOneGoods, findAllGoods } = require('../repositories/good.repository')

class GoodController {
    goodService = new GoodService();

    //상품 등록 
    createGood = async(req, res, next) => {
        try{
            const image = req.file.path.replace("./assets","");
            const {seller, goodsname, explain, price} = req.body;
            const good = await this.goodService.createGood(
                seller, goodsname, explain, image, price
            );
            res.status(201).json({data: good}); 
        } catch (error){
            next(error);
        }
    };
}

module.exports = GoodController;

// //상품 한개 조회
// const getGoodsOne = async (req, res) => {
//     const { id } = req.params

//     try {
//         const goods = await findOneGoods(id)
//         res.json(goods)

//     } catch (err) {
//         if (!goods) {
//             return res.status(404).json({ message: "잘못된 페이지 입니다" })
//         }
//         res.status()
//     }

//     // const goods = await findOneGoods(id)
//     // if (!goods) {
//     //     return res.status(404).json(goods)
//     // }
//     // res.json({ goods })
// }

// const getGoods = async (req, res) => {
//     const goodsAll = await findAllGoods()
//     if (!goodsAll) {
//         return res.status(404).json({ message: "없거나 잘못됨" })
//     }

//     res.json(goodsAll)
// }

// module.exports = { getGoodsOne, getGoods }