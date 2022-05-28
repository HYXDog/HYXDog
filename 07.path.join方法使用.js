// 引入path模板
const path=require("path");
// 注意../会抵消前一个路径
const pathStr=path.join('/a','/b','/c','../','./b')
console.log(pathStr);

// 实例
const fs=require("fs");
fs.readFile(path.join(__dirname,'./files/1.txt'),'utf8',function(err,data) {
    if (err) {
        return console.log('失败'+err);
    }
    console.log('读取成功'+data);
})