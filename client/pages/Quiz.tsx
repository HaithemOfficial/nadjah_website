import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const questions = [
  { id: "age", label: "العمر", type: "number", placeholder: "مثال: 22" },
  { id: "bac", label: "معدلات البكالوريا (BAC)", type: "number", placeholder: "مثال: 14.5" },
  { id: "budget", label: "ميزانيتك السنوية (بالدينار)", type: "number", placeholder: "مثال: 60000" },
  { id: "lastStudyYear", label: "آخر سنة دراسة (سنة)", type: "number", placeholder: "مثال: 2023" },
  { id: "program", label: "نوع البرنامج الذي تفضله", type: "select", options: ["بكالوريوس", "ماجستير", "دبلوم", "لغة"] },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any>({});

  const handleChange = (id: string, value: any) => {
    setAnswers((prev: any) => ({ ...prev, [id]: value }));
  };

  const next = () => setStep((s) => Math.min(s + 1, questions.length));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const computeSuggestion = () => {
    // Simple heuristic: if budget < 50000 -> suggest Czech; else Lithuania
    const budget = Number(answers.budget || 0);
    const bac = Number(answers.bac || 0);
    const age = Number(answers.age || 0);

    const suggestions: string[] = [];

    if (budget && budget < 50000) suggestions.push("جمهورية التشيك (توفير عالي)");
    else if (budget) suggestions.push("ليتوانيا (مزيد من الخيارات)");

    if (bac && bac >= 16) suggestions.push("برامج تنافسية ذات جودة أعلى");
    else if (bac && bac >= 12) suggestions.push("برامج مناسبة بمتطلبات متوسطة");
    else suggestions.push("برامج تدريبية / دبلومات قد تكون مناسبة");

    if (age && age <= 22) suggestions.push("فترة انتقالية للشهادة الجامعية (بكالوريوس)");

    return suggestions;
  };

  const isComplete = step === questions.length;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">اختبار اختيار الوجهة المناسبة</h1>

          <div className="bg-gray-50 rounded-lg p-6 border">
            <div className="mb-4 text-sm text-gray-600">الخطوة {Math.min(step + 1, questions.length)} من {questions.length}</div>

            {!isComplete ? (
              <div>
                {(() => {
                  const q = questions[step];
                  if (q.type === "select") {
                    return (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{q.label}</label>
                        <select
                          value={answers[q.id] ?? ""}
                          onChange={(e) => handleChange(q.id, e.target.value)}
                          className="w-full px-4 py-3 border rounded-lg"
                        >
                          <option value="">اختر</option>
                          {q.options!.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    );
                  }

                  return (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{q.label}</label>
                      <input
                        type={q.type}
                        value={answers[q.id] ?? ""}
                        onChange={(e) => handleChange(q.id, e.target.value)}
                        placeholder={q.placeholder}
                        className="w-full px-4 py-3 border rounded-lg"
                      />
                    </div>
                  );
                })()}

                <div className="flex items-center justify-between mt-6">
                  <div>
                    {step > 0 && (
                      <Button variant="outline" className="ml-2" onClick={prev}>السابق</Button>
                    )}
                  </div>

                  <div>
                    <Button onClick={next}>{step === questions.length - 1 ? 'انهي الاختبار' : 'التالي'}</Button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">النتائج المبدئية</h2>
                <ul className="list-disc pr-6 space-y-2">
                  {computeSuggestion().map((s, i) => (
                    <li key={i} className="text-gray-700">{s}</li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <Link to="/consultation"><Button>احجز استشارة مع خبير</Button></Link>
                  <Button variant="outline" onClick={() => setStep(0)}>أعد الاختبار</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
