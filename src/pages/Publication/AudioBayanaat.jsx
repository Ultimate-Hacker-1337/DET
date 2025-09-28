// import { useState, useRef } from "react";
// import { Play, Download, Save, Search, Pause, X } from "lucide-react";
// import { motion } from "framer-motion";

// export default function AudioBayanaat() {
//   const [activeLang, setActiveLang] = useState("urdu");
//   const [search, setSearch] = useState("");
//   const [sortBy, setSortBy] = useState("newest");
//   const [currentAudio, setCurrentAudio] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const audioRef = useRef(null);

//   const languages = [
//     "urdu",
//     "english",
//     "pashto",
//     "arabic",
//     "farsi",
//     "turkish",
//     "sindhi",
//     "punjabi",
//   ];

//   const bayanat = [
//     { id: 1, title: "اصلاحی مجالس - حصہ اول", scholar: "مفتی سید مختار الدین شاہ صاحب", date: "2025-09-28", duration: "30:15", lang: "urdu", url: "src/assets/audio2.mp3" },
//     { id: 2, title: "Islamic Lecture - Part 1", scholar: "Mufti Saeed Ahmad", date: "2025-09-27", duration: "22:40", lang: "english", url: "src/assets/audio2.mp3" },
//     { id: 3, title: "پښتو بیان - برخه لومړی", scholar: "مولانا احمد جان", date: "2025-09-26", duration: "18:30", lang: "pashto", url: "src/assets/audio2.mp3" },
//     { id: 4, title: "محاضرة بالعربية", scholar: "الشيخ محمد سعيد", date: "2025-09-25", duration: "40:10", lang: "arabic", url: "src/assets/audio2.mp3" },
//     { id: 5, title: "درس فارسی - بخش اول", scholar: "مولوی حسن رضا", date: "2025-09-24", duration: "28:50", lang: "farsi", url: "src/assets/audio2.mp3" },
//     { id: 6, title: "Türkçe Sohbet - Bölüm 1", scholar: "Hoca Mehmet", date: "2025-09-23", duration: "32:00", lang: "turkish", url: "src/assets/audio2.mp3" },
//     { id: 7, title: "سندی بیان - پهريون حصو", scholar: "مولانا عبدالحکیم", date: "2025-09-22", duration: "20:15", lang: "sindhi", url: "src/assets/audio2.mp3" },
//     { id: 8, title: "پنجابی خطاب - حصہ اول", scholar: "پیر غلام رسول", date: "2025-09-21", duration: "26:40", lang: "punjabi", url: "src/assets/audio2.mp3" },
//     { id: 9, title: "اصلاحی مجالس - حصہ دوم", scholar: "مولانا عبدالسلام", date: "2025-09-20", duration: "34:25", lang: "urdu", url: "src/assets/audio2.mp3" },
//     { id: 10, title: "Islamic Lecture - Part 2", scholar: "Shaykh Abdullah Khan", date: "2025-09-19", duration: "19:40", lang: "english", url: "/audio/bayan10.mp3" },
//     { id: 11, title: "پښتو بیان - برخه دویم", scholar: "مولانا سمیع اللہ", date: "2025-09-18", duration: "24:15", lang: "pashto", url: "/audio/bayan11.mp3" },
//     { id: 12, title: "محاضرة جديدة بالعربية", scholar: "الشيخ عبد الله", date: "2025-09-17", duration: "38:10", lang: "arabic", url: "/audio/bayan12.mp3" },
//     { id: 13, title: "درس فارسی - بخش دوم", scholar: "مولانا عبدالکریم", date: "2025-09-16", duration: "27:20", lang: "farsi", url: "/audio/bayan13.mp3" },
//     { id: 14, title: "Türkçe Sohbet - Bölüm 2", scholar: "Hoca Yusuf", date: "2025-09-15", duration: "33:00", lang: "turkish", url: "/audio/bayan14.mp3" },
//     { id: 15, title: "سندی بیان - ٻيو حصو", scholar: "مولوی محمد قاسم", date: "2025-09-14", duration: "22:30", lang: "sindhi", url: "/audio/bayan15.mp3" },
//     { id: 16, title: "پنجابی خطاب - حصہ دوم", scholar: "مولانا حبیب الرحمن", date: "2025-09-13", duration: "29:45", lang: "punjabi", url: "/audio/bayan16.mp3" },
//     { id: 17, title: "اصلاحی مجالس - حصہ سوم", scholar: "مولانا سراج الدین", date: "2025-09-12", duration: "35:00", lang: "urdu", url: "/audio/bayan17.mp3" },
//     { id: 18, title: "Islamic Lecture - Part 3", scholar: "Dr. Ahmed Latif", date: "2025-09-11", duration: "21:10", lang: "english", url: "/audio/bayan18.mp3" },
//     { id: 19, title: "پښتو بیان - برخه درېیم", scholar: "مولوی حامد", date: "2025-09-10", duration: "25:40", lang: "pashto", url: "/audio/bayan19.mp3" },
//     { id: 20, title: "محاضرة علمية", scholar: "الشيخ محمود", date: "2025-09-09", duration: "37:25", lang: "arabic", url: "/audio/bayan20.mp3" },
//     { id: 21, title: "درس فارسی - بخش سوم", scholar: "مولوی عبدالرشید", date: "2025-09-08", duration: "26:55", lang: "farsi", url: "/audio/bayan21.mp3" },
//     { id: 22, title: "Türkçe Sohbet - Bölüm 3", scholar: "Hoca Ali", date: "2025-09-07", duration: "31:20", lang: "turkish", url: "/audio/bayan22.mp3" },
//     { id: 23, title: "سندی بیان - ٽيون حصو", scholar: "مولانا عبدالغفور", date: "2025-09-06", duration: "23:10", lang: "sindhi", url: "/audio/bayan23.mp3" },
//     { id: 24, title: "پنجابی خطاب - حصہ سوم", scholar: "پیر نذیر احمد", date: "2025-09-05", duration: "28:15", lang: "punjabi", url: "/audio/bayan24.mp3" },
//     { id: 25, title: "اصلاحی مجالس - حصہ چہارم", scholar: "مولوی عبداللہ قریشی", date: "2025-09-04", duration: "36:40", lang: "urdu", url: "/audio/bayan25.mp3" },
//     { id: 26, title: "Islamic Lecture - Part 4", scholar: "Imam Bilal Hussain", date: "2025-09-03", duration: "20:35", lang: "english", url: "/audio/bayan26.mp3" },
//     { id: 27, title: "پښتو بیان - برخه څلورم", scholar: "مولانا عبدالبصیر", date: "2025-09-02", duration: "27:50", lang: "pashto", url: "/audio/bayan27.mp3" },
//     { id: 28, title: "محاضرة دينية", scholar: "الشيخ عبدالعزيز", date: "2025-09-01", duration: "39:05", lang: "arabic", url: "/audio/bayan28.mp3" },
//     { id: 29, title: "درس فارسی - بخش چهارم", scholar: "مولانا ناصر حسین", date: "2025-08-31", duration: "29:30", lang: "farsi", url: "/audio/bayan29.mp3" },
//     { id: 30, title: "Türkçe Sohbet - Bölüm 4", scholar: "Hoca Osman", date: "2025-08-30", duration: "34:00", lang: "turkish", url: "/audio/bayan30.mp3" },
//     { id: 31, title: "سندی بیان - چوٿون حصو", scholar: "مولانا عبدالله سومرو", date: "2025-08-29", duration: "21:45", lang: "sindhi", url: "/audio/bayan31.mp3" },
//     { id: 32, title: "پنجابی خطاب - حصہ چہارم", scholar: "مولانا فیض احمد", date: "2025-08-28", duration: "27:15", lang: "punjabi", url: "/audio/bayan32.mp3" },
//     { id: 33, title: "اصلاحی مجالس - حصہ پنجم", scholar: "مفتی عبدالکریم", date: "2025-08-27", duration: "33:25", lang: "urdu", url: "/audio/bayan33.mp3" },
//     { id: 34, title: "Islamic Lecture - Part 5", scholar: "Shaykh Salman Ali", date: "2025-08-26", duration: "22:00", lang: "english", url: "/audio/bayan34.mp3" },
//     { id: 35, title: "پښتو بیان - برخه پنځم", scholar: "مولوی فرید", date: "2025-08-25", duration: "24:50", lang: "pashto", url: "/audio/bayan35.mp3" },
//     { id: 36, title: "محاضرة تربوية", scholar: "الشيخ طارق", date: "2025-08-24", duration: "36:05", lang: "arabic", url: "/audio/bayan36.mp3" },
//     { id: 37, title: "درس فارسی - بخش پنجم", scholar: "مولانا یوسف علی", date: "2025-08-23", duration: "28:35", lang: "farsi", url: "/audio/bayan37.mp3" },
//     { id: 38, title: "Türkçe Sohbet - Bölüm 5", scholar: "Hoca İsmail", date: "2025-08-22", duration: "32:10", lang: "turkish", url: "/audio/bayan38.mp3" },
//     { id: 39, title: "سندی بیان - پنجون حصو", scholar: "مولوی محمد یعقوب", date: "2025-08-21", duration: "23:55", lang: "sindhi", url: "/audio/bayan39.mp3" },
//     { id: 40, title: "پنجابی خطاب - حصہ پنجم", scholar: "پیر ضیاء الحق", date: "2025-08-20", duration: "29:20", lang: "punjabi", url: "/audio/bayan40.mp3" },
//     { id: 41, title: "اصلاحی مجالس - حصہ ششم", scholar: "مولوی حنیف اللہ", date: "2025-08-19", duration: "31:45", lang: "urdu", url: "/audio/bayan41.mp3" },
//     { id: 42, title: "Islamic Lecture - Part 6", scholar: "Dr. Omar Siddiqi", date: "2025-08-18", duration: "20:55", lang: "english", url: "/audio/bayan42.mp3" },
//     { id: 43, title: "پښتو بیان - برخه شپږم", scholar: "مولانا محمد صادق", date: "2025-08-17", duration: "26:05", lang: "pashto", url: "/audio/bayan43.mp3" },
//     { id: 44, title: "محاضرة اسلامية", scholar: "الشيخ خالد", date: "2025-08-16", duration: "38:20", lang: "arabic", url: "/audio/bayan44.mp3" },
//     { id: 45, title: "درس فارسی - بخش ششم", scholar: "مولانا عبدالغنی", date: "2025-08-15", duration: "27:40", lang: "farsi", url: "/audio/bayan45.mp3" },
//     { id: 46, title: "Türkçe Sohbet - Bölüm 6", scholar: "Hoca Faruk", date: "2025-08-14", duration: "34:15", lang: "turkish", url: "/audio/bayan46.mp3" },
//     { id: 47, title: "سندی بیان - ڇهون حصو", scholar: "مولوی رشید احمد", date: "2025-08-13", duration: "22:05", lang: "sindhi", url: "/audio/bayan47.mp3" },
//     { id: 48, title: "پنجابی خطاب - حصہ ششم", scholar: "پیر انور شاہ", date: "2025-08-12", duration: "28:25", lang: "punjabi", url: "/audio/bayan48.mp3" },
//     { id: 49, title: "اصلاحی مجالس - حصہ هفتم", scholar: "مولانا اشرف علی", date: "2025-08-11", duration: "35:10", lang: "urdu", url: "/audio/bayan49.mp3" },
//     { id: 50, title: "Islamic Lecture - Part 7", scholar: "Shaykh Usman Qureshi", date: "2025-08-10", duration: "21:50", lang: "english", url: "/audio/bayan50.mp3" }
//   ];


//   const filtered = bayanat
//     .filter((b) => b.lang === activeLang)
//     .filter(
//       (b) =>
//         b.title.toLowerCase().includes(search.toLowerCase()) ||
//         b.scholar.toLowerCase().includes(search.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
//       if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
//       return 0;
//     });

//   const handlePlay = (bayan) => {
//     if (currentAudio?.id === bayan.id && isPlaying) {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       setCurrentAudio(bayan);
//       setTimeout(() => {
//         audioRef.current.play();
//         setIsPlaying(true);
//       }, 100);
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen py-10 px-3 sm:px-6 lg:px-12">
//       <div className="max-w-6xl mx-auto text-center mb-8">
//         <h3 className="text-2xl md:text-4xl font-bold text-green-700 relative inline-block mt-4">
//           آڈیو بیانات
//           <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"></span>
//         </h3>
//       </div>


//       {/* Language Tabs */}
//       <div className="flex justify-center flex-wrap gap-2 mb-6">
//         {languages.map((lang) => (
//           <button
//             key={lang}
//             onClick={() => setActiveLang(lang)}
//             className={`px-4 py-2 rounded-full text-sm md:text-base transition font-medium ${activeLang === lang
//                 ? "bg-green-700 text-white shadow"
//                 : "bg-white text-green-700 border border-green-700 hover:bg-green-50"
//               }`}
//           >
//             {lang.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       {/* Search + Sort */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-6">
//         <div className="relative w-full md:w-1/2">
//           <input
//             type="text"
//             placeholder="🔍 تلاش کریں (عنوان یا مقرر)"
//             className="w-full border rounded-lg py-2 px-4 pl-10 text-sm md:text-base shadow-sm focus:ring-green-600 focus:border-green-600"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//         </div>
//         <select
//           className="border rounded-lg py-2 px-3 text-sm md:text-base shadow-sm focus:ring-green-600 focus:border-green-600"
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//         >
//           <option value="newest">Newest First</option>
//           <option value="oldest">Oldest First</option>
//         </select>
//       </div>

//       {/* Table for desktop, cards for mobile */}
//       <div className="hidden md:block overflow-x-auto bg-white shadow rounded-xl">
//         <table className="w-full text-right border-collapse">
//           <thead className="bg-green-700 text-white text-sm md:text-base">
//             <tr>
//               <th className="p-3">نمبر</th>
//               <th className="p-3">عنوان</th>
//               <th className="p-3">مقرر</th>
//               <th className="p-3">تاریخ</th>
//               <th className="p-3">مدت</th>
//               <th className="p-3">سنیں</th>
//               <th className="p-3">محفوظ کریں</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.map((b, idx) => (
//               <motion.tr
//                 key={b.id}
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: idx * 0.05 }}
//                 className="border-b hover:bg-gray-50 text-sm md:text-base"
//               >
//                 <td className="p-3">{idx + 1}</td>
//                 <td className="p-3 font-medium break-words">{b.title}</td>
//                 <td className="p-3 text-gray-600">{b.scholar}</td>
//                 <td className="p-3 text-gray-500">
//                   {new Date(b.date).toLocaleDateString("en-US", {
//                     year: "numeric",
//                     month: "short",
//                     day: "numeric",
//                   })}
//                 </td>
//                 <td className="p-3">{b.duration}</td>
//                 <td className="p-3">
//                   <button
//                     onClick={() => handlePlay(b)}
//                     className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
//                   >
//                     {currentAudio?.id === b.id && isPlaying ? (
//                       <Pause size={16} />
//                     ) : (
//                       <Play size={16} />
//                     )}
//                   </button>
//                 </td>
//                 <td className="p-3 flex gap-2">
//                   <button className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition">
//                     <Save size={16} />
//                   </button>
//                   <button className="bg-gray-600 text-white p-2 rounded-md hover:bg-gray-700 transition">
//                     <Download size={16} />
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile Cards */}
//       <div className="md:hidden space-y-4">
//         {filtered.map((b, idx) => (
//           <motion.div
//             key={b.id}
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: idx * 0.05 }}
//             className="bg-white p-4 rounded-xl shadow border"
//           >
//             <h4 className="font-semibold text-base break-words">{b.title}</h4>
//             <p className="text-sm text-gray-600">{b.scholar}</p>
//             <p className="text-xs text-gray-500">
//               {new Date(b.date).toLocaleDateString("en-US")} • {b.duration}
//             </p>
//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={() => handlePlay(b)}
//                 className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-1"
//               >
//                 {currentAudio?.id === b.id && isPlaying ? (
//                   <>
//                     <Pause size={16} /> Pause
//                   </>
//                 ) : (
//                   <>
//                     <Play size={16} /> Play
//                   </>
//                 )}
//               </button>
//               <button className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition">
//                 <Save size={16} />
//               </button>
//               <button className="bg-gray-600 text-white p-2 rounded-md hover:bg-gray-700 transition">
//                 <Download size={16} />
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Floating Audio Player */}
//       {currentAudio && (
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="fixed bottom-3 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3 w-[95%] sm:w-[80%] md:w-[600px] border"
//         >
//           <div className="flex-1 min-w-0">
//             <h4 className="font-semibold text-sm md:text-base truncate">
//               {currentAudio.title}
//             </h4>
//             <p className="text-xs md:text-sm text-gray-500 truncate">
//               {currentAudio.scholar}
//             </p>
//           </div>
//           <button
//             onClick={() => handlePlay(currentAudio)}
//             className="bg-blue-600 text-white p-2 md:p-3 rounded-full hover:bg-blue-700 transition"
//           >
//             {isPlaying ? <Pause size={18} /> : <Play size={18} />}
//           </button>
//           <button
//             onClick={() => {
//               audioRef.current.pause();
//               setCurrentAudio(null);
//               setIsPlaying(false);
//             }}
//             className="bg-red-500 text-white p-2 md:p-3 rounded-full hover:bg-red-600 transition"
//           >
//             <X size={18} />
//           </button>
//           <audio
//             ref={audioRef}
//             src={currentAudio.url}
//             onEnded={() => setIsPlaying(false)}
//           />
//         </motion.div>
//       )}
//     </div>
//   );
// }







// src/pages/AudioBayanaat.jsx
import { useState, useRef, useEffect } from "react";
import { Play, Download, Save, Search, Pause, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioBayanaat() {
  const [activeLang, setActiveLang] = useState("urdu");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(null);

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

  // Sample data (already provided, shortened for clarity)
  const bayanat = [
    { id: 1, title: "اصلاحی مجالس - حصہ اول", scholar: "مفتی سید مختار الدین شاہ صاحب", date: "2025-09-28", duration: "30:15", lang: "urdu", url: "src/assets/audio2.mp3" },
    { id: 2, title: "Islamic Lecture - Part 1", scholar: "Mufti Saeed Ahmad", date: "2025-09-27", duration: "22:40", lang: "english", url: "src/assets/audio2.mp3" },
    { id: 3, title: "پښتو بیان - برخه لومړی", scholar: "مولانا احمد جان", date: "2025-09-26", duration: "18:30", lang: "pashto", url: "src/assets/audio2.mp3" },
    { id: 4, title: "محاضرة بالعربية", scholar: "الشيخ محمد سعيد", date: "2025-09-25", duration: "40:10", lang: "arabic", url: "src/assets/audio2.mp3" },
    { id: 5, title: "درس فارسی - بخش اول", scholar: "مولوی حسن رضا", date: "2025-09-24", duration: "28:50", lang: "farsi", url: "src/assets/audio2.mp3" },
    { id: 6, title: "Türkçe Sohbet - Bölüm 1", scholar: "Hoca Mehmet", date: "2025-09-23", duration: "32:00", lang: "turkish", url: "src/assets/audio2.mp3" },
    { id: 7, title: "سندی بیان - پهريون حصو", scholar: "مولانا عبدالحکیم", date: "2025-09-22", duration: "20:15", lang: "sindhi", url: "src/assets/audio2.mp3" },
    { id: 8, title: "پنجابی خطاب - حصہ اول", scholar: "پیر غلام رسول", date: "2025-09-21", duration: "26:40", lang: "punjabi", url: "src/assets/audio2.mp3" },
    { id: 9, title: "اصلاحی مجالس - حصہ دوم", scholar: "مولانا عبدالسلام", date: "2025-09-20", duration: "34:25", lang: "urdu", url: "src/assets/audio2.mp3" },
    { id: 10, title: "Islamic Lecture - Part 2", scholar: "Shaykh Abdullah Khan", date: "2025-09-19", duration: "19:40", lang: "english", url: "/audio/bayan10.mp3" },
    { id: 11, title: "پښتو بیان - برخه دویم", scholar: "مولانا سمیع اللہ", date: "2025-09-18", duration: "24:15", lang: "pashto", url: "/audio/bayan11.mp3" },
    { id: 12, title: "محاضرة جديدة بالعربية", scholar: "الشيخ عبد الله", date: "2025-09-17", duration: "38:10", lang: "arabic", url: "/audio/bayan12.mp3" },
    { id: 13, title: "درس فارسی - بخش دوم", scholar: "مولانا عبدالکریم", date: "2025-09-16", duration: "27:20", lang: "farsi", url: "/audio/bayan13.mp3" },
    { id: 14, title: "Türkçe Sohbet - Bölüm 2", scholar: "Hoca Yusuf", date: "2025-09-15", duration: "33:00", lang: "turkish", url: "/audio/bayan14.mp3" },
    { id: 15, title: "سندی بیان - ٻيو حصو", scholar: "مولوی محمد قاسم", date: "2025-09-14", duration: "22:30", lang: "sindhi", url: "/audio/bayan15.mp3" },
    { id: 16, title: "پنجابی خطاب - حصہ دوم", scholar: "مولانا حبیب الرحمن", date: "2025-09-13", duration: "29:45", lang: "punjabi", url: "/audio/bayan16.mp3" },
    { id: 17, title: "اصلاحی مجالس - حصہ سوم", scholar: "مولانا سراج الدین", date: "2025-09-12", duration: "35:00", lang: "urdu", url: "/audio/bayan17.mp3" },
    { id: 18, title: "Islamic Lecture - Part 3", scholar: "Dr. Ahmed Latif", date: "2025-09-11", duration: "21:10", lang: "english", url: "/audio/bayan18.mp3" },
    { id: 19, title: "پښتو بیان - برخه درېیم", scholar: "مولوی حامد", date: "2025-09-10", duration: "25:40", lang: "pashto", url: "/audio/bayan19.mp3" },
    { id: 20, title: "محاضرة علمية", scholar: "الشيخ محمود", date: "2025-09-09", duration: "37:25", lang: "arabic", url: "/audio/bayan20.mp3" },
    { id: 21, title: "درس فارسی - بخش سوم", scholar: "مولوی عبدالرشید", date: "2025-09-08", duration: "26:55", lang: "farsi", url: "/audio/bayan21.mp3" },
    { id: 22, title: "Türkçe Sohbet - Bölüm 3", scholar: "Hoca Ali", date: "2025-09-07", duration: "31:20", lang: "turkish", url: "/audio/bayan22.mp3" },
    { id: 23, title: "سندی بیان - ٽيون حصو", scholar: "مولانا عبدالغفور", date: "2025-09-06", duration: "23:10", lang: "sindhi", url: "/audio/bayan23.mp3" },
    { id: 24, title: "پنجابی خطاب - حصہ سوم", scholar: "پیر نذیر احمد", date: "2025-09-05", duration: "28:15", lang: "punjabi", url: "/audio/bayan24.mp3" },
    { id: 25, title: "اصلاحی مجالس - حصہ چہارم", scholar: "مولوی عبداللہ قریشی", date: "2025-09-04", duration: "36:40", lang: "urdu", url: "/audio/bayan25.mp3" },
    { id: 26, title: "Islamic Lecture - Part 4", scholar: "Imam Bilal Hussain", date: "2025-09-03", duration: "20:35", lang: "english", url: "/audio/bayan26.mp3" },
    { id: 27, title: "پښتو بیان - برخه څلورم", scholar: "مولانا عبدالبصیر", date: "2025-09-02", duration: "27:50", lang: "pashto", url: "/audio/bayan27.mp3" },
    { id: 28, title: "محاضرة دينية", scholar: "الشيخ عبدالعزيز", date: "2025-09-01", duration: "39:05", lang: "arabic", url: "/audio/bayan28.mp3" },
    { id: 29, title: "درس فارسی - بخش چهارم", scholar: "مولانا ناصر حسین", date: "2025-08-31", duration: "29:30", lang: "farsi", url: "/audio/bayan29.mp3" },
    { id: 30, title: "Türkçe Sohbet - Bölüm 4", scholar: "Hoca Osman", date: "2025-08-30", duration: "34:00", lang: "turkish", url: "/audio/bayan30.mp3" },
    { id: 31, title: "سندی بیان - چوٿون حصو", scholar: "مولانا عبدالله سومرو", date: "2025-08-29", duration: "21:45", lang: "sindhi", url: "/audio/bayan31.mp3" },
    { id: 32, title: "پنجابی خطاب - حصہ چہارم", scholar: "مولانا فیض احمد", date: "2025-08-28", duration: "27:15", lang: "punjabi", url: "/audio/bayan32.mp3" },
    { id: 33, title: "اصلاحی مجالس - حصہ پنجم", scholar: "مفتی عبدالکریم", date: "2025-08-27", duration: "33:25", lang: "urdu", url: "/audio/bayan33.mp3" },
    { id: 34, title: "Islamic Lecture - Part 5", scholar: "Shaykh Salman Ali", date: "2025-08-26", duration: "22:00", lang: "english", url: "/audio/bayan34.mp3" },
    { id: 35, title: "پښتو بیان - برخه پنځم", scholar: "مولوی فرید", date: "2025-08-25", duration: "24:50", lang: "pashto", url: "/audio/bayan35.mp3" },
    { id: 36, title: "محاضرة تربوية", scholar: "الشيخ طارق", date: "2025-08-24", duration: "36:05", lang: "arabic", url: "/audio/bayan36.mp3" },
    { id: 37, title: "درس فارسی - بخش پنجم", scholar: "مولانا یوسف علی", date: "2025-08-23", duration: "28:35", lang: "farsi", url: "/audio/bayan37.mp3" },
    { id: 38, title: "Türkçe Sohbet - Bölüm 5", scholar: "Hoca İsmail", date: "2025-08-22", duration: "32:10", lang: "turkish", url: "/audio/bayan38.mp3" },
    { id: 39, title: "سندی بیان - پنجون حصو", scholar: "مولوی محمد یعقوب", date: "2025-08-21", duration: "23:55", lang: "sindhi", url: "/audio/bayan39.mp3" },
    { id: 40, title: "پنجابی خطاب - حصہ پنجم", scholar: "پیر ضیاء الحق", date: "2025-08-20", duration: "29:20", lang: "punjabi", url: "/audio/bayan40.mp3" },
    { id: 41, title: "اصلاحی مجالس - حصہ ششم", scholar: "مولوی حنیف اللہ", date: "2025-08-19", duration: "31:45", lang: "urdu", url: "/audio/bayan41.mp3" },
    { id: 42, title: "Islamic Lecture - Part 6", scholar: "Dr. Omar Siddiqi", date: "2025-08-18", duration: "20:55", lang: "english", url: "/audio/bayan42.mp3" },
    { id: 43, title: "پښتو بیان - برخه شپږم", scholar: "مولانا محمد صادق", date: "2025-08-17", duration: "26:05", lang: "pashto", url: "/audio/bayan43.mp3" },
    { id: 44, title: "محاضرة اسلامية", scholar: "الشيخ خالد", date: "2025-08-16", duration: "38:20", lang: "arabic", url: "/audio/bayan44.mp3" },
    { id: 45, title: "درس فارسی - بخش ششم", scholar: "مولانا عبدالغنی", date: "2025-08-15", duration: "27:40", lang: "farsi", url: "/audio/bayan45.mp3" },
    { id: 46, title: "Türkçe Sohbet - Bölüm 6", scholar: "Hoca Faruk", date: "2025-08-14", duration: "34:15", lang: "turkish", url: "/audio/bayan46.mp3" },
    { id: 47, title: "سندی بیان - ڇهون حصو", scholar: "مولوی رشید احمد", date: "2025-08-13", duration: "22:05", lang: "sindhi", url: "/audio/bayan47.mp3" },
    { id: 48, title: "پنجابی خطاب - حصہ ششم", scholar: "پیر انور شاہ", date: "2025-08-12", duration: "28:25", lang: "punjabi", url: "/audio/bayan48.mp3" },
    { id: 49, title: "اصلاحی مجالس - حصہ هفتم", scholar: "مولانا اشرف علی", date: "2025-08-11", duration: "35:10", lang: "urdu", url: "/audio/bayan49.mp3" },
    { id: 50, title: "Islamic Lecture - Part 7", scholar: "Shaykh Usman Qureshi", date: "2025-08-10", duration: "21:50", lang: "english", url: "/audio/bayan50.mp3" }
  ];


  const filtered = bayanat
    .filter((b) => b.lang === activeLang)
    .filter(
      (b) =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.scholar.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
      if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
      return 0;
    });

  const handlePlay = (bayan) => {
    if (currentAudio?.id === bayan.id && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setCurrentAudio(bayan);
      setTimeout(() => {
        audioRef.current.play();
        setIsPlaying(true);
      }, 100);
    }
  };

  useEffect(() => {
    if (!audioRef.current) return;
    const updateProgress = () => {
      const { currentTime, duration } = audioRef.current;
      setProgress((currentTime / duration) * 100 || 0);
    };
    audioRef.current.addEventListener("timeupdate", updateProgress);
    return () =>
      audioRef.current?.removeEventListener("timeupdate", updateProgress);
  }, [currentAudio]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-10 px-3 sm:px-6 lg:px-12">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-800 relative inline-block">
          آڈیو بیانات
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></span>
        </h3>
      </div>

      {/* Language Tabs */}
      <motion.div
        className="flex justify-center flex-wrap gap-2 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {languages.map((lang) => (
          <motion.button
            whileTap={{ scale: 0.9 }}
            key={lang}
            onClick={() => setActiveLang(lang)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all shadow ${
              activeLang === lang
                ? "bg-gradient-to-r from-emerald-600 to-green-700 text-white shadow-lg"
                : "bg-white text-emerald-700 border border-emerald-600 hover:bg-emerald-50"
            }`}
          >
            {lang.toUpperCase()}
          </motion.button>
        ))}
      </motion.div>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-6">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="🔍 تلاش کریں (عنوان یا مقرر)"
            className="w-full border rounded-lg py-2 px-4 pl-10 text-sm md:text-base shadow-sm focus:ring-emerald-600 focus:border-emerald-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        <select
          className="border rounded-lg py-2 px-3 text-sm md:text-base shadow-sm focus:ring-emerald-600 focus:border-emerald-600"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="w-full text-right border-collapse rounded-xl overflow-hidden">
          <thead className="bg-gradient-to-r from-emerald-700 to-green-800 text-white text-sm md:text-base">
            <tr>
              <th className="p-3">نمبر</th>
              <th className="p-3">عنوان</th>
              <th className="p-3">مقرر</th>
              <th className="p-3">تاریخ</th>
              <th className="p-3">مدت</th>
              <th className="p-3">سنیں</th>
              <th className="p-3">محفوظ کریں</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b, idx) => (
              <motion.tr
                key={b.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } border-b hover:bg-emerald-50 text-sm md:text-base`}
              >
                <td className="p-3">{idx + 1}</td>
                <td className="p-3 font-medium break-words">{b.title}</td>
                <td className="p-3 text-gray-700">{b.scholar}</td>
                <td className="p-3 text-gray-500">
                  {new Date(b.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td className="p-3">{b.duration}</td>
                <td className="p-3">
                  <button
                    onClick={() => handlePlay(b)}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-md hover:from-blue-600 hover:to-blue-700 transition shadow"
                  >
                    {currentAudio?.id === b.id && isPlaying ? (
                      <Pause size={16} />
                    ) : (
                      <Play size={16} />
                    )}
                  </button>
                </td>
                <td className="p-3 flex gap-2">
                  <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-2 rounded-md hover:from-emerald-600 hover:to-green-700 transition shadow">
                    <Save size={16} />
                  </button>
                  <button className="bg-gradient-to-r from-gray-500 to-gray-600 text-white p-2 rounded-md hover:from-gray-600 hover:to-gray-700 transition shadow">
                    <Download size={16} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filtered.map((b, idx) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="bg-white p-4 rounded-xl shadow border-l-4 border-emerald-500"
          >
            <h4 className="font-semibold text-base break-words">{b.title}</h4>
            <p className="text-sm text-gray-700">{b.scholar}</p>
            <p className="text-xs text-gray-500">
              {new Date(b.date).toLocaleDateString("en-US")} • {b.duration}
            </p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handlePlay(b)}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-md hover:from-blue-600 hover:to-blue-700 transition flex items-center justify-center gap-1 shadow"
              >
                {currentAudio?.id === b.id && isPlaying ? (
                  <>
                    <Pause size={16} /> Pause
                  </>
                ) : (
                  <>
                    <Play size={16} /> Play
                  </>
                )}
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-2 rounded-md hover:from-emerald-600 hover:to-green-700 transition shadow">
                <Save size={16} />
              </button>
              <button className="bg-gradient-to-r from-gray-500 to-gray-600 text-white p-2 rounded-md hover:from-gray-600 hover:to-gray-700 transition shadow">
                <Download size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Audio Player */}
      <AnimatePresence>
        {currentAudio && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-3 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white/90 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 w-[95%] sm:w-[80%] md:w-[600px] border border-emerald-200"
          >
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm md:text-base truncate">
                {currentAudio.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-500 truncate">
                {currentAudio.scholar}
              </p>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-1 mt-2 rounded-full overflow-hidden">
                <div
                  className="h-1 bg-gradient-to-r from-emerald-500 to-green-600"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <button
              onClick={() => handlePlay(currentAudio)}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 md:p-3 rounded-full hover:from-blue-600 hover:to-blue-700 transition shadow"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button
              onClick={() => {
                audioRef.current.pause();
                setCurrentAudio(null);
                setIsPlaying(false);
              }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white p-2 md:p-3 rounded-full hover:from-red-600 hover:to-red-700 transition shadow"
            >
              <X size={18} />
            </button>
            <audio
              ref={audioRef}
              src={currentAudio.url}
              onEnded={() => setIsPlaying(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
