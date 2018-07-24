module.exports = {
	entry: "./src/index.js",
	output: {
		path: `${__dirname}/dist`,
		publicPath: "/dist/",
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	devServer: {
		contentBase: "./dist",
		historyApiFallback: {
			index: "index.html",
		},
		port: 3000,
	},
};
