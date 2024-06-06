const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cartController = require('../../controllers/cart_orderController');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/add', cartController.addToCart);
router.get('/cart', cartController.viewCart);

router.get('/update', cartController.updateCart);
router.get('/clear', cartController.clearCart);



  router.get('/order', cartController.displayOrders);


module.exports = router;
