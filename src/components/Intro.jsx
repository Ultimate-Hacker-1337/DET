import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="bg-[#fdf8f3] min-h-screen flex flex-col items-center py-12 px-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-brown-800 mb-2">
        تحریک ایمان و تقویٰ
      </h1>
      <h2 className="text-xl text-brown-700 border-b-2 border-yellow-500 pb-1">
        تعارف
      </h2>

      {/* Image + Text */}
      <div className="mt-8 max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/masjid.jpg"
          alt="Masjid"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
        <p className="text-brown-700 leading-8 text-lg">
          کوہِ کربوغہ شریف، ضلع بنوں، خیبر پختونخوا کی خوبصورت وادی میں واقع
          تحریک ایمان و تقویٰ ایک مقدس ادارہ ہے جو روحانی رہنمائی اور مستند
          اسلامی تعلیم کا امتیاز پیش کرتا ہے۔
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl w-full">
        {/* Vision */}
        <Card className="bg-[#fffaf5] rounded-2xl shadow-md border border-[#ecd9c6]">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Eye className="w-8 h-8 text-brown-700 mb-3" />
            <h3 className="text-xl font-semibold text-brown-800 mb-2">
              ہمارا وژن
            </h3>
            <p className="text-brown-700 text-base">
              روحانی تربیت اور مستند اسلامی اسکلز کے ایک عالمی معیار پیدا جو محبت
              کی حقیقی روایت اور ایمان اور تقویٰ کے اصولوں پر مبنی ہو۔
            </p>
          </CardContent>
        </Card>

        {/* Mission */}
        <Card className="bg-[#fffaf5] rounded-2xl shadow-md border border-[#ecd9c6]">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Target className="w-8 h-8 text-brown-700 mb-3" />
            <h3 className="text-xl font-semibold text-brown-800 mb-2">
              ہمارا مشن
            </h3>
            <p className="text-brown-700 text-base">
              قرآن و سنت کی اصولی تعلیمات کو منظم درس نظامی نصاب کے ذریعے فروغ دینا،
              روحانی تربیت اور اصلاح نفس کے ذریعے ایک عالمی کمیونٹی بنانا جو خدمتِ
              انسانیت کے اصولوں کو محکم کرنے کے لیے وقف ہو۔
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
