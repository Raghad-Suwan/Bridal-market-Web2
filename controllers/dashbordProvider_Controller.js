const Users = require('../models/userschema');


exports.AddProductPage = (req, res) => {
    res.render("../views/addproduct.ejs");
};


exports.DashboardPage = (req, res) => {

    const userId = req.session.user_id; 
    return Users.find({ provider_id: userId }).then((data) => res.render('../views/product-dashbord.ejs', { data: data }))


}


exports.updateProductRender = async (req, res) => {
    let product = await Users.findOne({ _id: req.params.id });
    res.render('update_product', { product: product });
}

exports.deleteProduct = async (req, res) => {
    await Users.findByIdAndDelete({ _id: req.params.id });
    res.redirect('/dashbord/product')

}


exports.addNewProduct = (req, res) => {
    console.log(req.session.user_id);

    const prov = new Users({

        title: req.body.title,
        price: req.body.price,
        size: req.body.size,
        descreption: req.body.descreption,
        category: req.body.category,
        city: req.body.city,
        src: req.file.filename,
        provider_id : req.session.user_id
    });

    prov.save();
    res.redirect("/dashbord/add");

}

exports.updateProduct = async (req, res) => {
    await Users.findByIdAndUpdate({ _id: req.body.id }, {
        $set: {
        title: req.body.title,
        price: req.body.price,
        size: req.body.size,
        descreption: req.body.descreption,
        category: req.body.category,
        city: req.body.city,
        src: req.file.filename,
        }
    })
    res.redirect('/dashbord/product')
}


