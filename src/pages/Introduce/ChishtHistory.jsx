// // src/pages/ChishtHistory.jsx
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// export default function ChishtHistory() {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

//   const history = [
//     {
//       name: "خواجہ معین الدین چشتی اجمیری",
//       years: "1142–1236 AD",
//       desc: "خواجہ معین الدین چشتی اجمیری رحمۃ اللہ علیہ برصغیر پاک و ہند میں چشتی سلسلہ کے بانی ہیں۔ آپ نے محبت، اخوت اور رواداری کی تعلیمات کو عام کیا۔",
//     },
//     {
//       name: "خواجہ قطب الدین بختیار کاکی",
//       years: "1173–1235 AD",
//       desc: "خواجہ قطب الدین بختیار کاکی رحمۃ اللہ علیہ، خواجہ معین الدین چشتی کے خلیفہ اول اور سلسلہ چشتیہ کے اہم مبلغ تھے۔",
//     },
//     {
//       name: "بابا فرید الدین گنج شکر",
//       years: "1179–1266 AD",
//       desc: "بابا فرید الدین گنج شکر رحمۃ اللہ علیہ ایک عظیم صوفی بزرگ اور شاعر تھے جن کا تعلق پاکپتن، پنجاب سے تھا۔",
//     },
//     {
//       name: "خواجہ نظام الدین اولیاء",
//       years: "1238–1325 AD",
//       desc: "خواجہ نظام الدین اولیاء رحمۃ اللہ علیہ سلسلہ چشتیہ کے سب سے مشہور بزرگ تھے، جنہیں 'محبوبِ الٰہی' کے لقب سے یاد کیا جاتا ہے۔",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-12">
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           تاریخ مشائخ چشت
//         </h2>
//         {/* <div className="flex justify-center gap-4">
//           <button className="px-4 py-1 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
//             تاریخی ویو
//           </button>
//           <button className="px-4 py-1 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300 transition">
//             کارڈ ویو
//           </button>
//         </div> */}
//       </div>

//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute left-1/2 top-0 h-full border-l-4 border-green-600 transform -translate-x-1/2"></div>

//         <div ref={ref} className="space-y-16">
//           {history.map((item, idx) => (
//             <motion.div
//               key={idx}
//               className={`relative flex flex-col md:flex-row items-center ${
//                 idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: idx * 0.2 }}
//             >
//               {/* Connector Dot */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-green-600 rounded-full z-10"></div>

//               {/* Card */}
//               <div
//                 className={`bg-white shadow-md rounded-xl p-6 md:w-5/12 ${
//                   idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
//                 }`}
//               >
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   {item.name}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-3">{item.years}</p>
//                 <p className="text-gray-700 leading-relaxed">{item.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

















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
    <div className="bg-gradient-to-t from-emerald-50 via-white to-yellow-50 min-h-screen py-16 px-4 sm:px-6 lg:px-12">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-800 mb-6">
          تاریخ مشائخِ چشت
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-slate-900 relative inline-block">
          روحانی وراثت اور تسلسل
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"></span>
        </h3>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full border-l-4 border-emerald-400/70 transform -translate-x-1/2"></div>

        <div ref={ref} className="space-y-16">
          {history.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.25 }}
            >
              {/* Connector Dot */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full z-10 shadow-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className={`bg-white/80 backdrop-blur-md shadow-lg border border-emerald-100 rounded-2xl p-6 md:w-5/12 ${
                  idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-emerald-600 mb-3 font-medium">
                  {item.years}
                </p>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
