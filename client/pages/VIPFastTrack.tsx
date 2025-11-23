import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Clock, ShieldCheck, Users, Zap, Star, ArrowRight } from "lucide-react";

export default function VIPFastTrack() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center bg-blue-50">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">VIP Fast-Track: ادفع اليوم وابدأ إجراءاتك فوراً مع النَجَاح</h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8">خدمة مخصصة فقط للطلاب الجادين المستعدين للبدء الفوري. ادفع الآن وابدأ رحلتك مباشرة دون انتظار.</p>
            <Link to="/payment">
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-8 py-4 rounded-xl text-2xl shadow-lg hover:from-blue-700 hover:to-blue-900 transition">نعم، أريد البدء فوراً</button>
            </Link>
            <p className="mt-4 text-sm text-red-700">أماكن محدودة – أسرع بالحجز!</p>
          </div>
        </section>

        {/* Problem / Pain Agitation */}
        <section className="py-12 px-4 bg-white text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">هل سئمت من التأخير والإجراءات المعقدة؟</h2>
          <ul className="max-w-xl mx-auto text-lg space-y-4 text-gray-700">
            <li>الانتظار الطويل وعمليات التواصل المتكررة تضيع وقتك.</li>
            <li>نتائجك تأتي فقط إذا كنت مستعداً للبدء فوراً.</li>
            <li>VIP Fast-Track هي طريقك للبدء السريع بدون تعقيد.</li>
          </ul>
        </section>

        {/* VIP Offer / Value Stack */}
        <section className="py-12 px-4 bg-blue-50 text-blue-900 text-center">
          <h2 className="text-3xl font-bold mb-8">ماذا ستحصل عليه عند اختيار VIP</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 p-6 rounded-xl bg-white shadow">
              <Zap className="h-8 w-8 text-blue-600" />
              <span>بدء الإجراءات فوراً — كل خطواتك تبدأ مباشرة بعد الدفع.</span>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-white shadow">
              <Clock className="h-8 w-8 text-blue-600" />
              <span>تسريع العملية — تجاوز التأخير المعتاد في الإجراءات.</span>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-white shadow">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              <span>دعم شخصي أثناء العملية — فريق النَجَاح سيرشدك خطوة بخطوة.</span>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-white shadow">
              <Star className="h-8 w-8 text-blue-600" />
              <span>نتائج أسرع — كل شيء يسير بشكل مباشر وفعال.</span>
            </div>
          </div>
        </section>

        {/* Social Proof / Credibility */}
        <section className="py-12 px-4 bg-white text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">عملائنا الجادون بدأوا بالفعل</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="bg-blue-50 rounded-xl p-6 shadow w-full md:w-1/3">
              <p className="text-lg font-semibold text-gray-800 mb-2">“بدأت في نفس اليوم، وكل شيء كان سريع وواضح!”</p>
              <span className="text-sm text-gray-600">— طالب VIP</span>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow w-full md:w-1/3">
              <p className="text-lg font-semibold text-gray-800 mb-2">“الدعم الشخصي فرق كبير، أنصح كل طالب جاد!”</p>
              <span className="text-sm text-gray-600">— طالبة VIP</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow w-full md:w-1/3 flex flex-col items-center">
              <Users className="h-8 w-8 text-blue-900 mb-2" />
              <span className="text-lg font-bold text-blue-900">أكثر من 100 طالب استخدموا VIP العام الماضي</span>
            </div>
            <div className="bg-white rounded-xl p-6 shadow w-full md:w-1/3 flex flex-col items-center">
              <img src="/logos/university1.png" alt="جامعة معتمدة" className="h-8 mb-2" />
              <span className="text-lg font-bold text-blue-900">شركاء جامعات معتمدون</span>
            </div>
          </div>
        </section>

        {/* Pay First / Commitment Filter */}
        <section className="py-12 px-4 bg-blue-50 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">ادفع أولاً، ثم نبدأ الإجراءات</h2>
          <p className="text-lg text-gray-800 mb-6">الدفع هو تأكيد جدية الالتزام.<br />بعد الدفع، يبدأ فريق النَجَاح مباشرة في معالجة كل الإجراءات.</p>
          <Link to="/payment">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold px-8 py-4 rounded-xl text-2xl shadow-lg hover:from-blue-700 hover:to-blue-900 transition">ادفع الآن وابدأ إجراءاتك فوراً</button>
          </Link>
        </section>

        {/* Scarcity / Urgency */}
        <section className="py-12 px-4 bg-white text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-4">المكان محدود</h2>
          <p className="text-lg text-gray-800 mb-2">باقي 5 أماكن VIP فقط لهذا الأسبوع.</p>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-12 px-4 bg-blue-50 text-blue-900 text-center">
          <h2 className="text-3xl font-bold mb-8">كيف تعمل الخدمة</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white shadow">
              <CheckCircle2 className="h-8 w-8 text-blue-600" />
              <span className="font-semibold">ادفع رسوم VIP — لتأكيد الالتزام.</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white shadow">
              <ArrowRight className="h-8 w-8 text-blue-600" />
              <span className="font-semibold">ابدأ الإجراءات مباشرة — فريق النَجَاح يبدأ كل خطوة نيابة عنك.</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white shadow">
              <Clock className="h-8 w-8 text-blue-600" />
              <span className="font-semibold">استلم نتائجك بشكل أسرع — إجراءاتك تتم بدون تأخير.</span>
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <section className="py-8 px-4 bg-blue-900 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
          <p className="mb-2">WhatsApp: <a href="https://wa.me/123456789" className="underline">123456789</a></p>
          <p className="mb-2">Email: <a href="mailto:vip@najah.com" className="underline">vip@najah.com</a></p>
          <p className="mt-4 text-blue-200">هذه الصفحة مخصصة للطلاب الجادين فقط.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
