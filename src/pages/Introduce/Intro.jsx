// import { Eye, Target, Book, Heart, Users, Globe } from "lucide-react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// export default function Home() {
//     const { ref, inView } = useInView({
//         triggerOnce: true,
//         threshold: 0.2,
//     });

//     const cardVariants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.6, ease: "easeOut" },
//         },
//     };

//     const iconVariants = {
//         hidden: { scale: 0, rotate: -180 },
//         visible: {
//             scale: 1,
//             rotate: 0,
//             transition: { duration: 0.5, ease: "easeOut" },
//         },
//         hover: {
//             scale: 1.2,
//             rotate: 10,
//             transition: { duration: 0.3 },
//         },
//     };

//     return (
//         <div className="bg-[#fefce8] text-[#1e293b]">
//             {/* HERO */}
//             <section className="relative bg-[url('src/assets/bg.jpg')] bg-cover bg-center h-[40vh] flex items-center justify-center">
//                 <div className="absolute inset-0 bg-black/50" />
//                 <div className="relative text-center text-white px-6">
//                     <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
//                         تحریک ایمان و تقویٰ
//                     </h1>
//                     <p className="text-lg md:text-2xl max-w-2xl mx-auto">
//                         روحانی تربیت، اسلامی تعلیم اور خدمتِ انسانیت کا سفر
//                     </p>
//                 </div>
//             </section>

//             {/* ABOUT */}
//             <section className="py-16 px-6 max-w-6xl mx-auto text-center">
//                 <h2 className="text-3xl font-bold border-b-4 border-emerald-600 inline-block mb-8">
//                     تعارف
//                 </h2>
//                 <p className="text-lg md:text-xl leading-9 max-w-4xl mx-auto text-slate-700">
//                     کوہِ کربوغہ شریف، ضلع بنوں، خیبر پختونخوا کی وادی میں قائم تحریک ایمان
//                     و تقویٰ ایک مقدس ادارہ ہے۔ یہ ادارہ اصلاحِ نفس، روحانی تربیت اور اسلامی
//                     تعلیم کا مرکز ہے، جس کا مقصد ایک ایسی کمیونٹی تشکیل دینا ہے جو محبت،
//                     امن، خدمت اور تقویٰ کے اصولوں پر استوار ہو۔
//                 </p>
//             </section>
//             {/* VISION & MISSION */}
//             <section
//                 ref={ref}
//                 className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 bg-gradient-to-b from-white to-[#fefce8]"
//             >
//                 {/* Vision Card */}
//                 <motion.div
//                     className="relative bg-white rounded-3xl shadow-lg border border-emerald-100 p-10 text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//                     initial={{ opacity: 0 }}
//                     animate={inView ? { opacity: 1 } : { opacity: 0 }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                 >
//                     <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-emerald-100 opacity-0 hover:opacity-30 transition-opacity duration-300" />
//                     <Eye className="w-14 h-14 mx-auto text-emerald-600 mb-6 relative z-10" />
//                     <h3 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight relative z-10">
//                         ہمارا وژن
//                     </h3>
//                     <p className="text-lg leading-8 text-slate-600 font-medium relative z-10">
//                         ایک ایسی مثالی دنیا کا قیام جہاں علم، محبت، روحانیت اور خدمت کے اصول پروان
//                         چڑھیں۔
//                     </p>
//                 </motion.div>

//                 {/* Mission Card */}
//                 <motion.div
//                     className="relative bg-white rounded-3xl shadow-lg border border-indigo-100 p-10 text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//                     initial={{ opacity: 0 }}
//                     animate={inView ? { opacity: 1 } : { opacity: 0 }}
//                     transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//                 >
//                     <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-indigo-100 opacity-0 hover:opacity-30 transition-opacity duration-300" />
//                     <Target className="w-14 h-14 mx-auto text-indigo-600 mb-6 relative z-10" />
//                     <h3 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight relative z-10">
//                         ہمارا مشن
//                     </h3>
//                     <p className="text-lg leading-8 text-slate-600 font-medium relative z-10">
//                         قرآن و سنت کی تعلیمات، روحانی تربیت اور اصلاحِ معاشرہ کے ذریعے ایک عالمی
//                         کمیونٹی کی تشکیل۔
//                     </p>
//                 </motion.div>
//             </section>

//             {/* CORE VALUES */}
//             <section className="py-16 px-6 bg-white">
//                 <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
//                     ہمارے بنیادی اصول
//                 </h2>
//                 <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
//                     <div className="p-6 bg-emerald-50 rounded-2xl shadow-md hover:shadow-xl transition">
//                         <Book className="w-10 h-10 mx-auto text-emerald-600 mb-4" />
//                         <h3 className="font-semibold mb-2">علم</h3>
//                         <p className="text-slate-600">اسلامی تعلیم اور معرفت کا فروغ۔</p>
//                     </div>
//                     <div className="p-6 bg-rose-50 rounded-2xl shadow-md hover:shadow-xl transition">
//                         <Heart className="w-10 h-10 mx-auto text-rose-600 mb-4" />
//                         <h3 className="font-semibold mb-2">محبت</h3>
//                         <p className="text-slate-600">انسانیت کے لیے اخوت اور بھائی چارہ۔</p>
//                     </div>
//                     <div className="p-6 bg-indigo-50 rounded-2xl shadow-md hover:shadow-xl transition">
//                         <Users className="w-10 h-10 mx-auto text-indigo-600 mb-4" />
//                         <h3 className="font-semibold mb-2">خدمت</h3>
//                         <p className="text-slate-600">
//                             انسانی فلاح کے منصوبے اور سماجی خدمت۔
//                         </p>
//                     </div>
//                     <div className="p-6 bg-yellow-50 rounded-2xl shadow-md hover:shadow-xl transition">
//                         <Globe className="w-10 h-10 mx-auto text-yellow-600 mb-4" />
//                         <h3 className="font-semibold mb-2">عالمی سوچ</h3>
//                         <p className="text-slate-600">دنیا بھر میں امن اور تقویٰ کا پیغام۔</p>
//                     </div>
//                 </div>
//             </section>

//             {/* PROGRAMS */}
//             <section className="py-16 px-6 max-w-6xl mx-auto text-center">
//                 <h2 className="text-3xl font-bold mb-12 text-slate-800">
//                     ہمارے پروگرامز
//                 </h2>
//                 <div className="grid md:grid-cols-3 gap-8">
//                     {["درس نظامی", "روحانی نشستیں", "تعلیمی کورسز"].map((prog, i) => (
//                         <div
//                             key={i}
//                             className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-md border border-emerald-100 p-6 hover:scale-105 transition"
//                         >
//                             <h3 className="text-xl font-bold mb-3 text-emerald-700">
//                                 {prog}
//                             </h3>
//                             <p className="text-slate-600">
//                                 شرکاء کے لیے خصوصی نصاب اور رہنمائی۔
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// }











































// src/pages/AdmissionForm.jsx
import { useState } from "react";
import { Send } from "lucide-react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add API call or backend integration
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-yellow-50 py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          داخلہ فارم
        </h2>
        <div className="mt-3 w-24 h-1 bg-green-600 rounded mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          براہ کرم اپنی تفصیلات درج کریں تاکہ ہم آپ کے داخلہ کے عمل کو مکمل کر
          سکیں۔
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
        {submitted ? (
          <div className="text-center py-10">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              🎉 آپ کا فارم جمع ہوگیا ہے
            </h3>
            <p className="text-gray-600">
              ہم جلد ہی آپ سے رابطہ کریں گے، شکریہ!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                نام
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="اپنا مکمل نام درج کریں"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                ای میل
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="example@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                فون نمبر
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="0300-1234567"
              />
            </div>

            {/* Course Selection */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                منتخب کورس
              </label>
              <select
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="">--- کورس منتخب کریں ---</option>
                <option value="darse-nizami">درس نظامی</option>
                <option value="hifz-quran">حفظ القرآن</option>
                <option value="tajweed">تجوید و قرات</option>
                <option value="arabic">عربی زبان کورس</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                پیغام / اضافی تفصیلات
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="اگر کوئی سوال ہے یا مزید وضاحت درکار ہے تو یہاں لکھیں"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              فارم جمع کریں
              <Send className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
