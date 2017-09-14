/* global require, module, __dirname */
var path = require("path");
var pkg = require("./package.json");
var webpack = require("webpack");

module.exports = {
	entry: {
		".": path.join(__dirname, "src/index"),
		".min.": path.join(__dirname, "src/index")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	externals: {
		knockout: {
			commonjs: "knockout",
			commonjs2: "knockout",
			amd: "knockout",
			root: "ko"
		}
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: pkg.name + "[name]js",
		library: pkg.name,
		libraryTarget: "umd"
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			minimize: true
		}),
		new webpack.BannerPlugin(
			`${pkg.name} ${pkg.version} | (c) ${new Date().getFullYear()} Ryan Niemeyer |  http://www.opensource.org/licenses/mit-license`
		)
	]
};
