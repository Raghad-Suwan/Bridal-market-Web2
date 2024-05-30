//Exports : cal1 , cal2  pages

exports.cal1 = (req, res) => {
  res.render("../views/cal1.ejs");
};
exports.cal2 = (req, res) => {
  res.render("../views/cal2.ejs");
}; 

//Exports : post form calendar 1 
exports.postCal1Res = async (req, res) => {
    const {dateReservation, timeReservation} = req.body;
    if(!dateReservation || !timeReservation){
      return res.render('cal1', {errorMessage: 'Please select a date and time for your reservation.'});
    }
    const existingReservation = await require('../models/calendar1Schema').findOne({dateReservation: dateReservation, timeReservation: timeReservation});
    if(existingReservation){
      return res.render('cal1', {errorMessage: 'Sorry, this date has been reserved , You can choose another one.'});
    }
    else{
      //get a message confirming that the reservation data is stored in the database.
      res.render('reservationConf', {reserveMessage: 'To successfully confirm your booking, you must fill out this reservation confirmation form.'});
    }
    const newRes = new require('../models/calendar1Schema') ({dateReservation, timeReservation});
    await newRes.save();
    console.log(newRes)
    console.log('The reservation has been added to the database.');    
};
  
//Exports : post form calendar 2
  exports.postCal2Res = async (req, res) => {
    const { dateReservation, startTime, endTime } = req.body;
    if(!dateReservation || !startTime || !endTime) {
      return res.render('cal2', {errorMessage: 'Please select a date, start time, and end time for your reservation.'});
    }
    const existingReservation = await require('../models/calendar2Schema').findOne({dateReservation: dateReservation, startTime: startTime, endTime: endTime});
    if(existingReservation) {
      return res.render('cal2', {errorMessage: 'Sorry, this date has been reserved , You can choose another one.'});
    }
    else{
      //get a message confirming that the reservation data is stored in the database.
      res.render('reservationConf', {reserveMessage: 'To successfully confirm your booking, you must fill out this reservation confirmation form.'});
    }
    const newRes = new require('../models/calendar2Schema') ({dateReservation, startTime, endTime});
    await newRes.save();
    console.log(newRes)
    console.log('The reservation has been added to the database.');
    
  };
  
  


 