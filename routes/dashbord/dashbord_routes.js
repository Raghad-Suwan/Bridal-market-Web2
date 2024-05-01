const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const addproduct = require('../../controllers/userController')
const productDashbord = require('../../controllers/userController')
const order = require('../../controllers/userController')


router.get("/add",addproduct.AddProductPage )


router.get("/product", productDashbord.DashboardPage)


router.get("/order", order.OrderPage)

    
module.exports = router; 