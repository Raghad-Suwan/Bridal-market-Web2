const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);

const storeSP= new MongoDBStore({
  uri: "mongodb+srv://eman:123456789e@cluster0.se97yow.mongodb.net/BridalMarket",
  collection: "serviceProviderinfo",
});

module.exports = storeSP;