
const bcrypt = require('bcryptjs');
 
const ServiceProvider = require("../models/serviceProviderSchema"); 
 


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
    
        
        const serviceProvider = await ServiceProvider.findOne({ emailAddress });
       
        if (!serviceProvider) {
            req.session.error = "invalid email or password";
            console.log("Service Provider not found");
            return res.redirect('/Login/Login');
        }

       
        
        const isPasswordMatch = await bcrypt.compare(password, serviceProvider.password);
        

        if (!isPasswordMatch) {
            if(req.session){
            req.session.error = "invalid email or password";
        
        }
        console.log("Password does not match");
        return res.redirect('/Login/Login');
    }
    if (req.session) {
        req.session.isAuth = true;
        req.session.name = serviceProvider.name;
        console.log("Session updated", req.session);
    }
        return res.redirect("/dashbord/add");
     
    } catch (error) {
        
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


exports.signin_get = (req, res) => {

    const error = req.session && req.session.error; 
    if (error){
    delete req.session.error;}
    res.render("signup-provider.ejs", { err: error });

}

exports.signin_post = async (req, res) => {
    const { name,companyName, emailAddress, location ,password, phone, repeatPassword } = req.body;

    try {
     
        const serviceProviderExists = await ServiceProvider.findOne({ emailAddress });
       
        if (serviceProviderExists) { 
            return res.redirect('/Login/Login');
        }

        const gmailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@gmail\.com$/;//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
        if (!gmailRegex.test(emailAddress)) {
            return res.render('signup-provider.ejs', { error: 'Email address must be a Gmail address' });}
          

        if (password !== repeatPassword) {
            return res.render('signup-provider.ejs', { error: 'Passwords do not match' });
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;//https://www.w3schools.com/jsref/jsref_obj_regexp.asp

        if (!passwordRegex.test(password) || !passwordRegex.test(repeatPassword)) {
           return res.render('signup-provider.ejs', { error: 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long' });
        }
       
        
       
        const hashPassword = await bcrypt.hash(password, 12);
        const hashrepeatPassword = await bcrypt.hash(password, 12);
        const newServiceProvider = new ServiceProvider({

            name,
            companyName,
            emailAddress,
            location,
            password:hashPassword,
            phone,
            repeatPassword:hashrepeatPassword
        });
        
   
       
        
      
        await newServiceProvider.save();

      
        res.redirect('/Login/Login');
    } catch (error) {
       console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


exports.homes_get = (req, res) => {
    const name = req.session.name;
    res.render('dashbord/add', { name });
};
