const { Customer, Manager } = require('../models'); 


class LoginRepository {
   
    //임시 유저 데이터 등록  
    createUser = async (nickname,name,password,email,point) => {
        const createUserData = await Customer.create({
            nickname,name,password,email,point
        }); 

        return createUserData; 
    }; 

    //임시 모든 유저 찾기 
    findAllUser = async() => {
        const customers = await Customer.findAll();
        console.log(customers);
        
        return customers; 
    }; 


    // 로그인 기능 
    login = async (nickname) => {
        try {
            const user = await Customer.findOne({
                where: {nickname}, 
            }); 

            return user; 
        } catch (error) {
            throw new Error(error); 
        }
    }; 

    // 매니저 로그인 기능 
    manager_login = async (nickname, password) => {
        try {
            const user = await Manager.findOne({
                where: {nickname, password}, 
            }); 

            return user; 
        } catch (error) {
            throw new Error(error); 
        }
    }; 

}

module.exports = LoginRepository; 