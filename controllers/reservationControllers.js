const Reservation = require('../models/Reservation');
const Order = require('../models/ordersSchema');

exports.reservationSupmit = async (req, res) => {
    const { productId, Name, Email, Location, Phone } = req.body;

    const newReservation = new Reservation({
        Name,
        Email,
        Location,
        Phone
    });

    try {
        await newReservation.save();
        console.log('Reservation saved successfully');

        const newOrder = new Order({
            title: req.body.title,
            productId: productId,
            image: req.body.image,
            username: Name,
            email: Email,
            phone: Phone,
            location: Location
        });
        await newOrder.save();

        console.log('Order saved successfully');
        res.render('home', { reservedoneMessage: 'Reservation saved successfully' });
        console.log('Body:', req.body);
    } catch (err) {
        console.error('Error saving reservation:', err);
        res.status(500).send('Error saving reservation');
    }
};

//reservationConf controller 
exports.reservationConf = (req, res) => {
    res.render("../views/reservationConf.ejs");
};

// const Reservation = require('../models/Reservation');
// const Order = require('../models/ordersSchema');

// exports.reservationSupmit = async (req, res) => {
//     const {productId, Name, Email, Location, Phone } = req.body;

//     const newReservation = new Reservation({
//         Name,
//         Email,
//         Location,
//         Phone
//     });
//     // const newOrder = new Order(newReservation);
    

//     try {
//         await newReservation.save();

//         console.log('Reservation saved successfully');

//         const newOrder = new Order({
           
//             productId: productId, // تأكد من وجود productId في البيانات المرسلة
//             username: Name,
//             email: Email,
//             phone: Phone,
//             location: Location
//         });
//         await newOrder.save();

//         console.log('Order saved successfully');
//         //get a message confirming that the reservation confirmation data is stored in the database.
//         res.render('home', {reservedoneMessage: 'Reservation saved successfully'});
//         console.log('Body:', req.body); // Log to check if data is being received
//     } catch (err) {
//         console.error('Error saving reservation:', err);
//         res.status(500).send('Error saving reservation');
//     }
// };




// exports.reservationConf = (req, res) => {
//     res.render("../views/reservationConf.ejs");
// };

// const Reservation = require('../models/Reservation');

// exports.reservationSupmit = async (req, res) => {
//     const { Name, Email, Location, Phone } = req.body;

//     const newReservation = new Reservation({
//         Name,
//         Email,
//         Location,
//         Phone
//     });

//     try {
//         await newReservation.save();
//         console.log('Reservation saved successfully');
//         res.render('reservationConf');
//         console.log('Body:', req.body); // Log to check if data is being received
//     } catch (err) {
//         console.error('Error saving reservation:', err);
//         res.status(500).send('Error saving reservation');
//     }
// };