import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertCircle, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useState } from "react";

export default function PopularDestinations() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    programType: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log("Lead form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="py-12 container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
                الوجهات الأكثر طلباً <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  للدراسة في أوروبا
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                مقارنة شاملة بين أشهر وجهات الدراسة في أوروبا من حيث التكاليف والمميزات والمتطلبات
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Czech Section */}
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
              لماذا تختار جمهورية التشيك؟
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">💰 تكاليف معقولة</h3>
                <p className="text-gray-800 leading-relaxed">
                  أرخص بـ 30-40% من ليتوانيا. يمكنك دراسة ماجستير بـ 50-60 مليون دج سنوياً (رسوم + معيشة).
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">🎓 جودة عالية</h3>
                <p className="text-gray-800 leading-relaxed">
                  جامعات معترف بها عالمياً مثل جامعة تشارلز براغ. التشيك تتمتع بسمعة أكاديمية قوية.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-4">🌍 بيئة أوروبية حقيقية</h3>
                <p className="text-gray-800 leading-relaxed">
                  قلب أوروبا الوسطى، ثقافة غنية، وحياة طلابية نشطة. التشيك توفر تجربة أوروبية حقيقية.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border border-orange-200">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">🛂 متطلبات فيزا أسهل</h3>
                <p className="text-gray-800 leading-relaxed">
                  عملية الفيزا أبسط وأسرع من ليتوانيا. الحصول على إقامة طالب في التشيك أكثر كفاءة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
              جدول المقارنة: التشيك vs ليتوانيا
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-right">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="border border-gray-300 px-6 py-4 font-semibold">ليتوانيا</th>
                    <th className="border border-gray-300 px-6 py-4 font-semibold">جمهورية التشيك</th>
                    <th className="border border-gray-300 px-6 py-4 font-semibold">المعيار</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100 transition">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">
                      35–40 مليون دج
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold text-blue-600">
                      20–25 مليون دج
                    </td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">
                      الرسوم الدراسية (سنة)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">
                      35–45 مليون دج
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold text-blue-600">
                      25–30 مليون دج
                    </td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">
                      المعيشة (سنة)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">
                      10+ مليون دج
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700 font-semibold text-blue-600">
                      8–10 مليون دج
                    </td>
                    <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">
                      الفيزا والتأمين والمصاريف
                    </td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-6 py-4 font-bold text-gray-900">
                      85–95 مليون دج
                    </td>
                    <td className="border border-gray-300 px-6 py-4 font-bold text-blue-600 text-lg">
                      60–70 مليون دج
                    </td>
                    <td className="border border-gray-300 px-6 py-4 font-bold text-gray-900">
                      الإجمالي التقريبي (سنة)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">💡 ملاحظة مهمة:</h3>
              <p className="text-gray-800 leading-relaxed">
                ليتوانيا لا تزال خياراً جيداً للطلاب الذين لديهم ميزانية أكبر (90+ مليون دج سنوياً)، لكن إذا كان لديك ميزانية محدودة أقل من 85 ألف، فجمهورية التشيك تقدم قيمة أفضل جداً مع جودة تعليم عالية جداً.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                قصص نجاح طلابنا
              </h2>
              <p className="text-xl text-gray-600">
                استمع إلى طلاب غيّرت استشاراتنا حياتهم الأكاديمية
              </p>
            </div>

            <div className="relative">
              <Carousel className="" {...{ dir: 'ltr' }}>
                <CarouselContent className="md:gap-4 flex-nowrap">
                  {[
                    'https://www.instagram.com/reel/DQehUitiCGJ/',
                    'https://www.instagram.com/reel/DQRn3vkCGj5',
                    'https://www.instagram.com/reel/DKXCUMeIDcC/',
                    'https://www.instagram.com/reel/DM20tQtN6h0/',
                    'https://www.instagram.com/reel/DKpLvJro_gs/',
                    'https://www.instagram.com/reel/DMnZE8lICpb/',
                    'https://www.instagram.com/reel/DFN4iXyoDSC/',
                    'https://www.instagram.com/reel/DExUISBIP97/'
                  ].map((url, idx) => (
                    <CarouselItem key={idx} className="px-2 basis-full sm:basis-1/2 md:basis-1/3">
                      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
                        <div className="w-full" style={{ aspectRatio: '9 / 16' }}>
                          <a href={url} target="_blank" rel="noreferrer" className="block w-full h-full">
                            <img
                              src={`/videos/video-${idx + 1}.jpg`}
                              onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg'; }}
                              alt={`فيديو شهادة ${idx + 1}`}
                              className="w-full h-full object-cover rounded-t-md"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div className="p-4 text-right">
                          <a href={url} target="_blank" rel="noreferrer" className="text-blue-600 font-medium">مشاهدة الفيديو على إنستغرام</a>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              الأسئلة الشائعة
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "هل ليتوانيا غير متاحة تماماً؟",
                  a: "لا، لكن يجب أن تحسب التكاليف الحقيقية بعناية. إذا كان لديك ميزانية كافية (90+ مليون دج سنوياً)، فإن ليتوانيا خيار جيد. أما إذا كنت تبحث عن بديل أرخص وجودة عالية، فالتشيك هي الحل الأمثل.",
                },
                {
                  q: "كم تكلفة الدراسة في التشيك؟",
                  a: "تكاليف الدراسة في التشيك أقل بحوالي 30-40% مقارنة بليتوانيا. يمكنك دراسة برنامج ماجستير بـ 50-60 مليون دج سنوياً (رسوم + معيشة)، وهو توفير كبير جداً.",
                },
                {
                  q: "هل جودة التعليم في التشيك جيدة؟",
                  a: "نعم، بشدة. التشيك تضم جامعات معترف بها عالمياً مثل جامعة تشارلز براغ. كثير من الطلاب يفضلونها على ليتوانيا من حيث الجودة والبيئة الأكاديمية.",
                },
                {
                  q: "كيف تساعدونني في الاختيار؟",
                  a: "نحن نقيّم وضعك المالي والأكاديمي ونساعدك على اختيار الوجهة الأنسب لك. سنعطيك كل المعلومات الصحيحة عن التكاليف الحقيقية والمتطلبات والفرص في كل دولة.",
                },
                {
                  q: "ما هي المزايا الإضافية للدراسة في أوروبا؟",
                  a: "تحصل على شهادة معترف بها عالمياً، تجربة ثقافية غنية، حياة طلابية نشطة، وفرص عمل بعد التخرج. بالإضافة إلى ذلك، يمكنك السفر بسهولة داخل منطقة شنغن.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-right"
                >
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-start gap-2">
                    <span>{item.q}</span>
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 order-2" />
                  </h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Introduction Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  الحل: اختر الوجهة الصحيحة لميزانيتك
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  نحن في النجاح للدراسة بالخارج نفهم تحديات الطلاب العرب. لهذا السبب نساعدك على اختيار الوجهة التي توفر لك أفضل قيمة للمال، سواء كانت جمهورية التشيك أو ليتوانيا.
                </p>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
                  <p className="text-gray-700 font-semibold">طالب ساعدناهم</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200 text-center">
                  <p className="text-4xl font-bold text-purple-600 mb-2">85%</p>
                  <p className="text-gray-700 font-semibold">معدل النجاح</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200 text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">24/7</p>
                  <p className="text-gray-700 font-semibold">دعم وإرشاد</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-right bg-white p-4 rounded-lg border border-gray-200">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5 order-2" />
                  <span className="text-gray-700 order-1 text-lg">خريطة طريق مخصصة تناسب ميزانيتك</span>
                </div>
                <div className="flex items-start gap-3 text-right bg-white p-4 rounded-lg border border-gray-200">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5 order-2" />
                  <span className="text-gray-700 order-1 text-lg">تكاليف حقيقية وشفافة، بدون إخفاء</span>
                </div>
                <div className="flex items-start gap-3 text-right bg-white p-4 rounded-lg border border-gray-200">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5 order-2" />
                  <span className="text-gray-700 order-1 text-lg">إرشادة خبيرة من أول يوم</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-white rounded-lg p-8 md:p-10 border border-gray-200 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                ابدأ استشارتك المجانية الآن
              </h2>

              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 text-right">
                      اسمك الكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      placeholder="محمد أحمد"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 text-right">
                      بريدك الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 text-right">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      placeholder="+966 50 123 4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2 text-right">
                      نوع البرنامج الذي تريده *
                    </label>
                    <select
                      name="programType"
                      value={formData.programType}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                    >
                      <option value="">اختر البرنامج</option>
                      <option value="bachelors">درجة البكالوريوس</option>
                      <option value="masters">درجة الماجستير</option>
                      <option value="language">دورة لغة</option>
                      <option value="other">برنامج آخر</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all text-lg"
                  >
                    احجز استشارتك المجانية
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    تم استلام طلبك بنجاح!
                  </h3>
                  <p className="text-gray-600">
                    سنتواصل معك قريباً لتحديد موعد الاستشارة المجانية.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}