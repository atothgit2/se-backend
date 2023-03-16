module.exports = {
  watch: true,
  mode: "development",
  devtool: "inline-source-map",
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    sourceMapFilename: "bundle.js.map"
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
