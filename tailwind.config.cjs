module.exports = {
	purge: {
		enabled: true,
		content: [
			"./src/**/*.html",
			"./src/**/*.svelte"
		]
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
