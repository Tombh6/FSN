const http=require('http')
const fs= require('fs')
const port=3000

const server= http.createServer(function(req,res){
res.write('Hello')
res.end()
})

server.listen(port,function(error){
if(error){
    console.log('Something went wrong', error)
}else{
    console.log('Sever is listening on port ' + port)
}
})