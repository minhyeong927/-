
//http 모듈 불러오기
const http = require('http');
//fs 모듈 불러오기 파일 입출력 불러오기 가능
const fs = require('fs');
const PORT = Number(process.env.PORT) || 3000;
// 서버 생성
const server = http.createServer((req,res) => {
    console.log("요청발생");
    //console.log(req);
    console.log(req.method);
    //res.setHeader("Content-Type", "text/plain");
    //res.write("Hello node")
    //res.end();
    //res.setHeader("Content-Type", "text/html");
    //const readStream = fs.createReadStream(__dirname+"/index.html", "utf-8");
    //readStream.pipe(res);
    
    res.setHeader("Content-Type", "text/plain");
    const {method, url } = req;
    if( method === "GET" && url === "/home") {
        res.statusCode = 200;
        res.end("HOME");
    } else if( method === "GET" && url === "/about") {
        res.statusCode = 200;
        res.end("ABOUT");
    } else {
        res.statusCode = 404;
        res.end("NOT FOUND");
    }
});
//서버 실행
server.listen(PORT, () => {
    console. log(` ${PORT} 포트로 서버 실행`);
});