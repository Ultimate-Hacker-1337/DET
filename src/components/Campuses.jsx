// // src/pages/Campuses.jsx
// import React, { useState, useCallback, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   MapPin,
//   Phone,
//   Globe,
//   ImageIcon,
//   X,
//   ExternalLink,
//   Clock,
// } from "lucide-react";

// const campuses = [
//   {
//     id: "islamabad",
//     city: "اسلام آباد",
//     region: "Sector F-8/4, Islamabad",
//     contactName: "مولانا علی حسن",
//     phone: "0300-9876543",
//     coords: { lat: 33.6844, lng: 73.0479 },
//     images: [
//       "src/assets/bg3.jpg",
//       "src/assets/bg.jpg",
//     ],
//     hours: "روزانہ: 9am - 9pm",
//     blurb:
//       "تحریک ایمان و تقویٰ کا اسلام آباد مرکز، تعلیمی و روحانی تربیت کے لیے جدید سہولیات کے ساتھ۔",
//   },
//   {
//     id: "lahore",
//     city: "لاہور",
//     region: "جوہر ٹاؤن، لاہور",
//     contactName: "حاجی محمد ادریس",
//     phone: "0321-1122334",
//     coords: { lat: 31.5204, lng: 74.3587 },
//     images: [
//       "src/assets/bg.jpg",
//       "src/assets/bg3.jpg",
//     ],
//     hours: "پیر تا جمعہ: 10am - 6pm",
//     blurb:
//       "لاہور مرکز میں روحانی نشستیں، درس نظامی اور کمیونٹی پروگرامز کا انعقاد کیا جاتا ہے۔",
//   },
//   {
//     id: "karachi",
//     city: "کراچی",
//     region: "گلشنِ اقبال، کراچی",
//     contactName: "مفتی زید عباسی",
//     phone: "0345-5678901",
//     coords: { lat: 24.8607, lng: 67.0011 },
//     images: ["src/assets/bg.jpg"],
//     hours: "روزانہ: 9am - 5pm",
//     blurb:
//       "کراچی مرکز میں تعلیمی کلاسز اور فلاحی خدمات جاری ہیں — مستحقین تک پہنچانے کے منصوبے فعال ہیں۔",
//   },
//   {
//     id: "peshawar",
//     city: "پشاور",
//     region: "حلقہ نمبر 1، مین روڈ پشاور",
//     contactName: "مولانا احمد خان",
//     phone: "0333-1234567",
//     coords: { lat: 34.0151, lng: 71.5249 },
//     images: ["src/assets/bg3.jpg"],
//     hours: "ہفتہ: 10am - 4pm",
//     blurb:
//       "پشاور مرکز مقامی کمیونٹی کی تربیت اور خد مت کے لیے مخصوص پروگرامز چلاتا ہے۔",
//   },
//   {
//     id: "kowand",
//     city: "کونڈ",
//     region: "شباز ٹاؤن، کونڈ",
//     contactName: "مولانا بلال احمد",
//     phone: "0312-3456789",
//     coords: { lat: 34.4, lng: 71.6 },
//     images: ["src/assets/bg3.jpg"],
//     hours: "معمول کے مطابق",
//     blurb:
//       "کونڈ کا مرکز وادی کے قریب واقع ہے اور یہاں روحانی تربیت اور جماعتی سرگرمیاں منعقد ہوتی ہیں۔",
//   },
// ];

// /* Google Maps iframe URL helper */
// const googleMapsSrc = (lat, lng, zoom = 15) =>
//   `https://www.google.com/maps?q=${encodeURIComponent(
//     `${lat},${lng}`
//   )}&z=${zoom}&output=embed`;

// export default function Campuses() {
//   const [query, setQuery] = useState("");
//   const [selected, setSelected] = useState(null);
//   const [activeImage, setActiveImage] = useState(0);
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });
//   const dialogRef = useRef(null);

//   const filtered = campuses.filter((c) => {
//     const matchesQuery =
//       !query ||
//       [c.city, c.region, c.contactName, c.blurb]
//         .join(" ")
//         .toLowerCase()
//         .includes(query.toLowerCase());
//     return matchesQuery;
//   });

//   // close modal with Escape
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") setSelected(null);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   // reset gallery index on modal open
//   useEffect(() => {
//     if (selected && dialogRef.current) dialogRef.current.focus();
//     setActiveImage(0);
//   }, [selected]);

//   const openDirections = useCallback((lat, lng) => {
//     const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
//     window.open(url, "_blank");
//   }, []);

//   return (
//     <div className="bg-gradient-to-t from-blue-50 via-white to-yellow-50 py-20 px-6">
//       {/* Section header */}
//       <div className="text-center mb-16">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
//           تحریک ایمان و تقویٰ
//         </h2>
//         <h3 className="text-2xl md:text-3xl font-bold text-slate-800 relative inline-block mt-4">
//           ہمارے مراکز
//           <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-emerald-500 rounded-full"></span>
//         </h3>
//         <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
//           فعال مراکز کی تفصیل، رابطہ معلومات، اوقاتِ کار اور مقام۔
//         </p>
//       </div>

//       {/* Grid of cards */}
//       <main className="max-w-6xl mx-auto">
//         <section ref={ref} className="grid gap-6 md:grid-cols-2">
//           {filtered.map((c, i) => (
//             <motion.article
//               key={c.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: i * 0.07 }}
//               className="relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
//             >
//               <div className="absolute inset-y-0 right-0 w-2 bg-emerald-700/80" />

//               <div className="p-6 md:p-7 pl-10 md:pl-12">
//                 <div className="flex items-start gap-4 md:gap-6">
//                   <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-sm">
//                     <img
//                       src={c.images?.[0] || "src/assets/placeholder-campus.jpg"}
//                       alt={`${c.city} تصویر`}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-slate-900">
//                       {c.city}
//                     </h3>
//                     <p className="text-sm text-slate-600 mt-1">{c.region}</p>

//                     <p className="mt-3 text-slate-700 text-sm leading-6">
//                       {c.blurb}
//                     </p>

//                     <div className="mt-4 flex flex-wrap items-center gap-3">
//                       <button
//                         onClick={() => setSelected(c)}
//                         className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-gray-200 hover:bg-slate-100 text-sm"
//                       >
//                         <ImageIcon className="w-4 h-4 text-slate-600" />
//                         گیلری
//                       </button>

//                       <a
//                         href={`tel:${c.phone}`}
//                         className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-sm"
//                         aria-label={`فون کریں ${c.contactName}`}
//                       >
//                         <Phone className="w-4 h-4 text-slate-600" />
//                         {c.phone}
//                       </a>

//                       <button
//                         onClick={() =>
//                           openDirections(c.coords.lat, c.coords.lng)
//                         }
//                         className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-sm"
//                       >
//                         <ExternalLink className="w-4 h-4 text-slate-600" />
//                         راستہ پاؤ
//                       </button>

//                       <span className="ml-auto text-xs text-slate-500 flex items-center gap-2">
//                         <Clock className="w-4 h-4 text-slate-400" />
//                         <span>{c.hours}</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-5 text-xs text-slate-400">
//                   رابطہ: {c.contactName}
//                 </div>
//               </div>
//             </motion.article>
//           ))}

//           {filtered.length === 0 && (
//             <div className="col-span-full py-20 text-center text-slate-600">
//               کوئی مرکز تلاش نہیں ہوا — تلاش کی اصطلاح تبدیل کریں یا تمام مراکز دیکھیں۔
//             </div>
//           )}
//         </section>
//       </main>

//       {/* Modal */}
//       {selected && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           aria-label={`${selected.city} تفصیلات`}
//           tabIndex={-1}
//           ref={dialogRef}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4"
//         >
//           <div
//             className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={() => setSelected(null)}
//           />

//           <motion.div
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.25 }}
//             className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
//           >
//             <div className="flex items-center justify-between p-4 border-b border-gray-100">
//               <div>
//                 <h3 className="text-lg font-bold text-slate-900">
//                   {selected.city}
//                 </h3>
//                 <p className="text-sm text-slate-600">{selected.region}</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <a
//                   href={`tel:${selected.phone}`}
//                   className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
//                 >
//                   <Phone className="w-4 h-4" /> {selected.phone}
//                 </a>
//                 <button
//                   onClick={() => setSelected(null)}
//                   aria-label="بند کریں"
//                   className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center"
//                 >
//                   <X className="w-5 h-5 text-slate-600" />
//                 </button>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-4 p-4">
//               {/* Gallery */}
//               <div className="flex flex-col gap-3">
//                 <div className="relative h-64 rounded-lg overflow-hidden bg-gray-100">
//                   <img
//                     src={
//                       selected.images?.[activeImage] ||
//                       "src/assets/placeholder-campus.jpg"
//                     }
//                     alt={`${selected.city} image ${activeImage + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute left-3 top-3 text-xs bg-white/80 px-2 py-1 rounded">
//                     {activeImage + 1} / {selected.images?.length || 1}
//                   </div>
//                 </div>

//                 <div className="flex gap-2 overflow-x-auto">
//                   {(selected.images || []).map((img, idx) => (
//                     <button
//                       key={img}
//                       onClick={() => setActiveImage(idx)}
//                       className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border ${
//                         idx === activeImage
//                           ? "border-emerald-600"
//                           : "border-gray-200"
//                       }`}
//                     >
//                       <img
//                         src={img}
//                         alt={`thumb ${idx + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Map + Info */}
//               <div className="flex flex-col gap-3">
//                 <div className="rounded-lg overflow-hidden h-64 border border-gray-200">
//                   <iframe
//                     title={`${selected.city} map`}
//                     src={googleMapsSrc(
//                       selected.coords.lat,
//                       selected.coords.lng,
//                       14
//                     )}
//                     className="w-full h-full border-0"
//                     loading="lazy"
//                   />
//                 </div>

//                 <div className="p-4 bg-gray-50 rounded-lg">
//                   <h4 className="font-semibold text-slate-800">
//                     {selected.city}
//                   </h4>
//                   <p className="text-sm text-slate-600 mt-1">
//                     {selected.region}
//                   </p>

//                   <div className="mt-3 grid grid-cols-1 gap-2 text-sm">
//                     <div className="flex items-center gap-2">
//                       <MapPin className="w-4 h-4 text-slate-500" />
//                       <span className="text-slate-600">
//                         مقام: {selected.coords.lat}, {selected.coords.lng}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Phone className="w-4 h-4 text-slate-500" />
//                       <span className="text-slate-600">
//                         فون: {selected.phone}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Clock className="w-4 h-4 text-slate-500" />
//                       <span className="text-slate-600">
//                         اوقات: {selected.hours}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <Globe className="w-4 h-4 text-slate-500" />
//                       <a
//                         href={`https://www.google.com/maps/search/?api=1&query=${selected.coords.lat},${selected.coords.lng}`}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="text-emerald-600 hover:underline inline-flex items-center gap-2"
//                       >
//                         نقشہ پر دیکھیں <ExternalLink className="w-4 h-4" />
//                       </a>
//                     </div>
//                   </div>

//                   <p className="mt-3 text-sm text-slate-700 leading-6">
//                     {selected.blurb}
//                   </p>

//                   <div className="mt-4 flex gap-2">
//                     <button
//                       onClick={() =>
//                         openDirections(selected.coords.lat, selected.coords.lng)
//                       }
//                       className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
//                     >
//                       راستہ حاصل کریں
//                     </button>
//                     <a
//                       href={`tel:${selected.phone}`}
//                       className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
//                     >
//                       فون کریں
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }




// src/pages/Campuses.jsx
// import React, { useState, useCallback, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//     MapPin,
//     Phone,
//     Globe,
//     ImageIcon,
//     X,
//     ExternalLink,
//     Clock,
// } from "lucide-react";

// const campuses = [
//     {
//         id: "islamabad",
//         city: "اسلام آباد",
//         region: "Sector F-8/4, Islamabad",
//         contactName: "مولانا علی حسن",
//         phone: "0300-9876543",
//         coords: { lat: 33.6844, lng: 73.0479 },
//         images: ["src/assets/bg3.jpg", "src/assets/bg.jpg"],
//         hours: "روزانہ: 9am - 9pm",
//         blurb:
//             "تحریک ایمان و تقویٰ کا اسلام آباد مرکز، تعلیمی و روحانی تربیت کے لیے جدید سہولیات کے ساتھ۔",
//     },
//     {
//         id: "lahore",
//         city: "لاہور",
//         region: "جوہر ٹاؤن، لاہور",
//         contactName: "حاجی محمد ادریس",
//         phone: "0321-1122334",
//         coords: { lat: 31.5204, lng: 74.3587 },
//         images: ["src/assets/bg.jpg", "src/assets/bg3.jpg"],
//         hours: "پیر تا جمعہ: 10am - 6pm",
//         blurb:
//             "لاہور مرکز میں روحانی نشستیں، درس نظامی اور کمیونٹی پروگرامز کا انعقاد کیا جاتا ہے۔",
//     },
//     {
//         id: "karachi",
//         city: "کراچی",
//         region: "گلشنِ اقبال، کراچی",
//         contactName: "مفتی زید عباسی",
//         phone: "0345-5678901",
//         coords: { lat: 24.8607, lng: 67.0011 },
//         images: ["src/assets/bg.jpg"],
//         hours: "روزانہ: 9am - 5pm",
//         blurb:
//             "کراچی مرکز میں تعلیمی کلاسز اور فلاحی خدمات جاری ہیں — مستحقین تک پہنچانے کے منصوبے فعال ہیں۔",
//     },
//     {
//         id: "peshawar",
//         city: "پشاور",
//         region: "حلقہ نمبر 1، مین روڈ پشاور",
//         contactName: "مولانا احمد خان",
//         phone: "0333-1234567",
//         coords: { lat: 34.0151, lng: 71.5249 },
//         images: ["src/assets/bg3.jpg"],
//         hours: "ہفتہ: 10am - 4pm",
//         blurb:
//             "پشاور مرکز مقامی کمیونٹی کی تربیت اور خد مت کے لیے مخصوص پروگرامز چلاتا ہے۔",
//     },
//     {
//         id: "kowand",
//         city: "کونڈ",
//         region: "شباز ٹاؤن، کونڈ",
//         contactName: "مولانا بلال احمد",
//         phone: "0312-3456789",
//         coords: { lat: 34.4, lng: 71.6 },
//         images: ["src/assets/bg3.jpg"],
//         hours: "معمول کے مطابق",
//         blurb:
//             "کونڈ کا مرکز وادی کے قریب واقع ہے اور یہاں روحانی تربیت اور جماعتی سرگرمیاں منعقد ہوتی ہیں۔",
//     },
// ];

// /* Google Maps iframe URL helper */
// const googleMapsSrc = (lat, lng, zoom = 15) =>
//     `https://www.google.com/maps?q=${encodeURIComponent(
//         `${lat},${lng}`
//     )}&z=${zoom}&output=embed`;

// export default function Marakiz() {
//     const [query, setQuery] = useState("");
//     const [selected, setSelected] = useState(null);
//     const [activeImage, setActiveImage] = useState(0);
//     const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });
//     const dialogRef = useRef(null);

//     const filtered = campuses.filter((c) => {
//         const matchesQuery =
//             !query ||
//             [c.city, c.region, c.contactName, c.blurb]
//                 .join(" ")
//                 .toLowerCase()
//                 .includes(query.toLowerCase());
//         return matchesQuery;
//     });

//     // close modal with Escape
//     useEffect(() => {
//         const onKey = (e) => {
//             if (e.key === "Escape") setSelected(null);
//         };
//         window.addEventListener("keydown", onKey);
//         return () => window.removeEventListener("keydown", onKey);
//     }, []);

//     // reset gallery index on modal open
//     useEffect(() => {
//         if (selected && dialogRef.current) dialogRef.current.focus();
//         setActiveImage(0);
//     }, [selected]);

//     const openDirections = useCallback((lat, lng) => {
//         const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
//         window.open(url, "_blank");
//     }, []);

//     return (
//         <div className="bg-gradient-to-t from-blue-50 via-white to-yellow-50 py-20 px-6">
//             {/* Section header */}
//             <div className="text-center mb-16">
//                 <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-800 pb-6">
//                     تحریک ایمان و تقویٰ
//                 </h2>
//                 <h3 className="text-2xl md:text-3xl font-bold text-slate-900 relative inline-block mt-4">
//                     ہمارے مراکز
//                     <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-yellow-400 rounded-full"></span>
//                 </h3>
//                 <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
//                     فعال مراکز کی تفصیل، رابطہ معلومات، اوقاتِ کار اور مقام۔
//                 </p>
//             </div>

//             {/* Grid of cards */}
//             <main className="max-w-6xl mx-auto">
//                 <section ref={ref} className="grid gap-6 md:grid-cols-2">
//                     {filtered.map((c, i) => (
//                         <motion.article
//                             key={c.id}
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={inView ? { opacity: 1, y: 0 } : {}}
//                             transition={{ duration: 0.6, delay: i * 0.07 }}
//                             onClick={() => setSelected(c)} // ✅ whole card is clickable
//                             whileHover={{ scale: 1.02 }} // ✅ subtle scale animation
//                             className="relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden 
//                          cursor-pointer transform transition-all hover:shadow-lg hover:-translate-y-1"
//                         >
//                             <div className="absolute inset-y-0 right-0 w-2 bg-emerald-700/80" />

//                             <div className="p-6 md:p-7 pl-10 md:pl-12">
//                                 <div className="flex items-start gap-4 md:gap-6">
//                                     <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-sm">
//                                         <img
//                                             src={c.images?.[0] || "src/assets/placeholder-campus.jpg"}
//                                             alt={`${c.city} تصویر`}
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>

//                                     <div className="flex-1">
//                                         <h3 className="text-lg font-semibold text-slate-900">
//                                             {c.city}
//                                         </h3>
//                                         <p className="text-sm text-slate-600 mt-1">{c.region}</p>

//                                         <p className="mt-3 text-slate-700 text-sm leading-6">
//                                             {c.blurb}
//                                         </p>

//                                         <div className="mt-4 flex flex-wrap items-center gap-3">
//                                             {/* Stop bubbling clicks inside buttons */}
//                                             <button
//                                                 onClick={(e) => {
//                                                     e.stopPropagation();
//                                                     setSelected(c);
//                                                 }}
//                                                 className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-gray-200 hover:bg-slate-100 text-sm"
//                                             >
//                                                 <ImageIcon className="w-4 h-4 text-slate-600" />
//                                                 گیلری
//                                             </button>

//                                             <a
//                                                 href={`tel:${c.phone}`}
//                                                 onClick={(e) => e.stopPropagation()}
//                                                 className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-sm"
//                                                 aria-label={`فون کریں ${c.contactName}`}
//                                             >
//                                                 <Phone className="w-4 h-4 text-slate-600" />
//                                                 {c.phone}
//                                             </a>

//                                             <button
//                                                 onClick={(e) => {
//                                                     e.stopPropagation();
//                                                     openDirections(c.coords.lat, c.coords.lng);
//                                                 }}
//                                                 className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-sm"
//                                             >
//                                                 <ExternalLink className="w-4 h-4 text-slate-600" />
//                                                 راستہ پاؤ
//                                             </button>

//                                             <span className="ml-auto text-xs text-slate-500 flex items-center gap-2">
//                                                 <Clock className="w-4 h-4 text-slate-400" />
//                                                 <span>{c.hours}</span>
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="mt-5 text-xs text-slate-400">
//                                     رابطہ: {c.contactName}
//                                 </div>
//                             </div>
//                         </motion.article>
//                     ))}

//                     {filtered.length === 0 && (
//                         <div className="col-span-full py-20 text-center text-slate-600">
//                             کوئی مرکز تلاش نہیں ہوا — تلاش کی اصطلاح تبدیل کریں یا تمام مراکز دیکھیں۔
//                         </div>
//                     )}
//                 </section>
//             </main>

//             {/* Modal */}
//             {selected && (
//                 <div
//                     role="dialog"
//                     aria-modal="true"
//                     aria-label={`${selected.city} تفصیلات`}
//                     tabIndex={-1}
//                     ref={dialogRef}
//                     className="fixed inset-0 z-50 flex items-center justify-center p-4"
//                 >
//                     <div
//                         className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//                         onClick={() => setSelected(null)}
//                     />

//                     <motion.div
//                         initial={{ scale: 0.95, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.25 }}
//                         className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
//                     >
//                         <div className="flex items-center justify-between p-4 border-b border-gray-100">
//                             <div>
//                                 <h3 className="text-lg font-bold text-slate-900">
//                                     {selected.city}
//                                 </h3>
//                                 <p className="text-sm text-slate-600">{selected.region}</p>
//                             </div>
//                             <div className="flex items-center gap-3">
//                                 <a
//                                     href={`tel:${selected.phone}`}
//                                     className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
//                                 >
//                                     <Phone className="w-4 h-4" /> {selected.phone}
//                                 </a>
//                                 <button
//                                     onClick={() => setSelected(null)}
//                                     aria-label="بند کریں"
//                                     className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center"
//                                 >
//                                     <X className="w-5 h-5 text-slate-600" />
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="grid md:grid-cols-2 gap-4 p-4">
//                             {/* Gallery */}
//                             <div className="flex flex-col gap-3">
//                                 <div className="relative h-64 rounded-lg overflow-hidden bg-gray-100">
//                                     <img
//                                         src={
//                                             selected.images?.[activeImage] ||
//                                             "src/assets/placeholder-campus.jpg"
//                                         }
//                                         alt={`${selected.city} image ${activeImage + 1}`}
//                                         className="w-full h-full object-cover"
//                                     />
//                                     <div className="absolute left-3 top-3 text-xs bg-white/80 px-2 py-1 rounded">
//                                         {activeImage + 1} / {selected.images?.length || 1}
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-2 overflow-x-auto">
//                                     {(selected.images || []).map((img, idx) => (
//                                         <button
//                                             key={img}
//                                             onClick={() => setActiveImage(idx)}
//                                             className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border ${idx === activeImage
//                                                     ? "border-emerald-600"
//                                                     : "border-gray-200"
//                                                 }`}
//                                         >
//                                             <img
//                                                 src={img}
//                                                 alt={`thumb ${idx + 1}`}
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         </button>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Map + Info */}
//                             <div className="flex flex-col gap-3">
//                                 <div className="rounded-lg overflow-hidden h-64 border border-gray-200">
//                                     <iframe
//                                         title={`${selected.city} map`}
//                                         src={googleMapsSrc(
//                                             selected.coords.lat,
//                                             selected.coords.lng,
//                                             14
//                                         )}
//                                         className="w-full h-full border-0"
//                                         loading="lazy"
//                                     />
//                                 </div>

//                                 <div className="p-4 bg-gray-50 rounded-lg">
//                                     <h4 className="font-semibold text-slate-800">
//                                         {selected.city}
//                                     </h4>
//                                     <p className="text-sm text-slate-600 mt-1">
//                                         {selected.region}
//                                     </p>

//                                     <div className="mt-3 grid grid-cols-1 gap-2 text-sm">
//                                         <div className="flex items-center gap-2">
//                                             <MapPin className="w-4 h-4 text-slate-500" />
//                                             <span className="text-slate-600">
//                                                 مقام: {selected.coords.lat}, {selected.coords.lng}
//                                             </span>
//                                         </div>

//                                         <div className="flex items-center gap-2">
//                                             <Phone className="w-4 h-4 text-slate-500" />
//                                             <span className="text-slate-600">
//                                                 فون: {selected.phone}
//                                             </span>
//                                         </div>

//                                         <div className="flex items-center gap-2">
//                                             <Clock className="w-4 h-4 text-slate-500" />
//                                             <span className="text-slate-600">
//                                                 اوقات: {selected.hours}
//                                             </span>
//                                         </div>

//                                         <div className="flex items-center gap-2">
//                                             <Globe className="w-4 h-4 text-slate-500" />
//                                             <a
//                                                 href={`https://www.google.com/maps/search/?api=1&query=${selected.coords.lat},${selected.coords.lng}`}
//                                                 target="_blank"
//                                                 rel="noreferrer"
//                                                 className="text-emerald-600 hover:underline inline-flex items-center gap-2"
//                                             >
//                                                 نقشہ پر دیکھیں <ExternalLink className="w-4 h-4" />
//                                             </a>
//                                         </div>
//                                     </div>

//                                     <p className="mt-3 text-sm text-slate-700 leading-6">
//                                         {selected.blurb}
//                                     </p>

//                                     <div className="mt-4 flex gap-2">
//                                         <button
//                                             onClick={() =>
//                                                 openDirections(selected.coords.lat, selected.coords.lng)
//                                             }
//                                             className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
//                                         >
//                                             راستہ حاصل کریں
//                                         </button>
//                                         <a
//                                             href={`tel:${selected.phone}`}
//                                             className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
//                                         >
//                                             فون کریں
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             )}
//         </div>
//     );
// }
