const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval', // hidden-source-map 개발일 땐 eval, 배포일 땐 hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                // 자동으로 옛날 브라우저들 지원해주는 애이다.
                targets: {
                  browsers: ['> 5% in KR', 'last 2 chrome versions'], // 원하는 브라우저에만 맞춰서 설정 해줄 수도 있다.
                  // 회사에서 지원하고자 하는 브라우저에만 맞추는게 중요, 안그럼 넘 많아서 느려진다. //browserlist에서 자세한 옵션들을 볼 수 있다.
                },
                debug: true, // 개발용에서 쓴다.
              },
            ],
            '@babel/preset-react',
          ],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
};
