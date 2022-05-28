const path=require('path')//导入模板
const str='/a/b/c/index.html'//文件存放路径
// 获取最后一部分文件名字 在后面传参数则会清除传参的内容
const newStr=path.basename(str,'html')
console.log(newStr);
