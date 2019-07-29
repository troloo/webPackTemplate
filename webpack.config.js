const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSASS = new ExtractTextPlugin('styles.css')


module.exports = {
	mode : 'development',
	entry : './src/js/app.js',
	output : {
		path : __dirname + '/build/public',
		filename : 'bundle.js',
		publicPath: 'public/'
	},
	plugins: [
		new UglifyJsPlugin({
			sourceMap: true
		}),
		extractSASS
	],
	devtool : 'source-map',
	module: {
		rules: [{
			test: /\.scss$/,
			use: extractSASS.extract(['css-loader', 'sass-loader'])
		}]
	}
}
