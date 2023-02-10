const { response } = require("express");
const ManagerService = require("../services/manager.service");

class ManagerController {
  managerService = new ManagerService();

  orderStatusPlus = async (req, res, next) => {
    try {
      const orderId = req.params;
      const { status } = req.body;
      const orderStatusData = await this.managerService.orderStatusPlus(
        status,
        orderId
      );
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessage: "조회 실패" });
    }
  };

  orderDetailGet = async (req, res, next) => {
    try {
      // const orderData = await this.managerService.orderDetailGet();
      const orderId = req.params;
      const imsi = [
        {
          id: 20,
          content: "급해요",
          status: 0,
          customerId: 2,
          goodsId: 1,
        },
      ];
      res.render("management-order-detail.ejs", { data: imsi });
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessage: "조회 실패" });
    }
  };

  ordersGet = async (req, res, next) => {
    try {
      const ordersData = await this.managerService.ordersGet();
      const imsi = [
        {
          id: 20,
          content: "급해요",
          status: 0,
          customerId: 2,
          goodsId: 1,
        },
        {
          id: 10,
          content: "급해요",
          status: 0,
          customerId: 2,
          goodsId: 2,
        },
      ];
      res.render("management.ejs", { data: imsi });
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessage: "조회 실패" });
    }
  };

  // 상품 추가
  goodsEnroll = async (req, res, next) => {
    try {
      const { seller, goodsname, explain, quantity, price } = req.body;
      const image = req.file.path;
      const goodsEnrollData = await this.managerService.goodsEnroll(
        seller,
        goodsname,
        explain,
        image,
        quantity,
        price
      );
      res.status(200).json({ message: "등록 성공" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessage: "등록 실패" });
    }
  };

  // 상품 정보 가져오기
  goodsGet = async (req, res, next) => {
    try {
      const { id } = req.params;
      const goodsData = await this.managerService.goodsGet(id);
      res.render("management-goods-detail.ejs", { data: goodsData });
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessage: "요청 실패" });
    }
  };

  // 상품 수정
  goodsModify = async (req, res) => {
    try {
      const { seller, goodsname, explain, quantity, price } = req.body;
      const goodsId = req.params.id;
      console.log(req.body.seller);
      console.log(goodsId);
      const goodsModifyData = await this.managerService.goodsModify(
        seller,
        goodsname,
        explain,
        quantity,
        price,
        goodsId
      );
    } catch (err) {
      console.log(err);
      res.status(400).json({ errorMessage: "요청 실패" });
    }
  };

  goodsImgModify = async (req, res) => {
    try {
      const goodsId = req.params.id;
      const image = req.file.path;
      console.log(image);
      const goodsImgData = await this.managerService.goodsImgModify(
        image,
        goodsId
      );
    } catch (err) {}
  };

  // 고객 정보 페이지 들어가기
  customerGet = async (req, res) => {
    try {
      const { id } = req.params;

      const customerData = await this.managerService.customerGet(id);

      res.render("management-customer", { data: customerData });
    } catch (err) {
      console.log(err.massage);
      res.status(400).json({ errorMessage: "조회 실패" });
    }
  };
  // 고객 정보 수정
  customerModify = async (req, res) => {
    try {
      const { id } = req.params;
      const { nickname, name, email, point } = req.body;
      const customerData = await this.managerService.customerModify(
        nickname,
        name,
        email,
        point,
        id
      );
    } catch (err) {
      console.log(err.massage);
      res.status(400).json({ errorMessage: "수정 실패" });
    }
  };
  // 고객 정보 삭제
  customerDelete = async (req, res, next) => {
    try {
      const { password, id } = req.body;
      const customerData = await this.managerService.customerDelete(
        password,
        id
      );
      res.render("management");
    } catch (err) {
      console.log(err.massage);
      res.status(400).json({ errorMessage: "수정 실패" });
    }
  };

  //매니저 등록
  createManager = async (req, res, next) => {
    const { nickname, name, password, email } = req.body;
    const createManagerData = await this.managerService.createManager(
      nickname,
      name,
      password,
      email
    );
    res.status(201).json({ data: createManagerData });
  };
}

module.exports = ManagerController;
