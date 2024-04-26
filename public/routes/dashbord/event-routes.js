const express=require("express")
const router=express.Router()
const { render } = require('ejs');

router.get('/',(req,res)=>{
    res.render("event/index")

})

router.get('/product',(req,res)=>{
    res.render("product")
})
router.get('/navbar',(req,res)=>{
    res.render("product")
})



//We can see the file from the app.js
module.exports =router