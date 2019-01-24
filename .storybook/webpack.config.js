const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
	plugins: [
	],
	module: {
		rules : [/*{
			test : /\.js$/,
			use : 'babel-loader',
			exclude : /node_modules/,
		}, */{
			test : /\.sass/,
			use : [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader'
			],
		}],
	},
};
