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
    console.log(" this task is done ")
    console.log( req.params.id )
  
    Product.deleteOne({ _id: req.params.id }).then((result) => {
      res.redirect("/dashbordMain/product");
      });


}
exports.deletemessageM=(req,res)=>{
    console.log(" this task is done ")
    console.log( req.params.id )
  
    messagemodel.deleteOne({ _id: req.params.id }).then((result) => {
      res.redirect("/dashbordMain/MessagingRequests");
      });


}
const messagemodel= require("../models/ConenctUsSchema")
exports.MessagingRequests=async(req, res) => {
    let message =  await  messagemodel.find()
    // console.log(" hi iam in all product ")
    res.render("../views/systmedashbord/MessagingRequests.ejs",{message} );
};
exports.allproduct = async (req, res) => {
    let products =  await Product.find()

    console.log(" hi iam in all product ")
    res.render("../views/systmedashbord/allProduct.ejs", { products });
};

exports.allorder= async(req,res)=>{
 


  // let order = await OrderModel.find();
  // let product = await Product.find();
  
  // let result = order.map(  (ele) => {
  //   let matchedProducts =   product.filter((ele1) => ele1._id ==ele.productId);
  //   return {
  //     products: matchedProducts
  //   };
  // });
  
  // // الآن result يحتوي على المصفوفة الجديدة
  // console.log(result.products);
  //  res.render("../views/systmedashbord/AllOrder.ejs", { order });

  let order = await OrderModel.find();
let product = await Product.find();
let re=[];

let result = order.map((ele) => {
  let matchedProducts = product.filter((ele1) => ele1._id == ele.productId);
  re.push({matchedProducts ,ele});

  if (matchedProducts.length > 0) {
    return {
      order: ele,
      products: matchedProducts
    };
  }
}).filter(item => item !== undefined);

// عرض البيانات في وحدة التحكم للتحقق
result.forEach((item) => {
  console.log('Order:', item.products);
 
});
console.log(result.length)

console.log("*********************************************************")

// re.forEach((item) => {
//   console.log('Order:', item);
 
// });
// عرض البيانات في وحدة التحكم للتحقق
// result.forEach((item) => {
//   console.log('Order:', item.products);
//   // item.products.forEach((product) => {
//   //   console.log('Product:', product);
//   // });
// });

// إرسال البيانات إلى العرض
res.render("../views/systmedashbord/AllOrder.ejs", { order:result });
}

