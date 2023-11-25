/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'Inter': ['Inter', 'sans-serif'],
				'Manrope': ['Manrope', 'sans-serif'],
			},
			colors:{
				gray:{
					5: 'rgba(30, 37, 43, 0.05)',
					10: '#767F86',
					15: '#80808',
					20: '#767F86',
					25: '#787878',
					30:"#1E252B",
					35:"#72818D"
				},
				primary:"#FD801B",
				softPrimary:"rgba(253, 128, 27, 0.12)",
				ash:"rgba(30, 37, 43, 0.04)",
				darkish:"#1E252B"
			},
		},
	},
	plugins: [],
}

// 'gray': 'rgba(30, 37, 43, 0.05)',
// 				'darkGray':'#787878',
// 				'softGray':'#80808',
// 				'primary':'#FD801B'