const path = require('path'); // path module access to all node.js methods
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/index.js', // entry point
	output: {
		path: path.resolve(__dirname, 'build'), // builds absolute path
		filename: 'bundle.js'
	},
	module: { // preprocessing modules
		rules: [{
			use: 'babel-loader',
			test: /\.js$/ // if file ends with .js babel will run
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				//resolve-url-loader may be chained before sass-loader if necessary
				use: ['css-loader', 'sass-loader']
			})
		},
		{
			test: /\.(jpe?g|png|gif|svg)$/, // image extension pipeline
			use: [
				{
					loader:'image-webpack-loader?'
				},
				{
					loader:'url-loader',
					options: {limit: 400000} // look for any images 40kb large save as seprate file otherwise include in bundle js output
				},
			]
		}
	]
},
	plugins: [
		new ExtractTextPlugin('css/styles.css')
	]
};

//loaders are used to enhance webpacks features


module.exports = config; // common.js approach
