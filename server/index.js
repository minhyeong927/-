// express 모듈 불러오기
const express = require('express');
// 서버 생성
const app = express();
//포트 설정
const PORT = Number(process.env.PORT) || 3000;
// 라우터 설정
app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello Node");
});
app.get("/users", (req, res) => {
    res.status(200);
    res.send("Get all users");
});
app.post("/users", (req, res) => {
    res.status(200);
    res.send("Create new user");
});

//서버실행
app.listen(PORT, () => {
    console.log(`${PORT} 포트로 서버 실행`);
});