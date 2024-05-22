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
exports.OrderPage = (req, res) => {
    res.render("../views/order.ejs");
};
exports.DashboardPage =  (req, res) => {
      
     return Product.find().then((data) => res.render('../views/product-dashbord.ejs', { data: data}))

};
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