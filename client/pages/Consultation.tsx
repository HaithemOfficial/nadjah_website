  import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2, Calendar, Clock, User, BookOpen } from "lucide-react";

export default function Consultation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    consultationType: "professional",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted:", formData);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <section className="py-32 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <div className="container mx-auto max-w-2xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="h-16 w-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                تم تقديم طلبك! ✅
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                شكراً لك على حجزك استشارة مجانية معنا. لقد استقبلنا معلوماتك وسيتصل بك فريقنا في غضون 24 ساعة لتأكيد موعدك.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
                <h3 className="font-semibold text-blue-900 mb-4">
                  ما الخطوة التالية؟
                </h3>
                <ul className="space-y-3 text-right">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 order-2 mr-3" />
                    <span className="text-blue-900 order-1">
                      سيصلك بريد تأكيد في صندوق بريدك الإلكتروني
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 order-2 mr-3" />
                    <span className="text-blue-900 order-1">
                      فريقنا سيتصل بك هاتفياً لتحديد موعد الاستشارة المناسب
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 order-2 mr-3" />
                    <span className="text-blue-900 order-1">
                      جهز أي أسئلة عن التخصص الذي تريده والدول المفضلة لديك
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mb-8">
                <h3 className="font-semibold text-purple-900 mb-4">
                  ماذا سيحدث خلال الاستشارة؟
                </h3>
                <div className="space-y-3 text-right text-sm">
                  <p className="text-purple-900">
                    <span className="font-semibold">1. التعريف والألفة:</span> نتعرف عليك وتخبرنا عن خلفيتك الأكاديمية
                  </p>
                  <p className="text-purple-900">
                    <span className="font-semibold">2. استكشاف احتياجاتك:</span> نسأل عن ميزانيتك والتخصص المفضل والدول التي تهتم بها
                  </p>
                  <p className="text-purple-900">
                    <span className="font-semibold">3. رشح مخصصة:</span> نعطيك توصيات محددة تناسب وضعك المالي والأكاديمي
                  </p>
                  <p className="text-purple-900">
                    <span className="font-semibold">4. الخطوات العملية:</span> نناقش ما يجب أن تفعله بعد الاستشارة لتحقيق أهدافك
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">
                    متوسط الرد
                  </p>
                  <p className="text-sm text-gray-600">خلال 24 ساعة</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">
                    مدة الاستشارة
                  </p>
                  <p className="text-sm text-gray-600">30-60 دقيقة</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <User className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">
                    خبراء متخصصون
                  </p>
                  <p className="text-sm text-gray-600">في الدراسة بالخارج</p>
                </div>
              </div>

              <Link to="/" className="inline-block mr-4">
                <Button variant="default">
                  العودة للرئيسية
                </Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Form Section */}
              <div className="md:col-span-2 order-2 md:order-1">
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                    احجز استشارتك المجانية
                  </h1>
                  <p className="text-xl text-gray-600">
                    أخبرنا عن وضعك الأكاديمي وأهدافك، وسنساعدك على اختيار الوجهة الأنسب لك.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg border border-gray-200">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                      placeholder="محمد أحمد"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      عنوان البريد ��لإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                      placeholder="+966 50 123 4567"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      اسم الشركة *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                      placeholder="شركتك"
                    />
                  </div>

                  {/* Business Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      نوع العمل *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                    >
                      <option value="">اختر نوع العمل</option>
                      <option value="startup">شركة ناشئة</option>
                      <option value="smb">شركة صغيرة/متوسطة</option>
                      <option value="enterprise">شركة كبرى</option>
                      <option value="nonprofit">منظمة غير ربحية</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>

                  {/* Consultation Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      حزمة الاستشارة *
                    </label>
                    <div className="space-y-3">
                      {[
                        {
                          value: "starter",
                          label: "مبتدأ",
                          desc: "استشارة 30 دقيقة",
                        },
                        {
                          value: "professional",
                          label: "احترافي",
                          desc: "استشارة ساعة كاملة",
                        },
                        {
                          value: "enterprise",
                          label: "شامل",
                          desc: "استشارة 90 دقيقة + متابعة",
                        },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 transition text-right">
                          <div className="ml-3 order-2">
                            <p className="font-semibold text-gray-900">
                              {option.label}
                            </p>
                            <p className="text-sm text-gray-600">{option.desc}</p>
                          </div>
                          <input
                            type="radio"
                            name="consultationType"
                            value={option.value}
                            checked={formData.consultationType === option.value}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 order-1"
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      أخبرنا عن أهدافك الأكاديمية
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-right"
                      placeholder="ما التخصص الذي تريده؟ ما الدول التي تفكر فيها؟ ما ميزانيتك؟"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                  >
                    طلب الاستشارة المجانية
                  </Button>
                </form>
              </div>

              {/* Info Section */}
              <div className="md:col-span-1 order-1 md:order-2">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 sticky top-24">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    عن الاستشارة
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2 justify-end">
                        <p className="font-semibold text-gray-900">مجانية تماماً</p>
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-600 text-right">
                        بدون أي تكاليف مخفية أو التزامات
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2 justify-end">
                        <p className="font-semibold text-gray-900">خبرا�� متخصصون</p>
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-600 text-right">
                        استشاريون خبراء في الدراسة بالخارج
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2 justify-end">
                        <p className="font-semibold text-gray-900">رد سريع</p>
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-600 text-right">
                        سنتصل بك خلال 24 ساعة
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2 justify-end">
                        <p className="font-semibold text-gray-900">معلومات حقيقية</p>
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-600 text-right">
                        معلومات محدثة عن التكاليف والفرص
                      </p>
                    </div>

                    <div className="pt-6 border-t border-blue-200">
                      <p className="text-xs text-gray-600 leading-relaxed text-right">
                        بملء هذا النموذج، تأكد أنك توافق على سياستنا بشأن الخصوصية. سنتصل بك حصراً لترت��ب الاستشارة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
