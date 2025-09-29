import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.avif";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      title: "تعارف",
      path: "/introduction",
      sub: [
        { title: "تاریخ", path: "/history" },
        { title: "مقاصد", path: "/goals" },
        { title: "مراکز", path: "/campuses" },
        { title: "چشتیہ تاریخ", path: "/chishthistory" },
      ],
    },
    {
      title: "نشر و اشاعت",
      path: "/publication",
      sub: [
        { title: "آڈیو بیانات", path: "/audiobayanaat" },
        { title: "ویڈیو بیانات", path: "/videobayanaat" },
        { title: "حمد و نعت و کلام", path: "/hamdonaat" },
        { title: "تحریری اشعار", path: "/poetry" },
        { title: "ملفوظات", path: "/malfoozat" },
        { title: "کتابیں", path: "/books" },
      ],
    },
    {
      title: "تعلیم",
      path: "/education",
      sub: [
        { title: "درسِ نظامی", path: "/darse-nizami" },
        { title: "حفظِ قرآن", path: "/hifz-quran" },
        { title: "تجوید و قراءت", path: "/tajweed-qiraat" },
        { title: "داخلے", path: "/admissions" },
      ],
    },
  ];

  return (
    <header className="bg-yellow-50 shadow-md border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src={logo}
            className="h-12 w-12 rounded-full shadow-lg border-2 border-emerald-200"
            whileHover={{ rotate: 6, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <h1 className="text-lg sm:text-xl font-extrabold text-emerald-800 tracking-wide">
            دار الایمان والتقویٰ
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-md font-semibold text-emerald-700">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => setOpenMenu(i)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to={item.path}
                  className="flex items-center gap-1 hover:text-emerald-900 transition-colors"
                >
                  {item.title}
                  {item.sub && <ChevronDown size={16} />}
                </Link>
              </motion.div>

              {/* Dropdown (desktop only) */}
              {item.sub && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={
                    openMenu === i ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
                  }
                  transition={{ duration: 0.25 }}
                  className={`absolute top-full right-0 mt-3 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl py-2 w-48 border border-emerald-100 z-50`}
                >
                  {item.sub.map((subItem, j) => (
                    <Link
                      key={j}
                      to={subItem.path}
                      className="block px-4 py-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}

          {/* Search Bar */}
          <div className="relative ml-4">
            <input
              type="text"
              placeholder="تلاش کریں..."
              className="pl-3 pr-10 py-1.5 rounded-full border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm bg-white/80 shadow-sm"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-600 w-4 h-4" />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emerald-800"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/90 backdrop-blur-lg border-t border-emerald-100 shadow-inner"
        >
          <div className="flex flex-col px-6 py-4 space-y-4 text-emerald-800 text-right">
            {navItems.map((item, i) => (
              <div key={i} className="flex flex-col">
                <button
                  onClick={() => setOpenMenu(openMenu === i ? null : i)}
                  className="flex justify-between items-center py-2 font-semibold hover:text-emerald-900 transition-colors"
                >
                  {item.title}
                  {item.sub && <ChevronDown size={16} />}
                </button>

                {/* Submenu */}
                {item.sub && openMenu === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col pr-4 space-y-2 text-sm text-emerald-700"
                  >
                    {item.sub.map((subItem, j) => (
                      <Link
                        key={j}
                        to={subItem.path}
                        className="py-1 hover:text-emerald-900 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {/* Search Bar (mobile) */}
            <div className="relative">
              <input
                type="text"
                placeholder="تلاش کریں..."
                className="w-full pl-3 pr-10 py-2 rounded-full border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm bg-white/80 shadow-sm"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-600 w-4 h-4" />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
