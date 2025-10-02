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
    <div className="min-h-screen bg-gradient-to-t from-yellow-50 via-white to-emerald-50 py-8 px-4 sm:px-6 lg:px-12 flex flex-col">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-emerald-800 mb-6">
        اپنا حلقہ معلوم کریں
      </h2>

      {/* Inputs */}
      <div className="max-w-3xl mx-auto w-full bg-white p-4 rounded-2xl shadow-sm">
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Country */}
          <div className="sm:col-span-1">
            <label className="block mb-2 font-medium text-slate-700">ملک</label>
            <select
              className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={selectedCountryId}
              onChange={(e) => {
                setSelectedCountryId(e.target.value);
                setCityInput("");
                setTownInput("");
                setSearchResults([]);
                setErrorMsg("");
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

          {/* City (input with datalist) */}
          <div className="sm:col-span-1">
            <label className="block mb-2 font-medium text-slate-700">شہر (ٹائپ کریں)</label>
            <input
              list="citiesList"
              className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              placeholder="مثلاً: اسلام آباد"
              value={cityInput}
              onChange={(e) => {
                setCityInput(e.target.value);
                setSearchResults([]);
                setErrorMsg("");
              }}
              disabled={!selectedCountry}
            />
            <datalist id="citiesList">
              {availableCities.map((name, i) => (
                <option key={i} value={name} />
              ))}
            </datalist>
          </div>

          {/* Town (input with datalist) */}
          <div className="sm:col-span-1">
            <label className="block mb-2 font-medium text-slate-700">علاقہ / ٹاؤن (ٹائپ کریں)</label>
            <input
              list="townsList"
              className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              placeholder="مثلاً: جی-10"
              value={townInput}
              onChange={(e) => {
                setTownInput(e.target.value);
                setSearchResults([]);
                setErrorMsg("");
              }}
              disabled={!selectedCountry}
            />
            <datalist id="townsList">
              {availableTowns.map((t, i) => (
                <option key={i} value={t} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Search button and message */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 items-stretch">
          <button
            onClick={handleSearch}
            className="px-5 py-3 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 transition flex-1"
          >
            دریافت کریں
          </button>
          <button
            onClick={() => {
              setSelectedCountryId("");
              setCityInput("");
              setTownInput("");
              setSearchResults([]);
              setErrorMsg("");
            }}
            className="px-5 py-3 border rounded-xl hover:bg-gray-50 transition"
          >
            صاف کریں
          </button>
        </div>

        {errorMsg && <p className="mt-3 text-sm text-rose-600">{errorMsg}</p>}
      </div>

      {/* Results */}
      <div className="max-w-3xl mx-auto w-full mt-6 space-y-4">
        {searchResults.length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">ملا ہوا حلقہ (نتائج):</h3>
            <div className="grid gap-4">
              <AnimatePresence>
                {searchResults.map((h) => (
                  <motion.div
                    key={h.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="bg-white rounded-2xl shadow border overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-48 h-36 overflow-hidden">
                        <img src={getImageForHalka(h.id)} alt={h.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-md font-bold text-slate-900">{h.name}</h4>
                            <p className="text-slate-700 text-sm mt-1">{h.mapLocation}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-slate-600 text-sm"><strong>امیر:</strong></p>
                            <p className="text-slate-900 font-medium">{h.ameer}</p>
                            <p className="text-slate-600 text-sm mt-2"><strong>اوقات:</strong></p>
                            <p className="text-slate-900 font-medium">{h.timing}</p>
                          </div>
                        </div>

                        <div className="mt-3 text-sm text-slate-700">
                          <strong>شہروں میں:</strong>{" "}
                          <span className="text-slate-600">
                            {h.cities.map((c) => c.name).join("، ")}
                          </span>
                        </div>

                        <div className="mt-4 flex gap-3">
                          <button
                            onClick={() => openDetails(h)}
                            className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
                          >
                            مزید معلومات
                          </button>
                          <a
                            href={`tel:${h.contact || ""}`}
                            className="px-4 py-2 rounded-lg border text-center hover:bg-gray-50 transition"
                          >
                            کال کریں
                          </a>
                          <button
                            onClick={() => openDirections(h.marker.lat, h.marker.lng)}
                            className="px-4 py-2 rounded-lg border text-center hover:bg-gray-50 transition"
                          >
                            راستہ
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          // If no results and user already searched (errorMsg handles empty case), show helpful tip
          selectedCountry && !errorMsg && (
            <div className="text-slate-600 text-sm">
              اوپر اپنا شہر اور علاقہ درج کریں پھر "دریافت کریں" پر کلک کریں — نتائج نیچے ظاہر ہوں گے۔
            </div>
          )
        )}
      </div>

      {/* Modal for selected halka */}
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
                <div className="h-44 sm:h-56 md:h-64">
                  <img
                    src={getImageForHalka(selectedHalka.id)}
                    alt={selectedHalka.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 space-y-3 text-sm sm:text-base">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Home className="w-4 h-4" />
                    <span className="font-medium">ملک:</span>{" "}
                    <span className="mr-2">
                      {countries.find((c) =>
                        c.halkas.some((h) => h.id === selectedHalka.id)
                      )?.name || ""}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">مقام:</span>{" "}
                    {selectedHalka.mapLocation}
                  </div>

                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">رابطہ:</span>{" "}
                    {selectedHalka.contact || "ن/ا"}
                  </div>

                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">اوقاتِ ملاقات:</span>{" "}
                    {selectedHalka.timing}
                  </div>

                  <div className="flex items-center gap-2 text-slate-700">
                    <User className="w-4 h-4" />
                    <span className="font-medium">امیر:</span>{" "}
                    {selectedHalka.ameer}
                  </div>

                  {selectedHalka.notes && (
                    <p className="text-slate-600">
                      <strong>نوٹس:</strong> {selectedHalka.notes}
                    </p>
                  )}

                  <div>
                    <h4 className="font-semibold mb-2">شہروں اور علاقوں کی تفصیل:</h4>
                    <div className="space-y-3">
                      {selectedHalka.cities.map((ct) => (
                        <div key={ct.id} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-slate-800">
                              {ct.name}
                            </div>
                          </div>
                          <div className="mt-2 text-slate-600">
                            <strong>علاقے:</strong> {ct.towns.join("، ")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 h-56 w-full border rounded-md overflow-hidden">
                    <iframe
                      src={googleMapsSrc(
                        selectedHalka.marker.lat,
                        selectedHalka.marker.lng
                      )}
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
                    openDirections(
                      selectedHalka.marker.lat,
                      selectedHalka.marker.lng
                    )
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

      {/* helper note */}
      <div className="max-w-3xl mx-auto mt-6 text-slate-500 text-sm">
        <p>
          نوٹ: یہ تلاش لفظی مماثلت کی بنیاد پر ہے — اگر آپ کا شہر یا علاقہ بالکل اسی
          رسمِ املاء میں نہ ملا تو قریبی یا جزوی نام آزما کر دیکھیں۔
        </p>
      </div>
    </div>
  );
}
