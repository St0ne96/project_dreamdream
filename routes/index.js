const express = require('express');
const router = express.Router();

const customerRouter = require("./customer.routes");
const managerRouter = require("./manager.routes");
const loginRouter = require("./login.routes");
const cartRouter = require('./cart.routes');
const goodsRouter = require('./good.routes');
const reviewsRouter = require('./review.routes');


router.use('/users', [loginRouter,customerRouter])
router.use('/management', [managerRouter,goodsRouter])
router.use('/cart', [cartRouter])
router.use('/goods', [goodsRouter])
router.use('/reviews', [reviewsRouter])

module.exports = router;

