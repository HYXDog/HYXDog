// const fs=require("fs");
// fs.readFile('C:\\Users\\hcy2328511149\\Desktop\\node.js第一天\\files\\1.txt','utf8',function(err, data){
//     // 出现相对路径拼接错误的问题，是因为提供了./或../开头的相对路径
//     // 如果要解决这个问题，可以直接提供一个完整的绝对路径
//     if (err) {
//         return
//     }
//     console.log(data);
// })
// 缺点：移植差 不利于维护


// __dirname 表示当前文件所处的目录
// console.log(__dirname);
const fs=require('fs');
fs.readFile(__dirname+'/files/4.js', 'utf8', function(err, data) {
    if (err) {
        return
    }
    console.log(data);
})