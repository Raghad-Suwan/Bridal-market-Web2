
const User = require('../models/user');


exports.ProfilePage = async (req, res) => {

    try {
        const userData = await User.findOne({ emailAddress: req.session.emailAddress });
        res.render('../views/profile.ejs', { user: userData });

    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    };

};





exports.EditProfilePage = async (req, res) => {
    try {
        const userData = await User.findOne({ _id: req.session.user_id });
        res.render('../views/editprofile.ejs', { user: userData });
    } catch (error) {
        console.error(error);
        res.status(500).send('SSSS error');
    }
};


exports.updateUserProfile = async (req, res) => {

    await User.findByIdAndUpdate({ _id: req.session.user_id }, {$set: {
        name: req.body.name,
        emailAddress: req.body.emailAddress,
        phone: req.body.phone,
        password: req.body.password,
        repeatPassword: req.body.repeatPassword,
    }})

    console.log( req.body.name,
         req.body.emailAddress,
        req.body.phone,
        req.body.password,
       req.body.repeatPassword,)

    res.redirect('/profiles/profile')
}

// exports.updateUserProfile = async (req, res) => {
//     try {

//         console.log('name', req.body.name)
//         const userId = req.session.user_id;
//         const { name, emailAddress, phone, password, repeatPassword } = req.body;

//         if (!userId) {
//             return res.status(400).send('User ID not found in session');
//         }

//         if (password && password !== repeatPassword) {
//             return res.status(400).send('Passwords do not match');
//         }

//         const updateData = {
//             name,
//             emailAddress,
//             phone,
//         };
//         if (password) {
//             const hashedPassword = await bcrypt.hash(password, 10);
//             updateData.password = hashedPassword;
//         }

//         await User.findByIdAndUpdate(userId, { $set: updateData });
//         console.log("dana",updateData)
//         res.redirect('/profiles/profile');
//     } catch (error) {
//         console.error('Error updating user profile:', error);
//         res.status(500).send('Internal Server Error');
//     }
// };


exports.ProviderProfilePage = (req, res) => {
    res.render("../views/providerprofile.ejs");
};
exports.EditProviderProfilePage = (req, res) => {
    res.render("../views/editproviderprofile.ejs");
};