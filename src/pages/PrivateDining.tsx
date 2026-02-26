import {
  ArrowRight,
  Calendar,
  GlassWater,
  ShieldCheck,
  Users,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const rooms = [
  {
    name: "The Hearth Room",
    capacity: "12 - 24 Guests",
    description:
      "An intimate space overlooking our main wood-fired hearth. Perfect for celebrations that want to feel the energy of the kitchen while maintaining privacy.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "The Cellar Suite",
    capacity: "8 - 14 Guests",
    description:
      "Surrounded by our curated collection of vintage wines. A quiet, sophisticated sanctuary for business dinners or family milestones.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Grand Ember Hall",
    capacity: "Up to 50 Guests",
    description:
      "Our largest space, featuring cathedral ceilings and a dedicated copper-clad bar. Ideal for corporate events and wedding receptions.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
];

const PrivateDining: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#f5ece1] placeholder-white/25 outline-none transition-colors focus:border-[#e8632d]/60 focus:bg-white/[0.06]";

  const labelClass =
    "mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-white/40";

  return (
    <div className="min-h-screen bg-[#111009] text-[#f5ece1] selection:bg-[#e8632d] selection:text-[#111009]">
      <div className="mx-auto max-w-7xl px-6 py-7 md:px-10">
        <Nav />

        {/* Header */}
        <header className="mt-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8632d]">
            Exclusive Events
          </p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">
            Bespoke <em className="text-[#e8a87c]">Gatherings.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[#9a8a7a] leading-relaxed">
            From corporate retreats to intimate family celebrations, we create
            unforgettable evenings tailored to your specific vision.
          </p>
        </header>

        {/* Features */}
        <section className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#e8a87c]">
              <Users size={28} />
            </div>
            <h3 className="font-serif text-xl">Flexible Spaces</h3>
            <p className="mt-2 text-sm text-[#9a8a7a]">
              Rooms for 8 to 50 guests.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#e8a87c]">
              <GlassWater size={28} />
            </div>
            <h3 className="font-serif text-xl">Custom Menus</h3>
            <p className="mt-2 text-sm text-[#9a8a7a]">
              Chef-designed tasting or family-style.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-[#e8a87c]">
              <ShieldCheck size={28} />
            </div>
            <h3 className="font-serif text-xl">Dedicated Team</h3>
            <p className="mt-2 text-sm text-[#9a8a7a]">
              Personal coordinator for every event.
            </p>
          </div>
        </section>

        {/* Rooms List */}
        <section className="mt-24 space-y-24">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:ltr" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 rounded-full bg-[#111009]/80 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#e8a87c] backdrop-blur-md">
                    Capacity: {room.capacity}
                  </div>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:ltr" : ""}>
                <h2 className="font-serif text-4xl md:text-5xl">{room.name}</h2>
                <p className="mt-6 text-lg leading-relaxed text-[#9a8a7a]">
                  {room.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Audiovisual support available",
                    "Private copper bar access",
                    "Custom floral arrangements",
                    "Sommelier-led pairings",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/50"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#e8632d]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Enquiry Form */}
        <section
          id="enquire"
          className="mt-32 rounded-[3.5rem] bg-[#1a140d] border border-white/5 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 lg:border-r lg:border-white/5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8632d]">
                Plan Your Event
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Enquire Now
              </h2>
              <p className="mt-6 text-[#9a8a7a]">
                Our event coordinator will contact you within 24 hours to begin
                tailoring your experience.
              </p>

              {submitted ? (
                <div className="mt-12 text-center py-10">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e8632d]/20 text-[#e8632d]">
                    <Calendar size={40} />
                  </div>
                  <h3 className="font-serif text-3xl">Request Received</h3>
                  <p className="mt-4 text-[#9a8a7a]">
                    We'll be in touch very soon to discuss your special event.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm text-[#e8a87c] underline cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Alexander Knight"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="date" className={labelClass}>
                        Ideal Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className={labelClass}>
                        Expected Guests
                      </label>
                      <input
                        id="guests"
                        type="number"
                        placeholder="20"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="type" className={labelClass}>
                      Event Type
                    </label>
                    <select id="type" className={inputClass}>
                      <option value="" className="bg-[#1a140d]">
                        Select type...
                      </option>
                      <option value="corporate" className="bg-[#1a140d]">
                        Corporate Dinner
                      </option>
                      <option value="wedding" className="bg-[#1a140d]">
                        Wedding Reception
                      </option>
                      <option value="birthday" className="bg-[#1a140d]">
                        Birthday Celebration
                      </option>
                      <option value="other" className="bg-[#1a140d]">
                        Other Milestone
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="notes" className={labelClass}>
                      Additional Details
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      placeholder="Tell us about your vision, dietary needs, or specific room preferences..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#e8632d] py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#f07848] cursor-pointer"
                  >
                    Send Enquiry{" "}
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </div>
            <div className="hidden lg:block relative">
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80"
                alt="Restaurant interior"
                className="h-full w-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a140d] to-transparent" />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default PrivateDining;
