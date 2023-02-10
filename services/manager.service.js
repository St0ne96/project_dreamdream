const ManagerRepository = require("../repositories/manager.Repository");

class ManagerService {
  managerRepository = new ManagerRepository();

  orderStatusPlus = async (status, orderId) => {
    const orderStatusData = await this.managerRepository.orderStatusPlus();
  };

  orderDetailGet = async () => {
    const orderData = await this.managerRepository.orderDetailGet();
    return orderData;
  };

  ordersGet = async () => {
    const ordersData = await this.managerRepository.ordersGet();
    return ordersData;
  };

  customerDelete = async (password, id) => {
    const customerData = await this.managerRepository.customerDelete(
      password,
      id
    );
  };

  customerModify = async (nickname, name, email, point, id) => {
    const customerData = await this.managerRepository.customerModify(
      nickname,
      name,
      email,
      point,
      id
    );
  };

  customerGet = async (id) => {
    const customerData = await this.managerRepository.customerGet(id);
    return customerData;
  };

  goodsGet = async (id) => {
    const goodsData = await this.managerRepository.goodsGet(id);
    return goodsData;
  };
  goodsModify = async (
    seller,
    goodsname,
    explain,
    quantity,
    price,
    goodsId
  ) => {
    const goodsModifyData = await this.managerRepository.goodsModify(
      seller,
      goodsname,
      explain,
      quantity,
      price,
      goodsId
    );
  };

  goodsEnroll = async (
    seller,
    goodsname,
    explain,
    image,
    quantity,
    price,
    goodsId
  ) => {
    const goodsEnrollData = await this.managerRepository.goodsEnroll(
      seller,
      goodsname,
      explain,
      image,
      quantity,
      price,
      goodsId
    );
  };

  goodsImgModify = async (image, goodsId) => {
    const goodsImgData = await this.managerRepository.goodsImgModify(
      image,
      goodsId
    );
  };

  // 관리자 등록
  createManager = async (nickname, name, password, email) => {
    const createManagerData = await this.managerRepository.createManager(
      nickname,
      name,
      password,
      email
    );

    return {
      id: createManagerData.null,
      nickname: createManagerData.nickname,
      name: createManagerData.name,
      password: createManagerData.password,
      email: createManagerData.email,
    };
  };
}

module.exports = ManagerService;
