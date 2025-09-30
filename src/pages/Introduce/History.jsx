import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bg from "../../assets/bg.avif";
import bg3 from "../../assets/bg3.avif";

export default function History() {
    const historyData = [
        {
            title: "ابتدائی ایام",
            text: "تحریک ایمان و تقویٰ کا قیام حضرت سید مخدوم شاہ صاحب کے دور میں ہوا۔ یہ تحریک کا آغاز ایک چھوٹے سے گاؤں میں ہوا، جہاں علم و تقویٰ کی روشنی لوگوں کے دلوں میں اجاگر کی گئی۔",
            image: bg,
        },
        {
            title: "مرکز کا قیام",
            text: "ادارہ جدید دور کے تقاضوں کے مطابق ایک مرکزی مقام پر قائم ہوا۔ یہاں دینی تعلیمات، روحانی تربیت اور سماجی خدمات کے منصوبے شروع کیے گئے۔ اس مرکز نے نہ صرف مقامی سطح پر بلکہ قومی و عالمی سطح پر بھی نمایاں کردار ادا کیا۔",
            image: bg3,
        },
        {
            title: "موجودہ دور",
            text: "آج تحریک ایمان و تقویٰ جدید وسائل اور نصاب کے ذریعے علم، محبت اور خدمت کے مشن کو جاری رکھے ہوئے ہے۔ ادارہ جدید تعلیمی نصاب، رفاہی خدمات اور عالمی سطح پر تعاون کے ذریعے دین کی خدمت انجام دے رہا ہے۔",
            image: bg,
        },
    ];

    return (
        <div className="bg-gradient-to-t from-yellow-50 via-white to-blue-50 py-16 px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-800 pb-6">
                    تحریک ایمان و تقویٰ
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 relative inline-block mt-4">
                    ہماری تاریخ
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"></span>
                </h3>
            </div>

            {/* History Timeline */}
            <div className="space-y-20 max-w-6xl mx-auto">
                {historyData.map((item, index) => {
                    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

                    return (
                        <motion.div
                            ref={ref}
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                        >
                            {/* Image */}
                            <motion.div
                                className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-200 flex-shrink-0 bg-white"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Text */}
                            <div className="flex-1 flex items-center">
                                <div className="text-center md:text-right bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-emerald-100">
                                    <h4 className="text-xl font-bold text-emerald-700 mb-4">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-700 leading-8 text-lg">{item.text}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}