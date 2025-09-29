// src/pages/Poetry.jsx
import { useState } from "react";
import { Copy, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Poetry() {
  const [activeLang, setActiveLang] = useState("urdu");

  const languages = [
    "urdu",
    "english",
    "pashto",
    "arabic",
    "farsi",
    "turkish",
    "sindhi",
    "punjabi",
  ];

  const poems = [
    {
      id: 1,
      title: "لب پہ آتی ہے دعا",
      poet: "علامہ اقبال",
      lang: "urdu",
      lines: [
        "لب پہ آتی ہے دعا بن کے تمنا میری",
        "زندگی شمع کی صورت ہو خدایا میری",
      ],
    },
    {
      id: 2,
      title: "خودی کا سر نہاں",
      poet: "علامہ اقبال",
      lang: "urdu",
      lines: [
        "خودی کا سر نہاں لا الہ الا اللہ",
        "خودی ہے تیغ، فساں لا الہ الا اللہ",
      ],
    },
    {
      id: 3,
      title: "اے خدا",
      poet: "احمد فراز",
      lang: "urdu",
      lines: [
        "اے خدا دل ہے پریشاں تیری دنیا میں",
        "کر دے آسان یہ مشکل میری دنیا میں",
      ],
    },
    {
      id: 4,
      title: "نعت شریف",
      poet: "نامعلوم",
      lang: "urdu",
      lines: [
        "وہ سوئے لالہ زار پھرتے ہیں",
        "تیرے دن اے بہار پھرتے ہیں",
      ],
    },
  ];

  const filtered = poems.filter((p) => p.lang === activeLang);

  return (
    <div className="bg-gradient-to-t from-yellow-50 via-white to-blue-50 min-h-screen py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-800 relative inline-block">
          اشعار (تحریری)
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></span>
        </h3>
      </div>

      {/* Language Tabs */}
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setActiveLang(lang)}
            className={`px-5 py-2 rounded-full transition font-medium ${activeLang === lang
                ? "bg-green-700 text-white shadow"
                : "bg-white text-green-700 border border-green-700 hover:bg-green-50"
              }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Poetry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((poem, idx) => (
          <motion.div
            key={poem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition border border-green-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 flex justify-between items-center">
              <h3 className="font-bold">{poem.title}</h3>
              <span className="bg-white text-green-700 px-2 py-1 text-xs rounded-full font-medium">
                {poem.lang.toUpperCase()}
              </span>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-gray-500 mb-2">شاعر: {poem.poet}</p>
              {poem.lines.map((line, i) => (
                <p key={i} className="text-lg leading-relaxed text-gray-800">
                  {line}
                </p>
              ))}
            </div>
            <div className="px-4 py-3 flex justify-end gap-2 border-t">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Copy size={18} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Share2 size={18} className="text-gray-600" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}