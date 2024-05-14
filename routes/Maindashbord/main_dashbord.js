const { render } = require('ejs');
const express = require('express');
const router = express.Router();

const Main = require('../../controllers/userController')

router.get("/product", (req, res) => {
    // Assuming you have some product data to send
    const products = [


{

    Name:"Gory",
    	Image:"https://i.aquarelle.com/60/images/produits/bouquet-du-fleuriste-rose-et-rouge-livraison-fleurs-aquarelle-550x550-41470.jpg" ,
        Size:"L",
        price:"20",
        Type:"Flower"	,
        City:"Nablus",
        Description:"-----",
        companyname:"the princess"	,
},

{

    Name:"Pistachio",
    	Image:"https://www.gateaux.ae/cdn/shop/files/PistachioCake1.png?v=1699355109" ,
        Size:"M",
        price:"25",
        Type:"Cake"	,
        City:"Ramallah",
        Description:"-----",
        companyname:" Al-arz"	,
}

    ]
       

    // Call the allproduct function and pass the product data
    Main.allproduct(req, res, products);
});
router.get("/order", (req, res) => {
    // Assuming you have some product data to send
    const orders=[];




       

    // Call the allproduct function and pass the product data
    Main.allorder(req, res, orders);
});
module.exports = router;

    
module.exports = router; 