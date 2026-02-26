import { ArrowRight, Clock, Info, MapPin, Phone } from "lucide-react";
import type React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const times = [
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

const occasions = [
  "",
  "Birthday",
  "Anniversary",
  "Date Night",
  "Business Dinner",
  "Celebration",
  "Other",
];

const Reservations: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    requests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8632d]">
              Secure Your Evening
            </p>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl">
              Reserve a Table
            </h1>
            <p className="mt-4 text-[#9a8a7a] leading-relaxed">
              We recommend booking at least 48 hours in advance. For same-day
              reservations, please call us directly.
            </p>

            {submitted ? (
              <div className="mt-10 rounded-3xl border border-[#e8632d]/30 bg-[#e8632d]/10 p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8632d]/20">
                  <ArrowRight size={24} className="text-[#e8632d]" />
                </div>
                <h2 className="font-serif text-3xl">We'll see you soon.</h2>
                <p className="mt-3 text-sm text-[#9a8a7a]">
                  A confirmation has been sent to{" "}
                  <span className="text-[#e8a87c]">{form.email}</span>. We look
                  forward to welcoming you to Ember &amp; Kitchen.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-white/40 underline hover:text-white/70 cursor-pointer"
                >
                  Make another reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(212) 555-0100"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className={labelClass}>
                      Party Size
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n} className="bg-[#1a140d]">
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option value="8+" className="bg-[#1a140d]">
                        8+ Guests (Private Dining)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="date" className={labelClass}>
                      Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className={labelClass}>
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" className="bg-[#1a140d]">
                        Select a time
                      </option>
                      {times.map((t) => (
                        <option key={t} value={t} className="bg-[#1a140d]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="occasion" className={labelClass}>
                    Occasion (optional)
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {occasions.map((o) => (
                      <option key={o} value={o} className="bg-[#1a140d]">
                        {o || "Select an occasion"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="requests" className={labelClass}>
                    Special Requests
                  </label>
                  <textarea
                    id="requests"
                    name="requests"
                    rows={3}
                    placeholder="Dietary requirements, allergies, celebrations..."
                    value={form.requests}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#e8632d] py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#f07848] cursor-pointer"
                >
                  Confirm Reservation
                </button>

                <p className="flex items-center gap-1.5 text-center text-xs text-white/25 justify-center">
                  <Info size={11} />
                  Cancellations accepted up to 24 hours before your booking.
                </p>
              </form>
            )}
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-2 space-y-5">
            {/* Hours */}
            <div className="rounded-3xl border border-white/10 bg-[#1a140d] p-6">
              <div className="mb-4 flex items-center gap-2">
                <Clock size={15} className="text-[#e8632d]" />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8632d]">
                  Hours
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  { day: "Tuesday – Thursday", hours: "5:30 PM – 10:00 PM" },
                  { day: "Friday – Saturday", hours: "5:30 PM – 11:00 PM" },
                  { day: "Sunday", hours: "4:00 PM – 9:00 PM" },
                  { day: "Monday", hours: "Closed" },
                ].map(({ day, hours }) => (
                  <li key={day} className="flex justify-between">
                    <span className="text-white/50">{day}</span>
                    <span
                      className={
                        hours === "Closed" ? "text-white/25" : "text-[#e8a87c]"
                      }
                    >
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="rounded-3xl border border-white/10 bg-[#1a140d] p-6">
              <div className="mb-4 flex items-center gap-2">
                <MapPin size={15} className="text-[#e8632d]" />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8632d]">
                  Location
                </h3>
              </div>
              <p className="text-sm text-white/60">14 Driftwood Lane</p>
              <p className="text-sm text-white/60">Lower East Side, NY 10002</p>
              <p className="mt-3 text-xs text-white/30">
                Valet parking available on weekends. Nearest subway: Delancey St
                (F, M, J, Z).
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-3xl border border-white/10 bg-[#1a140d] p-6">
              <div className="mb-4 flex items-center gap-2">
                <Phone size={15} className="text-[#e8632d]" />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8632d]">
                  By Phone
                </h3>
              </div>
              <p className="font-serif text-2xl text-[#f5ece1]">
                (212) 555-0174
              </p>
              <p className="mt-2 text-xs text-white/30">
                Available daily from 2:00 PM until 30 minutes before closing.
              </p>
            </div>

            {/* Large groups note */}
            <div className="rounded-3xl bg-[#e8632d]/10 border border-[#e8632d]/20 p-6">
              <p className="text-sm font-medium text-[#e8a87c]">
                Groups of 8 or more?
              </p>
              <p className="mt-1 text-xs text-white/40">
                We offer exclusive private dining rooms for larger parties.
                Contact us directly to arrange a bespoke evening.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Reservations;
