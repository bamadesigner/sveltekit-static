module.exports = {
	extends: ["stylelint-config-recommended", "stylelint-config-standard"],
	rules: {
		indentation: "tab",
		"string-quotes": "double",
		"no-duplicate-selectors": true,
		"color-hex-case": "lower",
		"color-hex-length": "long",
		"color-named": "never",
		"selector-combinator-space-after": "always",
		"declaration-block-trailing-semicolon": "always",
		"declaration-no-important": true,
		"declaration-colon-space-before": "never",
		"declaration-colon-space-after": "always",
		"property-no-vendor-prefix": true,
		"value-no-vendor-prefix": true,
		"number-leading-zero": "always",
		"at-rule-no-vendor-prefix": true,
		"selector-no-vendor-prefix": true,
		"media-feature-name-no-vendor-prefix": true,
		"media-query-list-comma-newline-after": "always",
		"max-line-length": [
			null,
			{
				ignore: "comments",
			},
		],
		"function-url-quotes": null,
		"font-family-name-quotes": null,
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: ["tailwind", "apply", "layer", "responsive", "screen", "mixin", "define-mixin"],
			},
		],
		"selector-class-pattern": "[a-z-_]+",
	},
};
