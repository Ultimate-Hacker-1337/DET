// src/components/ApKaHalqa.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Clock, User, Home } from "lucide-react";
import bg from "../../assets/bg.avif";
import bg3 from "../../assets/bg3.avif";
import placeholder from "../../assets/logo.avif";

/**
 * ApKaHalqa - Updated to focus on "تلاشِ حلقہ" (find your halka)
 * - User: select country, type city (with suggestions), type town (with suggestions), then click "دریافت کریں"
 * - Results: list of halkas that match the city+town within the selected country
 * - All visible text (labels, options) are in Urdu
 */

/* ---------------------------
   DATA (Urdu) — countries -> halkas -> cities -> towns
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
              towns: ["صدر", "چاندنی چوک", "کمیٹی چوک", "ٹینچ بھٹہ"]
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
              towns: ["اُتمانزئی", "رجڑ"]
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
   Helpers
   --------------------------- */
const googleMapsSrc = (lat, lng, zoom = 15) =>
  `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

// normalize string for search (trim)
const normalize = (s) => (s || "").trim();

/* ---------------------------
   Component
   --------------------------- */
export default function ApKaHalqa() {
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [townInput, setTownInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedHalka, setSelectedHalka] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dialogRef = useRef(null);

  // derived
  const countries = data.countries;
  const selectedCountry = countries.find((c) => c.id === Number(selectedCountryId)) || null;

  // gather suggestion lists (unique city names & towns within selected country)
  const availableCities = React.useMemo(() => {
    if (!selectedCountry) return [];
    const set = new Set();
    selectedCountry.halkas.forEach((h) => {
      h.cities.forEach((ct) => set.add(ct.name));
    });
    return Array.from(set);
  }, [selectedCountry]);

  const availableTowns = React.useMemo(() => {
    if (!selectedCountry) return [];
    const set = new Set();
    selectedCountry.halkas.forEach((h) =>
      h.cities.forEach((ct) => ct.towns.forEach((t) => set.add(t)))
    );
    return Array.from(set);
  }, [selectedCountry]);

  // ESC closes modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // search function
  const handleSearch = () => {
    setErrorMsg("");
    const country = selectedCountry;
    const cityQ = normalize(cityInput);
    const townQ = normalize(townInput);

    if (!country) {
      setErrorMsg("براہ کرم ملک منتخب کریں۔");
      setSearchResults([]);
      return;
    }
    if (!cityQ) {
      setErrorMsg("براہ کرم اپنا شہر درج کریں۔");
      setSearchResults([]);
      return;
    }
    if (!townQ) {
      setErrorMsg("براہ کرم اپنا علاقہ / ٹاؤن درج کریں۔");
      setSearchResults([]);
      return;
    }

    // find all halkas in the selected country that have a city matching cityQ and town matching townQ
    const matches = country.halkas.filter((h) =>
      h.cities.some((ct) => {
        const cityMatch = ct.name.includes(cityQ) || cityQ.includes(ct.name) || ct.name === cityQ;
        if (!cityMatch) return false;
        // town match within that city
        return ct.towns.some((t) => t.includes(townQ) || townQ.includes(t) || t === townQ);
      })
    );

    setSearchResults(matches);
    if (matches.length === 0) {
      setErrorMsg("معاف کیجیے — آپ کا حلقہ اس تلاش سے ملتا نہیں۔ براہِ کرم ان پٹ چیک کریں یا قریبی نام آزمائیں۔");
    }
  };

  const openDetails = (halka) => {
    setSelectedHalka(halka);
    setShowModal(true);
  };

  const openDirections = useCallback((lat, lng) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank"
    );
  }, []);

  const getImageForHalka = (halkaId) => {
    if (!halkaId) return placeholder;
    return halkaId % 2 === 1 ? bg : bg3;
  };

return (
  <div className="min-h-screen bg-gradient-to-t from-yellow-50 via-white to-emerald-50 py-12 px-4 sm:px-6 lg:px-12 flex flex-col">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-emerald-800 mb-10">
      اپنا حلقہ تلاش کریں
    </h2>

    {/* Country Select */}
    <div className="max-w-md mx-auto mb-6">
      <label className="block mb-2 font-medium text-slate-700">
        ملک منتخب کریں:
      </label>
      <select
        className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          setSelectedCity("");
          setSelectedTown("");
          setSelectedHalka(null);
        }}
      >
        <option value="">--- ملک منتخب کریں ---</option>
        {countries.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </div>

    {/* City Select */}
    {selectedCountry && (
      <div className="max-w-md mx-auto mb-6">
        <label className="block mb-2 font-medium text-slate-700">
          شہر منتخب کریں:
        </label>
        <select
          className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
            setSelectedTown("");
            setSelectedHalka(null);
          }}
        >
          <option value="">--- شہر منتخب کریں ---</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    )}

    {/* Town Select */}
    {selectedCity && (
      <div className="max-w-md mx-auto mb-6">
        <label className="block mb-2 font-medium text-slate-700">
          علاقہ منتخب کریں:
        </label>
        <select
          className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          value={selectedTown}
          onChange={(e) => {
            setSelectedTown(e.target.value);
            setSelectedHalka(
              currentCountry.halkas.find((h) =>
                h.cities.some(
                  (c) => c.name === selectedCity && c.towns.includes(e.target.value)
                )
              ) || null
            );
          }}
        >
          <option value="">--- علاقہ منتخب کریں ---</option>
          {towns.map((town) => (
            <option key={town} value={town}>
              {town}
            </option>
          ))}
        </select>
      </div>
    )}

    {/* Halka Card */}
    <AnimatePresence>
      {selectedHalka && (
        <motion.div
          key={selectedHalka.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border"
        >
          {/* Image */}
          <div className="h-52 sm:h-64 md:h-72 overflow-hidden">
            <img
              src={getImageForHalka(selectedHalka.id)}
              alt={selectedHalka.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="p-6 space-y-3 text-sm sm:text-base">
            <h3 className="text-xl font-bold text-slate-900">
              {selectedHalka.name}{" "}
              <span className="text-emerald-600">({selectedHalka.id})</span>
            </h3>
            <p className="text-slate-700">{selectedHalka.markaz}</p>

            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4 shrink-0" /> {selectedHalka.mapLocation}
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="w-4 h-4 shrink-0" />{" "}
              {selectedHalka.contact || "ن/ا"}
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-4 h-4 shrink-0" /> {selectedHalka.timing}
            </div>
            <p>
              <strong>امیر:</strong> {selectedHalka.ameer}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => setShowModal(true)}
                className="flex-1 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
              >
                مزید معلومات
              </button>
              <a
                href={`tel:${selectedHalka.contact}`}
                className="flex-1 px-4 py-2 rounded-lg border hover:bg-gray-50 text-center transition"
              >
                کال کریں
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);                
}
