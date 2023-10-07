let express=require("express")

let app=express()

let bodyparser=require("body-parser")

app.use(bodyparser.json())


app.use(bodyparser.urlencoded({extended:false}))

//authorization

let auth=(req,res,next)=>{
    let allHeaders=req.headers 
    let token=allHeaders.token

    if(token==="nodejs"){
        next()
    }else{
        res.status(404).json({auth:"fail"})

    }
}


app.post("/login",[auth],(req,res)=>{
    if(req.body.uname==="admin" && req.body.upwd==="admin"){
        res.status(200).json({login:"success"})
    }else{
        res.status(401).json({login:"fail"})
    }
})


app.listen(8080,()=>{
    console.log("server started")
})