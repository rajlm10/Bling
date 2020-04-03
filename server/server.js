const express=require('express')
const path=require('path')

const app=new express()
const publicPath=path.join(__dirname,'..','public')

app.use(express.static(publicPath))

app.get('*',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'))
})

app.listen(process.env.PORT||3000,()=>{
    console.log(`Server is up`)
    
})