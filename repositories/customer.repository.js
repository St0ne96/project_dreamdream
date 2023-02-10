const { Customer, Manager } = require("../models");

class CustomerRepository {
    constructor() {}

    // 회원가입 
    createCustomer = async(nickname, name, password, email, point) => {
        const creatCustomerData = await Customer.create({
            nickname,
            name,
            password,
            email,
            point
        });

        return creatCustomerData; 
    }; 

    idCustomerExist = async(nickname) => {
        try {
            // id값이 유저 DB에 있는지 
            const existCustomer = await Customer.findAll({
                where:{nickname},
            }); 

            // id값이 매니저DB에 있는지
            const exitstManager = await Manager.findAll({
                where:{nickname},
            });

            return [existCustomer, exitstManager] ; 
        } catch(error){
            // 에러 처리 
            throw error;
        }
    };
} 

module.exports = CustomerRepository;