
const express = require('express');
const app = express();
const port = 5000; // أو أي منفذ آخر يمكنك تحديده
const cookieParser = require('cookie-parser');
// تعيين محرك عرض EJS
app.set('view engine', 'ejs');
app.use(cookieParser());
// تحديد مجلد الملفات الثابتة (CSS، الصور، الوسائط)
app.use(express.static('public'));

// تحديد مسارات الصفحات والمعالجة
app.get("/send", (req, res) => {
  res.cookie("Loggd_in", "true");
  // Redirect to /sent instead of rendering numbers.ejs
  res.redirect("/sent");
});app.get("/sent", (req, res) => {
  res.cookie("Logged", "true");
  res.render("signup.ejs");
});
app.get("/signin", (req, res) => {
  res.cookie("Logged_in", "true");
  res.render("signin.ejs");
});

router.get('/secure_cookie', (req, res) => {
  res.cookie('my_secure_cookie', 'Secret Value in my secure cookie', {
      maxAge: 5000,
      expires: new Date('01 12 2021'), // There was a mistake in writing expires
      secure: true,
      httpOnly: true,
  });
  res.send("successfully"); // There was a mistake in writing successfully
});

// Register the router
app.use('/', router);


app.get('/', (req, res) => {
  res.render('home'); // تقديم صفحة الصفحة الرئيسية
});

// إضافة المزيد من مسارات الصفحات هنا إذا لزم الأمر

// تشغيل التطبيق على المنفذ المحدد
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
