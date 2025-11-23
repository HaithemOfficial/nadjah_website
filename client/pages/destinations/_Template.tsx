import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Info, BookOpen, Calendar, PiggyBank, Check } from "lucide-react";

interface GeneralInfo {
  climate: string;
  culture: string;
  overview: string;
  studentLife: string;
  visaInfo: string;
}

interface BudgetDetails {
  tuitionRange: string;
  livingCosts: string;
  housing: string;
  transport: string;
  otherCosts: string;
}

interface ServiceFeature {
  name: string;
  included: boolean;
}

interface Service {
  name: string;
  price: string;
  description: string;
  features: ServiceFeature[];
  recommended?: boolean;
}

interface Program {
  name: string;
  duration: string;
  fees: string;
  type: 'bachelor' | 'master' | 'phd';
  language: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

type Props = {
  code: string;
  name: string;
  why: string[];
  whyNot: string[];
  requirements: string[];
  budget?: string; // For backward compatibility
  generalInfo?: GeneralInfo;
  budgetDetails?: BudgetDetails;
  services?: Service[];
  popularPrograms?: Program[];
  faq?: FAQItem[];
};

export default function DestinationTemplate({ 
  code, name, why, whyNot, requirements, budget, generalInfo, budgetDetails, services, popularPrograms, faq
}: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Quick Navigation Sidebar for long pages */}
            <nav className="hidden md:block w-56 shrink-0">
              <div className="sticky top-24 self-start">
                <ul className="space-y-3 text-sm">
                  <li><a href="#pros" className="hover:text-blue-600">لماذا {name}؟</a></li>
                  <li><a href="#requirements" className="hover:text-blue-600">المتطلبات</a></li>
                  <li><a href="#cons" className="hover:text-blue-600">الاعتراضات</a></li>
                  <li><a href="#budget" className="hover:text-blue-600">التكاليف</a></li>
                  <li><a href="#services" className="hover:text-blue-600">الباقات والخدمات</a></li>
                  <li><a href="#programs" className="hover:text-blue-600">البرامج الدراسية</a></li>
                  <li><a href="#timeline" className="hover:text-blue-600">المخطط الزمني</a></li>
                </ul>
              </div>
            </nav>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-6 text-center animate-fade-in">{name}</h1>
              <p className="text-lg text-gray-700 mb-6 text-center animate-fade-in">
                اكتشف لماذا {name} خيار ممتاز للطلاب الطموحين من الجزائر. في هذه الصفحة نقدم ملخصاً عملياً عن المزايا، التحديات، التكاليف، والمتطلبات الأساسية مع خطوات واضحة لحجز استشارة ومتابعة ملفك.
              </p>
              <div className="my-8 border-t border-dashed border-gray-300" />

              {/* الاعتراضات */}
              <section id="cons" className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Info className="h-5 w-5 text-slate-500" />
                  لماذا قد لا تختار {name}؟
                </h2>
                <ul className="space-y-3">
                  {whyNot && whyNot.map((w, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 text-red-400"><Info className="h-4 w-4" /></span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* البرامج الشائعة */}
              <section id="programs" className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-green-500" />
                  البرامج الشائعة
                </h2>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">الهندسة</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">إدارة الأعمال</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">علوم الحاسوب</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">اللغات</span>
                </div>
              </section>

              {/* المتطلبات الأساسية */}
              <section id="requirements" className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-indigo-500" />
                  المتطلبات الأساسية
                </h2>
                <ul className="space-y-3">
                  {requirements && requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 text-green-500"><Check className="h-4 w-4" /></span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* معلومات عامة */}
              {generalInfo && (
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <Info className="h-5 w-5 text-blue-500" />
                    معلومات عامة عن {name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">لمحة عامة</h3>
                        <p className="text-gray-700">{generalInfo.overview}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">المناخ</h3>
                        <p className="text-gray-700">{generalInfo.climate}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">الثقافة والمجتمع</h3>
                        <p className="text-gray-700">{generalInfo.culture}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">الحياة الطلابية</h3>
                        <p className="text-gray-700">{generalInfo.studentLife}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">معلومات التأشيرة</h3>
                        <p className="text-gray-700">{generalInfo.visaInfo}</p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* الميزانية والتكاليف */}
              {budget ? (
                <section id="budget" className="mb-8">
                  <h2 className="text-2xl font-semibold mb-3">الميزانية التقريبية</h2>
                  <p className="text-gray-700">{budget}</p>
                </section>
              ) : budgetDetails ? (
                <section id="budget" className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <PiggyBank className="h-5 w-5 text-amber-500" />
                    التكاليف المتوقعة
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg bg-gray-50">
                      <h3 className="font-semibold mb-2">الرسوم الدراسية</h3>
                      <p className="text-gray-700">{budgetDetails.tuitionRange}</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-50">
                      <h3 className="font-semibold mb-2">تكاليف المعيشة</h3>
                      <p className="text-gray-700">{budgetDetails.livingCosts}</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-50">
                      <h3 className="font-semibold mb-2">السكن</h3>
                      <p className="text-gray-700">{budgetDetails.housing}</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-50">
                      <h3 className="font-semibold mb-2">المواصلات</h3>
                      <p className="text-gray-700">{budgetDetails.transport}</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-50">
                      <h3 className="font-semibold mb-2">تكاليف أخرى</h3>
                      <p className="text-gray-700">{budgetDetails.otherCosts}</p>
                    </div>
                  </div>
                </section>
              ) : null}

              {/* الخدمات */}
              {services && (
                <section id="services" className="mb-10">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold mb-2 flex items-center gap-3 justify-center">
                      <Star className="h-5 w-5 text-purple-500" />
                      باقات خدماتنا
                    </h2>
                    <p className="text-gray-600">اختر الباقة المناسبة لاحتياجاتك</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {services.map((service, i) => (
                      <div 
                        key={i} 
                        className={`relative p-6 rounded-xl ${
                          service.recommended 
                            ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200' 
                            : 'bg-white border border-gray-200'
                        }`}
                      >
                        {service.recommended && (
                          <span className="absolute -top-3 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                            موصى به
                          </span>
                        )}
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                        </div>
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2">
                              {feature.included ? (
                                <Check className="h-5 w-5 text-green-500" />
                              ) : (
                                <span className="h-5 w-5 text-gray-300">-</span>
                              )}
                              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                                {feature.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <Link to="/consultation">
                          <button 
                            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                              service.recommended
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            احجز استشارة مجانية
                          </button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* البرامج الدراسية المتاحة */}
              {popularPrograms && (
                <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-green-500" />
                    البرامج الدراسية المتاحة
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {popularPrograms.map((program, i) => (
                      <div 
                        key={i} 
                        className="relative p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50 hover:shadow-md transition-all duration-300"
                      >
                        <div className="absolute top-3 left-3">
                          {program.type === 'bachelor' && (
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">بكالوريوس</span>
                          )}
                          {program.type === 'master' && (
                            <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">ماجستير</span>
                          )}
                          {program.type === 'phd' && (
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">دكتوراه</span>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg mb-3 ml-16">{program.name}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <PiggyBank className="h-4 w-4" />
                            <span>{program.fees}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <BookOpen className="h-4 w-4" />
                            <span>{program.language}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Link 
                      to="/consultation" 
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                      <span>اعرف المزيد عن البرامج وشروط القبول</span>
                      <span>→</span>
                    </Link>
                  </div>
                </section>
              )}

              {/* المخطط الزمني */}
              <section id="timeline" className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">مخطط زمني نموذجي (من التسجيل إلى السفر)</h2>
                <ol className="list-decimal pr-6 space-y-2 text-gray-700">
                  <li>تحضير الشهادات والتسجيل مع مستشارنا (1–4 أسابيع)</li>
                  <li>قبول جامعي أو تقديم مستندات إضافية (4–10 أسابيع)</li>
                  <li>إجراءات فيزا وتحضيرات السفر (2–8 أسابيع)</li>
                </ol>
              </section>

              {/* FAQ */}
              {faq && faq.length > 0 && (
                <section id="faq" className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <Info className="h-5 w-5 text-slate-500" />
                    الأسئلة المتكررة
                  </h2>
                  <div className="space-y-3">
                    {faq.map((f, i) => (
                      <details key={i} className="p-4 border rounded-lg">
                        <summary className="font-medium cursor-pointer">{f.question}</summary>
                        <div className="mt-2 text-gray-700">{f.answer}</div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link to="/consultation" className="inline-block">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md font-semibold">احجز استشارة مجانية</button>
                </Link>
                <Link to="/quiz" className="text-sm text-gray-600 underline">هل لا تعرف الوجهة المناسبة؟ جرب اختبار الوجهة</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
