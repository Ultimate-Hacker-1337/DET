// src/components/ApKaHalqa.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Clock, User, Home } from "lucide-react";
import bg from "../../assets/bg.avif";
import bg3 from "../../assets/bg3.avif";
import placeholder from "../../assets/logo.avif";

/**
 * نوٹ:
 * - تمام دکھنے والی ٹیکسٹس اردو میں ہیں۔
 * - تصاویر: صرف bg اور bg3 استعمال ہو رہی ہیں۔
 * - اگر آپ الگ JSON فائل رکھنا چاہیں تو اس array کو باہر نکال کر import کریں۔
 */

/* ---------------------------
   ڈیٹا (Urdu)
   countries -> halkas -> cities -> towns
   --------------------------- */
const data = {
  countries: [
    {
      id: 1,
      name: "پاکستان",
      halkas: [
        {
          id: 1,
          name: "حلقہ-01",
          ameer: "مولانا احمد",
          timing: "روزانہ: بعد نماز عصر",
          marker: { lat: 33.6844, lng: 73.0479 },
          mapLocation: "جامع مسجد المحمود، جی-10 اسلام آباد",
          contact: "0300-1111111",
          notes: "یہ حلقہ اسلام آباد اور نزدیکہ علاقوں کو کور کرتا ہے۔",
          cities: [
            {
              id: 1,
              name: "اسلام آباد",
              towns: ["جی-10", "جی-11", "جی-12", "آئی-8", "آئی-9", "آئی-10", "ممتاز سٹی"]
            },
            {
              id: 2,
              name: "راولپنڈی",
              towns: ["سدر", "چاندنی چوک", "کمیٹی چوک", "ٹینچ بھٹہ"]
            }
          ]
        },
        {
          id: 2,
          name: "حلقہ-02",
          ameer: "مولانا بلال",
          timing: "جمعہ: بعد نماز عشاء",
          marker: { lat: 34.0151, lng: 71.5249 },
          mapLocation: "جامع مسجد قصابان، پشاور",
          contact: "0301-2222222",
          notes: "پشاور اور قریبی علاقے",
          cities: [
            {
              id: 3,
              name: "پشاور",
              towns: ["یونیورسٹی ٹاؤن", "حیات آباد", "کوہاتی گیٹ"]
            },
            {
              id: 4,
              name: "چارسدہ",
              towns: ["اُتمانزئی", "رجّڑ"]
            }
          ]
        },
        {
          id: 3,
          name: "حلقہ-03",
          ameer: "مولانا قاسم",
          timing: "اتوار: 10am - 1pm",
          marker: { lat: 24.8607, lng: 67.0011 },
          mapLocation: "جامع مسجد طیبہ، کراچی",
          contact: "0302-3333333",
          notes: "کراچی کے مختلف علاقوں کا حلقہ",
          cities: [
            {
              id: 5,
              name: "کراچی",
              towns: ["ناظم آباد", "کورنگی", "گلشنِ اقبال", "لائنڈی"]
            }
          ]
        },
        {
          id: 4,
          name: "حلقہ-04",
          ameer: "مولانا سلیم",
          timing: "ہفتہ: بعد نماز مغرب",
          marker: { lat: 32.0836, lng: 72.6711 },
          mapLocation: "مرکز جامع مسجد، سرگودھا",
          contact: "0303-4444444",
          notes: "سرگودھا اور آس پاس",
          cities: [
            {
              id: 6,
              name: "سرگودھا",
              towns: ["سیٹلائٹ ٹاؤن", "کوٹ فرید", "جناح کالونی"]
            }
          ]
        },
        {
          id: 5,
          name: "حلقہ-05",
          ameer: "مولانا یوسف",
          timing: "پیر: بعد نماز عشاء",
          marker: { lat: 31.5204, lng: 74.3587 },
          mapLocation: "مرکز جامع مسجد، لاہور",
          contact: "0304-5555555",
          notes: "لاہور حلقہ",
          cities: [
            {
              id: 7,
              name: "لاہور",
              towns: ["ماڈل ٹاؤن", "اقبال ٹاؤن", "جوہر ٹاؤن", "شاہدرہ"]
            }
          ]
        },
        {
          id: 6,
          name: "حلقہ-06",
          ameer: "مولانا عارف",
          timing: "منگل: بعد نماز مغرب",
          marker: { lat: 30.1575, lng: 71.5249 },
          mapLocation: "جامع مسجد خیرالمدارس، ملتان",
          contact: "0305-6666666",
          notes: "ملتان کا علاقہ",
          cities: [
            {
              id: 8,
              name: "ملتان",
              towns: ["کینٹ", "نیو ملتان", "شاہ رکنِ عالم"]
            }
          ]
        },
        {
          id: 7,
          name: "حلقہ-07",
          ameer: "مولانا طارق",
          timing: "جمعرات: بعد نماز عشاء",
          marker: { lat: 31.5820, lng: 73.0551 },
          mapLocation: "جامع مسجد مدینہ، فیصل آباد",
          contact: "0306-7777777",
          notes: "فیصل آباد اور گردونواح",
          cities: [
            {
              id: 9,
              name: "فیصل آباد",
              towns: ["جناح کالونی", "پیپلز کالونی", "مدینہ ٹاؤن"]
            }
          ]
        }
      ]
    },

    {
      id: 2,
      name: "ملائیشیا",
      halkas: [
        {
          id: 1,
          name: "حلقہ-01",
          ameer: "استاذ احمد",
          timing: "جمعہ: 7pm",
          marker: { lat: 3.1390, lng: 101.6869 },
          mapLocation: "مسجد نگارا، کوالالمپور",
          contact: "+60-300-000000",
          notes: "نمونہ حلقہ (ملائیشیا)",
          cities: [
            {
              id: 1,
              name: "کوالالمپور",
              towns: ["بکِت بنتانگ"]
            }
          ]
        }
      ]
    },

    {
      id: 3,
      name: "جنوبی افریقہ",
      halkas: [
        {
          id: 1,
          name: "حلقہ-01",
          ameer: "شیخ موسیٰ",
          timing: "اتوار: ظہر کے بعد",
          marker: { lat: -26.2041, lng: 28.0473 },
          mapLocation: "مسجد النور، جوہانسبرگ",
          contact: "+27-11-000-0000",
          notes: "نمونہ حلقہ (جنوبی افریقہ)",
          cities: [
            {
              id: 1,
              name: "جوہانسبرگ",
              towns: ["سینڈٹن"]
            }
          ]
        }
      ]
    }
  ]
};

/* ---------------------------
   Utilities
   --------------------------- */
const googleMapsSrc = (lat, lng, zoom = 15) =>
  `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

/* ---------------------------
   Component
   --------------------------- */
export default function ApKaHalqa() {
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [selectedHalkaId, setSelectedHalkaId] = useState("");
  const [selectedCityId, setSelectedCityId] = useState("");
  const [selectedTown, setSelectedTown] = useState("");
  const [selectedHalka, setSelectedHalka] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dialogRef = useRef(null);

  // Derived lists
  const countries = data.countries;
  const selectedCountry = countries.find((c) => c.id === Number(selectedCountryId)) || null;
  const halkas = selectedCountry ? selectedCountry.halkas : [];
  const selectedHalkaObj = halkas.find((h) => h.id === Number(selectedHalkaId)) || null;
  const cities = selectedHalkaObj ? selectedHalkaObj.cities : [];
  const selectedCityObj = cities.find((ct) => ct.id === Number(selectedCityId)) || null;
  const towns = selectedCityObj ? selectedCityObj.towns : [];

  // Close modal with ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // update selectedHalka (for card/modal) whenever halka selection changes
  useEffect(() => {
    setSelectedHalka(selectedHalkaObj);
  }, [selectedHalkaObj]);

  const openDirections = useCallback((lat, lng) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank"
    );
  }, []);

  // pick image (bg/bg3 alternation)
  const getImageForHalka = (halkaId) => {
    if (!halkaId) return placeholder;
    return halkaId % 2 === 1 ? bg : bg3;
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-yellow-50 via-white to-emerald-50 py-8 px-4 sm:px-6 lg:px-12 flex flex-col">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-emerald-800 mb-8">
        آپ کا حلقہ
      </h2>

      {/* Dropdowns */}
      <div className="max-w-3xl w-full mx-auto grid gap-4 sm:grid-cols-2">
        {/* Country */}
        <div>
          <label className="block mb-2 font-medium text-slate-700">ملک منتخب کریں:</label>
          <select
            className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            value={selectedCountryId}
            onChange={(e) => {
              setSelectedCountryId(e.target.value);
              setSelectedHalkaId("");
              setSelectedCityId("");
              setSelectedTown("");
              setSelectedHalka(null);
            }}
          >
            <option value="">--- ملک منتخب کریں ---</option>
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Halka */}
        <div>
          <label className="block mb-2 font-medium text-slate-700">حلقہ منتخب کریں:</label>
          <select
            className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            value={selectedHalkaId}
            onChange={(e) => {
              setSelectedHalkaId(e.target.value);
              setSelectedCityId("");
              setSelectedTown("");
            }}
            disabled={!selectedCountry}
          >
            <option value="">--- حلقہ منتخب کریں ---</option>
            {halkas.map((h) => (
              <option key={h.id} value={h.id}>
                {h.name} — {h.mapLocation}
              </option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block mb-2 font-medium text-slate-700">شہر منتخب کریں:</label>
          <select
            className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            value={selectedCityId}
            onChange={(e) => {
              setSelectedCityId(e.target.value);
              setSelectedTown("");
            }}
            disabled={!selectedHalkaObj}
          >
            <option value="">--- شہر منتخب کریں ---</option>
            {cities.map((ct) => (
              <option key={ct.id} value={ct.id}>
                {ct.name}
              </option>
            ))}
          </select>
        </div>

        {/* Town */}
        <div>
          <label className="block mb-2 font-medium text-slate-700">علاقہ / ٹاؤن منتخب کریں:</label>
          <select
            className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            value={selectedTown}
            onChange={(e) => setSelectedTown(e.target.value)}
            disabled={!selectedCityObj}
          >
            <option value="">--- علاقہ منتخب کریں ---</option>
            {towns.map((t, i) => (
              <option key={i} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Halka Card */}
      <div className="mt-8 max-w-3xl mx-auto w-full">
        <AnimatePresence>
          {selectedHalka && (
            <motion.div
              key={selectedHalka.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border"
            >
              {/* Image */}
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={getImageForHalka(selectedHalka.id)}
                  alt={selectedHalka.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-5 space-y-3 text-sm sm:text-base">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {selectedHalka.name} — <span className="text-emerald-600">{selectedCountry?.name}</span>
                    </h3>
                    <p className="text-slate-700 mt-1">{selectedHalka.mapLocation}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-slate-600 text-sm"><strong>امیر:</strong></p>
                    <p className="text-slate-900 font-medium">{selectedHalka.ameer}</p>
                    <p className="mt-2 text-slate-600 text-sm"><strong>اوقات:</strong></p>
                    <p className="text-slate-900 font-medium">{selectedHalka.timing}</p>
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-3">
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4" /> {selectedHalka.mapLocation}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="w-4 h-4" /> {selectedHalka.contact || "ن/ا"}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" /> {selectedHalka.timing}
                  </div>
                </div>

                {/* Cities / Towns preview */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-2">شہر اور علاقے:</h4>
                  <ul className="list-disc list-inside text-slate-700 space-y-1">
                    {selectedHalka.cities.map((ct) => (
                      <li key={ct.id}>
                        <strong>{ct.name}:</strong>{" "}
                        <span className="text-slate-600">{ct.towns.join("، ")}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <button
                    onClick={() => setShowModal(true)}
                    className="flex-1 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
                  >
                    مزید معلومات
                  </button>
                  <a
                    href={`tel:${selectedHalka.contact || ""}`}
                    className="flex-1 px-4 py-2 rounded-lg border text-center hover:bg-gray-50 transition"
                  >
                    کال کریں
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedHalka && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            ref={dialogRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          >
            {/* overlay */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]"
            >
              {/* header */}
              <div className="flex items-center justify-between p-4 border-b bg-emerald-50">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{selectedHalka.name}</h3>
                  <p className="text-slate-700 text-sm">{selectedHalka.mapLocation}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* content */}
              <div className="flex-1 overflow-y-auto">
                {/* Image */}
                <div className="h-44 sm:h-56 md:h-64">
                  <img
                    src={getImageForHalka(selectedHalka.id)}
                    alt={selectedHalka.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* details */}
                <div className="p-4 space-y-3 text-sm sm:text-base">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Home className="w-4 h-4" />
                    <span className="font-medium">ملک:</span> <span className="mr-2">{selectedCountry?.name}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">مقام:</span> {selectedHalka.mapLocation}
                  </div>

                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">رابطہ:</span> {selectedHalka.contact || "ن/ا"}
                  </div>

                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">اوقاتِ ملاقات:</span> {selectedHalka.timing}
                  </div>

                  <div className="flex items-center gap-2 text-slate-700">
                    <User className="w-4 h-4" />
                    <span className="font-medium">امیر:</span> {selectedHalka.ameer}
                  </div>

                  {selectedHalka.notes && (
                    <p className="text-slate-600"><strong>نوٹس:</strong> {selectedHalka.notes}</p>
                  )}

                  {/* cities & towns (expandable list) */}
                  <div>
                    <h4 className="font-semibold mb-2">شہروں اور علاقوں کی تفصیل:</h4>
                    <div className="space-y-3">
                      {selectedHalka.cities.map((ct) => (
                        <div key={ct.id} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-slate-800">{ct.name}</div>
                          </div>
                          <div className="mt-2 text-slate-600">
                            <strong>علاقے:</strong> {ct.towns.join("، ")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* map */}
                  <div className="mt-3 h-56 w-full border rounded-md overflow-hidden">
                    <iframe
                      src={googleMapsSrc(selectedHalka.marker.lat, selectedHalka.marker.lng)}
                      className="w-full h-full border-0"
                      loading="lazy"
                      title={`${selectedHalka.name} نقشہ`}
                    />
                  </div>
                </div>
              </div>

              {/* footer actions */}
              <div className="flex flex-col sm:flex-row gap-3 p-4 border-t bg-gray-50">
                <button
                  onClick={() =>
                    openDirections(selectedHalka.marker.lat, selectedHalka.marker.lng)
                  }
                  className="flex-1 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
                >
                  راستہ لائیں
                </button>
                <a
                  href={`tel:${selectedHalka.contact || ""}`}
                  className="flex-1 px-4 py-2 rounded-lg border hover:bg-gray-100 text-center transition"
                >
                  کال کریں
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
