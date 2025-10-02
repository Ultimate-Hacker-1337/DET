// src/components/ApKaHalqa.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Clock, Home, User } from "lucide-react";
import bg from "../../assets/bg.avif";
import bg3 from "../../assets/bg3.avif";
import placeholder from "../../assets/logo.avif";

// ✅ JSON Data
const countries = [
  {
    name: "پاکستان",
    halkas: [
      {
        id: "Halqa-01",
        name: "حلقہ ١",
        markaz: "مرکز اسلام آباد",
        mapLocation: "اسلام آباد مرکزی مسجد G-10",
        contact: "0300-1234567",
        ameer: "مولانا احمد",
        timing: "روزانہ: بعد نماز عصر",
        marker: { lat: 33.6844, lng: 73.0479 },
        cities: [
          {
            name: "اسلام آباد",
            towns: ["G-10", "G-11", "G-12", "I-8", "I-9", "I-10", "ممتاز سٹی"]
          },
          {
            name: "راولپنڈی",
            towns: ["سٹی", "صدر", "چکلالہ", "بھرکہو"]
          }
        ]
      },
      {
        id: "Halqa-02",
        name: "حلقہ ٢",
        markaz: "مرکز پشاور",
        mapLocation: "مسجد قاسم علی خان، پشاور",
        contact: "0301-9876543",
        ameer: "مولانا قاسم",
        timing: "اتوار: 10am - 1pm",
        marker: { lat: 34.0151, lng: 71.5249 },
        cities: [
          {
            name: "پشاور",
            towns: ["یونیورسٹی ٹاؤن", "ہشت نگری", "صدر"]
          },
          {
            name: "چارسدہ",
            towns: ["شہیدان", "ترناب"]
          }
        ]
      },
      // 👇 باقی حلقے اسی فارمیٹ میں add کریں
    ],
  },
  { name: "ملائیشیا", halkas: [{ id: "MY-01", name: "حلقہ ملائیشیا" }] },
  { name: "جنوبی افریقہ", halkas: [{ id: "SA-01", name: "حلقہ جنوبی افریقہ" }] },
];

// ✅ Helper
const getImageForHalka = (id) => {
  if (id === "Halqa-01") return bg;
  if (id === "Halqa-02") return bg3;
  return placeholder;
};

export default function ApKaHalqa() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTown, setSelectedTown] = useState("");
  const [selectedHalka, setSelectedHalka] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dialogRef = useRef(null);

  const currentCountry = countries.find((c) => c.name === selectedCountry);
  const cities = currentCountry ? currentCountry.halkas.flatMap((h) => h.cities.map((c) => c.name)) : [];
  const towns = currentCountry && selectedCity
    ? currentCountry.halkas.flatMap((h) =>
        h.cities.find((c) => c.name === selectedCity)?.towns || []
      )
    : [];

  // ✅ ESC key to close modal
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setShowModal(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ✅ Directions
  const openDirections = useCallback((lat, lng) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank"
    );
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-t from-yellow-50 via-white to-emerald-50 py-12 px-4 sm:px-6 lg:px-12 flex flex-col">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-emerald-800 mb-10">
        اپنا حلقہ تلاش کریں
      </h2>

      {/* ملک منتخب کریں */}
      <div className="max-w-md mx-auto mb-6">
        <label className="block mb-2 font-medium text-slate-700">ملک منتخب کریں:</label>
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
            <option key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>

      {/* شہر منتخب کریں */}
      {selectedCountry && (
        <div className="max-w-md mx-auto mb-6">
          <label className="block mb-2 font-medium text-slate-700">شہر منتخب کریں:</label>
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
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      )}

      {/* علاقہ منتخب کریں */}
      {selectedCity && (
        <div className="max-w-md mx-auto mb-6">
          <label className="block mb-2 font-medium text-slate-700">علاقہ منتخب کریں:</label>
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
              <option key={town} value={town}>{town}</option>
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
            <div className="h-52 sm:h-64 md:h-72 overflow-hidden">
              <img
                src={getImageForHalka(selectedHalka.id)}
                alt={selectedHalka.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-3 text-sm sm:text-base">
              <h3 className="text-xl font-bold text-slate-900">
                {selectedHalka.name} <span className="text-emerald-600">({selectedHalka.id})</span>
              </h3>
              <p className="text-slate-700">{selectedHalka.markaz}</p>
              <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-4 h-4" /> {selectedHalka.mapLocation}</div>
              <div className="flex items-center gap-2 text-slate-600"><Phone className="w-4 h-4" /> {selectedHalka.contact || "ن/ا"}</div>
              <div className="flex items-center gap-2 text-slate-600"><Clock className="w-4 h-4" /> {selectedHalka.timing}</div>
              <p><strong>امیر:</strong> {selectedHalka.ameer}</p>

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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-bold text-slate-900 truncate">{selectedHalka.name}</h3>
                <button onClick={() => setShowModal(false)} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="h-44 sm:h-56 md:h-64">
                  <img src={getImageForHalka(selectedHalka.id)} alt={selectedHalka.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 space-y-3 text-sm sm:text-base">
                  <div className="flex items-center gap-2 text-slate-700"><Home className="w-4 h-4" /> <span className="font-medium">ملک:</span> {selectedCountry}</div>
                  <div className="flex items-center gap-2 text-slate-700"><MapPin className="w-4 h-4" /> <span className="font-medium">مقام:</span> {selectedHalka.mapLocation}</div>
                  <div className="flex items-center gap-2 text-slate-700"><Phone className="w-4 h-4" /> <span className="font-medium">رابطہ:</span> {selectedHalka.contact || "ن/ا"}</div>
                  <div className="flex items-center gap-2 text-slate-700"><Clock className="w-4 h-4" /> <span className="font-medium">اوقات:</span> {selectedHalka.timing}</div>
                  <div className="flex items-center gap-2 text-slate-700"><User className="w-4 h-4" /> <span className="font-medium">امیر:</span> {selectedHalka.ameer}</div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row gap-3 p-4 border-t bg-gray-50">
                <button onClick={() => openDirections(selectedHalka.marker.lat, selectedHalka.marker.lng)} className="flex-1 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition">
                  راستہ لائیں
                </button>
                <a href={`tel:${selectedHalka.contact || ""}`} className="flex-1 px-4 py-2 rounded-lg border hover:bg-gray-100 text-center transition">
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
