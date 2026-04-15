import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { label: "Product", path: "/product" },
    { label: "Impact",  path: "/impact"  },
    { label: "About",   path: "/about"   },
    { label: "Reviews", path: "/reviews" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">

      {/* ── DESKTOP layout — single row ── */}
      <div className="hidden md:flex max-w-6xl mx-auto px-5 lg:px-10 h-25 items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-0.5 flex-shrink-0">
          <span className="text-[40px] font-bold tracking-tight text-blue-1000">
            Energ<span className="text-orange-500">I</span><span className="text-[#3aa84b]">n</span>AI
          </span>
          <sup className="text-[20px] text-blue-1000 font-semibold mt-1">™</sup>
        </Link>

        {/* Nav links — centered */}
        <nav className="flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `relative text-[18px] font-medium pb-1 transition-colors group ${
                  isActive ? "text-gray-900" : "text-blue-1000 hover:text-gray-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 rounded-full transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="ml-auto">
          <Link
            to="/get-started"
            className="bg-[#f28c28] hover:bg-orange-700 text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MOBILE layout 
      ══════════════════════════════════════ */}
      <div className="md:hidden flex flex-col items-center px-4 pt-4 pb-8 gap-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <span className="text-[35px] font-bold tracking-tight text-[#0d274d]">
            Energ<span className="text-[#f28c28]">I</span><span className="text-[#3aa84b]">n</span>AI
          </span>
          <sup className="text-[15px] text-blue-1000 font-semibold mt-1">™</sup>
        </Link>

        {/* Nav links — horizontal row */}
        <nav className="flex items-center justify-center gap-6 flex-wrap">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `text-[17px] font-semibold transition-colors ${
                  isActive ? "text-orange-500" : "text-gray-800 hover:text-orange-500"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Get Started button */}
        <Link
          to="/get-started"
          className="w-40 text-center bg-[#f28c28] hover:bg-orange-600 text-white text-[14px] font-semibold py-2.5 rounded-xl transition-colors"
        >
          Get Started
        </Link>

      </div>

    </header>
  );
}