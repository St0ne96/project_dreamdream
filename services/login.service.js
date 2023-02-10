const LoginRepository = require("../repositories/login.repository");


class LoginService {
     
    loginRepository = new LoginRepository(); 

    // 임시 모든 유저 찾기 
    findAllUser = async (user) => {
        const allUsers = await this.loginRepository.findAllUser();
        console.log({allUsers}); 

        return allUsers.map((user) => {
            return {
                id:user.id,
                nickname: user.nickname,
                name: user.name,
                password: user.password, 
                email: user.email, 
                point: user.point
            };
        });
    };

    // 로그인 기능 
    login = async (nickname) => {
        try {
            const user = await this.loginRepository.login(nickname)
            if (user){
                return user; 
            } else {
                return 0; 
            }
        } catch (error){
            throw error; 
        }
    };

    manager_login = async (nickname, password) => {
        try {
            const user = await this.loginRepository.manager_login(nickname, password);
            if (user){
                return user; 
            } else {
                return 0; 
            }
        } catch (error){
            throw error; 
        }
    };

};

module.exports = LoginService; 