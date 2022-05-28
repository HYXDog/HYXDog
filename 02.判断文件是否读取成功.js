const fs=require("fs");
fs.readFile('./files/3.txt','utf8',function(err, data){
    if (err) {
        return console.log('读取失败',err.message);
    }
    console.log('读取成功'+data);
})