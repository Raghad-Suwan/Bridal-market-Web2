// controllers/cartController.js
const Order = require('../models/ordersSchema');

exports.addToCart = async (req, res) => {
    const { productId, title, price, image } = req.body;

    if (typeof req.session.cart == "undefined") {
        req.session.cart = [];
        req.session.cart.push({
            title: title,
            qty: 1,
            price: parseFloat(price).toFixed(2),
            image: image
        });
    } else {
        const cart = req.session.cart;
        let newItem = true;

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].title == title) {
                cart[i].qty++;
                newItem = false;
                break;
            }
        }
        if (newItem) {
            cart.push({
                title: title,
                qty: 1,
                price: parseFloat(price).toFixed(2),
                image: image
            });
        }
    }

    console.log(req.session.cart);
    req.session.productId = productId;
    res.redirect(`/cal1/cal1`);
};

exports.viewCart = (req, res) => {
    res.render('cart', { 
        cart: req.session.cart
    });
};

exports.updateCart = (req, res) => {
    const title = req.query.title;
    const action = req.query.action;
    const cart = req.session.cart;

    if (!cart) {
        console.log("Cart is not defined");
        return res.redirect('/cart/cart');
    }

    if (!title) {
        console.log("Title is not defined");
        return res.redirect('/cart/cart');
    }

    if (!action) {
        console.log("Action is not defined");
        return res.redirect('/cart/cart');
    }

    for (let i = 0; i < cart.length; i++) { 
        if (cart[i].title === title) {
            switch (action) {
                case "add":
                    cart[i].qty++;
                    break;
                case "remove":
                    cart[i].qty--;
                    if (cart[i].qty <= 0) {
                        cart.splice(i, 1);
                    }
                    break;
                case "clear":
                    cart.splice(i, 1);
                    break;
                default:
                    console.log('update problem');
                    break;
            }
            break;
        }
    }

    if (cart.length === 0) {
        delete req.session.cart;
    }

    res.redirect('/cart/cart');
};

exports.clearCart = (req, res) => {
    delete req.session.cart;
    res.redirect('/cart/cart');
};



exports.displayOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.render('order', { cart: orders });
    } catch (err) {
        console.log('Error fetching orders:', err);
        res.status(500).send('Error fetching orders');
    }
};