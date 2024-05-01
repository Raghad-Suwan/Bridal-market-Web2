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
exports.DashboardPage = (req, res) => {
    res.render("../views/product-dashbord.ejs");
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
