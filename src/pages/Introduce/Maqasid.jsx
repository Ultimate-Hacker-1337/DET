import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartHandshake,
  Sprout,
  HandHeart,
  ChevronDown,
} from "lucide-react";

const GOALS = [
  {
    id: "ethics",
    Icon: HeartHandshake,
    title: "اخلاقی اقدار",
    subtitle: "اسلامی اخلاق اور کردار سازی کو معاشرتی زندگی میں رائج کرنا",
    subs: [
      {
        title: "ایمانداری",
        desc:
          "ہر معاملے میں سچائی اور دیانت کو بنیاد بنانا۔ زندگی کے ہر شعبے میں امانت اور شفافیت کو عام کرنا۔",
      },
      {
        title: "احترامِ والدین",
        desc:
          "والدین کی خدمت اور ان کے حقوق کی پاسداری کو فروغ دینا، نوجوان نسل کو اس پر عمل کی ترغیب دینا۔",
      },
      {
        title: "عدل و مساوات",
        desc:
          "ہر فرد کے ساتھ برابری کا سلوک اور انصاف کو یقینی بنانا، تاکہ معاشرہ ظلم سے پاک ہو۔",
      },
      {
        title: "بردباری",
        desc:
          "غصے پر قابو پانا، دوسروں کو معاف کرنا اور برداشت کو زندگی کا حصہ بنانا۔",
      },
      {
        title: "صدق و وفا",
        desc:
          "قول و فعل میں سچائی اور وعدے کی پاسداری کرنا تاکہ اعتماد اور اخوت قائم رہے۔",
      },
      {
        title: "خیر خواہی",
        desc:
          "ہر شخص کے لیے بھلائی چاہنا اور دوسروں کی فلاح کو ذاتی مفاد پر ترجیح دینا۔",
      },
      {
        title: "نرمی و شفقت",
        desc:
          "لوگوں سے محبت، نرمی اور شفقت کے ساتھ پیش آنا تاکہ معاشرے میں سکون اور امن قائم ہو۔",
      },
    ],
  },
  {
    id: "spiritual",
    Icon: Sprout,
    title: "روحانی ترقی",
    subtitle: "تزکیہ نفس، قربِ الٰہی اور دل کی پاکیزگی کا سفر",
    subs: [
      {
        title: "ذکر و اذکار",
        desc:
          "روزانہ اللہ کا ذکر، تلاوت اور دعاؤں کے ذریعے دل کو نورانی بنانا۔",
      },
      {
        title: "مراقبہ",
        desc:
          "دل و دماغ کو یکسو کر کے اللہ کی طرف توجہ دینا اور سکون حاصل کرنا۔",
      },
      {
        title: "اخلاص",
        desc:
          "ہر عبادت اور نیکی کو صرف اللہ کی رضا کے لیے کرنا، ریاکاری سے بچنا۔",
      },
      {
        title: "نماز باجماعت",
        desc:
          "نماز کو وقت پر اور جماعت کے ساتھ ادا کرنا تاکہ روحانی تعلق مضبوط ہو۔",
      },
      {
        title: "توبہ و استغفار",
        desc:
          "گناہوں سے بچنے اور اصلاح کے لیے ہمہ وقت توبہ اور استغفار کو اپنانا۔",
      },
      {
        title: "محافلِ ذکر",
        desc:
          "ذکر اور درس و تدریس کی محفلوں میں شریک ہو کر ایمان کو تازہ کرنا۔",
      },
      {
        title: "صبر و شکر",
        desc:
          "مشکلات پر صبر اور نعمتوں پر شکر ادا کرنا تاکہ روحانی سکون نصیب ہو۔",
      },
    ],
  },
  {
    id: "service",
    Icon: HandHeart,
    title: "خدمتِ انسانیت",
    subtitle: "فلاحی منصوبوں کے ذریعے ضرورت مندوں کی خدمت",
    subs: [
      {
        title: "رضاکارانہ خدمت",
        desc:
          "غریبوں اور ناداروں کی عملی مدد، کمیونٹی سروس اور ایمرجنسی سپورٹ مہیا کرنا۔",
      },
      {
        title: "تعلیمی معاونت",
        desc:
          "یتیم اور نادار بچوں کے لیے تعلیم، وظائف اور تعلیمی سہولیات فراہم کرنا۔",
      },
      {
        title: "صحت عامہ",
        desc:
          "مفت میڈیکل کیمپ، ادویات اور علاج مہیا کر کے عوام کی خدمت کرنا۔",
      },
      {
        title: "خوراک کی فراہمی",
        desc:
          "محتاجوں کو کھانا، صاف پانی اور بنیادی غذائی اجناس فراہم کرنا۔",
      },
      {
        title: "بے سہارا افراد کی مدد",
        desc:
          "یتیموں، بیواؤں اور بے سہارا افراد کی کفالت اور ان کے مسائل حل کرنا۔",
      },
      {
        title: "ایمرجنسی ریلیف",
        desc:
          "قدرتی آفات اور ہنگامی حالات میں فوری امداد اور سہارا فراہم کرنا۔",
      },
      {
        title: "معاشی سہولت",
        desc:
          "چھوٹے کاروبار اور روزگار کے مواقع فراہم کر کے لوگوں کو خود کفیل بنانا۔",
      },
    ],
  },
];

export default function Maqasid() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedSub, setSelectedSub] = useState({});
  const headerRefs = useRef([]);
  const panelRefs = useRef([]);

  const toggleGoal = (index) => {
    setOpenIndex((prev) => {
      const next = prev === index ? null : index;
      if (prev === index) {
        setSelectedSub((s) => ({ ...s, [index]: null }));
      }
      return next;
    });
  };

  const toggleSub = (goalIdx, subIdx) => {
    setSelectedSub((prev) => ({
      ...prev,
      [goalIdx]: prev[goalIdx] === subIdx ? null : subIdx,
    }));
  };

  useEffect(() => {
    if (openIndex !== null && panelRefs.current[openIndex]) {
      const el = panelRefs.current[openIndex];
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "nearest" }), 200);
    }
  }, [openIndex]);

  const handleHeaderKeyDown = (e, i) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleGoal(i);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (i + 1) % GOALS.length;
      headerRefs.current[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (i - 1 + GOALS.length) % GOALS.length;
      headerRefs.current[prev]?.focus();
    }
  };

  // Motion Variants
  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.03, boxShadow: "0 16px 28px rgba(0, 0, 0, 0.15)" },
  };

  const panelVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.45, ease: "easeInOut" },
    },
  };

  const subItemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  const iconVariants = {
    closed: { rotate: 0, scale: 1 },
    open: { rotate: 180, scale: 1.1 },
  };

  return (
    <div dir="rtl" className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-emerald-900 mb-4 drop-shadow-sm">
            تحریک ایمان و تقویٰ
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 relative inline-block">
            ہمارے مقاصد
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-emerald-400 rounded-full origin-left"
            />
          </h3>
          <p className="text-slate-700 mt-8 max-w-4xl mx-auto text-xl leading-relaxed">
            وہ راستہ جس پر ہمیں چلنا چاہیے — اخلاق، روحانیت، اور خدمت کا امتزاج۔ نیچے سے ایک مقصد منتخب کریں اور اس کی تفصیلات دیکھیں۔
          </p>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {GOALS.map((goal, i) => {
            const isOpen = openIndex === i;
            const selected = selectedSub[i];
            return (
              <motion.div
                key={goal.id}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                className="relative"
              >
                <article className="bg-white rounded-3xl shadow-md border border-emerald-100 p-6 transition-all duration-300 z-10 relative">
                  <button
                    ref={(el) => (headerRefs.current[i] = el)}
                    onClick={() => toggleGoal(i)}
                    onKeyDown={(e) => handleHeaderKeyDown(e, i)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${i}`}
                    className="w-full text-right flex items-center gap-5 focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-lg"
                  >
                    <motion.div
                      className="flex-shrink-0 w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center transition-all duration-300"
                      whileHover={{ scale: 1.12, backgroundColor: "#d1fae5" }}
                    >
                      <goal.Icon
                        className={`w-7 h-7 transition-colors duration-300 ${
                          isOpen ? "text-emerald-700" : "text-slate-700"
                        }`}
                      />
                    </motion.div>

                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-slate-900">{goal.title}</h4>
                      <p className="text-base text-slate-600 mt-1">{goal.subtitle}</p>
                    </div>

                    <motion.div
                      variants={iconVariants}
                      animate={isOpen ? "open" : "closed"}
                      transition={{ duration: 0.35 }}
                    >
                      <ChevronDown className="w-6 h-6 text-slate-600" />
                    </motion.div>
                  </button>
                </article>

                {/* Expandable Panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`panel-${i}`}
                      ref={(el) => (panelRefs.current[i] = el)}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={panelVariants}
                      className="absolute top-full left-0 right-0 bg-white rounded-b-3xl shadow-lg border border-emerald-100 p-6 mt-2 z-20"
                    >
                      <motion.ul
                        className="space-y-3"
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                      >
                        {goal.subs.map((sub, sIdx) => {
                          const isSelected = selected === sIdx;
                          return (
                            <motion.li
                              key={sub.title}
                              variants={subItemVariants}
                              className={`bg-emerald-50 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                                isSelected ? "ring-2 ring-emerald-400 shadow-md" : ""
                              }`}
                              onClick={() => toggleSub(i, sIdx)}
                              whileHover={{ backgroundColor: "#d1fae5", scale: 1.02 }}
                            >
                              <h5 className="text-lg font-semibold text-slate-800 text-right">{sub.title}</h5>

                              <AnimatePresence>
                                {isSelected && (
                                  <motion.div
                                    key={`desc-${i}-${sIdx}`}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="mt-3 bg-white border border-emerald-100 rounded-xl p-4 shadow-inner"
                                  >
                                    <p className="text-right text-slate-700 leading-7">{sub.desc}</p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.li>
                          );
                        })}
                      </motion.ul>

                      {/* Big Description */}
                      <AnimatePresence>
                        {selected !== null && selected !== undefined && (
                          <motion.div
                            key={`desc-${i}-${selected}`}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="mt-6 bg-white border border-emerald-100 rounded-2xl p-5 shadow-inner"
                          >
                            <h5 className="text-right text-xl font-bold text-emerald-800 mb-3">
                              {goal.subs[selected].title}
                            </h5>
                            <p className="text-right text-slate-700 leading-8">
                              {goal.subs[selected].desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
