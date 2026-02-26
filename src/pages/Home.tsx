import { ArrowRight, Clock, MapPin, Star, Utensils } from "lucide-react";
import type React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const menu = [
  {
    dish: "Charred Wagyu Tartare",
    desc: "Truffle aioli, quail egg, toasted brioche",
    price: "$34",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
  },
  {
    dish: "Ember-Roasted Halibut",
    desc: "Miso beurre blanc, pickled shallots, sea herbs",
    price: "$58",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
  },
  {
    dish: "Smoked Duck Confit",
    desc: "Lentil cassoulet, black cherry reduction",
    price: "$52",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#111009] text-[#f5ece1] selection:bg-[#e8632d] selection:text-[#111009]">
      <div className="mx-auto max-w-7xl px-6 py-7 md:px-10">
        <Nav />

        {/* Hero */}
        <header className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
              alt="Fine dining restaurant"
              className="h-full min-h-[500px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111009]/80 via-[#111009]/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-1 text-[#e8a87c]">
                {Array.from({ length: 5 }).map((_, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static list of 5 stars, order never changes
                  <Star key={`star-${i}`} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-2 text-sm text-white/70">
                "One of the most transcendent dining experiences in the city." —
                The Evening Post
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-7">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#e8632d]">
                <Utensils size={13} /> Open Nightly · Tasting Menu Available
              </p>
              <h1 className="mt-5 font-serif text-5xl leading-[1.0] md:text-7xl">
                Where fire
                <br />
                meets <em className="text-[#e8a87c]">flavour.</em>
              </h1>
              <p className="mt-6 leading-relaxed text-[#9a8a7a]">
                A sanctuary of ember-cooked cuisine in the heart of the city.
                Chef-led tasting menus, curated wine pairings, and ingredients
                sourced within 100 miles.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/reservations")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e8632d] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#f07848] cursor-pointer"
              >
                Book Tonight <ArrowRight size={15} />
              </button>
              <button
                type="button"
                onClick={() => navigate("/menu")}
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white/70 transition-colors hover:bg-white/5 cursor-pointer"
              >
                View Menu
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <Clock size={16} className="text-[#e8632d]" />
                <p className="mt-2 text-sm font-medium">Tue – Sun</p>
                <p className="text-xs text-white/50">5:30 PM – 11:00 PM</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <MapPin size={16} className="text-[#e8632d]" />
                <p className="mt-2 text-sm font-medium">14 Driftwood Lane</p>
                <p className="text-xs text-white/50">Lower East Side, NY</p>
              </div>
            </div>
          </div>
        </header>

        {/* Tonight's Signatures */}
        <section className="mt-10">
          <h2 className="mb-6 font-serif text-3xl">Tonight's Signatures</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {menu.map((item) => (
              <article
                key={item.dish}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#1a140d]"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.dish}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl">{item.dish}</h3>
                  <p className="mt-1.5 text-sm text-[#9a8a7a]">{item.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-medium text-[#e8a87c]">
                      {item.price}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Seasonal
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => navigate("/menu")}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#e8a87c] transition-colors hover:text-[#e8632d] cursor-pointer"
            >
              View full menu <ArrowRight size={14} />
            </button>
          </div>
        </section>

        {/* Reservation CTA */}
        <section className="mt-8 rounded-3xl bg-[#e8632d] p-8 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="font-serif text-3xl text-white">
              Make it a night to remember.
            </h3>
            <p className="mt-2 text-white/75">
              Private dining rooms available for groups of 8 or more.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/reservations")}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#111009] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#2a1e14] md:mt-0 cursor-pointer"
          >
            Enquire Now <ArrowRight size={15} />
          </button>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
