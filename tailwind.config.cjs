module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		theme: {
			extend: {
				fontFamily: {
					body: ['Junicode'],
					wotfard: ['Wotfard']
				},
				animation: {
					text: 'text 5s ease infinite'
				},
				keyframes: {
					text: {
						'0%, 100%': {
							'background-size': '200% 200%',
							'background-position': 'left center'
						},
						'50%': {
							'background-size': '200% 200%',
							'background-position': 'right center'
						}
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
