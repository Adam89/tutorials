const path = require('path'); // path module access to all node.js methods
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/main.js', // entry point
	output: {
		path: path.resolve(__dirname, 'build'), // builds absolute path
		filename: 'build.js'
	},
	module: { // preprocessing modules
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
						sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
					} // vue-loader options go here
				}
			},
			{
				use: 'babel-loader',
				test: /\.js$/, // if file ends with .js babel will run
				exclude: /node_modules/ // don't transform node_modules folder (which don't need to be compiled)
			},
			{
				test: /\.(png|jpg|gif|svg)$/, // if file ends with images copy file
				loader: 'file',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'sass-loader']
				})
			},
		]
	},
	resolve: { // renders vue components
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},

	plugins: [
		new ExtractTextPlugin('css/styles.css')
	]
};

//loaders are used to enhance webpacks features


module.exports = config; // common.js approach