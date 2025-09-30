// src/components/Halqaat.jsx
import React from "react";
import { Phone, Clock, User } from "lucide-react";

const halqaatData = [
  {
    country: "پاکستان",
    cities: [
      {
        name: "اسلام آباد",
        halqaat: [
          {
            id: 1,
            name: "Halqa-01",
            area: "G-10",
            markaz: "Markaz Islamabad",
            ameer: "مولانا احمد",
            contact: "0300-1234567",
            location: "G-10 مرکزی مسجد",
            hours: "روزانہ: بعد نماز عصر",
          },
          {
            id: 2,
            name: "Halqa-02",
            area: "F-8",
            markaz: "Markaz Islamabad",
            ameer: "مولانا زبیر",
            contact: "0301-2345678",
            location: "F-8 جامع مسجد",
            hours: "جمعرات: بعد نماز عشاء",
          },
        ],
      },
      {
        name: "لاہور",
        halqaat: [
          {
            id: 3,
            name: "Halqa-03",
            area: "Model Town",
            markaz: "Markaz Lahore",
            ameer: "مولانا قاسم",
            contact: "0302-3456789",
            location: "Model Town B مسجد",
            hours: "اتوار: 10am - 1pm",
          },
          {
            id: 4,
            name: "Halqa-04",
            area: "Iqbal Town",
            markaz: "Markaz Lahore",
            ameer: "مولانا سلیم",
            contact: "0303-4567890",
            location: "Iqbal Town مرکزی مسجد",
            hours: "جمعہ: بعد نماز مغرب",
          },
        ],
      },
    ],
  },
];

export default function Halqaat() {
  return (
    <div className="bg-gradient-to-t from-yellow-50 via-white to-emerald-50 py-10 px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-emerald-800 mb-12">
        تمام حلقات
      </h2>

      {halqaatData.map((country) => (
        <div key={country.country} className="space-y-12">
          {/* Country */}
          <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-800">
            {country.country}
          </h3>

          {country.cities.map((city) => (
            <div key={city.name} className="space-y-8">
              {/* City Heading */}
              <h4 className="text-xl md:text-2xl font-semibold text-emerald-700 border-b-2 border-emerald-200 pb-2">
                {city.name}
              </h4>

              {/* Halqa Cards */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {city.halqaat.map((h) => (
                  <div
                    key={h.id}
                    className="bg-white rounded-xl shadow-md border hover:shadow-lg transition-all p-5 space-y-3"
                  >
                    <h5 className="font-bold text-lg text-emerald-700">
                      {h.area}{" "}
                      <span className="text-slate-500">({h.name})</span>
                    </h5>
                    <p className="text-sm text-slate-600">{h.markaz}</p>

                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-emerald-600" />
                        <span>
                          <strong>امیر:</strong> {h.ameer}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-emerald-600" />
                        <span>{h.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span>{h.hours}</span>
                      </div>
                      <p className="text-slate-600">
                        <strong>مقام:</strong> {h.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
