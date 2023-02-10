const { where } = require("sequelize");
const { Manager, Customer, Good, Order } = require("../models");

class ManagerRepository {
  constructor() {}

  orderStatusPlus = async (status, orderId) => {
    const orderStatusData = await Order.update(
      { status: status + 1 },
      { where: { id: orderId } }
    );
  };

  orderDetailGet = async () => {
    const orderData = await Order.findOne({});
    return orderData;
  };

  ordersGet = async () => {
    const ordersData = await Order.findAll({});
    return ordersData;
  };

  customerDelete = async (password, id) => {
    const customerData = await Customer.destroy({
      where: { password: password, id: id },
    });
  };

  customerModify = async (nickname, name, email, point, id) => {
    const customerData = await Customer.update(
      { nickname, name, email, point },
      { where: { id: id } }
    );
  };

  customerGet = async (id) => {
    const customerData = await Customer.findOne({ where: { id: id } });
    return customerData;
  };

  goodsGet = async (id) => {
    const goodsData = await Good.findOne({ where: { id: id } });
    return goodsData;
  };

  goodsImgModify = async (image, goodsId) => {
    const goodsImgData = await Good.update(
      { image },
      { where: { id: goodsId } }
    );
  };

  goodsEnroll = async (seller, goodsname, explain, image, quantity, price) => {
    const goodsEnrollData = await Good.create({
      seller,
      goodsname,
      explain,
      image,
      quantity,
      price,
    });
  };

  goodsModify = async (
    seller,
    goodsname,
    explain,
    quantity,
    price,
    goodsId
  ) => {
    const goodsModifyData = await Good.update(
      {
        seller,
        goodsname,
        explain,
        quantity,
        price,
      },
      { where: { id: goodsId } }
    );
  };

  createManager = async (nickname, name, password, email) => {
    const createManagerData = await Manager.create({
      nickname,
      name,
      password,
      email,
    });

    return createManagerData;
  };
}

module.exports = ManagerRepository;