export default () => string =>
	string
		.replace(/_/g, ' ')
		.toLowerCase()
		.replace(/\b./g, a => a.toUpperCase())
