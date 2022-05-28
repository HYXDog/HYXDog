// 1. 导入fs模块 来操作文件
const fs=require('fs')
// 2. 调用fs.readFile()方法读取文件
    // 参数 1：读取文件的存放路径
    // 参数 2：读取文件时候采用的编码格式，一般默认指定 utf8
    // 参数 3：回调函数，拿到读取失败和成功的结果 err dataStr
fs.readFile('./files/1.txt','utf8',function(err,data){
    // 2.1 打印失败的结果
    // 如果读取成功，则 err 的值为 null
    // 如果读取失败，则 err 的值为 错误对象， dataStr的值为 undefined
    console.log(err);
    console.log('-------');
    console.log(data);
})