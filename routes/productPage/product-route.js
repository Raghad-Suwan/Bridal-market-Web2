const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const productpage = require('../../controllers/userController')

router.get("/productpage/categoryName", productpage.ProductPage)



module.exports = router; 