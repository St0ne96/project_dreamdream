// Multer란? 
// 파일 업로드를 위해 사용된든 Node.js의 미들웨어이다. 

const multer = require("multer");
const path = require("path");

const storage =  multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "./assets/uploads/");
    },
    filename: function (req, file, cb){
        const ext = path.extname(file.originalname);
        // 한국어 처리 
        cb(null, Buffer.from(path.basename(file.originalname, ext) + "-" + Date.now()).toString("base64") + ext);
    },
});

const upload =  multer({storage: storage});
module.exports = {upload}; 
