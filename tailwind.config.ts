import { type Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				foreground: "hsl(20 14.3% 4.1%)",
				background: "hsl(0 0% 100%)",
				card: "hsl(0 0% 100%)",
				cardForeground: "hsl(20 14.3% 4.1%)",
				popover: "hsl(0 0% 100%)",
				popoverForeground: "hsl(20 14.3% 4.1%)",
				primary: "hsl(22 100% 50%)",
				primaryForeground: "hsl(60 9.1% 97.8%)",
				secondary: "hsl(32 100% 98%)",
				secondaryForeground: "hsl(24 9.8% 10%)",
				muted: "hsl(60 4.8% 95.9%)",
				mutedForeground: "hsl(25 5.3% 44.7%)",
				accent: "hsl(60 4.8% 95.9%)",
				accentForeground: "hsl(24 9.8% 10%)",
				destructive: "hsl(0 84.2% 60.2%)",
				destructiveForeground: "hsl(60 9.1% 97.8%)",
				border: "hsl(20 5.9% 90%)",
				input: "hsl(0 0% 90%)",
				ring: "hsl(24.6 95% 53.1%)",
			},
			borderRadius: {
				DEFAULT: "18px",
			},
			fontFamily: {
				nunito: ["var(--font-nunito)", "sans-serif"],
			},
		},
	},
	plugins: [],
};

export default config;
