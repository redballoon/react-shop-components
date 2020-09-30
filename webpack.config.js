const webpack = require('webpack');

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const TerserPlugin = require('terser-webpack-plugin');

// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const today = new Date();
const banner = `${today.toDateString()}::${today.toLocaleTimeString()}`;


// store configs for css loader
// handles both module sass files and non-module sass
const cssComboLoader = {
	loader: 'css-loader',
	options: {
		sourceMap: true,
		modules: {
			// will not work if you need to use ICSS features
			auto: true,

			// use new recommended values
			// https://webpack.js.org/loaders/css-loader/#importloaders
			// for dev: '[path][name]__[local]', for prod: '[hash:base64]',

			// use slightliy modified version of recommended value
			localIdentName: '[local]__[hash:base64]', // for dev, '[name]__[local]'
		},
		importLoaders: 2,
	},
};

// store configs for post css loader
const postcssLoader = {
	loader: 'postcss-loader',
	options: {
		sourceMap: true,
		postcssOptions: {
			plugins: [
				// double array
				[
					'autoprefixer',
					{
						overrideBrowserslist: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
					}
				]
			],
		},
	},
};


module.exports = {
	mode: 'production',

	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'react-shop-components.js', // 'js/[name].[chunkhash].js',
		library: 'react-shop-components.js',
		libraryTarget: 'umd',
	},

	module: {
		rules: [{
			test: /\.js$/,
			use: 'babel-loader',
			exclude: /node_modules/,
		},
		{
			test: /\.module\.s(a|c)ss$/,
			use: [
				MiniCssExtractPlugin.loader,
				// 'style-loader',
				cssComboLoader,
				postcssLoader,
				'sass-loader',
			],
		},
		{
			test: /^((?!\.module).)*s(a|c)ss$/,
			use: [
				MiniCssExtractPlugin.loader,
				// 'style-loader',
				cssComboLoader,
				postcssLoader,
				'sass-loader',
			],
		},
		{
			// Match woff2 in addition to patterns like .woff?v=1.1.1.
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			use: {
				loader: 'url-loader',
				options: {
					// Limit at 50k. Above that it emits separate files
					limit: 50000,
					// url-loader sets mimetype if it's passed.
					// Without this it derives it from the file extension
					mimetype: 'application/font-woff',
					// Output below fonts directory
					name: './fonts/[name].[ext]',
				},
			},

		}],
	},

	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'all',
	// 		automaticNameDelimiter: '_',
	// 	},
	// },

	// https://webpack.js.org/configuration/resolve/
	// https://www.npmjs.com/package/react-bulma-components
	resolve: {
		alias: {
			// needed for bulma components
			'_variables.sass': path.resolve(__dirname, './src/sass/_variable.sass'),
		},
	},

	plugins: [
		new webpack.BannerPlugin(banner),

		// make available in window scope
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		}),

		new MiniCssExtractPlugin({
			// filename: 'css/common.[hash].css',
			// chunkFilename: 'css/[id].[hash].css',
			filename: 'css/common.css',
			chunkFilename: 'css/[id].css',
		}),

		// https://github.com/webpack-contrib/uglifyjs-webpack-plugin/releases
		// https://github.com/webpack-contrib/terser-webpack-plugin
		new TerserPlugin({
			cache: true,
			parallel: true,
			sourceMap: true,
		}),

		// new BundleAnalyzerPlugin({ generateStatsFile: true }),
	],
};
