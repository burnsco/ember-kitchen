import { Leaf } from "lucide-react";
import type React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const starters = [
	{
		dish: "Charred Wagyu Tartare",
		desc: "Truffle aioli, quail egg, toasted brioche",
		price: "$34",
		tags: ["Chef's Choice"],
	},
	{
		dish: "Wood-Fired Burrata",
		desc: "Heirloom tomato, basil oil, fleur de sel, aged balsamic",
		price: "$22",
		tags: ["Vegetarian"],
	},
	{
		dish: "Seared Scallops",
		desc: "Cauliflower purée, golden raisin, capers, brown butter",
		price: "$28",
		tags: [],
	},
	{
		dish: "Bone Marrow Toast",
		desc: "Herb gremolata, pickled shallots, sourdough soldiers",
		price: "$26",
		tags: [],
	},
];

const mains = [
	{
		dish: "Ember-Roasted Halibut",
		desc: "Miso beurre blanc, pickled shallots, sea herbs, yuzu foam",
		price: "$58",
		tags: ["Chef's Choice"],
		image:
			"https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
	},
	{
		dish: "Smoked Duck Confit",
		desc: "Lentil cassoulet, black cherry reduction, wilted greens",
		price: "$52",
		tags: [],
		image:
			"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
	},
	{
		dish: "45-Day Dry-Aged Ribeye",
		desc: "Bone marrow butter, roasted bone, watercress, truffle fries",
		price: "$78",
		tags: ["Signature"],
		image:
			"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80",
	},
	{
		dish: "Heritage Pork Belly",
		desc: "Apple cider glaze, fennel slaw, roasted root vegetables",
		price: "$46",
		tags: [],
		image:
			"https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=900&q=80",
	},
];

const desserts = [
	{
		dish: "Valrhona Chocolate Lava",
		desc: "Salted caramel, vanilla bean ice cream, cocoa tuile",
		price: "$18",
	},
	{
		dish: "Burnt Honey Panna Cotta",
		desc: "Candied walnuts, lavender, seasonal berries",
		price: "$16",
	},
	{
		dish: "Ember Crème Brûlée",
		desc: "Orange zest, Grand Marnier, cane sugar crust",
		price: "$16",
	},
];

const wines = [
	{ name: "Château Margaux 2018", region: "Bordeaux, France", price: "$28 / $110" },
	{ name: "Barolo Brunate, Vietti", region: "Piedmont, Italy", price: "$24 / $90" },
	{ name: "Sancerre Blanc, Vacheron", region: "Loire Valley, France", price: "$19 / $72" },
	{ name: "Champagne Billecart-Salmon", region: "Reims, France", price: "$22 / $85" },
];

const SectionHeading: React.FC<{ label: string; title: string }> = ({ label, title }) => (
	<div className="mb-8">
		<p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8632d]">{label}</p>
		<h2 className="mt-2 font-serif text-4xl">{title}</h2>
	</div>
);

const Menu: React.FC = () => {
	return (
		<div className="min-h-screen bg-[#111009] text-[#f5ece1] selection:bg-[#e8632d] selection:text-[#111009]">
			<div className="mx-auto max-w-7xl px-6 py-7 md:px-10">
				<Nav />

				{/* Hero */}
				<header className="mt-10 mb-14 text-center">
					<p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8632d]">
						Seasonal · Locally Sourced · Chef-Led
					</p>
					<h1 className="mt-4 font-serif text-6xl md:text-7xl">Our Menu</h1>
					<p className="mx-auto mt-5 max-w-xl text-[#9a8a7a] leading-relaxed">
						Every dish is shaped by the season and the fire. Our menu changes
						regularly to honour what's freshest within 100 miles of our kitchen.
					</p>
					<div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs text-white/50">
						<Leaf size={12} className="text-[#e8632d]" />
						Menu subject to change based on seasonal availability
					</div>
				</header>

				{/* Starters */}
				<section className="mb-16">
					<SectionHeading label="To Begin" title="Starters" />
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						{starters.map((item) => (
							<div
								key={item.dish}
								className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#1a140d] p-6"
							>
								<div className="flex-1">
									<div className="flex flex-wrap items-center gap-2">
										<h3 className="font-serif text-xl">{item.dish}</h3>
										{item.tags.map((tag) => (
											<span
												key={tag}
												className="rounded-full bg-[#e8632d]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#e8632d]"
											>
												{tag}
											</span>
										))}
									</div>
									<p className="mt-1.5 text-sm text-[#9a8a7a]">{item.desc}</p>
								</div>
								<span className="shrink-0 font-medium text-[#e8a87c]">{item.price}</span>
							</div>
						))}
					</div>
				</section>

				{/* Mains */}
				<section className="mb-16">
					<SectionHeading label="The Heart of the Menu" title="Mains" />
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						{mains.map((item) => (
							<div
								key={item.dish}
								className="group overflow-hidden rounded-3xl border border-white/10 bg-[#1a140d]"
							>
								<div className="aspect-[16/7] overflow-hidden">
									<img
										src={item.image}
										alt={item.dish}
										className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
								</div>
								<div className="p-6">
									<div className="flex flex-wrap items-center gap-2">
										<h3 className="font-serif text-2xl">{item.dish}</h3>
										{item.tags.map((tag) => (
											<span
												key={tag}
												className="rounded-full bg-[#e8632d]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#e8632d]"
											>
												{tag}
											</span>
										))}
									</div>
									<p className="mt-2 text-sm text-[#9a8a7a]">{item.desc}</p>
									<div className="mt-4 flex items-center justify-between">
										<span className="font-medium text-[#e8a87c]">{item.price}</span>
										<span className="text-xs uppercase tracking-[0.18em] text-white/30">Seasonal</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Desserts */}
				<section className="mb-16">
					<SectionHeading label="A Sweet Conclusion" title="Desserts" />
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						{desserts.map((item) => (
							<div
								key={item.dish}
								className="rounded-2xl border border-white/10 bg-[#1a140d] p-6"
							>
								<h3 className="font-serif text-xl">{item.dish}</h3>
								<p className="mt-1.5 text-sm text-[#9a8a7a]">{item.desc}</p>
								<p className="mt-4 font-medium text-[#e8a87c]">{item.price}</p>
							</div>
						))}
					</div>
				</section>

				{/* Wine */}
				<section className="mb-10">
					<SectionHeading label="Curated Selections" title="Wine & Pairings" />
					<div className="overflow-hidden rounded-3xl border border-white/10">
						{wines.map((wine, i) => (
							<div
								key={wine.name}
								className={`flex items-center justify-between gap-4 px-6 py-5 ${
									i < wines.length - 1 ? "border-b border-white/5" : ""
								}`}
							>
								<div>
									<p className="font-medium text-[#f5ece1]">{wine.name}</p>
									<p className="text-xs text-[#9a8a7a]">{wine.region}</p>
								</div>
								<span className="shrink-0 text-sm font-medium text-[#e8a87c]">
									{wine.price}
									<span className="text-white/30"> / glass · btl</span>
								</span>
							</div>
						))}
					</div>
					<p className="mt-4 text-center text-xs text-white/30">
						Ask your server about our full cellar list and sommelier-led pairings.
					</p>
				</section>

				{/* Tasting Menu CTA */}
				<section className="rounded-3xl bg-[#1a140d] border border-[#e8632d]/20 p-8 text-center">
					<h3 className="font-serif text-3xl">Experience the Tasting Menu</h3>
					<p className="mx-auto mt-3 max-w-md text-sm text-[#9a8a7a]">
						Seven courses guided by Chef Marlowe, paired with wines from our cellar.
						Available Tuesday through Saturday evenings.
					</p>
					<p className="mt-2 text-2xl font-serif text-[#e8a87c]">$145 <span className="text-sm text-white/40 font-sans">per person</span></p>
				</section>

				<Footer />
			</div>
		</div>
	);
};

export default Menu;
