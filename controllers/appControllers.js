const bcrypt = require('bcryptjs');
const User = require("../models/user"); 
//appcontrollers
// Login GET route

exports.login_get = (req, res) => {
    const error = req.session.error;
    delete req.session.error;
    res.render("LoginPages.ejs", { err: error });
}

// Login POST route
exports.login_post = async (req, res) => {
    const { emailAddress, password } = req.body;

    try {
    
        
        const user = await User.findOne({ emailAddress });
       
        if (!user) {
            req.session.error = "invalid";
            return res.redirect('/Login');
        }

       
        
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        

        if (!isPasswordMatch) {
            req.session.error = "invalid";
            return res.redirect('/Login');
        }

        // Set session authentication
        req.session.isAuth = true;
        req.session.username = user.username;

        // Redirect to home page after successful login
        res.render('../views/home');
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

// Signin GET route
exports.signin_get = (req, res) => {
    const error = req.session.error;
    delete req.session.error;
    res.render("../views/signup-user", { err: error });
}

// Signin POST route
exports.signin_post = async (req, res) => {
    const { name, emailAddress, password, phone, repeatPassword } = req.body;

    try {
     
        const userExists = await User.findOne({ emailAddress });
       
        if (userExists) { 
            return res.redirect('/Login');
        }

        const gmailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@gmail\.com$/;//https://www.w3schools.com/jsref/jsref_obj_regexp.asp



        if (!gmailRegex.test(emailAddress)) {
            return res.render('signup-user.ejs', { error: 'Email address must be a Gmail address' });}
          

        if (password !== repeatPassword) {
            return res.render('signup-user.ejs', { error: 'Passwords do not match' });
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;//https://www.w3schools.com/jsref/jsref_obj_regexp.asp

        if (!passwordRegex.test(password) || !passwordRegex.test(repeatPassword)) {
           return res.render('signup-user.ejs', { error: 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long' });
        }
       
        
       
        const hashPassword = await bcrypt.hash(password, 12);
        const hashrepeatPassword = await bcrypt.hash(password, 12);
        
   
        const newUser = new User({
            name,
            emailAddress,
            password: hashPassword,
            phone,
            repeatPassword:hashrepeatPassword,
        });
        
      
        await newUser.save();

      
        res.redirect('/Login');
    } catch (error) {
       
        res.status(500).send("Internal Server Error");
    }
};

// Home GET route
// Home GET route
exports.homes_get = (req, res) => {
    const username = req.session.username;
    res.render('home.ejs', { name: username });
};
//The code was accessed through https://youtube.com/watch?v=TDe7DRYK8vU&si=6UbOY4mMgdKWLvds
//https://github.com/LloydJanseVanRensburg/Authentication_Node_Sessions_Cookies