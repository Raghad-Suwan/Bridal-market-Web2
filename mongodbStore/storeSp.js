const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);

const storeSp = new MongoDBStore({
  uri: "mongodb+srv://eman:123456789e@cluster0.se97yow.mongodb.net/BridalMarket",
  collectionn: "mysessions",
});

module.exports = storeSp;
//https://youtube.com/watch?v=TDe7DRYK8vU&si=6UbOY4mMgdKWLvds