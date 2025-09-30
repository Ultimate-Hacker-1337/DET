// src/components/ApKaHalqa.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { X, MapPin, Phone, Clock, ExternalLink } from "lucide-react";

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
    image: "assets/bg.jpg",
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
    image: "assets/bg3.jpg",
    hours: "اتوار: 10am - 1pm",
  },
  // ... باقی
];

const googleMapsSrc = (lat, lng, zoom = 15) =>
  `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

export default function ApKaHalqa() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedHalqa, setSelectedHalqa] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dialogRef = useRef(null);

  // unique cities
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
    <div className="bg-gradient-to-t from-yellow-50 via-white to-emerald-50 py-10 px-4 sm:px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-emerald-800 mb-8">
        آپ کا حلقہ
      </h2>

      {/* City Select */}
      <div className="max-w-md mx-auto mb-5">
        <label className="block mb-2 font-medium text-slate-700">
          شہر منتخب کریں:
        </label>
        <select
          className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500"
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
        <div className="max-w-md mx-auto mb-8">
          <label className="block mb-2 font-medium text-slate-700">
            علاقہ منتخب کریں:
          </label>
          <select
            className="w-full border rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-emerald-500"
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

      {/* Halqa Details */}
      {selectedHalqa && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border"
        >
          {/* Image */}
          <div className="h-52 sm:h-64 overflow-hidden">
            <img
              src={selectedHalqa.image || "src/assets/placeholder.jpg"}
              alt={selectedHalqa.area}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="p-5 space-y-3 text-sm sm:text-base">
            <h3 className="text-xl font-bold text-slate-900">
              {selectedHalqa.area}{" "}
              <span className="text-emerald-600">({selectedHalqa.number})</span>
            </h3>
            <p className="text-slate-700">{selectedHalqa.markaz}</p>

            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4" /> {selectedHalqa.location}
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="w-4 h-4" /> {selectedHalqa.contact}
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-4 h-4" /> {selectedHalqa.hours}
            </div>
            <p>
              <strong>امیر:</strong> {selectedHalqa.ameer}
            </p>

            <div className="flex gap-3 pt-3">
              <button
                onClick={() => setShowModal(true)}
                className="flex-1 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
              >
                مزید معلومات
              </button>
              <a
                href={`tel:${selectedHalqa.contact}`}
                className="flex-1 px-4 py-2 rounded-lg border hover:bg-gray-50 text-center"
              >
                کال کریں
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Modal */}
      {showModal && selectedHalqa && (
        <div
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
            className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-bold text-slate-900">
                {selectedHalqa.area} ({selectedHalqa.number})
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

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

            {/* Footer buttons */}
            <div className="flex gap-3 p-4">
              <button
                onClick={() =>
                  openDirections(
                    selectedHalqa.coords.lat,
                    selectedHalqa.coords.lng
                  )
                }
                className="flex-1 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
              >
                راستہ
              </button>
              <a
                href={`tel:${selectedHalqa.contact}`}
                className="flex-1 px-4 py-2 rounded-lg border hover:bg-gray-50 text-center"
              >
                کال کریں
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}