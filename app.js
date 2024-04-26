const express = require('express'); 
const app = express(); 
const port = 5000; // أو أي منفذ آخر يمكنك تحديده 
 
// تعيين محرك عرض EJS 
app.set('view engine', 'ejs'); 
 
// تحديد مجلد الملفات الثابتة (CSS، الصور، الوسائط) 
app.use(express.static('public')); 
 
// تحديد مسارات الصفحات والمعالجة 
app.get('/', (req, res) => { 
  res.render('home'); // تقديم صفحة الصفحة الرئيسية 
}); 
 
const events =require('./routes/event-routes')
app.use("/events", events)


// إضافة المزيد من مسارات الصفحات هنا إذا لزم الأمر 
 
// تشغيل التطبيق على المنفذ المحدد 
app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
});