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
} from "lucide-react";

export default function Goals() {
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


  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-yellow-50 py-20 px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-800">
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

      {/* Goals Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {goals.map((goal, index) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

          return (
            <motion.div
              ref={ref}
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-8 text-center flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100">
                {goal.icon}
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-emerald-700 mb-3">
                {goal.title}
              </h4>

              {/* Description */}
              <p className="text-slate-600 leading-7">{goal.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}