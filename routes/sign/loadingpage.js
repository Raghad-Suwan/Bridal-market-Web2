const { render } = require('ejs');
const express = require('express');
const router = express.Router();


router.get("/loading", (req,res)=>{
    res.render("LoadingPage")
    })

 
module.exports = router; 


