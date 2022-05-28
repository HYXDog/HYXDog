const fs=require("fs");
fs.writeFile('./files/3.txt','你是狗',function(err){
    if (err!=null) {
        return console.log('写入失败'+err.message);
    }
    console.log('写入成功'+err);
})