const CustomerRepository = require('../repositories/customer.repository');
const bcrypt = require('bcrypt');

class CustomerService {
    customerRepository = new CustomerRepository();

    createCustomer = async (nickname, name, password, email ,point) => {
      try{
        // 해당 nickname을 가진 customer이 존재하는지 
        const existCustomer = await this.customerRepository.idCustomerExist(nickname);

        // 해당 nickname을 가지고 있다면!! 
        if (existCustomer[0].length !==0 || existCustomer[1].length !==0){
          const error = new Error('이미 사용중인 아이디 입니다.');
          error.name = 'This ID is already taken.'
          error.status = 400; 
          throw error; 
        }

        // 비밀번호 암호화하기 
        // hash는 동기, hashSync는 비동기 방식 파라미터, 숫자 10은 암호화에 사용되는 salt로 값이 높을수록
        // 암호화 연산이 증가함 => 속도가 느려짐 
        const hashedPassword = await bcrypt.hash(password, 10); 

        // 회원가입 
        return await this.customerRepository.createCustomer(
          nickname,
          name,
          hashedPassword,
          email,
          point
        );
      } catch(error){
        throw error; 
      }
    };
}
    
      
    
        
  

module.exports = CustomerService;