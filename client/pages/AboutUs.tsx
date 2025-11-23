import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Globe2, Heart, Clock, UserCheck, Building2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "التزامنا",
      description: "نضع مصلحة الطالب أولاً ونقدم النصح الأمين والتوجيه الصادق"
    },
    {
      icon: UserCheck,
      title: "خبرتنا",
      description: "أكثر من 7 سنوات في مساعدة الطلاب للدراسة في أوروبا بنجاح"
    },
    {
      icon: Globe2,
      title: "تواجدنا",
      description: "شبكة واسعة من الشركاء في 7+ دول أوروبية لضمان دعم محلي للطلاب"
    },
    {
      icon: Building2,
      title: "شراكاتنا",
      description: "شراكات مع أفضل الجامعات المعتمدة عالمياً لضمان جودة التعليم"
    },
    {
      icon: Clock,
      title: "دعمنا",
      description: "خدمة عملاء على مدار الساعة لمساعدة طلابنا في أي وقت"
    },
    {
      icon: GraduationCap,
      title: "نجاحنا",
      description: "معدل نجاح 85% في قبول وتسجيل الطلاب في الجامعات المستهدفة"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "تأسيس الشركة",
      description: "بدأنا رحلتنا في مساعدة الطلاب العرب للدراسة في أوروبا"
    },
    {
      year: "2019",
      title: "توسيع الشراكات",
      description: "وقعنا شراكات مع أولى الجامعات في ليتوانيا وجمهورية التشيك"
    },
    {
      year: "2020",
      title: "التحول الرقمي",
      description: "أطلقنا منصتنا الرقمية للاستشارات عن بعد خلال جائحة كورونا"
    },
    {
      year: "2021",
      title: "توسع جغرافي",
      description: "وسعنا خدماتنا لتشمل 7 دول أوروبية مع فريق محلي في كل دولة"
    },
    {
      year: "2022",
      title: "500+ طالب",
      description: "تجاوز عدد الطلاب الذين ساعدناهم 500 طالب من مختلف الدول العربية"
    },
    {
      year: "2023",
      title: "جوائز التميز",
      description: "حصلنا على جوائز في مجال خدمات التعليم الدولي وإرضاء العملاء"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                نحن نؤمن بأن
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  التعليم يغير الحياة
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                منذ 2018، ونحن نساعد الطلاب العرب في تحقيق أحلامهم بالدراسة في أفضل الجامعات الأوروبية. نؤمن بأن كل طالب يستحق فرصة للتعليم العالي الجيد بتكلفة معقولة.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">قيمنا وما نؤمن به</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div key={i} className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">مسيرتنا</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-24 flex-shrink-0">
                      <div className="text-lg font-bold text-blue-600 bg-blue-50 py-1 px-3 rounded-full text-center">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Videos */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">فيديوهات الثقة</h2>
              <p className="text-xl text-gray-600">مقاطع قصيرة تعكس ثقة شركائنا وطلابنا في خدماتنا</p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Carousel opts={{ loop: true }}>
                <CarouselContent className="flex-row flex-nowrap">
                  {[
                    { src: "/videos/trust/trust1.mp4", label: "ثقة 1" },
                    { src: "/videos/trust/trust2.mp4", label: "ثقة 2" },
                    { src: "/videos/trust/trust3.mp4", label: "ثقة 3" },
                    { src: "/videos/trust/trust4.mp4", label: "ثقة 4" },
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

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">فريقنا</h2>
              <p className="text-xl text-gray-600">
                نحن فريق من المستشارين المتخصصين في التعليم الدولي، نجمع بين الخبرة الأكاديمية والمعرفة العميقة بمتطلبات الطلاب العرب
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sample team members - replace with actual team members */}
              {[1, 2, 3].map((member) => (
                <div key={member} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">مستشار تعليمي</h3>
                  <p className="text-gray-600 mt-2">متخصص في التوجيه الأكاديمي والقبول الجامعي</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">نحن هنا لمساعدتك</h2>
              <p className="text-xl mb-8 opacity-90">
                هل لديك أسئلة؟ تواصل معنا الآن واحصل على استشارة مجانية مع أحد مستشارينا
              </p>
              <div className="space-x-4 rtl:space-x-reverse">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  تواصل عبر الواتساب
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;