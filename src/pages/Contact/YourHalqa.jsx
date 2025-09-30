// src/components/ApKaHalqa.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Clock } from "lucide-react";
import bg from "../../assets/bg.avif";
import bg3 from "../../assets/bg3.avif";
import placeholder from "../../assets/logo.avif";

const halqaat = [
  {
    id: 1,
    city: "اسلام آباد",
    area: "G-10",
    number: "Halqa-01",
    markaz: "Markaz Islamabad",
    location: "G-10 Markazi Masjid",
    contact: "0300-1234567",
    ameer: "مولانا احمد",
    coords: { lat: 33.6844, lng: 73.0479 },
    image: bg,
    hours: "روزانہ: بعد نماز عصر",
  },
  {
    id: 2,
    city: "لاہور",
    area: "Model Town",
    number: "Halqa-02",
    markaz: "Markaz Lahore",
    location: "Model Town B Masjid",
    contact: "0302-3456789",
    ameer: "مولانا قاسم",
    coords: { lat: 31.5204, lng: 74.3587 },
    image: bg3,
    hours: "اتوار: 10am - 1pm",
  },
];

const googleMapsSrc = (lat, lng, zoom = 15) =>
  `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

export default function ApKaHalqa() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedHalqa, setSelectedHalqa] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dialogRef = useRef(null);

  const cities = [...new Set(halqaat.map((h) => h.city))];
  const filteredHalqaat = halqaat.filter((h) => h.city === selectedCity);

  // Close modal with ESC
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
    // <div className="bg-gradient-to-t from-yellow-50 via-white to-emerald-50 py-12 px-4 sm:px-6 lg:px-12">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
              className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b">
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
                {/* Map */}
                <div className="h-64 w-full">
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
              <div className="flex flex-col sm:flex-row gap-3 p-4 border-t">
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
                  className="flex-1 px-4 py-2 rounded-lg border hover:bg-gray-50 text-center transition"
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
