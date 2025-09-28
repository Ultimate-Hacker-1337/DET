import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      title: "تعارف",
      path: "/about",
      sub: [
        { title: "تاریخچہ", path: "/history" },
        { title: "مقاصد", path: "/goals" },
        { title: "انتظامیہ", path: "/about/admin" },
      ],
    },
    {
      title: "دارالافتاء",
      path: "/darulifta",
      sub: [
        { title: "آن لائن سوالنامہ", path: "/darulifta/online" },
        { title: "فتاویٰ", path: "/darulifta/fatawa" },
      ],
    },
    {
      title: "شعبہ جات",
      path: "/departments",
      sub: [
        { title: "تعلیمی", path: "/departments/education" },
        { title: "سماجی خدمات", path: "/departments/social" },
        { title: "لائبریری", path: "/departments/library" },
      ],
    },
    {
      title: "رابطہ",
      path: "/contact",
      sub: [
        { title: "پتہ", path: "/contact/address" },
        { title: "آن لائن فارم", path: "/contact/form" },
      ],
    },
  ];

  return (
    <header className="shadow bg-[#f3e5d7]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="src/assets/logo.avif"
            className="h-12 w-12 rounded-full shadow-md"
          />
          <h1 className="text-lg sm:text-xl font-bold text-[#5a3825]">
            دار الایمان والتقویٰ
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-md font-medium text-[#4a2f1b]">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => setOpenMenu(i)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to={item.path}
                className="flex items-center gap-1 hover:text-[#2d1a10] transition"
              >
                {item.title}
                {item.sub && <ChevronDown size={16} />}
              </Link>

              {/* Dropdown (desktop only) */}
              {item.sub && (
                <div
                  className={`absolute top-full right-0 mt-2 bg-[#fdf6f0] shadow-lg rounded-xl py-2 w-44 z-50 transition-all duration-200
                  ${openMenu === i ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}`}
                >
                  {item.sub.map((subItem, j) => (
                    <Link
                      key={j}
                      to={subItem.path}
                      className="block px-4 py-2 hover:bg-[#e8d5c4] hover:text-[#2d1a10] transition"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Search Bar */}
          <div className="relative ml-4">
            <input
              type="text"
              placeholder="تلاش کریں..."
              className="pl-3 pr-10 py-1 rounded-full border border-[#d8bfa6] focus:outline-none focus:ring-2 focus:ring-[#c69c6d] text-sm"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#8c5c3a] w-4 h-4" />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#5a3825]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#fdf6f0] border-t border-[#e8d5c4]">
          <div className="flex flex-col px-6 py-4 space-y-4 text-[#4a2f1b] text-right">
            {navItems.map((item, i) => (
              <div key={i} className="flex flex-col">
                <button
                  onClick={() => setOpenMenu(openMenu === i ? null : i)}
                  className="flex justify-between items-center py-2 hover:text-[#2d1a10]"
                >
                  {item.title}
                  {item.sub && <ChevronDown size={16} />}
                </button>

                {/* Submenu */}
                {item.sub && openMenu === i && (
                  <div className="flex flex-col pr-4 space-y-2 text-sm text-[#5a3825]">
                    {item.sub.map((subItem, j) => (
                      <Link
                        key={j}
                        to={subItem.path}
                        className="py-1 hover:text-[#2d1a10]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Search Bar (mobile) */}
            <div className="relative">
              <input
                type="text"
                placeholder="تلاش کریں..."
                className="w-full pl-3 pr-10 py-2 rounded-full border border-[#d8bfa6] focus:outline-none focus:ring-2 focus:ring-[#c69c6d] text-sm"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8c5c3a] w-4 h-4" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
