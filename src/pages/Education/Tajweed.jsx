// src/pages/Tajweed.jsx
import { BookOpen, GraduationCap, MicVocal } from "lucide-react";

export default function Tajweed() {
  const levels = [
    {
      id: 1,
      title: "سطح 1 (ابتدائی)",
      detail:
        "عربی حروف تہجی کے ان کے تلفظ کے مقامات (مخارج الحروف) سے صحیح تلفظ۔",
      icon: <MicVocal className="w-8 h-8 text-green-600" />,
    },
    {
      id: 2,
      title: "سطح 2 (درمیانی)",
      detail:
        "نون ساکن اور تنوین، میم ساکن، اور مد کے قواعد کا تفصیلی مطالعہ۔",
      icon: <BookOpen className="w-8 h-8 text-yellow-600" />,
    },
    {
      id: 3,
      title: "سطح 3 (اعلیٰ)",
      detail:
        "وقف کے قواعد، تفخیم اور ترقیق، اور تلاوت کے باریک نکات۔",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section className="bg-gradient-to-t from-yellow-50 via-white to-blue-50 py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          تجوید و قرات
        </h2>
        <div className="mt-3 w-24 h-1 bg-green-600 rounded mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          ہمارے تجوید و قرات کے کورسز طلباء کو قرآن پاک کی صحیح تلاوت کے اصول
          سکھاتے ہیں۔
        </p>
      </div>

      {/* Levels */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {levels.map((level) => (
          <div
            key={level.id}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 text-center transition hover:shadow-lg hover:-translate-y-1 duration-300"
          >
            <div className="flex justify-center mb-4">{level.icon}</div>
            <h3 className="text-xl font-bold text-green-700 mb-2">
              {level.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {level.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
