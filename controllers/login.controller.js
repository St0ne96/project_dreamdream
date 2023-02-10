const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const LoginService = require("../services/login.service");

class LoginController {
    LoginService = new LoginService();

    // 임시 모든 유저 찾기 
    getUsers = async (req,res,next)=> {
        const users = await this.LoginService.findAllUser();

        res.status(200).json({data: users});
    }
    
    // 임시 유저 데이터 등록 
    createUser = async (req,res,next) => {
        const {nickname, name, password,email,point} = req.body
        const createUserData = await this.LoginService.createUser(
            nickname, 
            name, 
            password,
            email,
            point
        );
        res.status(201).json({data:createUserData});
    };

    // 로그인 기능 
    login = async (req,res,next) => {
        try {
            const {nickname, password} = req.body; 
            const user = await this.LoginService.login(nickname, password);
            const passwordHash = await bcrypt.compare(password, user.password); // 암호화 비교 
            if(!user || !passwordHash) return res.status(412).json({success: false, message:"아이디 및 비밀번호를 확인해주세요."})
            if ( user === 0 ){
                res.status(400).send({message:"아이디 및 비밀번호를 확인해주세요"});
            } else {
                const token = jwt.sign({id:user.id}, process.env.JWT_SECRET_KEY);
                res.cookie("jwt", token, {maxAge: 1000 * 60 * 60});
                res.status(200).send({message: "드림드림에 오신 것을 환영합니다."});
            }
        } catch (error){
            next(error);
        }
    };

    manager_login = async (req,res,next) => {
        try {
            const {nickname, password} = req.body; 
            const user = await this.LoginService.manager_login(nickname, password);
            if ( user === 0 ){
                res.status(400).send({message:"아이디 및 비밀번호를 확인해주세요"});
            } else {
                const token = jwt.sign({id:user.id}, process.env.JWT_SECRET_KEY);
                res.cookie("jwt", token, {maxAge: 1000 * 60 * 60});
                res.status(200).send({message: "드림드림에 오신 것을 환영합니다."});
            }
        } catch (error){
            next(error);
        }
    };



    // 로그아웃 
    logout = async(req,res,next) => {
        try {
            if (req?.cookies.jwt) {
                res.clearCookie("jwt"); 
                res.redirect("/");
            }
        } catch (error) {
            next(error);
        }
    };


}

module.exports = LoginController; 