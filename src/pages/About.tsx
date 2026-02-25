import { ArrowRight, Flame, Heart, Leaf, Users } from "lucide-react";
import type React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const About: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-[#111009] text-[#f5ece1] selection:bg-[#e8632d] selection:text-[#111009]">
			<div className="mx-auto max-w-7xl px-6 py-7 md:px-10">
				<Nav />

				{/* Hero Section */}
				<header className="mt-12 text-center">
					<p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8632d]">
						Our Story
					</p>
					<h1 className="mt-4 font-serif text-5xl md:text-7xl">
						Born from <em className="text-[#e8a87c]">fire.</em>
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#9a8a7a]">
						Ember & Kitchen began with a simple belief: that the most profound
						flavours are found in the simplest elements. Wood, stone, and flame.
					</p>
				</header>

				{/* Image Grid */}
				<section className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div className="overflow-hidden rounded-[2.5rem]">
						<img
							src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=1200&q=80"
							alt="Wood-fired grill"
							className="h-[500px] w-full object-cover transition-transform duration-1000 hover:scale-105"
						/>
					</div>
					<div className="flex flex-col justify-center gap-8 px-4 md:px-8">
						<div>
							<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8632d]/10">
								<Flame className="text-[#e8632d]" size={24} />
							</div>
							<h2 className="font-serif text-3xl md:text-4xl">The Ember Method</h2>
							<p className="mt-4 leading-relaxed text-[#9a8a7a]">
								We don't use gas or electricity for our main courses. Every dish is
								kissed by the heat of seasoned oak and applewood. This ancestral
								method requires patience, intuition, and a deep respect for the
								ingredients.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<div>
								<p className="font-serif text-3xl text-[#e8a87c]">1,200°</p>
								<p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/30">
									Peak Temperature
								</p>
							</div>
							<div>
								<p className="font-serif text-3xl text-[#e8a87c]">100%</p>
								<p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/30">
									Sustainably Sourced Wood
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Chef Section */}
				<section className="mt-24 rounded-[3rem] bg-[#1a140d] p-8 md:p-16">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
						<div className="order-2 lg:order-1">
							<p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e8632d]">
								The Visionary
							</p>
							<h2 className="mt-4 font-serif text-4xl md:text-5xl">
								Chef Elias Marlowe
							</h2>
							<p className="mt-6 text-[#9a8a7a] leading-relaxed">
								With twenty years of experience in Michelin-starred kitchens
								across London and Copenhagen, Elias returned to his roots to
								explore the intersection of modern technique and primitive fire.
							</p>
							<p className="mt-4 text-[#9a8a7a] leading-relaxed">
								"Fire is alive. It has a mood, a rhythm. My job is to listen to it
								and know exactly when the ingredient has reached its peak. It's
								not just cooking; it's a conversation."
							</p>
							<div className="mt-8 flex items-center gap-4">
								<div className="h-12 w-12 overflow-hidden rounded-full border border-white/10">
									<img
										src="https://images.unsplash.com/photo-1577214190088-3d1f14840bc4?auto=format&fit=crop&w=400&q=80"
										alt="Chef Elias Marlowe"
										className="h-full w-full object-cover"
									/>
								</div>
								<div>
									<p className="text-sm font-bold uppercase tracking-widest text-[#f5ece1]">
										E. Marlowe
									</p>
									<p className="text-xs text-white/30">Executive Chef & Founder</p>
								</div>
							</div>
						</div>
						<div className="order-1 flex justify-center lg:order-2">
							<div className="relative">
								<div className="absolute -inset-4 rounded-full border border-[#e8632d]/20 animate-pulse" />
								<div className="relative h-[400px] w-[300px] overflow-hidden rounded-[2.5rem] md:h-[500px] md:w-[400px]">
									<img
										src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=1200&q=80"
										alt="Chef Marlowe at the grill"
										className="h-full w-full object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Values */}
				<section className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-3">
					<div className="text-center">
						<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/[0.03] text-[#e8a87c]">
							<Leaf size={32} />
						</div>
						<h3 className="font-serif text-2xl">Radical Sourcing</h3>
						<p className="mt-4 text-sm leading-relaxed text-[#9a8a7a]">
							If it's not in season within 100 miles, it's not on our menu. We
							partner with 12 local farms to bring the soil's story to your plate.
						</p>
					</div>
					<div className="text-center">
						<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/[0.03] text-[#e8a87c]">
							<Heart size={32} />
						</div>
						<h3 className="font-serif text-2xl">Intuitive Service</h3>
						<p className="mt-4 text-sm leading-relaxed text-[#9a8a7a]">
							We believe in hospitality that anticipates. Professional, yet
							warm. Sophisticated, yet grounded. Every guest is part of our
							family.
						</p>
					</div>
					<div className="text-center">
						<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/[0.03] text-[#e8a87c]">
							<Users size={32} />
						</div>
						<h3 className="font-serif text-2xl">Community Table</h3>
						<p className="mt-4 text-sm leading-relaxed text-[#9a8a7a]">
							Food is the ultimate connector. We host monthly community evenings
							and workshops on sustainable living and ancestral cooking.
						</p>
					</div>
				</section>

				{/* Final CTA */}
				<section className="mt-24 mb-12 overflow-hidden rounded-[3rem] bg-[#e8632d] p-12 text-center md:p-20">
					<h2 className="font-serif text-4xl md:text-6xl text-white">
						Join us at the hearth.
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-white/80">
						Whether it's a quiet Tuesday or a landmark celebration, we have a
						seat waiting for you.
					</p>
					<div className="mt-10 flex flex-wrap justify-center gap-4">
						<button
							type="button"
							onClick={() => navigate("/reservations")}
							className="rounded-full bg-[#111009] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#2a241a] hover:scale-105 cursor-pointer"
						>
							Book a Table
						</button>
						<button
							type="button"
							onClick={() => navigate("/menu")}
							className="rounded-full border border-white/20 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10 cursor-pointer"
						>
							Explore the Menu <ArrowRight className="inline-block ml-2" size={16} />
						</button>
					</div>
				</section>

				<Footer />
			</div>
		</div>
	);
};

export default About;
