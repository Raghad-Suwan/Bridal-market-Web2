const { render } = require('ejs');
const express = require('express');
const router = express.Router();


router.get("/signup-user", (req,res)=>{
res.render("signup-user")
})


router.get("/signup-provider", (req,res)=>{
    res.render("signup-provider")
    })



    
module.exports = router; 