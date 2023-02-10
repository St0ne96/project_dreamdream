const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const router = require('./routes');
const mainRouter = require('./routes/mainpage.routes');

// socket.io
const http = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);


// 미들웨어
// app.use("/public", express.static("public"));
app.use(cookieParser());
app.use(express.json())

app.use(express.static("./assets"));
app.use("/assets", express.static("assets"));
app.use(express.urlencoded({ extended: false }));
app.use(mainRouter);
app.use('/api', router)


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));


http.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} 포트가 열렸습니다`)
});
