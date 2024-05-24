const bcrypt = require('bcryptjs');
const User = require("../models/user"); 
const mongoose=require('mongoose')




exports.login_get = (req, res) => {
    const error = req.session && req.session.error; 
    if (req.session) {
        delete req.session.error; 
    }
    res.render("LoginPages.ejs", { err: error }); 
}
exports.login_post = async (req, res) => {
    const { emailAddress, password } = req.body;

    try {
        const user = await User.findOne({ emailAddress });

        if (!user) {
            req.session.error = "Invalid email or password";
            console.log("User not found");
            return res.redirect('/Login/Login');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            if(req.session){
                req.session.error = "Invalid email or password";
            }
            console.log("Password does not match");
            return res.redirect('/Login/Login');
        }

        if (req.session) {
            req.session.isAuth = true;
            req.session.name = user.name;
            console.log("Session updated", req.session);
        }

        return res.redirect("/");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
};


exports.signin_get = (req, res) => {
    const error = req.session && req.session.error; 
    if (error) {
        delete req.session.error; 
    }
    res.render("signup-user", { err: error }); 
}


exports.signin_post = async (req, res) => {
    const { name, emailAddress, password, phone, repeatPassword } = req.body;

    try {
     
        const userExists = await User.findOne({ emailAddress });
       
        if (userExists) { 
            return res.redirect('/Login/Login');
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

      
        res.redirect('/Login/Login');
    } catch (error) {
       
        res.status(500).send("Internal Server Error");
    }
};


exports.homes_get = (req, res) => {
    const name = req.session.name;
    res.render('home.ejs', { name: name });
};
//The code was accessed through https://youtube.com/watch?v=TDe7DRYK8vU&si=6UbOY4mMgdKWLvds
//https://github.com/LloydJanseVanRensburg/Authentication_Node_Sessions_Cookies
