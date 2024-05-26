module.exports = (req, res, next) => {
  console.log("is-auth middleware - Session:", req.session);
  if (req.session && req.session.isAuth) {
      next();
  } else {
      if (req.session) {
          req.session.error = "You have to login first";
      }
      res.redirect("/Login/Login");
  }
};
//https://youtube.com/watch?v=TDe7DRYK8vU&si=6UbOY4mMgdKWLvds
