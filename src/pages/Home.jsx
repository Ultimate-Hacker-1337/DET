import { motion } from 'framer-motion';
import { FaUsers } from "react-icons/fa";

export default function Home() {
  const quotes = [
    {
      text: "صبر ایک درخت ہے جس کی جڑیں کڑوی ہوتی ہیں، لیکن پھل میٹھا ہوتا ہے۔",
      author: "حضرت علی کرم اللہ وجہہ",
    },
    {
      text: "دنیا مومن کے لیے قید خانہ ہے اور کافر کے لیے جنت۔",
      author: "نبی کریم ﷺ",
    },
    {
      text: "اپنے رب سے ڈرو اور کسی مخلوق سے نہ ڈرو۔",
      author: "شیخ عبدالقادر جیلانی",
    },
  ];

  const features = [
    { icon: "📚", title: "دارالافتاء", desc: "آپ کے مسائل اور ان کا حل" },
    { icon: "✸", title: "تعارف دار الایمان والتقویٰ", desc: "جامعہ اور اس کی خدمات ایک نظر میں" },
    { icon: "🕌", title: "بانی جامعہ حضرت بنوری رحمہ اللہ", desc: "تعارف، علمی و تحقیقی خدمات" },
    { icon: "📝", title: "رابطہ", desc: "برائے معلومات" },
    { icon: "📖", title: "کتابیں", desc: "مفید علمی و اصلاحی کتب" },
    { icon: "🕋", title: "ماہنامہ بینات", desc: "قرآن و سنت پر مبنی تعلیمات کا علمبردار" },
  ];

  const audios = [
    { date: "26 Aug 2025", title: "اصلاحی مجالس - حصہ اول", speaker: "مفتی سید مختار الدین شاہ صاحب" },
    { date: "26 Aug 2025", title: "اصلاحی مجالس - حصہ دوم", speaker: "مفتی سید مختار الدین شاہ صاحب" },
    { date: "26 Aug 2025", title: "اصلاحی مجالس - حصہ سوم", speaker: "مفتی سید مختار الدین شاہ صاحب" },
    { date: "26 Aug 2025", title: "اصلاحی مجالس - حصہ چہارم", speaker: "مفتی سید مختار الدین شاہ صاحب" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.03, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' },
  };

  return (
    <div className="min-h-screen font-nafees bg-[#fefaf7] overflow-hidden">
      {/* Hero */}
      <section className="relative w-full h-[50vh] md:h-[60vh] bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://www.arabian-adventures.com/on/demandware.static/-/Sites-dnata-UAE-Library/default/dw153f308b/images/blogs/1700x1280_Sheikh_Zayed_Abu_Dhabi_Grand_Mosque_1-min.jpg)` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#4a2f1b] text-center bg-[#fefaf7]/80 px-6 py-3 rounded-2xl shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            دار الایمان والتقویٰ
          </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* اہم شخصیات */}
        <motion.section className="py-16 md:py-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#4a2f1b] mb-4">اہم شخصیات کا تعارف</h2>
          <div className="w-32 h-1 bg-[#c69c6d] mx-auto mb-10 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'مولانا محمد ذکریا کاندھلوی',
                image: 'src/assets/logo.avif',
                desc: 'شیخ الحدیث مولانا محمد ذکریا کاندھلوی (رحمۃ اللہ) عالمی شہرت یافتہ عالم اور روحانی رہنما تھے۔',
              },
              {
                name: 'مفتی سید مختار الدین شاہ',
                image: 'src/assets/logo.avif',
                desc: 'حضرت مفتی سید مختار الدین شاہ ایک ممتاز اسلامی اسکالر اور شیخ الحدیث تھے۔',
              },
            ].map((person, idx) => (
              <motion.div key={idx} className="bg-white shadow-lg rounded-2xl p-6 text-center border border-[#e8d5c4]"
                variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true }}>
                <img src={person.image} alt={person.name} className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-[#d8bfa6]" />
                <h3 className="mt-4 text-xl font-semibold text-[#4a2f1b]">{person.name}</h3>
                <p className="mt-3 text-[#2d1a10]">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* تحریک ایمان و تقویٰ */}
        <motion.section className="py-16 md:py-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="bg-[#f9f1e8] rounded-2xl shadow-md p-8 text-center border border-[#e8d5c4]">
            <h2 className="text-3xl font-bold mb-4 text-[#4a2f1b]">تحریک ایمان و تقویٰ کا تعارف</h2>
            <p className="text-[#2d1a10] mb-6">قرآن و سنت کی لازوال تعلیمات کو منظم نصاب کے ذریعے پھیلانا اور روحانی ترقی کی کمیونٹی بنانا۔</p>
            <motion.button className="px-6 py-3 bg-[#c69c6d] text-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05, backgroundColor: '#a77f4e' }}
              whileTap={{ scale: 0.95 }}>
              مزید جانیں
            </motion.button>
          </div>
        </motion.section>

        {/* اس ہفتے کی مجلس */}
        <section className="w-full flex flex-col items-center justify-center py-8 bg-[#fdfaf5]">
          <h2 className="text-3xl font-bold text-[#4a2f1b] text-center mb-2">اس ہفتے کی مجلس</h2>
          <div className="w-24 h-1 bg-[#c69c6d] rounded-full mb-10"></div>
          <div className="bg-[#f9f1e8] border border-[#e8d5c4] shadow-lg rounded-xl p-8 w-full md:w-[600px] text-center">
            <h3 className="text-xl font-semibold text-[#4a2f1b] mb-1">اصلاحی مجلس - حصہ اول</h3>
            <p className="text-sm text-[#2d1a10] mb-5">مفتی سید مختار الدین شاہ صاحب</p>
            <audio controls className="w-full rounded-lg">
              <source src="src/assets/audio.mp3" type="audio/mp3" />
              آپ کا براؤزر آڈیو پلیئر کو سپورٹ نہیں کرتا۔
            </audio>
          </div>
        </section>

        {/* منتخب ملفوظات */}
        <motion.section className="py-16 md:py-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a2f1b] mb-4">منتخب ملفوظات</h2>
          <div className="w-32 h-1 bg-[#c69c6d] mx-auto mb-10 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((quote, idx) => (
              <motion.div key={idx} className="relative bg-white rounded-2xl shadow-lg p-6 text-center border border-[#e8d5c4]"
                variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true }}>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#c69c6d] text-white text-3xl shadow">“</div>
                <p className="mt-6 text-[#2d1a10]">{quote.text}</p>
                <p className="mt-4 text-sm text-[#4a2f1b]">— {quote.author}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <motion.button className="px-6 py-3 bg-[#c69c6d] text-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05, backgroundColor: '#a77f4e' }}
              whileTap={{ scale: 0.95 }}>
              تمام ملفوظات پڑھیں
            </motion.button>
          </div>
        </motion.section>

        {/* ✅ تازہ ترین آڈیو بیانات */}
        <motion.section
          className="py-16 md:py-20 bg-[#f9f1e8] rounded-2xl shadow-md px-6 md:px-10 mt-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a2f1b] mb-4">
            تازہ ترین آڈیو بیانات
          </h2>
          <div className="w-28 h-1 bg-[#c69c6d] mx-auto mb-10 rounded-full"></div>

          <div className="bg-white border border-[#e8d5c4] rounded-xl shadow overflow-hidden">
            {audios.map((audio, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-5 border-b border-[#f0e4d7] last:border-none"
              >
                {/* 🎤 Title + Speaker on left side */}
                <div className="text-right">
                  <h3 className="text-lg font-semibold text-[#4a2f1b]">{audio.title}</h3>
                  <p className="text-sm text-[#2d1a10]">{audio.speaker}</p>
                </div>
                {/* 📅 Date on right side */}
                <p className="text-sm text-[#2d1a10]">{audio.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              className="px-6 py-3 bg-[#c69c6d] text-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05, backgroundColor: '#a77f4e' }}
              whileTap={{ scale: 0.95 }}
            >
              تمام آڈیو بیانات سنیں
            </motion.button>
          </div>
        </motion.section>


        {/* اہم موضوعات */}
        <motion.section className="py-16 md:py-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center text-[#4a2f1b] mb-4">اہم موضوعات</h2>
          <div className="w-32 h-1 bg-[#c69c6d] mx-auto mb-10 rounded-full"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} className="relative flex items-center bg-white border border-[#e8d5c4] shadow-md rounded-xl p-6 group"
                variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true }}>
                <motion.div className="absolute left-0 top-0 bottom-0 w-0 h-full rounded-r-full bg-[#c69c6d]/70"
                  initial={{ width: 0 }} whileHover={{ width: "200%" }} transition={{ duration: 0.6, ease: "easeInOut" }} />
                <div className="relative z-10 flex items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f9f1e8] text-3xl text-[#4a2f1b] shadow">{f.icon}</div>
                  <div className="mr-4 text-right flex-1">
                    <h3 className="text-lg font-semibold text-[#4a2f1b]">{f.title}</h3>
                    <p className="text-sm text-[#2d1a10] mt-1">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* تازہ فتاویٰ */}
        <motion.section className="py-16 md:py-20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center text-[#4a2f1b] mb-4">تازہ فتاویٰ</h2>
          <div className="w-32 h-1 bg-[#c69c6d] mx-auto mb-10 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'طلب مواثبۃ اور طلب اشہاد نہ کرنے کی صورت میں شفعہ',
              'غیر شادی شدہ بھائی کا اپنی تمام جائیداد زندگی میں ایک بھائی کے سپرد کرنا',
              'مسجد کی پرانی اشیاء کی فروختگی اور اس کے استعمال کا حکم',
            ].map((fatwa, idx) => (
              <motion.div key={idx} className="bg-white shadow-md rounded-xl p-6 text-right border border-[#e8d5c4]"
                variants={cardVariants} initial="hidden" whileInView="visible" whileHover="hover" viewport={{ once: true }}>
                <h3 className="text-lg font-semibold text-[#4a2f1b]">{fatwa}</h3>
                <p className="text-sm text-[#2d1a10] mt-2">تفصیل کے لیے کلک کریں</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <motion.button className="px-6 py-3 bg-[#c69c6d] text-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05, backgroundColor: '#a77f4e' }}
              whileTap={{ scale: 0.95 }}>
              مزید فتاویٰ دیکھیں
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
