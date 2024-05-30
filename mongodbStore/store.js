const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
  uri: "mongodb+srv://hadisawalmeh:123456789h@cluster0.se97yow.mongodb.net/BridalMarket",
  collection: "mySession",
});

module.exports = store;
//https://youtube.com/watch?v=TDe7DRYK8vU&si=6UbOY4mMgdKWLvds