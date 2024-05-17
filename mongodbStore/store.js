const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
  uri: "mongodb+srv://raghad:98765ragahd@cluster0.9jk40dj.mongodb.net/myDatabase",
  collection: "myS",
});

module.exports = store;
//https://youtube.com/watch?v=TDe7DRYK8vU&si=6UbOY4mMgdKWLvds