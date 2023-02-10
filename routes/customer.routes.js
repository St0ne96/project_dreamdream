const express = require("express");
const router = express.Router();

const CustomerController = require('../controllers/customer.controller')
const customerController = new CustomerController(); 

//회원가입  
router.post("/customer/signup", customerController.createCustomer);

module.exports = router