

// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cartController = require('../../controllers/cart_orderController');

// Middleware لتحليل البيانات المرسلة
router.use(bodyParser.urlencoded({ extended: true }));

// Define routes and connect them to the controller functions
router.post('/add', cartController.addToCart);
router.get('/cart', cartController.viewCart);
router.get('/update', cartController.updateCart);
router.get('/clear', cartController.clearCart);

router.get('/order', cartController.displayOrders);


module.exports = router;
