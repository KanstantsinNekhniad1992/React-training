var webpack = require('webpack'),
	ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		__dirname + '/src/main.js'
	],
	output: {
		path: __dirname + '/public/build/',
		filename: 'script.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextWebpackPlugin.extract('style', 'css!sass')
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/,
				loader: 'url'
			}
		]
	},
	watch: true,
	plugins: [
		new webpack.NoErrorsPlugin(),
		new ExtractTextWebpackPlugin('style.css')
	],

	devServer: {
		contentBase: './public',
		host: 'localhost',
		port: '4000'
	}
};