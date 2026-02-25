import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	return (
		<footer className="mt-16 border-t border-white/10 pt-12 pb-8">
			<div className="grid grid-cols-1 gap-10 md:grid-cols-4">
				{/* Brand */}
				<div className="md:col-span-1">
					<div className="font-serif text-xl tracking-wide text-[#f5ece1]">
						Ember <span className="text-[#e8632d]">&amp;</span> Kitchen
					</div>
					<p className="mt-3 text-sm leading-relaxed text-[#9a8a7a]">
						A sanctuary of ember-cooked cuisine in the heart of New York City.
					</p>
					<div className="mt-4 flex items-center gap-3">
						<a
							href="#"
							aria-label="Instagram"
							className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors hover:border-[#e8632d]/50 hover:text-[#e8632d]"
						>
							<Instagram size={15} />
						</a>
					</div>
				</div>

				{/* Navigate */}
				<div>
					<h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#e8632d]">
						Navigate
					</h4>
					<ul className="space-y-2.5 text-sm text-white/50">
						{[
							{ label: "Menu", to: "/menu" },
							{ label: "Reservations", to: "/reservations" },
							{ label: "Private Dining", to: "/private-dining" },
							{ label: "About", to: "/about" },
						].map((link) => (
							<li key={link.to}>
								<Link
									to={link.to}
									className="transition-colors hover:text-[#e8a87c] no-underline"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Hours */}
				<div>
					<h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#e8632d]">
						Hours
					</h4>
					<ul className="space-y-2 text-sm text-white/50">
						<li className="flex items-start gap-2">
							<Clock size={13} className="mt-0.5 shrink-0 text-[#e8632d]" />
							<span>
								Tue – Thu<br />
								<span className="text-white/30">5:30 PM – 10:00 PM</span>
							</span>
						</li>
						<li className="flex items-start gap-2">
							<Clock size={13} className="mt-0.5 shrink-0 text-[#e8632d]" />
							<span>
								Fri – Sat<br />
								<span className="text-white/30">5:30 PM – 11:00 PM</span>
							</span>
						</li>
						<li className="flex items-start gap-2">
							<Clock size={13} className="mt-0.5 shrink-0 text-[#e8632d]" />
							<span>
								Sunday<br />
								<span className="text-white/30">4:00 PM – 9:00 PM</span>
							</span>
						</li>
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#e8632d]">
						Find Us
					</h4>
					<ul className="space-y-3 text-sm text-white/50">
						<li className="flex items-start gap-2">
							<MapPin size={13} className="mt-0.5 shrink-0 text-[#e8632d]" />
							<span>
								14 Driftwood Lane<br />
								Lower East Side, NY 10002
							</span>
						</li>
						<li className="flex items-center gap-2">
							<Phone size={13} className="shrink-0 text-[#e8632d]" />
							<span>(212) 555-0174</span>
						</li>
					</ul>
				</div>
			</div>

			<div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/20 sm:flex-row">
				<span>© 2025 Ember &amp; Kitchen. All rights reserved.</span>
				<span>14 Driftwood Lane, Lower East Side, NY</span>
			</div>
		</footer>
	);
};

export default Footer;
