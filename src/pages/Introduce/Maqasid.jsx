// src/pages/Goals.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BookOpen,
  HeartHandshake,
  Sprout,
  GraduationCap,
  HandHeart,
  Scale,
  BookMarked,
  HeartPulse,
  Users,
} from "lucide-react";

export default function Maqasid() {
  // Main goals
  const goals = [
    {
      icon: <HeartHandshake className="w-12 h-12 text-blue-600" />,
      title: "اخلاقی اقدار",
      desc: "اسلامی اخلاق و اقدار کو معاشرتی زندگی میں زندہ کرنا اور کردار سازی کو فروغ دینا۔",
    },
    {
      icon: <Sprout className="w-12 h-12 text-green-600" />,
      title: "روحانی ترقی",
      desc: "تزکیہ نفس اور روحانی تربیت کے ذریعے انسان کے باطن کو سنوارنا اور اللہ سے تعلق کو مضبوط کرنا۔",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-orange-500" />,
      title: "تعلیمات اسلام کا فروغ",
      desc: "قرآن و سنت کی تعلیمات کو عام کرنا اور جدید انداز میں دینی علم کی ترویج کرنا۔",
    },
    {
      icon: <HandHeart className="w-12 h-12 text-pink-500" />,
      title: "خدمت انسانیت",
      desc: "فلاحی منصوبوں کے ذریعے انسانیت کی خدمت کرنا اور غرباء و مستحقین کی مدد کرنا۔",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-purple-600" />,
      title: "روحانی تربیت",
      desc: "علماء، طلباء اور عام مسلمانوں کی دینی و روحانی تربیت کے مواقع فراہم کرنا۔",
    },
  ];

  // Basic points (new section)
  const basicPoints = [
    {
      icon: <HeartPulse className="w-12 h-12 text-red-500" />,
      title: "تزکیہ و احسان",
      desc: "نفس کی پاکیزگی اور روحانی ترقی کو ہر مسلمان کے لیے لازم قرار دیا گیا ہے تاکہ دل اللہ کی محبت سے معمور ہو جائے۔",
    },
    {
      icon: <BookMarked className="w-12 h-12 text-blue-600" />,
      title: "قرآن و سنت پر عمل",
      desc: "تحریک کا بنیادی زور قرآن و سنت کی عملی تعلیمات پر ہے تاکہ ہر عمل اسوۂ حسنہ کے مطابق ہو سکے۔",
    },
    {
      icon: <Scale className="w-12 h-12 text-indigo-500" />,
      title: "میانہ روی",
      desc: "اعتدال اور میانہ روی کو ہر معاملے میں اختیار کیا جاتا ہے تاکہ افراط و تفریط سے بچا جا سکے۔",
    },
    {
      icon: <Users className="w-12 h-12 text-teal-600" />,
      title: "خدمت خلق",
      desc: "مسلمانوں کی خدمت، انسانیت کی فلاح و بہبود اور حاجات مندوں کی مدد تحریک کے اہم مقاصد میں سے ہے۔",
    },
  ];

  return (
    <div className="bg-gradient-to-t from-blue-50 via-white to-yellow-50 py-20 px-6">
      {/* Section 1: Goals */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-800 pb-6">
          تحریک ایمان و تقویٰ
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 relative inline-block mt-4">
          ہمارے مقاصد
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"></span>
        </h3>
        <p className="text-slate-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
          تحریک ایمان و تقویٰ کا مقصد ایک ایسی مثالی کمیونٹی تشکیل دینا ہے جو اخلاق،
          روحانیت، تعلیم اور خدمت کے اصولوں پر استوار ہو۔ ذیل میں ہمارے چند بنیادی
          مقاصد درج ہیں۔
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">
        {goals.map((goal, index) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gray-100">
                {goal.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{goal.title}</h4>
              <p className="text-slate-600 leading-7">{goal.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Section 2: Basic Points */}
      <div className="text-center mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 relative inline-block">
          بنیادی نکات
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"></span>
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {basicPoints.map((point, index) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center flex flex-col items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gray-100">
                {point.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{point.title}</h4>
              <p className="text-slate-600 leading-7">{point.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
























































// src/pages/Goals.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BookOpen,
  HeartHandshake,
  Sprout,
  GraduationCap,
  HandHeart,
  Scale,
  BookMarked,
  HeartPulse,
  Users,
} from "lucide-react";

export default function Maqasid() {
  const goals = [
    {
      icon: <HeartHandshake className="w-12 h-12 text-blue-600" />,
      title: "اخلاقی اقدار",
      desc: "اسلامی اخلاق و اقدار کو معاشرتی زندگی میں زندہ کرنا اور کردار سازی کو فروغ دینا۔",
    },
    {
      icon: <Sprout className="w-12 h-12 text-green-600" />,
      title: "روحانی ترقی",
      desc: "تزکیہ نفس اور روحانی تربیت کے ذریعے انسان کے باطن کو سنوارنا اور اللہ سے تعلق کو مضبوط کرنا۔",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-orange-500" />,
      title: "تعلیمات اسلام کا فروغ",
      desc: "قرآن و سنت کی تعلیمات کو عام کرنا اور جدید انداز میں دینی علم کی ترویج کرنا۔",
    },
    {
      icon: <HandHeart className="w-12 h-12 text-pink-500" />,
      title: "خدمت انسانیت",
      desc: "فلاحی منصوبوں کے ذریعے انسانیت کی خدمت کرنا اور غرباء و مستحقین کی مدد کرنا۔",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-purple-600" />,
      title: "روحانی تربیت",
      desc: "علماء، طلباء اور عام مسلمانوں کی دینی و روحانی تربیت کے مواقع فراہم کرنا۔",
    },
  ];

  const basicPoints = [
    {
      icon: <HeartPulse className="w-12 h-12 text-red-500" />,
      title: "تزکیہ و احسان",
      desc: "نفس کی پاکیزگی اور روحانی ترقی کو ہر مسلمان کے لیے لازم قرار دیا گیا ہے تاکہ دل اللہ کی محبت سے معمور ہو جائے۔",
    },
    {
      icon: <BookMarked className="w-12 h-12 text-blue-600" />,
      title: "قرآن و سنت پر عمل",
      desc: "تحریک کا بنیادی زور قرآن و سنت کی عملی تعلیمات پر ہے تاکہ ہر عمل اسوۂ حسنہ کے مطابق ہو سکے۔",
    },
    {
      icon: <Scale className="w-12 h-12 text-indigo-500" />,
      title: "میانہ روی",
      desc: "اعتدال اور میانہ روی کو ہر معاملے میں اختیار کیا جاتا ہے تاکہ افراط و تفریط سے بچا جا سکے۔",
    },
    {
      icon: <Users className="w-12 h-12 text-teal-600" />,
      title: "خدمت خلق",
      desc: "مسلمانوں کی خدمت، انسانیت کی فلاح و بہبود اور حاجات مندوں کی مدد تحریک کے اہم مقاصد میں سے ہے۔",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <div className="bg-gradient-to-t from-blue-50 via-white to-yellow-50 py-20 px-6">
      {/* Section: Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-800 pb-6">
          تحریک ایمان و تقویٰ
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 relative inline-block mt-4">
          ہمارے مقاصد
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></span>
        </h3>
        <p className="text-slate-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
          تحریک ایمان و تقویٰ کا مقصد ایک ایسی مثالی کمیونٹی تشکیل دینا ہے جو اخلاق،
          روحانیت، تعلیم اور خدمت کے اصولوں پر استوار ہو۔ ذیل میں ہمارے چند بنیادی مقاصد
          درج ہیں۔
        </p>
      </motion.div>

      {/* Goals Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">
        {goals.map((goal, i) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

          return (
            <motion.div
              ref={ref}
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 text-center flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gray-100">
                {goal.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{goal.title}</h4>
              <p className="text-slate-600 leading-7">{goal.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Section: Basic Points */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 relative inline-block">
          بنیادی نکات
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></span>
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {basicPoints.map((point, i) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

          return (
            <motion.div
              ref={ref}
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 text-center flex flex-col items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gray-100">
                {point.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{point.title}</h4>
              <p className="text-slate-600 leading-7">{point.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
