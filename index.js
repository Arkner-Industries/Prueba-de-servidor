import { servidor, router, ruta } from "./config.js"


router.get("/",(req,res)=>{
    res.render("login.hbs")   
})


router.get("/login",(req,res)=>{
    res.render("login.hbs")
})

router.post("/login",(req,res)=>{
    console.log(req.body)
    res.send("soriegueton")
})

