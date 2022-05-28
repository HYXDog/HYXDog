// 1. 导入fs文件系统模块
const fs=require('fs');
// 2. 调用fs.writeFile()方法，写入文件的内容
    // 参数1：表示文件的存放路径
    // 参数2：表示写入的内容
    // 参数3：回调函数打印是否写入成功
    fs.writeFile('./files/2.txt','黄大狗',function(err){
        console.log(err);
    })