// src/components/ApKaHalqa.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Clock, User, Home } from "lucide-react";
import bg from "../../assets/bg.avif";
import bg3 from "../../assets/bg3.avif";
import placeholder from "../../assets/logo.avif";

// Halqaat Data
const halqaat = [
  {
    id: 1,
    city: "مظفرآباد",
    area: "پتیکا",
    number: "Halqa-01",
    markaz: "Markaz مظفرآباد",
    location: "پتیکا مرکزی مسجد",
    contact: "0300-1111111",
    ameer: "مولانا احمد",
    coords: { lat: 34.371, lng: 73.471 },
    image: bg,
    hours: "روزانہ: بعد نماز عصر",
  },
  {
    id: 2,
    city: "مظفرآباد",
    area: "گڑھی دوپٹہ",
    number: "Halqa-02",
    markaz: "Markaz مظفرآباد",
    location: "گڑھی دوپٹہ جامع مسجد",
    contact: "0301-2222222",
    ameer: "مولانا بلال",
    coords: { lat: 34.291, lng: 73.561 },
    image: bg3,
    hours: "جمعہ: بعد نماز جمعہ",
  },
  {
    id: 3,
    city: "نیلم",
    area: "شاردہ",
    number: "Halqa-03",
    markaz: "Markaz نیلم",
    location: "شاردہ مرکزی جامع مسجد",
    contact: "0302-3333333",
    ameer: "مولانا قاسم",
    coords: { lat: 34.807, lng: 74.354 },
    image: bg,
    hours: "اتوار: 10am - 1pm",
  },
  {
    id: 4,
    city: "نیلم",
    area: "کیل",
    number: "Halqa-04",
    markaz: "Markaz نیلم",
    location: "کیل جامع مسجد",
    contact: "0303-4444444",
    ameer: "مولانا زاہد",
    coords: { lat: 34.823, lng: 74.081 },
    image: bg3,
    hours: "بدھ: بعد نماز عشاء",
  },
  {
    id: 5,
    city: "باغ",
    area: "ریڑہ",
    number: "Halqa-05",
    markaz: "Markaz باغ",
    location: "ریڑہ جامع مسجد",
    contact: "0304-5555555",
    ameer: "مولانا عثمان",
    coords: { lat: 33.977, lng: 73.764 },
    image: bg,
    hours: "جمعرات: بعد نماز مغرب",
  },
  {
    id: 6,
    city: "پونچھ",
    area: "راولاکوٹ",
    number: "Halqa-06",
    markaz: "Markaz پونچھ",
    location: "راولاکوٹ مرکزی مسجد",
    contact: "0305-6666666",
    ameer: "مولانا طاہر",
    coords: { lat: 33.857, lng: 73.764 },
    image: bg3,
    hours: "ہفتہ: بعد نماز فجر",
  },
  {
    id: 7,
    city: "سدھنوتی",
    area: "پلندری",
    number: "Halqa-07",
    markaz: "Markaz سدھنوتی",
    location: "پلندری جامع مسجد",
    contact: "0306-7777777",
    ameer: "مولانا عدنان",
    coords: { lat: 33.717, lng: 73.683 },
    image: bg,
    hours: "روزانہ: بعد نماز عشاء",
  },
  {
    id: 8,
    city: "کوٹلی",
    area: "کھوئی رٹہ",
    number: "Halqa-08",
    markaz: "Markaz کوٹلی",
    location: "کھوئی رٹہ جامع مسجد",
    contact: "0307-8888888",
    ameer: "مولانا امجد",
    coords: { lat: 33.515, lng: 74.078 },
    image: bg3,
    hours: "منگل: بعد نماز عصر",
  },
  {
    id: 9,
    city: "میرپور",
    area: "چکسواری",
    number: "Halqa-09",
    markaz: "Markaz میرپور",
    location: "چکسواری جامع مسجد",
    contact: "0308-9999999",
    ameer: "مولانا انیس",
    coords: { lat: 33.133, lng: 73.75 },
    image: bg,
    hours: "جمعہ: بعد نماز عشاء",
  },
  {
    id: 10,
    city: "بھمبر",
    area: "برنالہ",
    number: "Halqa-10",
    markaz: "Markaz بھمبر",
    location: "برنالہ مرکزی جامع مسجد",
    contact: "0309-1010101",
    ameer: "مولانا فہد",
    coords: { lat: 32.976, lng: 74.078 },
    image: bg3,
    hours: "اتوار: بعد نماز عصر",
  },
];

// Google Maps Embed
const googleMapsSrc = (lat, lng, zoom = 15) =>
  `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

export default function ApKaHalqa() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedHalqa, setSelectedHalqa] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dialogRef = useRef(null);

  const cities = [...new Set(halqaat.map((h) => h.city))];
  const filteredHalqaat = halqaat.filter((h) => h.city === selectedCity);

  // ESC to close modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openDirections = useCallback((lat, lng) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank"
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-t from-yellow-50 via-white to-emerald-50 py-12 px-4 sm:px-6 lg:px-12 flex flex-col">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-emerald-800 mb-10">
        آپ کا حلقہ
      </h2>

      {/* City Select */}
      <div className="max-w-md mx-auto mb-6">
        <label className="block mb-2 font-medium text-slate-700">
          شہر منتخب کریں:
        </label>
        <select
          className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
            setSelectedHalqa(null);
          }}
        >
          <option value="">--- شہر منتخب کریں ---</option>
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* Area Select */}
      {selectedCity && (
        <div className="max-w-md mx-auto mb-10">
          <label className="block mb-2 font-medium text-slate-700">
            علاقہ منتخب کریں:
          </label>
          <select
            className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            value={selectedHalqa?.id || ""}
            onChange={(e) =>
              setSelectedHalqa(
                filteredHalqaat.find((h) => h.id === Number(e.target.value))
              )
            }
          >
            <option value="">--- علاقہ منتخب کریں ---</option>
            {filteredHalqaat.map((h) => (
              <option key={h.id} value={h.id}>
                {h.area} ({h.number})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Halqa Card */}
      <AnimatePresence>
        {selectedHalqa && (
          <motion.div
            key={selectedHalqa.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border"
          >
            {/* Image */}
            <div className="h-52 sm:h-64 md:h-72 overflow-hidden">
              <img
                src={selectedHalqa.image || placeholder}
                alt={selectedHalqa.area}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-6 space-y-3 text-sm sm:text-base">
              <h3 className="text-xl font-bold text-slate-900">
                {selectedHalqa.area}{" "}
                <span className="text-emerald-600">({selectedHalqa.number})</span>
              </h3>
              <p className="text-slate-700">{selectedHalqa.markaz}</p>

              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 shrink-0" /> {selectedHalqa.location}
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 shrink-0" /> {selectedHalqa.contact}
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Clock className="w-4 h-4 shrink-0" /> {selectedHalqa.hours}
              </div>
              <p>
                <strong>امیر:</strong> {selectedHalqa.ameer}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="flex-1 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
                >
                  مزید معلومات
                </button>
                <a
                  href={`tel:${selectedHalqa.contact}`}
                  className="flex-1 px-4 py-2 rounded-lg border hover:bg-gray-50 text-center transition"
                >
                  کال کریں
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {showModal && selectedHalqa && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            ref={dialogRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b bg-emerald-50">
                <h3 className="text-lg font-bold text-slate-900 truncate">
                  {selectedHalqa.area} ({selectedHalqa.number})
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto">
                {/* Image */}
                <div className="h-40 sm:h-56 md:h-64">
                  <img
                    src={selectedHalqa.image || placeholder}
                    alt={selectedHalqa.area}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-5 space-y-3 text-sm sm:text-base">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Home className="w-4 h-4 shrink-0" />
                    <span className="font-medium">شہر:</span>{" "}
                    {selectedHalqa.city}
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="font-medium">مقام:</span>{" "}
                    {selectedHalqa.location}
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span className="font-medium">رابطہ:</span>{" "}
                    {selectedHalqa.contact}
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span className="font-medium">اوقات:</span>{" "}
                    {selectedHalqa.hours}
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <User className="w-4 h-4 shrink-0" />
                    <span className="font-medium">امیر:</span>{" "}
                    {selectedHalqa.ameer}
                  </div>
                  <p className="text-slate-600">
                    <strong>مرکز:</strong> {selectedHalqa.markaz}
                  </p>
                </div>

                {/* Map */}
                <div className="h-56 w-full border-t">
                  <iframe
                    src={googleMapsSrc(
                      selectedHalqa.coords.lat,
                      selectedHalqa.coords.lng
                    )}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Footer buttons */}
              <div className="flex flex-col sm:flex-row gap-3 p-4 border-t bg-gray-50">
                <button
                  onClick={() =>
                    openDirections(
                      selectedHalqa.coords.lat,
                      selectedHalqa.coords.lng
                    )
                  }
                  className="flex-1 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
                >
                  راستہ
                </button>
                <a
                  href={`tel:${selectedHalqa.contact}`}
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
      
