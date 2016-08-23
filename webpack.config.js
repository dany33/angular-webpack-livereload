
module.exports = {
	context: __dirname + '/src',
	entry: './app.js',
    devtool: 'inline-sourcemap',
	output: {
		path: __dirname + '/build',
        publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: __dirname + '/src',
		port: 8080,
		host: 'localhost'
	},
    module: {
        loaders: [{
            test: /\,js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    }
}