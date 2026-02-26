import type React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
      <NavLink
        to="/"
        className="font-serif text-2xl tracking-wide text-[#f5ece1] no-underline"
      >
        Ember <span className="text-[#e8632d]">&amp;</span> Kitchen
      </NavLink>
      <div className="hidden gap-8 text-sm font-medium text-white/60 md:flex">
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `transition-colors no-underline ${isActive ? "text-[#e8a87c]" : "hover:text-[#e8a87c]"}`
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/reservations"
          className={({ isActive }) =>
            `transition-colors no-underline ${isActive ? "text-[#e8a87c]" : "hover:text-[#e8a87c]"}`
          }
        >
          Reservations
        </NavLink>
        <NavLink
          to="/private-dining"
          className={({ isActive }) =>
            `transition-colors no-underline ${isActive ? "text-[#e8a87c]" : "hover:text-[#e8a87c]"}`
          }
        >
          Private Dining
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `transition-colors no-underline ${isActive ? "text-[#e8a87c]" : "hover:text-[#e8a87c]"}`
          }
        >
          About
        </NavLink>
      </div>
      <button
        type="button"
        onClick={() => navigate("/reservations")}
        className="rounded-full bg-[#e8632d] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#f07848] cursor-pointer"
      >
        Reserve a Table
      </button>
    </nav>
  );
};

export default Nav;
