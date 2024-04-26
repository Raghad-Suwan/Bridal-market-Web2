const express=require("express")
const router=express.Router()


router.get('/',(req,res)=>{
    res.render("event/index")

})
router.get('/header',(req,res)=>{
    res.render("partials/header.ejs")

})

router.get('/s',(req,res)=>{
    res.render("eventss/app.js")

})


//We can see the file from the app.js
module.exports =router