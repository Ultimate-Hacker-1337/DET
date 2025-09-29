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
      title: "حضرت جی کے رمضان المبارک کے حالات",
      views: "12 لاکھ ویوز • 2 دن پہلے",
      thumbnail: "https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg",
      duration: "14:30",
      videoId: "bbNZSXOCTgQ",
    },
    {
      id: 2,
      title: "حضرت جی کے رمضان المبارک کے حالات",
      views: "8.5 لاکھ ویوز • 5 دن پہلے",
      thumbnail: "https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg",
      duration: "8:45",
      videoId: "bbNZSXOCTgQ",
    },
    {
      id: 3,
      title: "حضرت جی کے رمضان المبارک کے حالات",
      views: "21 لاکھ ویوز • 1 ہفتہ پہلے",
      thumbnail: "https://i.ytimg.com/vi/bbNZSXOCTgQ/maxresdefault.jpg",
      duration: "22:15",
      videoId: "bbNZSXOCTgQ",
    },
    {
      id: 4,
      title: "حضرت جی کے رمضان المبارک کے حالات",
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
      className="bg-gradient-to-t from-yellow-50 via-white to-blue-50 min-h-screen py-16 px-4 sm:px-6 lg:px-12"
      dir="rtl"
    >
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-800 relative inline-block">
          ویڈیو بیانات
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></span>
        </h3>
        <p className="text-lg text-green-700 font-semibold mt-4">
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
          <div className="relative bg-black border-5 border-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-3 left-3 bg-white text-black hover:bg-gray-200 p-2 rounded-full transition z-10"
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