/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require("autoprefixer");
const cssimport = require("postcss-import");
const cssnano = require("cssnano");
const nested = require("postcss-nested");
const presetEnv = require("postcss-preset-env");
const tailwind = require("tailwindcss");

const plugins =
	process.env.NODE_ENV === "production"
		? [cssimport, tailwind, autoprefixer, nested, presetEnv, cssnano]
		: [cssimport, tailwind, autoprefixer, nested, presetEnv];

module.exports = { plugins };