import DestinationTemplate from "./_Template";

export default function Dubai() {

  const destinationData = {
    code: "dubai",
    name: "دبي",
    // 1. Persuasive Value Proposition (Why Dubai?)
    why: [
      "فرص عمل وتدريب في أكبر الشركات العالمية",
      "جامعات عالمية المستوى في بيئة عربية عصرية",
      "تنوع ثقافي وحياة عصرية",
      "موقع استراتيجي وسهولة السفر"
    ],
    // 2. Clear Requirements (What you need to get in)
    requirements: [
      "شهادة الثانوية العامة",
      "شهادة لغة إنجليزية (IELTS/TOEFL)",
      "كشف حساب بنكي يثبت القدرة المالية",
      "خطاب تحفيز وسيرة ذاتية"
    ],
    // 3. Objections/Why Not (Addressing Concerns)
    whyNot: [
      "تكاليف معيشة ودراسة مرتفعة",
      "منافسة قوية على الوظائف بعد التخرج",
      "الطقس الحار معظم السنة"
    ],
    // 4. Budget & Costs (Money talk up front)
    budgetDetails: {
      tuitionRange: "40000-80000 درهم سنوياً حسب الجامعة.",
      livingCosts: "3000-7000 درهم شهرياً حسب السكن.",
      housing: "سكن جامعي: 2500-4000 درهم شهرياً. شقة خاصة: 4000-8000 درهم شهرياً.",
      transport: "مواصلات عامة: 300-500 درهم شهرياً.",
      otherCosts: "تأمين صحي: 2000-4000 درهم سنوياً. مصاريف شخصية: 1000-2000 درهم شهرياً."
    },
    // 5. General Info (Context)
    generalInfo: {
      overview: "دبي تجمع بين التعليم العالمي والفرص المهنية في بيئة عربية حديثة، مع جامعات دولية وفرص تدريب في شركات كبرى.",
      climate: "مناخ صحراوي حار معظم السنة، شتاء معتدل وصيف شديد الحرارة.",
      culture: "مجتمع متعدد الجنسيات، انفتاح ثقافي، فعاليات عالمية.",
      studentLife: "حياة طلابية نشطة، فعاليات متنوعة، فرص تدريب وعمل.",
      visaInfo: "تأشيرة دراسية مع إمكانية العمل الجزئي أثناء الدراسة."
    },
    // 6. Service Packages (Offer)
    services: [
      {
        name: "الباقة الشاملة",
        description: "خدمة متكاملة من البداية حتى الوصول، تشمل كل الخدمات الأساسية وأكثر.",
        price: "2999 درهم",
        recommended: true,
        features: [
          { name: "استشارة اختيار الجامعة", included: true },
          { name: "تجهيز ملف القبول", included: true },
          { name: "دعم السكن", included: true },
          { name: "إجراءات التأشيرة", included: true },
          { name: "الدعم في دبي", included: true }
        ]
      },
      {
        name: "الباقة الأساسية",
        description: "استشارة واختيار الجامعة، تجهيز المستندات، ودعم التأشيرة.",
        price: "1499 درهم",
        features: [
          { name: "استشارة اختيار الجامعة", included: true },
          { name: "تجهيز ملف القبول", included: true },
          { name: "دعم السكن", included: false },
          { name: "إجراءات التأشيرة", included: true },
          { name: "الدعم في دبي", included: false }
        ]
      }
    ],
    // 7. Popular Programs (What to study)
    popularPrograms: [
      {
        name: "إدارة الأعمال الدولية",
        type: "bachelor" as const,
        duration: "4 سنوات",
        fees: "50000-80000 درهم سنوياً",
        language: "الإنجليزية"
      },
      {
        name: "الهندسة المعمارية",
        type: "bachelor" as const,
        duration: "5 سنوات",
        fees: "60000-90000 درهم سنوياً",
        language: "الإنجليزية"
      },
      {
        name: "علوم الحاسوب",
        type: "bachelor" as const,
        duration: "4 سنوات",
        fees: "45000-70000 درهم سنوياً",
        language: "الإنجليزية"
      }
    ],
    faq: [
      {
        question: "هل يكفي مستوى متوسط في الإنجليزية للدراسة؟",
        answer: "معظم البرامج تتطلب IELTS/TOEFL بمستوى محدد؛ بعض الجامعات توفر سنة تحضيرية للغة.",
      },
      {
        question: "هل أستطيع العمل أثناء الدراسة في دبي؟",
        answer: "توجد فرص تدريب وتعاون مع الشركات، ويعتمد العمل الجزئي على لوائح الجامعة والتأشيرة.",
      },
      {
        question: "ما مدة إجراءات القبول والتأشيرة؟",
        answer: "عادة 4–12 أسبوعاً للقبول، و2–6 أسابيع للتأشيرة، وقد تختلف حسب الفترة والملف.",
      },
    ]
  };

  return <DestinationTemplate {...destinationData} />;
}
