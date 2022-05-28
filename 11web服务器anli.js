// 创建模板
const http=require('http')
const fs=require('fs')
const path=require('path')
// 实现代码
const server=http.createServer()
server.on('request', (req, res) => {
    const url=req.url
    // 预定义空白存放文件
    // let str=''
    const fpath=path.join(__dirname,url)
    fs.readFile(fpath,'utf8',function(err, data) {
        if (err) return console.log('失败'+err)
        res.end(data)
    })
})
server.listen(80,function() {
    console.log('127.0.0.1');
})
