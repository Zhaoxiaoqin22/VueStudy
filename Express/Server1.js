var express = require('express');

//创建应用对象：
const app = express();

//创建路由规则:request是对请求报文的封装，而require是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头：允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send("hello express！HI!AJAX!")
})

port = 3010

app.listen(port,()=>{
    console.log("server is on,port is "+port+"!")
})

