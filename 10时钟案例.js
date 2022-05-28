const fs=require('fs')
const path=require('path')
// 正则表达式
const regStyle=/<style>[\s\S]*<\/style>/
const regScript=/<script>[\s\S]*<\/script>/
// 获取内容
fs.readFile(path.join(__dirname,'./时钟案例/index.html'),'utf8',function(err,data){
    if(err) return console.log('打印失败'+err)
    // console.log('打印成功'+data);
    // 把获取的内容传递给处理函数
    resolveCss(data)
    resolveScript(data)
    resolveHTML(data)
})
// 3.1 定义处理css脚本的处理方法
function resolveCss(data){
    const r1=regStyle.exec(data)
    const r2=r1[0].replace('<style>','').replace('</style>','')
    console.log(r2);
    fs.writeFile(path.join(__dirname,'存放文档/index.css'),r2,function(err){
        if(err) return console.log('打印失败'+err)
    })
}
// 4.1 定义处理js脚本的方法
function resolveScript(dataJs){
    const re1=regScript.exec(dataJs);
    console.log(re1[0]);
    const re2=re1[0].replace('<script>','').replace('</script>','')
    // console.log(r2);
    fs.writeFile(path.join(__dirname,'存放文档/index.js'),re2,function(err){
        if(err) return console.log('打印失败'+err)

    })
}
// 5.1 定义处理html脚本的方法
function resolveHTML(data) {
    const r1=data.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname,'./存放文档/index.html'),r1,function(err){
        if(err) return console.log('打印失败'+err)

    })
}