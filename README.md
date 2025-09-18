# HousesApp — Final Design (Dark UI)

الآن لديك حزمة واجهات مصممة بدقة (Dark mode) تحتوي على:
- index.html (login)
- superadmin.html (لوحة تحكم كاملة)
- admin.html (إدارة المنازل)
- user.html (عرض المهام)
- houses.html (كتالوج)
- assets/style.css (تصميم موحد)
- assets/app.js (دوال مساعدة)

قبل التشغيل:
1. افتح كل ملف HTML وابحث عن:
   const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
   const SUPABASE_KEY = "YOUR_ANON_KEY";
   واستبدلهما بقيم مشروعك (Settings → API).
2. نفّذ SQL الجاهز لإضافة جداول houses و profiles (مذكور سابقاً).
3. أنشئ Storage bucket باسم `houses` وخصصه public للاختبار.
4. فعّل GitHub Pages على الفرع main (root).

إذا واجهت صفحة بيضاء أو تصاميم مبعثرة:
- افتح Console (F12) وانسخ لي الأخطاء.
- تأكد أن ملفات assets موجودة ومرتبطة (assets/style.css و assets/app.js).
