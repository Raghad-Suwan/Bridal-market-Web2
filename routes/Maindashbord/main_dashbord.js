const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Main = require('../../controllers/maindashbordcon')


router.get("/order", Main.allorder);
router.get("/MessagingRequests", Main.MessagingRequests);
router.get("/product", Main.allproduct);
router.delete("/:id", Main.deleteorderM);
router.delete("/delete/:id", Main.deleteproductM)
router.delete("/dmessage/:id", Main.deletemessageM)
module.exports = router;

    
module.exports = router; 