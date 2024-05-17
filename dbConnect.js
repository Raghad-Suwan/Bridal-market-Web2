const mongoose = require("mongoose");  
//لبعدرين منعدل ع االاب ومنحط الاشي هون فخليها هسا 
const dbConnect=()=>{

    const connectionParams={useNewUrlParser: true};
    mongoose.connect(process.env.DB,connectionParams);

    mongoose.connection.on("connected",()=>{
        console.log("connected to db succesfully ")
    })

    mongoose.connection.on("error",(err)=>{
        console.log("error wile connect to db  "+ err)
    })

    mongoose.connection.on("disconnected",()=>{
        console.log("mongodb disconnected")
    })

}

module.exports=dbConnect