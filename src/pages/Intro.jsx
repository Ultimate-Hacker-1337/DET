// import { Eye, Target, Book, Heart, Users, Globe } from "lucide-react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// export default function Home() {
//   // Hook to trigger animation when section is in view
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   // Animation variants for cards
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   // Animation for icons
//   const iconVariants = {
//     hidden: { scale: 0, rotate: -180 },
//     visible: {
//       scale: 1,
//       rotate: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//     hover: {
//       scale: 1.2,
//       rotate: 10,
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <div className="bg-[#fdf8f3] text-[#4b3621]">
//       {/* HERO */}
//       <section className="relative bg-[url('src/assets/bg.jpg')] bg-cover bg-center h-[40vh] flex items-center justify-center">
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative text-center text-white px-6">
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
//             تحریک ایمان و تقویٰ
//           </h1>
//           <p className="text-lg md:text-2xl max-w-2xl mx-auto">
//             روحانی تربیت، اسلامی تعلیم اور خدمتِ انسانیت کا سفر
//           </p>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section className="py-16 px-6 max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold border-b-4 border-yellow-500 inline-block mb-8">
//           تعارف
//         </h2>
//         <p className="text-lg md:text-xl leading-9 max-w-4xl mx-auto">
//           کوہِ کربوغہ شریف، ضلع بنوں، خیبر پختونخوا کی وادی میں قائم تحریک
//           ایمان و تقویٰ ایک مقدس ادارہ ہے۔ یہ ادارہ اصلاحِ نفس، روحانی تربیت اور
//           اسلامی تعلیم کا مرکز ہے، جس کا مقصد ایک ایسی کمیونٹی تشکیل دینا ہے جو
//           محبت، امن، خدمت اور تقویٰ کے اصولوں پر استوار ہو۔
//         </p>
//       </section>

//       {/* VISION & MISSION */}
//       <section
//         ref={ref}
//         className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 bg-gradient-to-b from-[#fffaf5] to-[#fef7ee]"
//       >
//         {/* Vision Card */}
//         <motion.div
//           className="relative bg-white rounded-3xl shadow-xl border border-[#ecd9c6] p-10 text-center overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//           variants={cardVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           whileHover="hover"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-[#ecd9c6]/10 to-[#7b5e57]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
//           <motion.div variants={iconVariants}>
//             <Eye className="w-14 h-14 mx-auto text-[#7b5e57] mb-6" />
//           </motion.div>
//           <h3 className="text-3xl font-bold mb-4 text-[#4a372f] tracking-tight">
//             ہمارا وژن
//           </h3>
//           <p className="text-lg leading-8 text-[#6b4e3d] font-medium">
//             ایک ایسی مثالی دنیا کا قیام جہاں علم، محبت، روحانیت اور خدمت کے اصول
//             پروان چڑھیں۔
//           </p>
//         </motion.div>

//         {/* Mission Card */}
//         <motion.div
//           className="relative bg-white rounded-3xl shadow-xl border border-[#ecd9c6] p-10 text-center overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//           variants={cardVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           whileHover="hover"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-[#ecd9c6]/10 to-[#7b5e57]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
//           <motion.div variants={iconVariants}>
//             <Target className="w-14 h-14 mx-auto text-[#7b5e57] mb-6" />
//           </motion.div>
//           <h3 className="text-3xl font-bold mb-4 text-[#4a372f] tracking-tight">
//             ہمارا مشن
//           </h3>
//           <p className="text-lg leading-8 text-[#6b4e3d] font-medium">
//             قرآن و سنت کی تعلیمات، روحانی تربیت اور اصلاحِ معاشرہ کے ذریعے ایک
//             عالمی کمیونٹی کی تشکیل۔
//           </p>
//         </motion.div>
//       </section>

//       {/* CORE VALUES */}
//       <section className="py-16 px-6 bg-[#fffaf5]">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           ہمارے بنیادی اصول
//         </h2>
//         <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
//           <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
//             <Book className="w-10 h-10 mx-auto text-[#7b5e57] mb-4" />
//             <h3 className="font-semibold mb-2">علم</h3>
//             <p>اسلامی تعلیم اور معرفت کا فروغ۔</p>
//           </div>
//           <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
//             <Heart className="w-10 h-10 mx-auto text-[#7b5e57] mb-4" />
//             <h3 className="font-semibold mb-2">محبت</h3>
//             <p>انسانیت کے لیے اخوت اور بھائی چارہ۔</p>
//           </div>
//           <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
//             <Users className="w-10 h-10 mx-auto text-[#7b5e57] mb-4" />
//             <h3 className="font-semibold mb-2">خدمت</h3>
//             <p>انسانی فلاح کے منصوبے اور سماجی خدمت۔</p>
//           </div>
//           <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
//             <Globe className="w-10 h-10 mx-auto text-[#7b5e57] mb-4" />
//             <h3 className="font-semibold mb-2">عالمی سوچ</h3>
//             <p>دنیا بھر میں امن اور تقویٰ کا پیغام۔</p>
//           </div>
//         </div>
//       </section>

//       {/* PROGRAMS */}
//       <section className="py-16 px-6 max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-12">ہمارے پروگرامز</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {["درس نظامی", "روحانی نشستیں", "تعلیمی کورسز"].map((prog, i) => (
//             <div
//               key={i}
//               className="bg-[#fffaf5] rounded-2xl shadow-md border border-[#ecd9c6] p-6 hover:scale-105 transition"
//             >
//               <h3 className="text-xl font-bold mb-3">{prog}</h3>
//               <p className="text-[#5c4033]">
//                 شرکاء کے لیے خصوصی نصاب اور رہنمائی۔
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }








































import { Eye, Target, Book, Heart, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        hover: {
            scale: 1.2,
            rotate: 10,
            transition: { duration: 0.3 },
        },
    };

    return (
        <div className="bg-[#fefce8] text-[#1e293b]">
            {/* HERO */}
            <section className="relative bg-[url('src/assets/bg.jpg')] bg-cover bg-center h-[40vh] flex items-center justify-center">
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                        تحریک ایمان و تقویٰ
                    </h1>
                    <p className="text-lg md:text-2xl max-w-2xl mx-auto">
                        روحانی تربیت، اسلامی تعلیم اور خدمتِ انسانیت کا سفر
                    </p>
                </div>
            </section>

            {/* ABOUT */}
            <section className="py-16 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold border-b-4 border-emerald-600 inline-block mb-8">
                    تعارف
                </h2>
                <p className="text-lg md:text-xl leading-9 max-w-4xl mx-auto text-slate-700">
                    کوہِ کربوغہ شریف، ضلع بنوں، خیبر پختونخوا کی وادی میں قائم تحریک ایمان
                    و تقویٰ ایک مقدس ادارہ ہے۔ یہ ادارہ اصلاحِ نفس، روحانی تربیت اور اسلامی
                    تعلیم کا مرکز ہے، جس کا مقصد ایک ایسی کمیونٹی تشکیل دینا ہے جو محبت،
                    امن، خدمت اور تقویٰ کے اصولوں پر استوار ہو۔
                </p>
            </section>
            {/* VISION & MISSION */}
            <section
                ref={ref}
                className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 bg-gradient-to-b from-white to-[#fefce8]"
            >
                {/* Vision Card */}
                <motion.div
                    className="relative bg-white rounded-3xl shadow-lg border border-emerald-100 p-10 text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-emerald-100 opacity-0 hover:opacity-30 transition-opacity duration-300" />
                    <Eye className="w-14 h-14 mx-auto text-emerald-600 mb-6 relative z-10" />
                    <h3 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight relative z-10">
                        ہمارا وژن
                    </h3>
                    <p className="text-lg leading-8 text-slate-600 font-medium relative z-10">
                        ایک ایسی مثالی دنیا کا قیام جہاں علم، محبت، روحانیت اور خدمت کے اصول پروان
                        چڑھیں۔
                    </p>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                    className="relative bg-white rounded-3xl shadow-lg border border-indigo-100 p-10 text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-indigo-100 opacity-0 hover:opacity-30 transition-opacity duration-300" />
                    <Target className="w-14 h-14 mx-auto text-indigo-600 mb-6 relative z-10" />
                    <h3 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight relative z-10">
                        ہمارا مشن
                    </h3>
                    <p className="text-lg leading-8 text-slate-600 font-medium relative z-10">
                        قرآن و سنت کی تعلیمات، روحانی تربیت اور اصلاحِ معاشرہ کے ذریعے ایک عالمی
                        کمیونٹی کی تشکیل۔
                    </p>
                </motion.div>
            </section>

            {/* CORE VALUES */}
            <section className="py-16 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
                    ہمارے بنیادی اصول
                </h2>
                <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
                    <div className="p-6 bg-emerald-50 rounded-2xl shadow-md hover:shadow-xl transition">
                        <Book className="w-10 h-10 mx-auto text-emerald-600 mb-4" />
                        <h3 className="font-semibold mb-2">علم</h3>
                        <p className="text-slate-600">اسلامی تعلیم اور معرفت کا فروغ۔</p>
                    </div>
                    <div className="p-6 bg-rose-50 rounded-2xl shadow-md hover:shadow-xl transition">
                        <Heart className="w-10 h-10 mx-auto text-rose-600 mb-4" />
                        <h3 className="font-semibold mb-2">محبت</h3>
                        <p className="text-slate-600">انسانیت کے لیے اخوت اور بھائی چارہ۔</p>
                    </div>
                    <div className="p-6 bg-indigo-50 rounded-2xl shadow-md hover:shadow-xl transition">
                        <Users className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
                        <h3 className="font-semibold mb-2">خدمت</h3>
                        <p className="text-slate-600">
                            انسانی فلاح کے منصوبے اور سماجی خدمت۔
                        </p>
                    </div>
                    <div className="p-6 bg-yellow-50 rounded-2xl shadow-md hover:shadow-xl transition">
                        <Globe className="w-10 h-10 mx-auto text-yellow-600 mb-4" />
                        <h3 className="font-semibold mb-2">عالمی سوچ</h3>
                        <p className="text-slate-600">دنیا بھر میں امن اور تقویٰ کا پیغام۔</p>
                    </div>
                </div>
            </section>

            {/* PROGRAMS */}
            <section className="py-16 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 text-slate-800">
                    ہمارے پروگرامز
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {["درس نظامی", "روحانی نشستیں", "تعلیمی کورسز"].map((prog, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-md border border-emerald-100 p-6 hover:scale-105 transition"
                        >
                            <h3 className="text-xl font-bold mb-3 text-emerald-700">
                                {prog}
                            </h3>
                            <p className="text-slate-600">
                                شرکاء کے لیے خصوصی نصاب اور رہنمائی۔
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
