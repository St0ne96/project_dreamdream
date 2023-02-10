const express = require("express");
const router = express.Router();

const {auth_middleware} = require("../middleware/auth.middleware");
const {manager_middleware} = require("../middleware/manager.middleware");

// 메인 페이지 
router.get("/", (req,res)=>{
 // 만약 로그인..ing 이라면 

 if(res.locals.user ){  
    return res.redirect("/users")
 }
 if(res.locals.user ){
    return res.redirect('/manager')
 }

 res.render("index.ejs", { user: res.locals.user})
});

//로그인 
//유저 로그인 팝업창 
router.get("/login",(req,res)=>{
    if(res.locals.user ){  
        return res.redirect("/users")
     }
     if(res.locals.user){
        return res.redirect('/manager')
     }
    
     res.render("login.ejs", { user: res.locals.user})
});
//관리자 로그인 팝업창 
router.get("/managerlogin",(req,res)=>{
     if(res.locals.user ){  
        return res.redirect("/users")
     }
     if(res.locals.user ){
        return res.redirect('/manager')
     }
    
     res.render("managementlogin.ejs", {user: res.locals.user})
});


// 로그인 -> 유저 페이지 접속 
router.get("/users",auth_middleware, (req,res)=>{
    if(!res.locals.user){
        return res.render('index.ejs',{user: res.locals.user});
    }
    res.render('userpage.ejs',{user: res.locals.user});
})

// 로그인 -> 관리자 페이지 접속 
router.get("/management", manager_middleware, (req,res)=>{
    if(!res.locals.user){
        return res.render('index.ejs',{user: res.locals.user});
    }
    res.render('management.ejs')
})

router.get("/management/customer/${id}", manager_middleware, (req,res)=>{
   if(!res.locals.user){
      return res.render('managementpage.ejs',{user: res.locals.user});
  }
  res.render('management-customer.ejs')
} )

router.get("/goodsdetail", manager_middleware, (req,res)=>{
   if(!res.locals.user){
      return res.render('managementpage.ejs',{user: res.locals.user});
  }
  res.render('goodsdetail.ejs')
} )

module.exports = router;



