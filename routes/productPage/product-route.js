const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const productpage = require('../../controllers/userController')

router.get("/productpage/productpage/:id", productpage.ProductPage)


module.exports = router; 