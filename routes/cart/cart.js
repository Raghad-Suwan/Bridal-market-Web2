const express = require("express");
const router = express.Router();

// إضافة منتج إلى السلة
router.post('/add', (req, res)=> {
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
        var newItem = true;

        for (var i = 0; i < cart.length; i++) {
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
    res.redirect('/calender1/calender1');
});

// عرض محتويات السلة
router.get('/cart', (req, res) => {
    res.render('cart', { 
        cart: req.session.cart
    });
});



// تحديث السلة
router.get('/update', (req, res)=> {
    const title = req.query.title;
    const action = req.query.action;
    const cart = req.session.cart;

    // التحقق من وجود العربة والعنوان والإجراء
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

    // تنفيذ الإجراء بناءً على قيمة action
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

    // إذا كانت العربة فارغة، احذفها من الجلسة
    if (cart.length === 0) {
        delete req.session.cart;
    }

    res.redirect('/cart/cart');
});

// إزالة منتج من السلة
router.get('/clear', (req, res) => {
    delete req.session.cart
    res.redirect('/cart/cart');
});

module.exports = router;
