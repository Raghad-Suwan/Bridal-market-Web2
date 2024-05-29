const Product = require('../models/productschema');


exports.AddProductPage = (req, res) => {
    res.render("../views/addproduct.ejs");
};


exports.DashboardPage = (req, res) => {

    return Product.find().then((data) => res.render('../views/product-dashbord.ejs', { data: data }))


}


exports.updateProductRender = async (req, res) => {
    let product = await Product.findOne({ _id: req.params.id });
    res.render('update_product', { product: product });
}

exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete({ _id: req.params.id });
    res.redirect('/dashbord/product')

}


exports.addNewProduct = (req, res) => {
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
    await Product.findByIdAndUpdate({ _id: req.body.id }, {
        $set: {
            name: req.body.name,
            price: req.body.price,
            size: req.body.size,
            description: req.body.description,
            service: req.body.service,
            city: req.body.city,
            img: req.file.filename,
        }
    })
    res.redirect('/dashbord/product')
}


