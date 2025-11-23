// This is an example of how to use the template with all available sections.
// Copy this structure and modify the content for your destination.

import DestinationTemplate from "./_Template";

export default function ExampleDestination() {
  const destinationData = {
    code: "XX", // Country code (e.g., "DE" for Germany)
    name: "اسم الوجهة", // Destination name in Arabic
    
    // Main advantages - List most important benefits
    why: [
      "ميزة رئيسية ١",
      "ميزة رئيسية ٢",
      "ميزة رئيسية ٣",
      "ميزة رئيسية ٤",
    ],

    // Potential challenges or considerations
    whyNot: [
      "تحدي أو اعتبار ١",
      "تحدي أو اعتبار ٢",
      "تحدي أو اعتبار ٣",
    ],

    // Basic requirements for studying
    requirements: [
      "متطلب ١",
      "متطلب ٢",
      "متطلب ٣",
      "متطلب ٤",
    ],

    // Detailed country information
    generalInfo: {
      overview: "نبذة عامة عن البلد وأهم ما يميزها كوجهة دراسية...",
      climate: "وصف المناخ والطقس على مدار السنة...",
      culture: "معلومات عن ثقافة البلد وعاداتها...",
      studentLife: "تفاصيل عن الحياة الطلابية والأنشطة المتاحة...",
      visaInfo: "معلومات عن تأشيرة الدراسة ومتطلباتها..."
    },

    // Detailed breakdown of costs
    budgetDetails: {
      tuitionRange: "نطاق الرسوم الدراسية في الجامعات المختلفة...",
      livingCosts: "متوسط تكاليف المعيشة الشهرية...",
      housing: "تكاليف السكن الطلابي والخاص...",
      transport: "تكاليف المواصلات...",
      otherCosts: "تكاليف إضافية مثل التأمين الصحي..."
    },

    // Services we offer for this destination (example shape)
    services: [
      {
        name: "الباقة الأساسية",
        description: "استشارة مبدئية وتجهيز ملف القبول",
        price: "199 يورو",
        features: [
          { name: "استشارة اختيار الجامعة", included: true },
          { name: "تجهيز ملف القبول", included: true },
          { name: "دعم السكن", included: false },
          { name: "إجراءات التأشيرة", included: false },
        ],
      },
      {
        name: "الباقة الشاملة",
        description: "من الاستشارة حتى الوصول",
        price: "499 يورو",
        features: [
          { name: "استشارة اختيار الجامعة", included: true },
          { name: "تجهيز ملف القبول", included: true },
          { name: "دعم السكن", included: true },
          { name: "إجراءات التأشيرة", included: true },
        ],
        recommended: true,
      },
    ],

    // Popular study programs (example shape)
    popularPrograms: [
      {
        name: "برنامج ١",
        type: "bachelor" as const,
        duration: "3 سنوات",
        fees: "1000-3000 يورو/سنة",
        language: "الإنجليزية",
      },
      {
        name: "برنامج ٢",
        type: "master" as const,
        duration: "2 سنتين",
        fees: "2000-5000 يورو/سنة",
        language: "الفرنسية",
      },
      {
        name: "برنامج ٣",
        type: "phd" as const,
        duration: "3-4 سنوات",
        fees: "منح/ممولة جزئياً",
        language: "حسب الجامعة",
      },
    ],

    // Optional FAQ example
    faq: [
      { question: "متى أبدأ التحضير؟", answer: "كلما كان أبكر كان أفضل، عادة قبل 6-12 شهراً." },
      { question: "هل أحتاج امتحان لغة؟", answer: "حسب البرنامج؛ كثير من البرامج تطلب IELTS/TOEFL." },
    ],
  };

  return <DestinationTemplate {...destinationData} />;
}