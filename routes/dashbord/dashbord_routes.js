const { render } = require('ejs');
const express = require('express');
const router = express.Router();


router.get("/add", (req,res)=>{
res.render("addproduct")
})


router.get("/product", (req,res)=>{
    res.render("product-dashbord")
    })


    router.get("/order", (req,res)=>{
    res.render("order")
    })

    
module.exports = router; 