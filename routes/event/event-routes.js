const { render } = require('ejs');
const express=require("express")
const router = express.Router()


const indexProduct =require('../../controllers/userController')

router.get("/eventproduct/categoryName/page", indexProduct.Index)



//We can see the file from the app.js
module.exports =router