import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Globe2, CircleDollarSign, School, LucideIcon, ArrowRight, CheckCircle2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function Index() {
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

  const features = [
    {
      icon: GraduationCap,
      title: "جودة تعليمية عالية",
      description: "جامعات معترف بها عالمياً في قلب أوروبا"
    },
    {
      icon: CircleDollarSign,
      title: "تكاليف معقولة",
      description: "برامج دراسية تناسب مختلف الميزانيات ابتداءً من 50 مليون دج سنوياً"
    },
    {
      icon: Globe2,
      title: "فرص دولية",
      description: "إمكانية العمل والتدريب في الاتحاد الأوروبي بعد التخرج"
    },
    {
      icon: School,
      title: "دعم شامل",
      description: "مرافقة من اختيار البرنامج حتى الوصول للجامعة"
    }
  ];

  const successMetrics = [
    { number: "500+", label: "طالب مسجل" },
    { number: "85%", label: "معدل النجاح" },
    { number: "7+", label: "دول أوروبية" },
    { number: "24/7", label: "دعم مستمر" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
          {/* Decorative background elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-purple-100 opacity-20 blur-3xl"></div>
            <div className="absolute -right-40 top-40 h-80 w-80 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                حقق حلم
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  الدراسة في أوروبا
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                نساعدك في اختيار الوجهة المثالية لميزانيتك وطموحاتك الأكاديمية، مع دعم كامل من التقديم حتى القبول
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link to="/quiz">
                  <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    ابدأ اختبار الوجهة المناسبة
                  </Button>
                </Link>
                <Link to="/consultation">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-lg">
                    احجز استشارة مجانية
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form moved down per request */}

        {/* Risk Reversal / Guarantee Strip */}
        <section className="py-6 bg-white border-y">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-800">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>استشارة مجانية 100%</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-800">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>بدون التزام بالشراء</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-800">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>ضمان دقة المعلومات</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Metrics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {successMetrics.map((metric, i) => (
                <div key={i} className="text-center">
                  <p className="text-4xl font-bold text-blue-600">{metric.number}</p>
                  <p className="text-gray-600 mt-2">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section (moved below trust videos) */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">آراء الطلاب بالفيديو</h2>
              <p className="text-xl text-gray-600">شاهد تجارب الطلاب الذين حققوا حلمهم بالدراسة في أوروبا معنا</p>
            </div>
            {/* 1 row carousel for 9 videos */}
            <div className="max-w-5xl mx-auto">
              <Carousel opts={{ loop: true }}>
                <CarouselContent className="flex-row flex-nowrap">
                  {[1,2,3,4,5,6,7,8,9].map((num) => (
                    <CarouselItem key={num} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-4 flex flex-col items-center">
                      <video controls width="320" height="180" className="rounded-md mb-2 shadow">
                        <source src={`/videos/testimonials/testimonial${num}.mp4`} type="video/mp4" />
                        متصفحك لا يدعم تشغيل الفيديو.
                      </video>
                      <p className="text-gray-700 text-sm font-medium">طالب رقم {num}</p>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Trust Videos Section will be placed after the features section */}

        {/* Main Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">لماذا تختار النجاح للدراسة؟</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Videos Section (moved after features) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">ثقة وشراكات</h2>
              <p className="text-xl text-gray-600">لقطات قصيرة تُظهر ثقة شركائنا وطلابنا في خدماتنا</p>
            </div>
            <div className="max-w-5xl mx-auto">
              <Carousel opts={{ loop: true }}>
                <CarouselContent className="flex-row flex-nowrap">
                  {[
                    { src: "/videos/trust/trust1.mp4", label: "شهادة موثوقية 1" },
                    { src: "/videos/trust/trust2.mp4", label: "شهادة موثوقية 2" },
                    { src: "/videos/trust/trust3.mp4", label: "شهادة موثوقية 3" },
                    { src: "/videos/trust/trust4.mp4", label: "شهادة موثوقية 4" },
                  ].map((vid, i) => (
                    <CarouselItem key={i} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-4 flex flex-col items-center">
                      <video controls width="320" height="180" className="rounded-md mb-2 shadow">
                        <source src={vid.src} type="video/mp4" />
                        متصفحك لا يدعم تشغيل الفيديو.
                      </video>
                      <p className="text-gray-700 text-sm font-medium">{vid.label}</p>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Popular Destinations Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">الوجهات الأكثر طلباً</h2>
              <p className="text-xl text-gray-600">اكتشف أفضل وجهات الدراسة في أوروبا مع مقارنة شاملة للتكاليف والمميزات</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  country: "جمهورية التشيك",
                  cost: "60-70",
                  feature: "أفضل قيمة للتكلفة"
                },
                {
                  country: "ليتوانيا",
                  cost: "85-95",
                  feature: "برامج متنوعة"
                },
                {
                  country: "بلجيكا",
                  cost: "90-120",
                  feature: "فرص عمل متميزة"
                }
              ].map((dest, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{dest.country}</h3>
                    <p className="text-gray-600 mb-4">تبدأ من {dest.cost} مليون دج سنوياً</p>
                    <p className="text-blue-600 font-medium">{dest.feature}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/popular-destinations" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                <span>اكتشف كل الوجهات وقارن بينها</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Lead Form Section (moved down per request) */}
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
                      <option value="diploma">دبلوم</option>
                      <option value="language">برنامج لغة</option>
                      <option value="unsure">لم أقرر بعد</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 font-semibold text-lg"
                  >
                    احجز استشارتك المجانية الآن
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    🔒 خصوصيتك محمية. بدون بريد مزعج.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    شكراً لتسجيلك! ✅
                  </h3>
                  <p className="text-gray-600 mb-6">
                    سيتصل بك فريقنا في غضون 24 ساعة
                  </p>
                  <Link to="/consultation">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      اختر وقت الاستشارة الآن
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>


        {/* Final CTA */}
        <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              هل أنت جاهز لبدء رحلتك؟
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احجز استشارة مجانية واكتشف الخيار الأفضل لميزانيتك وأهدافك الأكاديمية
            </p>
            <Link to="/consultation">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                احجز استشارتك الآن
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}