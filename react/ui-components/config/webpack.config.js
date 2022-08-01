const path = require("path");

const ROOT = path.resolve(__dirname, '../')

module.exports = {
  mode: "development",
  entry: path.join(ROOT, "src/index.ts"),
  output: {
    filename: "bundle.js",
    path: path.join(ROOT, "build"),
    libraryTarget: 'umd',
    umdNamedDefine: true,
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: path.join(ROOT, 'tsconfig.json')
          }
        }],
      },
      {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // type: 'asset/inline',
        type: 'asset',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
  }
}