module.exports = {
  entry: {
    main: '/src/main.js'
  },
  mode: 'development',
  optimization:{
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]]
          }
        },
        exclude: /node_modules/,
      }
    ]
  }
}