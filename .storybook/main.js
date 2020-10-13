const webpack = require('../webpack.config.js');

module.exports = {
	"stories": [
		"../stories/*.stories.mdx",
		"../stories/*.stories.@(js|jsx|ts|tsx)"
	],

	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials"
	],

	// https://storybook.js.org/docs/react/configure/webpack
	// Nevertheless, edit config with care.
	// Make sure to preserve the following config options: entry, output
	webpackFinal: (config) => {
		const [BannerPlugin, DefinePlugin, MiniCssExtractPlugin, ...Plugins] = webpack.plugins;

		// console.log('####', webpack.plugins);
		// console.log('####', MiniCssExtractPlugin);

		return {
			...config,

			module: {
				...config.module,

				// we are overwriting with ours wholesale
				// which breaks the demo stories (mdx files)
				rules: webpack.module.rules
			},

			resolve: {
				...config.resolve,

				alias: {
					...config.resolve.alias,
					...webpack.resolve.alias
				}
			},

			plugins: [...config.plugins, MiniCssExtractPlugin]
		};
	},
}
