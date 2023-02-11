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
     res.render("login.ejs", { user: res.locals.user})
});
//관리자 로그인 팝업창 
router.get("/managerlogin",(req,res)=>{
     if(res.locals.user ){
        return res.redirect('/management')
     }
    
     res.render("managementlogin.ejs", {user: res.locals.user})
});


// 로그인 -> 유저 페이지 접속 
router.get("/users",auth_middleware, (req,res)=>{
    if(!res.locals.user){
        return res.render('index.ejs');
    }
    res.render('userpage.ejs');
})

// 로그인 -> 관리자 페이지 접속 
router.get("/management", manager_middleware, (req,res)=>{
    if(!res.locals.user){
        return res.render('index.ejs');
    }
    res.render('managementpage.ejs')
})


// 관리자 페이지 
// 상품관리페이지 
router.get("/management/goodspage",manager_middleware,(req,res)=>{
   if(!res.locals.user){
      return res.render('index.ejs')
   }
   res.render('managementgoodspage.ejs')
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



