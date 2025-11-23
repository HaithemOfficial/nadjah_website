import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-400 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🎓</span>
              </div>
              <span className="font-semibold text-white">النجاح للدراسة</span>
            </div>
            <p className="text-sm mb-6">
              دليلك الموثوق للدراسة بالخارج. اختر الوجهة المناسبة لميزانيتك وأحلامك الأكاديمية.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                title="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                title="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="TikTok"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 2.31-4.64 2.88 2.88 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.54-.05z" />
                </svg>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">المنتج</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="hover:text-white transition">
                  احجز الآن
                </Link>
              </li>
              <li>
                <a href="#costs" className="hover:text-white transition">
                  التكاليف
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">الشركة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition">
                  نبذة عننا
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition">
                  المدونة
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">قانوني</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="hover:text-white transition">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition">
                  شروط الخدمة
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-sm text-center">
            © {currentYear} النجاح للدراسة بالخارج. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
