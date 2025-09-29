// src/pages/DarseNizami.jsx
import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DarseNizami() {
  const [openYear, setOpenYear] = useState(null);

  const years = [
    {
      id: 1,
      title: "سال اول (اوّل)",
      subjects: [
        {
          name: "میزان الصرف",
          detail:
            "عربی صرف کی بنیادی کتاب جس سے الفاظ کی بناوٹ اور تبدیلی کے اصول سیکھائے جاتے ہیں۔",
        },
        {
          name: "علم الصرف",
          detail: "مزید گہرائی کے ساتھ صیغوں اور ابواب کا مطالعہ۔",
        },
        {
          name: "نحو میر / ہدایۃ النحو",
          detail: "عربی قواعد و جملوں کی تشکیل کے بنیادی اصول۔",
        },
        {
          name: "املا و خط",
          detail: "درست املا اور خوشخطی کی مشق۔",
        },
        {
          name: "تجوید",
          detail: "قرآن کریم کی صحیح تلفظ کے ساتھ تلاوت کے اصول۔",
        },
      ],
    },
    {
      id: 2,
      title: "سال دوم (دوم)",
      subjects: [
        {
          name: "نور الایضاح",
          detail: "فقہ حنفی کی ابتدائی کتاب، عبادات کے مسائل پر مشتمل۔",
        },
        {
          name: "سلم العلوم",
          detail:
            "منطق کی بنیادی کتاب جو استدلال اور دلیل کے اصول سکھاتی ہے۔",
        },
        {
          name: "بلاغت",
          detail: "زبان و بیان کی خوبیوں کا مطالعہ۔",
        },
      ],
    },
    {
      id: 3,
      title: "سال سوم (سوم)",
      subjects: [
        {
          name: "اصول فقہ",
          detail: "فقہی مسائل کے استنباط کے بنیادی اصول۔",
        },
        {
          name: "فقہ حنفی",
          detail: "فقہ حنفی کی متوسط کتب کا مطالعہ۔",
        },
        {
          name: "تفسیر آسان",
          detail: "قرآن کریم کی منتخب آیات کی سادہ تشریح۔",
        },
      ],
    },
    {
      id: 4,
      title: "سال چہارم (رابع)",
      subjects: [
        {
          name: "احادیث منتخبہ",
          detail: "منتخب احادیث کا مطالعہ مع شرح۔",
        },
        {
          name: "کنز الدقائق",
          detail: "فقہ حنفی کی معتبر کتاب، معاملات اور عبادات پر مبنی۔",
        },
        {
          name: "بلاغۃ",
          detail: "عربی ادب میں فصاحت و بلاغت کے اصول۔",
        },
      ],
    },
    {
      id: 5,
      title: "سال پنجم (خامسہ)",
      subjects: [
        {
          name: "تفسیر جلالین",
          detail:
            "امام جلال الدین محلی اور امام جلال الدین سیوطی کی مشہور مختصر تفسیر۔",
        },
        {
          name: "فقہ: ہدایہ",
          detail:
            "فقہ حنفی کی مشہور و معتبر کتاب، عبادات اور معاملات کے ابواب۔",
        },
        {
          name: "اصول الحدیث",
          detail:
            "حدیث کی سند و متن کی تحقیق اور روایت کے اصول۔",
        },
      ],
    },
    {
      id: 6,
      title: "سال ششم (سادسہ)",
      subjects: [
        {
          name: "صحیح بخاری (جزء اول)",
          detail: "بخاری شریف کی ابتدائی جلد کا مطالعہ۔",
        },
        {
          name: "صحیح مسلم",
          detail: "صحیح مسلم کی منتخب احادیث مع شرح۔",
        },
        {
          name: "فقہ: ہدایہ",
          detail: "فقہ کے مزید ابواب اور ان کی شرح۔",
        },
      ],
    },
    {
      id: 7,
      title: "سال ہفتم (موقوف علیہ)",
      subjects: [
        {
          name: "سنن ترمذی",
          detail: "امام ترمذی کی حدیث کی کتاب، فقہی ابواب کے ساتھ۔",
        },
        {
          name: "سنن ابی داؤد",
          detail: "فقہی ابواب پر مشتمل احادیث۔",
        },
        {
          name: "فقہ معاصر",
          detail: "عصر حاضر کے فقہی مسائل اور ان کا حل۔",
        },
      ],
    },
    {
      id: 8,
      title: "سال ہشتم (دورہ حدیث)",
      subjects: [
        {
          name: "صحیح بخاری",
          detail: "امام بخاری کی مکمل کتاب مع تفصیلی شرح۔",
        },
        {
          name: "صحیح مسلم",
          detail: "امام مسلم کی مکمل کتاب مع شرح۔",
        },
        {
          name: "سنن نسائی",
          detail: "امام نسائی کی حدیث کی کتاب۔",
        },
        {
          name: "سنن ابن ماجہ",
          detail: "امام ابن ماجہ کی حدیث کی کتاب۔",
        },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-t from-yellow-50 via-white to-blue-50 py-16 px-6">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          درس نظامی
        </h2>
        <div className="mt-3 w-24 h-1 bg-green-600 rounded mx-auto"></div>
      </div>

      {/* Year Blocks */}
      <div className="max-w-3xl mx-auto space-y-4 py-8 bg-gradient-to-t from-yellow-50 via-white to-blue-50 px-6">
        {years.map((year) => (
          <div
            key={year.id}
            className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition hover:shadow-lg"
          >
            {/* Year Header */}
            <button
              onClick={() =>
                setOpenYear(openYear === year.id ? null : year.id)
              }
              className="w-full flex justify-between items-center px-6 py-4 text-right"
            >
              <span className="text-lg font-bold text-green-700 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-yellow-500" />
                {year.title}
              </span>
              {openYear === year.id ? (
                <ChevronUp className="w-5 h-5 text-green-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-green-600" />
              )}
            </button>

            {/* Subjects */}
            <AnimatePresence>
              {openYear === year.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 space-y-4"
                >
                  {year.subjects.map((subj, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-gray-100 shadow-sm bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <h3 className="font-semibold text-green-800">
                        {subj.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">
                        {subj.detail}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}