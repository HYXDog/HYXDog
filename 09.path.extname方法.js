// 获取文件扩展名   
const path=require('path')
// 文件的存放路径
const str='/a/b/c/index.html'
const pathStr=path.extname(str)
console.log(pathStr);
// 返回值是.html