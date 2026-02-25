/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				serif: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
				sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
};
