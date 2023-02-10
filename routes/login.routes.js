const express = require("express");
const router = express.Router();

const LoginController = require("../controllers/login.controller");
const loginController = new LoginController(); 

const ManagerController = require("../controllers/manager.controller.js");
const managerController = new ManagerController();

// 임시 테스트 유저 등록 및 찾기 
router.post("/test", loginController.createUser)
router.get("/find", loginController.getUsers)

// 고객 로그인 기능
router.post("/login", loginController.login)
router.get("/logout",loginController.logout)


// 매니저 로그인 
// {
//  "nickname": "dreamdream" 
//  "password": "1234"
//  }
router.post("/managerauth", loginController.manager_login)

module.exports = router;