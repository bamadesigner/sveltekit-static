/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require("autoprefixer");
const cssimport = require("postcss-import");
const cssnano = require("cssnano");
const discardDuplicates = require("postcss-discard-duplicates");
const nested = require("postcss-nested");
const presetEnv = require("postcss-preset-env");
const tailwind = require("tailwindcss");

const plugins =
	process.env.NODE_ENV === "production"
		? [cssimport, tailwind, autoprefixer, nested, presetEnv, discardDuplicates, cssnano]
		: [cssimport, tailwind, autoprefixer, nested, presetEnv, discardDuplicates];

module.exports = { plugins };
