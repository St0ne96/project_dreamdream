const CustomerService = require("../services/customer.service");

class CustomerController {
    customerService = new CustomerService();
    
    createCustomer = async (req, res, next) => {
       try{
        const {nickname, name, password, email, point} = req.body; 
        const user = await this.customerService.createCustomer(
            nickname, name, password, email, point
        );
        res.status(201).json({data: user})
       } catch(error){
        next(error) ;  
       }
    };

}

module.exports = CustomerController;