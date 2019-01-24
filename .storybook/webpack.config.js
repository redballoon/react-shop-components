const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.


// store configs for css loader
const cssLoader = {
	loader: 'css-loader',
	options: {
		modules: false,
		sourceMap: true,
		importLoaders: 2,
	},
};

const cssModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: true,
		sourceMap: true,
		localIdentName: '[local]__[hash:base64:5]',
		importLoaders: 2,
	},
};

// store configs for post css loader
const postcssLoader = {
	loader: 'postcss-loader',
	options: {
		ident: 'postcss',
		sourceMap: true,
		plugins: () => [
			autoprefixer({
				browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
			})
		],
	},
};

module.exports = {
	plugins: [
		new MiniCssExtractPlugin({
			filename : 'css/common.css',
			chunkFilename : 'css/[id].css',
			// filename : 'css/common.[hash].css',
			// chunkFilename : 'css/[id].[hash].css',
		}),
	],
	module: {
		rules : [{
			test : /\.module\.s(a|c)ss$/,
			use : [
				MiniCssExtractPlugin.loader,
				// 'style-loader',
				cssModuleLoader,
				postcssLoader,
				'sass-loader',
			],
		},
		//  {
		// 	test : /\.s(a|c)ss$/,
		// 	use : [
		// 		// MiniCssExtractPlugin.loader,
		// 		'style-loader',
		// 		cssLoader,
		// 		postcssLoader,
		// 		'sass-loader',
		// 	],
		// },
		/*{
			test : /\.js$/,
			use : 'babel-loader',
			exclude : /node_modules/,
		}, */
		],
	},
};
