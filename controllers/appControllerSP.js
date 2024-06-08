
const bcrypt = require('bcryptjs');
 
const ServiceProvider = require("../models/serviceProviderSchema"); 
 





exports.signin_get = (req, res) => {

    const error = req.session && req.session.error; 
    if (error){
    delete req.session.error;}
    res.render("signup-provider.ejs", { err: error });

}

exports.signin_post = async (req, res) => {
    const { name,companyName, emailAddress, location ,password, phone, repeatPassword } = req.body;
    console.log("data saved ");
    console.log({
        name,companyName, emailAddress, location ,password, phone, repeatPassword
    });
    

    try {
     
        const serviceProviderExists = await ServiceProvider.findOne({ emailAddress });
       
        if (serviceProviderExists) { 
            return res.redirect('/Login/Login');
        }

        const gmailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@gmail\.com$/;
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
        
   
       
        
      
         newServiceProvider.save();
        console.log(
            {newServiceProvider}
        );

      
        res.redirect('/Login/Login');
    } catch (error) {
       console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


exports.homes_get = (req, res) => {
    const name = req.session.name;
    res.render('home.ejs', { name: name });
};
