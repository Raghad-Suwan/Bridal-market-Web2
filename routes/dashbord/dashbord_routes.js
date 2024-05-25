const { render } = require('ejs');
const express = require('express');

const router = express.Router();

const productDashbord = require('../../controllers/userController')
const Product = require("../../models/productschema");
const upload = require('../../config/multer');


router.post("/add", upload.single('img'), productDashbord.addNewProduct );


router.get("/add", productDashbord.AddProductPage)


router.get("/product", productDashbord.DashboardPage)


router.get("/order", productDashbord.OrderPage)

router.get('/product/:id', productDashbord.updateProductRender);
router.get('/product/delete/:id', productDashbord.deleteProduct );
router.post('/update', upload.single('img'), productDashbord.updateProduct);

module.exports = router; 