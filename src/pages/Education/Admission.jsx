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
