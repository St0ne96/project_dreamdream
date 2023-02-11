const GoodRepository = require("../repositories/good.repository");
// const {Good} = require("../models");

class GoodService {
    goodRepository = new GoodRepository();

    createGood = async(seller, goodsname, explain, image, price) => {
        try {
            const good = await this.goodRepository.createGood(
                seller, goodsname, explain, image, price
            );
            return good;
        } catch (err){
            throw err;
        }
    };

    
}

module.exports = GoodService;