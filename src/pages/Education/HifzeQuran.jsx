// src/pages/HifzeQuran.jsx
import { BookOpen } from "lucide-react";

export default function HifzeQuran() {
  const years = [
    {
      id: 1,
      title: "پہلا سال",
      sabaq: "روزانہ 5 تا 10 آیات",
      sabaqi: "پچھلے 1 یا 2 صفحات",
      manzil: "جزء عم اور پچھلا یاد کیا ہوا حصہ",
      length: "تقریباً 5 پارے",
    },
    {
      id: 2,
      title: "دوسرا سال",
      sabaq: "روزانہ 10 تا 15 آیات",
      sabaqi: "پچھلے 2 تا 3 صفحات",
      manzil: "گزشتہ سال کا مکمل حصہ + نیا سبق",
      length: "مزید 10 پارے",
    },
    {
      id: 3,
      title: "تیسرا سال",
      sabaq: "روزانہ آدھا تا ایک رکوع",
      sabaqi: "پچھلے 3 تا 4 صفحات",
      manzil: "آدھا قرآن کا دور",
      length: "مزید 10 پارے",
    },
    {
      id: 4,
      title: "چوتھا سال",
      sabaq: "روزانہ ایک رکوع",
      sabaqi: "پچھلے 5 صفحات",
      manzil: "پورے قرآن کا دور (جزء بہ جزء)",
      length: "بقیہ قرآن (پارہ 30 مکمل)",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-yellow-50 via-white to-green-50 py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          حفظِ قرآن
        </h2>
        <div className="mt-3 w-24 h-1 bg-green-600 rounded mx-auto"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          چار سالہ منصوبہ جس میں سبق، سبقی اور منزل کے ساتھ قرآن پاک مکمل
          حفظ کرایا جاتا ہے۔
        </p>
      </div>

      {/* Timeline Style Layout */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-green-200 rounded"></div>

        <div className="space-y-12">
          {years.map((year, i) => (
            <div
              key={year.id}
              className={`relative flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-2 md:left-1/2 transform -translate-x-1/2 bg-green-600 w-6 h-6 rounded-full border-4 border-white shadow"></div>

              {/* Card */}
              <div
                className={`w-full md:w-1/2 p-6 bg-white border rounded-2xl shadow-md transition hover:shadow-lg ${
                  i % 2 === 0 ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                }`}
              >
                <h3 className="flex items-center gap-2 text-xl font-bold text-green-700 mb-4">
                  <BookOpen className="w-5 h-5 text-yellow-500" />
                  {year.title}
                </h3>

                <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  <li>
                    <span className="font-semibold text-green-800">سبق: </span>
                    {year.sabaq}
                  </li>
                  <li>
                    <span className="font-semibold text-green-800">سبقی: </span>
                    {year.sabaqi}
                  </li>
                  <li>
                    <span className="font-semibold text-green-800">منزل: </span>
                    {year.manzil}
                  </li>
                  <li>
                    <span className="font-semibold text-green-800">
                      کل مقدار:{" "}
                    </span>
                    {year.length}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
