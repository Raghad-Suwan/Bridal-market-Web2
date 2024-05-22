const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const addproduct = require('../../controllers/userController')
const productDashbord = require('../../controllers/userController')
const order = require('../../controllers/userController')
const Product = require("../../models/productschema");
const upload = require('../../config/multer');


router.post("/add", upload.single('img'), productDashbord.addNewProduct );


router.get("/add", addproduct.AddProductPage)


router.get("/product", productDashbord.DashboardPage)


router.get("/order", order.OrderPage)

router.get('/product/:id', productDashbord.updateProductRender);
router.get('/product/delete/:id', productDashbord.deleteProduct );
router.post('/update', upload.single('img'), productDashbord.updateProduct);

module.exports = router; 