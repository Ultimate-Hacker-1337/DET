// src/pages/ChishtHistory.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ChishtHistory() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const history = [
    {
      name: "خواجہ معین الدین چشتی اجمیری",
      years: "1142–1236 AD",
      desc: "خواجہ معین الدین چشتی اجمیری رحمۃ اللہ علیہ برصغیر پاک و ہند میں چشتی سلسلہ کے بانی ہیں۔ آپ نے محبت، اخوت اور رواداری کی تعلیمات کو عام کیا۔",
    },
    {
      name: "خواجہ قطب الدین بختیار کاکی",
      years: "1173–1235 AD",
      desc: "خواجہ قطب الدین بختیار کاکی رحمۃ اللہ علیہ، خواجہ معین الدین چشتی کے خلیفہ اول اور سلسلہ چشتیہ کے اہم مبلغ تھے۔",
    },
    {
      name: "بابا فرید الدین گنج شکر",
      years: "1179–1266 AD",
      desc: "بابا فرید الدین گنج شکر رحمۃ اللہ علیہ ایک عظیم صوفی بزرگ اور شاعر تھے جن کا تعلق پاکپتن، پنجاب سے تھا۔",
    },
    {
      name: "خواجہ نظام الدین اولیاء",
      years: "1238–1325 AD",
      desc: "خواجہ نظام الدین اولیاء رحمۃ اللہ علیہ سلسلہ چشتیہ کے سب سے مشہور بزرگ تھے، جنہیں 'محبوبِ الٰہی' کے لقب سے یاد کیا جاتا ہے۔",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          تاریخ مشائخ چشت
        </h2>
        {/* <div className="flex justify-center gap-4">
          <button className="px-4 py-1 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
            تاریخی ویو
          </button>
          <button className="px-4 py-1 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300 transition">
            کارڈ ویو
          </button>
        </div> */}
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full border-l-4 border-green-600 transform -translate-x-1/2"></div>

        <div ref={ref} className="space-y-16">
          {history.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-green-600 rounded-full z-10"></div>

              {/* Card */}
              <div
                className={`bg-white shadow-md rounded-xl p-6 md:w-5/12 ${
                  idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{item.years}</p>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
