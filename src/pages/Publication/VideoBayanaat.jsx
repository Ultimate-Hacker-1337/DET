// // // // // // src/pages/VideoBayanaat.jsx
// // // // // import { useState, useRef, useEffect } from "react";
// // // // // import { Search, Play, Pause, X } from "lucide-react";
// // // // // import { motion } from "framer-motion";

// // // // // export default function VideoBayanaat() {
// // // // //   const [activeLang, setActiveLang] = useState("urdu");
// // // // //   const [search, setSearch] = useState("");
// // // // //   const [sortBy, setSortBy] = useState("newest");
// // // // //   const [currentVideo, setCurrentVideo] = useState(null);
// // // // //   const [isPlaying, setIsPlaying] = useState(false);

// // // // //   const videoRef = useRef(null);

// // // // //   const languages = [
// // // // //     "urdu",
// // // // //     "english",
// // // // //     "pashto",
// // // // //     "arabic",
// // // // //     "farsi",
// // // // //     "turkish",
// // // // //     "sindhi",
// // // // //     "punjabi",
// // // // //   ];

// // // // //   const videos = [
// // // // //     {
// // // // //       id: 1,
// // // // //       title: "SC#344 | مفتی سید مختار الدین شاہ صاحب | رمضان کے حالات",
// // // // //       scholar: "Mufti Syed Mukhtar Ud Din Shah",
// // // // //       date: "2025-09-01",
// // // // //       lang: "urdu",
// // // // //       thumbnail: "/thumbs/video1.jpg",
// // // // //       url: "/videos/video1.mp4",
// // // // //       views: 1250,
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       title: "Islamic Lecture - Spirituality",
// // // // //       scholar: "Mufti Saeed Ahmad",
// // // // //       date: "2025-08-28",
// // // // //       lang: "english",
// // // // //       thumbnail: "/thumbs/video2.jpg",
// // // // //       url: "/videos/video2.mp4",
// // // // //       views: 980,
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       title: "پښتو بیان - اختر ځانګړی",
// // // // //       scholar: "مولانا احمد جان",
// // // // //       date: "2025-08-20",
// // // // //       lang: "pashto",
// // // // //       thumbnail: "/thumbs/video3.jpg",
// // // // //       url: "/videos/video3.mp4",
// // // // //       views: 720,
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       title: "محاضرة بالعربية - التزكية",
// // // // //       scholar: "الشيخ محمد سعيد",
// // // // //       date: "2025-08-15",
// // // // //       lang: "arabic",
// // // // //       thumbnail: "/thumbs/video4.jpg",
// // // // //       url: "/videos/video4.mp4",
// // // // //       views: 1550,
// // // // //     },
// // // // //   ];

// // // // //   const filtered = videos
// // // // //     .filter((v) => v.lang === activeLang)
// // // // //     .filter(
// // // // //       (v) =>
// // // // //         v.title.toLowerCase().includes(search.toLowerCase()) ||
// // // // //         v.scholar.toLowerCase().includes(search.toLowerCase())
// // // // //     )
// // // // //     .sort((a, b) => {
// // // // //       if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
// // // // //       if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
// // // // //       if (sortBy === "views") return b.views - a.views;
// // // // //       return 0;
// // // // //     });

// // // // //   const handlePlay = (video) => {
// // // // //     if (currentVideo?.id === video.id && isPlaying) {
// // // // //       videoRef.current.pause();
// // // // //       setIsPlaying(false);
// // // // //     } else {
// // // // //       setCurrentVideo(video);
// // // // //       setTimeout(() => {
// // // // //         videoRef.current.play();
// // // // //         setIsPlaying(true);
// // // // //       }, 100);
// // // // //     }
// // // // //   };

// // // // //   // Auto stop when scroll out of screen (optional improvement)
// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       if (currentVideo && videoRef.current) {
// // // // //         const rect = videoRef.current.getBoundingClientRect();
// // // // //         if (rect.bottom < 0 || rect.top > window.innerHeight) {
// // // // //           videoRef.current.pause();
// // // // //           setIsPlaying(false);
// // // // //         }
// // // // //       }
// // // // //     };
// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, [currentVideo]);

// // // // //   return (
// // // // //     <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-12">
// // // // //       <div className="max-w-6xl mx-auto text-center mb-10">
// // // // //         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
// // // // //           میڈیا بپ
// // // // //         </h2>
// // // // //         <p className="text-xl text-green-700 font-semibold border-b-2 border-yellow-400 inline-block pb-1">
// // // // //           ویڈیو بیانات
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* Language Tabs */}
// // // // //       <div className="flex justify-center flex-wrap gap-2 mb-8">
// // // // //         {languages.map((lang) => (
// // // // //           <button
// // // // //             key={lang}
// // // // //             onClick={() => setActiveLang(lang)}
// // // // //             className={`px-5 py-2 rounded-full transition font-medium ${
// // // // //               activeLang === lang
// // // // //                 ? "bg-green-700 text-white shadow"
// // // // //                 : "bg-white text-green-700 border border-green-700 hover:bg-green-50"
// // // // //             }`}
// // // // //           >
// // // // //             {lang.toUpperCase()}
// // // // //           </button>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Search + Sort */}
// // // // //       <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
// // // // //         <div className="relative w-full md:w-1/2">
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="🔍 تلاش کریں (عنوان یا مقرر)"
// // // // //             className="w-full border rounded-lg py-2 px-4 pl-10 shadow-sm focus:ring-green-600 focus:border-green-600"
// // // // //             value={search}
// // // // //             onChange={(e) => setSearch(e.target.value)}
// // // // //           />
// // // // //           <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
// // // // //         </div>
// // // // //         <select
// // // // //           className="border rounded-lg py-2 px-3 shadow-sm focus:ring-green-600 focus:border-green-600"
// // // // //           value={sortBy}
// // // // //           onChange={(e) => setSortBy(e.target.value)}
// // // // //         >
// // // // //           <option value="newest">Newest First</option>
// // // // //           <option value="oldest">Oldest First</option>
// // // // //           <option value="views">Most Viewed</option>
// // // // //         </select>
// // // // //       </div>

// // // // //       {/* Video Grid */}
// // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //         {filtered.map((v, idx) => (
// // // // //           <motion.div
// // // // //             key={v.id}
// // // // //             initial={{ opacity: 0, y: 20 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.3, delay: idx * 0.1 }}
// // // // //             className="bg-white shadow rounded-xl overflow-hidden border hover:shadow-lg transition"
// // // // //           >
// // // // //             <div className="relative">
// // // // //               <img
// // // // //                 src={v.thumbnail}
// // // // //                 alt={v.title}
// // // // //                 className="w-full h-48 object-cover"
// // // // //               />
// // // // //               <button
// // // // //                 onClick={() => handlePlay(v)}
// // // // //                 className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-xl rounded-full"
// // // // //               >
// // // // //                 {currentVideo?.id === v.id && isPlaying ? (
// // // // //                   <Pause size={40} />
// // // // //                 ) : (
// // // // //                   <Play size={40} />
// // // // //                 )}
// // // // //               </button>
// // // // //             </div>
// // // // //             <div className="p-4">
// // // // //               <h3 className="font-bold text-gray-800 mb-1">{v.title}</h3>
// // // // //               <p className="text-sm text-gray-600">{v.scholar}</p>
// // // // //               <p className="text-xs text-gray-500 mt-1">
// // // // //                 {new Date(v.date).toLocaleDateString("en-US", {
// // // // //                   year: "numeric",
// // // // //                   month: "short",
// // // // //                   day: "numeric",
// // // // //                 })}{" "}
// // // // //                 • 👁 {v.views.toLocaleString()}
// // // // //               </p>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Floating Video Player */}
// // // // //       {currentVideo && (
// // // // //         <motion.div
// // // // //           initial={{ y: 100, opacity: 0 }}
// // // // //           animate={{ y: 0, opacity: 1 }}
// // // // //           className="fixed bottom-4 right-4 bg-white shadow-xl rounded-lg overflow-hidden border w-[90%] sm:w-[400px] z-50"
// // // // //         >
// // // // //           <div className="flex justify-between items-center bg-green-700 text-white px-4 py-2">
// // // // //             <h4 className="font-semibold truncate">{currentVideo.title}</h4>
// // // // //             <button
// // // // //               onClick={() => {
// // // // //                 videoRef.current.pause();
// // // // //                 setCurrentVideo(null);
// // // // //                 setIsPlaying(false);
// // // // //               }}
// // // // //             >
// // // // //               <X />
// // // // //             </button>
// // // // //           </div>
// // // // //           <video
// // // // //             ref={videoRef}
// // // // //             src={currentVideo.url}
// // // // //             controls
// // // // //             className="w-full h-56 bg-black"
// // // // //             onEnded={() => setIsPlaying(false)}
// // // // //           />
// // // // //         </motion.div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import { useState } from "react";

// // // // export default function App() {
// // // //   const [selectedVideo, setSelectedVideo] = useState(null);

// // // //   const videos = [
// // // //     {
// // // //       id: 1,
// // // //       title: "React Tutorial for Beginners",
// // // //       thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg",
// // // //       src: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // //       channel: "Code Academy",
// // // //       views: "1.2M views",
// // // //       date: "2 weeks ago",
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: "Learn Tailwind CSS in 20 Minutes",
// // // //       thumbnail: "https://i.ytimg.com/vi/dFgzHOX84xQ/hqdefault.jpg",
// // // //       src: "https://www.w3schools.com/html/movie.mp4",
// // // //       channel: "Design Simplified",
// // // //       views: "860K views",
// // // //       date: "1 month ago",
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: "Vite + React Crash Course",
// // // //       thumbnail: "https://i.ytimg.com/vi/2mMH3E2XP1U/hqdefault.jpg",
// // // //       src: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // //       channel: "Web Dev Pro",
// // // //       views: "540K views",
// // // //       date: "3 months ago",
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       title: "Tailwind CSS Advanced Layouts",
// // // //       thumbnail: "https://i.ytimg.com/vi/UBOj6rqRUME/hqdefault.jpg",
// // // //       src: "https://www.w3schools.com/html/mov_bbb.mp4",
// // // //       channel: "UI Mastery",
// // // //       views: "420K views",
// // // //       date: "5 months ago",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen bg-black text-white">
// // // //       {selectedVideo ? (
// // // //         // Video Player Page
// // // //         <div className="flex flex-col items-center p-4">
// // // //           <button
// // // //             onClick={() => setSelectedVideo(null)}
// // // //             className="mb-4 text-sm text-blue-400 hover:underline self-start"
// // // //           >
// // // //             ← Back
// // // //           </button>
// // // //           <video
// // // //             controls
// // // //             autoPlay
// // // //             className="w-full max-w-4xl rounded-lg shadow-lg"
// // // //           >
// // // //             <source src={selectedVideo.src} type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>
// // // //           <div className="mt-4 w-full max-w-4xl">
// // // //             <h2 className="text-lg font-bold">{selectedVideo.title}</h2>
// // // //             <p className="text-sm text-gray-400">
// // // //               {selectedVideo.channel} • {selectedVideo.views} • {selectedVideo.date}
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       ) : (
// // // //         // Video Grid Page
// // // //         <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
// // // //           {videos.map((video) => (
// // // //             <div
// // // //               key={video.id}
// // // //               className="cursor-pointer"
// // // //               onClick={() => setSelectedVideo(video)}
// // // //             >
// // // //               <img
// // // //                 src={video.thumbnail}
// // // //                 alt={video.title}
// // // //                 className="w-full rounded-lg"
// // // //               />
// // // //               <div className="mt-2">
// // // //                 <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
// // // //                 <p className="text-xs text-gray-400">{video.channel}</p>
// // // //                 <p className="text-xs text-gray-400">
// // // //                   {video.views} • {video.date}
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }















// // // import { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import { Search, Menu } from "lucide-react";

// // // export default function App() {
// // //   const [selectedVideo, setSelectedVideo] = useState(null);
// // //   const [search, setSearch] = useState("");

// // //   const videos = [
// // //     {
// // //       id: 1,
// // //       title: "React Tutorial for Beginners",
// // //       thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg",
// // //       src: "https://www.w3schools.com/html/mov_bbb.mp4",
// // //       channel: "Code Academy",
// // //       views: "1.2M views",
// // //       date: "2 weeks ago",
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Learn Tailwind CSS in 20 Minutes",
// // //       thumbnail: "https://i.ytimg.com/vi/dFgzHOX84xQ/hqdefault.jpg",
// // //       src: "https://www.w3schools.com/html/movie.mp4",
// // //       channel: "Design Simplified",
// // //       views: "860K views",
// // //       date: "1 month ago",
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Vite + React Crash Course",
// // //       thumbnail: "https://i.ytimg.com/vi/2mMH3E2XP1U/hqdefault.jpg",
// // //       src: "https://www.w3schools.com/html/mov_bbb.mp4",
// // //       channel: "Web Dev Pro",
// // //       views: "540K views",
// // //       date: "3 months ago",
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "Tailwind CSS Advanced Layouts",
// // //       thumbnail: "https://i.ytimg.com/vi/UBOj6rqRUME/hqdefault.jpg",
// // //       src: "https://www.w3schools.com/html/mov_bbb.mp4",
// // //       channel: "UI Mastery",
// // //       views: "420K views",
// // //       date: "5 months ago",
// // //     },
// // //   ];

// // //   const filteredVideos = videos.filter((v) =>
// // //     v.title.toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   return (
// // //     <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
// // //       {/* Header */}
// // //       <header className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
// // //         <div className="flex items-center gap-3">
// // //           <Menu className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white" />
// // //           <h1 className="text-xl font-bold">DevTube</h1>
// // //         </div>
// // //         <div className="relative w-full max-w-md">
// // //           <input
// // //             type="text"
// // //             placeholder="Search"
// // //             value={search}
// // //             onChange={(e) => setSearch(e.target.value)}
// // //             className="w-full rounded-full bg-neutral-900 text-sm px-4 py-2 pl-10 outline-none border border-neutral-800 focus:border-blue-500"
// // //           />
// // //           <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
// // //         </div>
// // //       </header>

// // //       <main className="flex flex-1">
// // //         {/* Sidebar */}
// // //         <aside className="hidden md:flex flex-col w-48 border-r border-neutral-800 p-4 text-sm text-gray-300">
// // //           <button className="py-2 px-3 rounded-lg hover:bg-neutral-800 text-left">
// // //             Home
// // //           </button>
// // //           <button className="py-2 px-3 rounded-lg hover:bg-neutral-800 text-left">
// // //             Trending
// // //           </button>
// // //           <button className="py-2 px-3 rounded-lg hover:bg-neutral-800 text-left">
// // //             Tutorials
// // //           </button>
// // //           <button className="py-2 px-3 rounded-lg hover:bg-neutral-800 text-left">
// // //             Playlists
// // //           </button>
// // //         </aside>

// // //         {/* Content Area */}
// // //         <div className="flex-1 p-4 overflow-y-auto">
// // //           {selectedVideo ? (
// // //             // Video Player Page
// // //             <div className="flex flex-col lg:flex-row gap-6">
// // //               <div className="flex-1">
// // //                 <motion.video
// // //                   key={selectedVideo.id}
// // //                   controls
// // //                   autoPlay
// // //                   className="w-full rounded-xl shadow-lg"
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                 >
// // //                   <source src={selectedVideo.src} type="video/mp4" />
// // //                   Your browser does not support the video tag.
// // //                 </motion.video>

// // //                 <div className="mt-4">
// // //                   <h2 className="text-xl font-bold">{selectedVideo.title}</h2>
// // //                   <p className="text-sm text-gray-400 mt-1">
// // //                     {selectedVideo.channel} • {selectedVideo.views} •{" "}
// // //                     {selectedVideo.date}
// // //                   </p>
// // //                   <button
// // //                     onClick={() => setSelectedVideo(null)}
// // //                     className="mt-3 text-blue-400 hover:underline text-sm"
// // //                   >
// // //                     ← Back to videos
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               {/* Recommended Videos */}
// // //               <div className="w-full lg:w-80 flex flex-col gap-4">
// // //                 <h3 className="text-lg font-semibold mb-2">Recommended</h3>
// // //                 {videos
// // //                   .filter((v) => v.id !== selectedVideo.id)
// // //                   .map((video) => (
// // //                     <div
// // //                       key={video.id}
// // //                       className="flex gap-3 cursor-pointer hover:bg-neutral-900 rounded-lg p-2"
// // //                       onClick={() => setSelectedVideo(video)}
// // //                     >
// // //                       <img
// // //                         src={video.thumbnail}
// // //                         alt={video.title}
// // //                         className="w-36 h-20 object-cover rounded-lg"
// // //                       />
// // //                       <div className="flex flex-col justify-between">
// // //                         <h4 className="text-sm font-semibold line-clamp-2">
// // //                           {video.title}
// // //                         </h4>
// // //                         <p className="text-xs text-gray-400">{video.channel}</p>
// // //                         <p className="text-xs text-gray-500">
// // //                           {video.views} • {video.date}
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //               </div>
// // //             </div>
// // //           ) : (
// // //             // Video Grid Page
// // //             <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
// // //               {filteredVideos.map((video) => (
// // //                 <motion.div
// // //                   key={video.id}
// // //                   className="cursor-pointer group"
// // //                   onClick={() => setSelectedVideo(video)}
// // //                   whileHover={{ scale: 1.02 }}
// // //                 >
// // //                   <div className="relative">
// // //                     <img
// // //                       src={video.thumbnail}
// // //                       alt={video.title}
// // //                       className="w-full rounded-xl group-hover:brightness-110 transition"
// // //                     />
// // //                   </div>
// // //                   <div className="mt-2">
// // //                     <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-blue-400">
// // //                       {video.title}
// // //                     </h3>
// // //                     <p className="text-xs text-gray-400">{video.channel}</p>
// // //                     <p className="text-xs text-gray-500">
// // //                       {video.views} • {video.date}
// // //                     </p>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // }















// // import React, { useState } from 'react';

// // const YouTubeHome = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [currentVideoId, setCurrentVideoId] = useState('');

// //   const videos = [
// //     {
// //       id: 1,
// //       title: 'ری ایکٹ ہکس کے لیے حتمی رہنما 2025',
// //       views: '12 لاکھ ویوز • 2 دن پہلے',
// //       thumbnail: 'https://i.ytimg.com/vi/zWFrlEdOT-Y/maxresdefault.jpg',
// //       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_nq5x9o5V7w9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
// //       duration: '14:30',
// //       videoId: 'zWFrlEdOT-Y'
// //     },
// //     {
// //       id: 2,
// //       title: 'جاوا اسکرپٹ کارکردگی کی اصلاح کی تکنیکیں',
// //       views: '8.5 لاکھ ویوز • 5 دن پہلے',
// //       thumbnail: 'https://i.ytimg.com/vi/_f2FVDZqTxs/maxresdefault.jpg',
// //       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_mn1x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
// //       duration: '8:45',
// //       videoId: '_f2FVDZqTxs'
// //     },
// //     {
// //       id: 3,
// //       title: 'نیکسٹ جے ایس 15 کے ساتھ فل اسٹیک ایپ بنائیں',
// //       views: '21 لاکھ ویوز • 1 ہفتہ پہلے',
// //       thumbnail: 'https://i.ytimg.com/vi/F4rZVEu3bvs/maxresdefault.jpg',
// //       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_pq5x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
// //       duration: '22:15',
// //       videoId: 'F4rZVEu3bvs'
// //     },
// //     {
// //       id: 4,
// //       title: 'سی ایس ایس گرڈ بمقابلہ فلیکس باکس: مکمل موازنہ',
// //       views: '6.7 لاکھ ویوز • 3 دن پہلے',
// //       thumbnail: 'https://i.ytimg.com/vi/uuOXPWCh-6o/maxresdefault.jpg',
// //       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_rs5x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
// //       duration: '11:20',
// //       videoId: 'uuOXPWCh-6o'
// //     },
// //     {
// //       id: 5,
// //       title: 'ڈوکر کے لیے ابتدائی رہنما - مکمل ٹیوٹوریل',
// //       views: '18 لاکھ ویوز • 4 دن پہلے',
// //       thumbnail: 'https://i.ytimg.com/vi/pTFZFxd4hOI/maxresdefault.jpg',
// //       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_tu5x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
// //       duration: '19:50',
// //       videoId: 'pTFZFxd4hOI'
// //     },
// //     {
// //       id: 6,
// //       title: 'پائتھون ڈیٹا سائنس پروجیکٹس آپ بنا سکتے ہیں',
// //       views: '9.5 لاکھ ویوز • 6 دن پہلے',
// //       thumbnail: 'https://i.ytimg.com/vi/r-uOLxNrNk8/maxresdefault.jpg',
// //       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_vw5x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
// //       duration: '16:10',
// //       videoId: 'r-uOLxNrNk8'
// //     },
// //     {
// //       id: 7,
// //       title: 'ٹائپ اسکرپٹ بہترین طریقے 2025 کے لیے',
// //       views: '4.3 لاکھ ویوز • 1 دن پہلے',
// //       thumbnail: 'https://i.ytimg.com/vi/WY7z1s8jSmw/maxresdefault.jpg',
// //       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_xy5x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
// //       duration: '13:05',
// //       videoId: 'WY7z1s8jSmw'
// //     },
// //     {
// //       id: 8,
// //       title: 'ٹیل ونڈ سی ایس ایس کے ساتھ ذمہ دار ویب ڈیزائن',
// //       views: '14 لاکھ ویوز • 2 ہفتے پہلے',
// //       thumbnail: 'https://i.ytimg.com/vi/1PnVor36_40/maxresdefault.jpg',
// //       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_zA5x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
// //       duration: '25:30',
// //       videoId: '1PnVor36_40'
// //     },
// //   ];

// //   const openVideoModal = (videoId) => {
// //     setCurrentVideoId(videoId);
// //     setIsModalOpen(true);
// //   };

// //   const closeVideoModal = () => {
// //     setIsModalOpen(false);
// //     setCurrentVideoId('');
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#f9f9f9] font-['Roboto','Arial',sans-serif]" dir="rtl">
// //       {/* Header */}
// //       <header className="bg-white shadow-sm sticky top-0 z-10">
// //         <div className="max-w-screen-2xl mx-auto px-4 py-2">
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center">
// //               <img 
// //                 src="https://www.youtube.com/s/desktop/8e74f52f/img/favicon_144.png" 
// //                 alt="یوٹیوب" 
// //                 className="h-8 ml-2"
// //               />
// //               <span className="text-xl font-medium text-gray-900">یوٹیوب</span>
// //             </div>
            
// //             <div className="flex-1 max-w-md mx-8">
// //               <div className="relative">
// //                 <input
// //                   type="text"
// //                   placeholder="تلاش کریں"
// //                   className="w-full pr-12 pl-12 py-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000]"
// //                 />
// //                 <svg className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 1010 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
// //                 </svg>
// //                 <button className="absolute left-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100">
// //                   <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
// //                     <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
// //                   </svg>
// //                 </button>
// //               </div>
// //             </div>

// //             <div className="flex items-center space-x-2">
// //               <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
// //                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
// //                 </svg>
// //               </button>
// //               <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full relative">
// //                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
// //                   <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1 .9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5 .67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
// //                 </svg>
// //                 <span className="absolute -top-1 -left-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
// //               </button>
// //               <img 
// //                 src="https://via.placeholder.com/32x32" 
// //                 alt="پروفائل" 
// //                 className="w-8 h-8 rounded-full cursor-pointer" 
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main className="max-w-screen-2xl mx-auto px-4 py-6">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //           {videos.map((video) => (
// //             <article 
// //               key={video.id} 
// //               className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
// //               onClick={() => openVideoModal(video.videoId)}
// //             >
// //               <div className="relative group">
// //                 <img 
// //                   src={video.thumbnail} 
// //                   alt={video.title}
// //                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
// //                 />
// //                 <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
// //                   {video.duration}
// //                 </div>
// //               </div>
              
// //               <div className="p-4">
// //                 <div className="flex items-start space-x-3">
// //                   <img 
// //                     src={video.channelIcon} 
// //                     alt="چینل"
// //                     className="w-9 h-9 rounded-full flex-shrink-0 mt-0.5"
// //                   />
// //                   <div className="flex-1 min-w-0">
// //                     <h3 className="text-sm font-medium text-gray-900 leading-tight line-clamp-2 mb-1 hover:text-[#ff0000] transition-colors">
// //                       {video.title}
// //                     </h3>
// //                     <p className="text-xs text-gray-500">{video.views}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </article>
// //           ))}
// //         </div>
// //       </main>

// //       {/* Video Modal */}
// //       {isModalOpen && (
// //         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" dir="rtl">
// //           <div className="bg-white w-full max-w-4xl rounded-lg overflow-hidden relative">
// //             <button 
// //               className="absolute top-2 left-2 p-2 text-gray-600 hover:bg-gray-100 rounded-full"
// //               onClick={closeVideoModal}
// //             >
// //               <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
// //                 <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
// //               </svg>
// //             </button>
// //             <div className="relative pt-[56.25%]">
// //               <iframe
// //                 className="absolute top-0 left-0 w-full h-full"
// //                 src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
// //                 title="یوٹیوب ویڈیو پلیئر"
// //                 frameBorder="0"
// //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                 allowFullScreen
// //               ></iframe>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default YouTubeHome;


































// import React, { useState } from 'react';

// const YouTubeHome = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState(null);

//   const videos = [
//     {
//       id: 1,
//       title: 'ری ایکٹ ہکس کے لیے حتمی رہنما 2025',
//       views: '12 لاکھ ویوز • 2 دن پہلے',
//       thumbnail: 'https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg',
//       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_nq5x9o5V7w9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
//       duration: '14:30',
//       videoId: 'bbNZSXOCTgQ'
//     },
//     {
//       id: 2,
//       title: 'جاوا اسکرپٹ کارکردگی کی اصلاح کی تکنیکیں',
//       views: '8.5 لاکھ ویوز • 5 دن پہلے',
//       thumbnail: 'https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg',
//       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_mn1x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
//       duration: '8:45',
//       videoId: 'bbNZSXOCTgQ'
//     },
//     {
//       id: 3,
//       title: 'نیکسٹ جے ایس 15 کے ساتھ فل اسٹیک ایپ بنائیں',
//       views: '21 لاکھ ویوز • 1 ہفتہ پہلے',
//       thumbnail: 'https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg',
//       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_pq5x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
//       duration: '22:15',
//       videoId: 'bbNZSXOCTgQ'
//     },
//     {
//       id: 4,
//       title: 'سی ایس ایس گرڈ بمقابلہ فلیکس باکس: مکمل موازنہ',
//       views: '6.7 لاکھ ویوز • 3 دن پہلے',
//       thumbnail: 'https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg',
//       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_rs5x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
//       duration: '11:20',
//       videoId: 'bbNZSXOCTgQ'
//     },
//     {
//       id: 5,
//       title: 'ڈوکر کے لیے ابتدائی رہنما - مکمل ٹیوٹوریل',
//       views: '18 لاکھ ویوز • 4 دن پہلے',
//       thumbnail: 'https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg',
//       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_tu5x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
//       duration: '19:50',
//       videoId: 'bbNZSXOCTgQ'
//     },
//     {
//       id: 6,
//       title: 'پائتھون ڈیٹا سائنس پروجیکٹس آپ بنا سکتے ہیں',
//       views: '9.5 لاکھ ویوز • 6 دن پہلے',
//       thumbnail: 'https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg',
//       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_vw5x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
//       duration: '16:10',
//       videoId: 'bbNZSXOCTgQ'
//     },
//     {
//       id: 7,
//       title: 'ٹائپ اسکرپٹ بہترین طریقے 2025 کے لیے',
//       views: '4.3 لاکھ ویوز • 1 دن پہلے',
//       thumbnail: 'https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg',
//       channelIcon: 'https://yt3.googleusercontent.com/ytc/AIdro_xy5x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
//       duration: '13:05',
//       videoId: 'bbNZSXOCTgQ'
//     },
//     {
//       id: 8,
//       title: 'ٹیل ونڈ سی ایس ایس کے ساتھ ذمہ دار ویب ڈیزائن',
//       views: '14 لاکھ ویوز • 2 ہفتے پہلے',
//       thumbnail: 'https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg',
//       channelIcon: 'https://yt3.ggpht.com/ytc/AIdro_zA5x9o5V7w9o5V7w=s68-c-k-c0x00ffffff-no-rj',
//       duration: '25:30',
//       videoId: 'bbNZSXOCTgQ'
//     },
//   ];

//   const openVideoModal = (video) => {
//     setCurrentVideo(video);
//     setIsModalOpen(true);
//   };

//   const closeVideoModal = () => {
//     setIsModalOpen(false);
//     setCurrentVideo(null);
//   };

//   return (
//     <div className="min-h-screen bg-[#f9f9f9] font-['Roboto','Arial',sans-serif]" dir="rtl">
//       {/* Header */}
//       <header className="bg-white shadow-sm sticky top-0 z-10">
//         <div className="max-w-screen-2xl mx-auto px-4 py-2">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <img 
//                 src="https://www.youtube.com/s/desktop/8e74f52f/img/favicon_144.png" 
//                 alt="یوٹیوب" 
//                 className="h-8 ml-2"
//               />
//               <span className="text-xl font-medium text-gray-900">یوٹیوب</span>
//             </div>
            
//             <div className="flex-1 max-w-md mx-8">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="تلاش کریں"
//                   className="w-full pr-12 pl-12 py-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-[#ff0000] focus:ring-1 focus:ring-[#ff0000]"
//                 />
//                 <svg className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 1010 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
//                 </svg>
//                 <button className="absolute left-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100">
//                   <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center space-x-2">
//               <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
//                 </svg>
//               </button>
//               <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full relative">
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1 .9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5 .67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
//                 </svg>
//                 <span className="absolute -top-1 -left-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
//               </button>
//               <img 
//                 src="https://via.placeholder.com/32x32" 
//                 alt="پروفائل" 
//                 className="w-8 h-8 rounded-full cursor-pointer" 
//               />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-screen-2xl mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {videos.map((video) => (
//             <article 
//               key={video.id} 
//               className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
//               onClick={() => openVideoModal(video)}
//             >
//               <div className="relative group">
//                 <img 
//                   src={video.thumbnail} 
//                   alt={video.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
//                 />
//                 <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
//                   {video.duration}
//                 </div>
//               </div>
              
//               <div className="p-4">
//                 <div className="flex items-start space-x-3">
//                   <img 
//                     src={video.channelIcon} 
//                     alt="چینل"
//                     className="w-9 h-9 rounded-full flex-shrink-0 mt-0.5"
//                   />
//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-sm font-medium text-gray-900 leading-tight line-clamp-2 mb-1 hover:text-[#ff0000] transition-colors">
//                       {video.title}
//                     </h3>
//                     <p className="text-xs text-gray-500">{video.views}</p>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </main>

//       {/* Video Modal */}
//       {isModalOpen && currentVideo && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" dir="rtl">
//           <div className="bg-black w-full max-w-4xl rounded-lg overflow-hidden relative">
//             <button 
//               className="absolute top-4 left-4 p-2 text-white hover:bg-gray-800 hover:bg-opacity-50 rounded-full z-10"
//               onClick={closeVideoModal}
//             >
//               <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
//               </svg>
//             </button>
//             <div className="relative pt-[56.25%] bg-black">
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&rel=0&showinfo=0`}
//                 title="یوٹیوب ویڈیو پلیئر"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-4 bg-white">
//               <h3 className="text-lg font-medium text-gray-900 leading-tight line-clamp-2">
//                 {currentVideo.title}
//               </h3>
//               <p className="text-sm text-gray-500 mt-1">{currentVideo.views}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default YouTubeHome;













// src/pages/Videos.jsx
import React, { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function Videos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "ری ایکٹ ہکس کے لیے حتمی رہنما 2025",
      views: "12 لاکھ ویوز • 2 دن پہلے",
      thumbnail: "https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg",
      duration: "14:30",
      videoId: "bbNZSXOCTgQ",
    },
    {
      id: 2,
      title: "جاوا اسکرپٹ کارکردگی کی اصلاح کی تکنیکیں",
      views: "8.5 لاکھ ویوز • 5 دن پہلے",
      thumbnail: "https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg",
      duration: "8:45",
      videoId: "bbNZSXOCTgQ",
    },
    {
      id: 3,
      title: "نیکسٹ جے ایس 15 کے ساتھ فل اسٹیک ایپ بنائیں",
      views: "21 لاکھ ویوز • 1 ہفتہ پہلے",
      thumbnail: "https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg",
      duration: "22:15",
      videoId: "bbNZSXOCTgQ",
    },
    {
      id: 4,
      title: "سی ایس ایس گرڈ بمقابلہ فلیکس باکس: مکمل موازنہ",
      views: "6.7 لاکھ ویوز • 3 دن پہلے",
      thumbnail: "https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg",
      duration: "11:20",
      videoId: "bbNZSXOCTgQ",
    },
  ];

  const openVideoModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div
      className="bg-gradient-to-b from-green-50 via-white to-green-50 min-h-screen py-16 px-4 sm:px-6 lg:px-12"
      dir="rtl"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">
          ویڈیو بیانات
        </h2>
        <p className="text-lg text-green-700 font-semibold">
          میڈیا باب | جدید ویڈیوز
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {videos.map((video, idx) => (
          <motion.article
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden border border-green-100 cursor-pointer"
            onClick={() => openVideoModal(video)}
          >
            {/* Thumbnail */}
            <div className="relative group">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 text-right">
              <h3 className="text-base font-bold text-slate-800 leading-snug line-clamp-2 hover:text-green-700 transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{video.views}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Video Modal */}
      {isModalOpen && currentVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-black w-full max-w-4xl rounded-2xl overflow-hidden relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 left-4 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video */}
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&rel=0`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Info */}
            <div className="p-4 bg-white">
              <h3 className="text-lg font-bold text-slate-800 leading-snug">
                {currentVideo.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{currentVideo.views}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
