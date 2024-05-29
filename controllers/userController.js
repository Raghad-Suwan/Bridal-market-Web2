const Product = require('../models/productschema');



exports.ProductPage = (req, res) => {
    res.render("../views/ProductPage.ejs");
};
exports.HomePage = (req, res) => {
    res.render("../views/home.ejs");
};
exports.AddProductPage = (req, res) => {
    res.render("../views/addproduct.ejs");
};

const UserModel = require('../models/ordersSchema');

exports.OrderPage = (req, res) => {
    UserModel.find({})
    .then((dashbordorders) => {
        res.render('../views/order.ejs', { arr: dashbordorders });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send('Internal Server Error');
    });
};
exports.DashboardPage =  (req, res) => {
      
     return Product.find().then((data) => res.render('../views/product-dashbord.ejs', { data: data}))


}

exports.ProfilePage = (req, res) => {
    res.render("../views/profile.ejs");
};
exports.EditProfilePage = (req, res) => {
    res.render("../views/editprofile.ejs");
};
exports.ProviderProfilePage = (req, res) => {
    res.render("../views/providerprofile.ejs");
};
exports.EditProviderProfilePage = (req, res) => {
    res.render("../views/editproviderprofile.ejs");
};
exports.LoadingPage = (req, res) => {
    res.render("../views/LoadingPage.ejs");
};
exports.SignupUserPage = (req, res) => {
    res.render("../views/signup-user.ejs");
};
exports.Index = (req, res) => {
    res.render("../views/index.ejs");
};
exports.signupprovider = (req, res) => {
    res.render("../views/signup-provider.ejs");
};


exports.updateProductRender = async (req, res) => {
    let product = await Product.findOne({ _id: req.params.id });
    res.render('update_product', {product: product});
}

exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete({ _id: req.params.id });
    res.redirect('/dashbord/product')

}


exports.addNewProduct =  (req, res) => {
    const prov = new Product({ 

        name: req.body.name,
        price: req.body.price,
        size: req.body.size,
        description: req.body.description,
        service: req.body.service,
        city: req.body.city,
        img: req.file.filename,
    });

    prov.save();
    res.redirect("/dashbord/add");
    
}

exports.updateProduct = async (req, res) => {
    await Product.findByIdAndUpdate({ _id: req.body.id }, {$set: {
        name: req.body.name,
        price: req.body.price,
        size: req.body.size,
        description: req.body.description,
        service: req.body.service,
        city: req.body.city,
        img: req.file.filename,
    }})
    res.redirect('/dashbord/product')
}
exports.allproduct = (req, res, products) => {
    console.log(" hi iam in all product ")
    res.render("../views/systmedashbord/allproduct.ejs", { products });
};

exports.allorder=(req,res,orders)=>{
    res.render("../views/systmedashbord/allorder.ejs",{ orders });



}




const Customer=require("../models/Customer")

exports.searchCustomers = async(req, res) => {

    console.log('searchCustomers route hit'); // Log to verify if the route is hit
    console.log('Request body:', req.body); // Log the request body to ensure data is coming through

    const locals ={
        title:" serach",
        description:" search in the system ",
    };

try {
   let searchTerm =req.body.searchTerm;
const searchNoSpecialChar=searchTerm.replace(/[^a-zA-Z0-9]/g ,"");
 
const customers =await Customer.find({
    $or: [
    {brand: { $regex: new RegExp(searchNoSpecialChar, "i") }}, 
    {catagory: { $regex: new RegExp(searchNoSpecialChar, "i") }},
    ]
});
res.render("searchPage", {
    customers ,
    locals
    });
}catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }};
exports.calender1 = (req, res) => {
    res.render("../views/calendar1.ejs");
};
exports.calender2 = (req, res) => {
    res.render("../views/calendar2.ejs");
};

