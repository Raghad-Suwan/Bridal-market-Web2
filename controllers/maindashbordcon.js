const OrderModel=require("../models/Reservation")
const Product=require("../models/userschema")


exports.deleteorderM=(req,res)=>{
    console.log(" this task is done ")
    console.log( req.params.id )
  
    OrderModel.deleteOne({ _id: req.params.id }).then((result) => {
      res.redirect("/dashbordMain/order");
      });


}

exports.deleteproductM=(req,res)=>{
    console.log( req.params.id )
    Product.deleteOne({ _id: req.params.id }).then((result) => {
      res.redirect("/dashbordMain/product");
      });


}
exports.deletemessageM=(req,res)=>{
    console.log( req.params.id )
    messagemodel.deleteOne({ _id: req.params.id }).then((result) => {
      res.redirect("/dashbordMain/MessagingRequests");
      });


}
const messagemodel= require("../models/ConenctUsSchema")
exports.MessagingRequests=async(req, res) => {
    let message =  await  messagemodel.find()
    res.render("../views/systmedashbord/MessagingRequests.ejs",{message} );
};
exports.allproduct = async (req, res) => {
    let products =  await Product.find()

  
    res.render("../views/systmedashbord/allProduct.ejs", { products });
};

exports.allorder= async(req,res)=>{
let order = await OrderModel.find();
let re = [];
for (let i=0;i<order.length;i++){
  let zz= await Product.findById(order[i].productId)
if (zz!=null){
  re.push({
    _id:order[i]._id,
     Name:order[i].Name,
    Email:order[i].Email,
    Location:order[i].Location,
    Phone:order[i].Phone,
dateReservation:order[i].dateReservation,
timeReservation:order[i].timeReservation,
    title:zz.title,
    price:zz.price,
    src:zz.src,
    category:zz.category,
    size:zz.size,
  })
} else {
  re.push({
      Name: order[i].Name,
      Email: order[i].Email,
      Location: order[i].Location,
      Phone:order[i].Phone,
      title: 'Unknown Product',
      price: 'N/A',
      src: 'N/A',
      dateReservation:'n'
  });
}
}
res.render("../views/systmedashbord/AllOrder.ejs", { order: re });
}

