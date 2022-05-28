const fs=require("fs");
fs.readFile('./files/成绩.txt','utf8',function(err,data){
    if (err) {
        return console.log('读取失败')
    }
    console.log('读取成功'+data);
    // 4.1把数据按照空格分割成数组
   const arrOld= data.split(' ')
//    4.2创建一个新数组
   const newArr= [];
//    4.3遍历旧数组把数组=号换成：并且追加到新数组
   arrOld.forEach(function(item){
       newArr.push(item.replace('=',':'))
   });
//    4.4把新数组转换成字符串并且换行
  const arrStr= newArr.join('\b\n')
   console.log(arrStr);
   fs.writeFile('./files/01.成绩',arrStr,function(err){
    if (err!=null) {
        return alert('错误')
    }
    console.log(err);
   })
})