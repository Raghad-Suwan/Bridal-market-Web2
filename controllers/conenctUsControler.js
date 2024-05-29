//EXports : post form Conenct Us
exports.postConenctUs = async(req ,res) => {
  const{name ,email ,phonenumber ,message} = req.body
  const newConus = new require('../models/ConenctUsSchema') ({
    name ,
    email ,
    phonenumber,
    message
  })
  await newConus.save()
  console.log(newConus)
  res.render('home', { messageview:'Your message was sent successfully' });

};

