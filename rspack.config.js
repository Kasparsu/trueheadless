const rspack = require('@rspack/core');
module.exports = {
    module: {
      rules: [
        
        {
            test: /\.scss$/,
            type: 'javascript/auto', 
            use: [rspack.CssExtractRspackPlugin.loader,'css-loader','postcss-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
        new rspack.CssExtractRspackPlugin({})
    ]
  };