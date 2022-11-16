const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'number-baseball-setting', // 어떤 걸 위한 webpack 설정인지
  mode: 'development', // 실서비스에서는 production으로 바꾸면 된다.
  devtool: 'eval', // 빠르게 하겠다는 것이다.
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['./client'],
  }, // 입력 (합쳐서 app.js에 넣을 걸 적으면 된다.)

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
                  browsers: ['> 1% in KR'], // 원하는 브라우저에만 맞춰서 설정 해줄 수도 있다.
                  // 회사에서 지원하고자 하는 브라우저에만 맞추는게 중요, 안그럼 넘 많아서 느려진다. //browserlist에서 자세한 옵션들을 볼 수 있다.
                },
                debug: true, // 개발용에서 쓴다.
              },
            ],
            '@babel/preset-react',
          ],
          plugins: ['react-refresh/babel'],
        },
      },
    ],
  },

  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, 'dist'), // 현재 폴더 안의 dist 폴더
    filename: 'app.js',
  }, // 출력 (webpack 출력하는 것, app.js)

  devServer: {
    // webpack build 한 결과물을 dist에 메모리로 저장을 해놓는다. 여기서 변경점을 감지할 수 있다. 변경점을 감지해 저장했던 결과물을 수정해준다.
    devMiddleware: { publicPath: '/dist' }, // webpack이 build한 파일들이 위치하는 경로, 지금 단계에서는 존재하지 않지만 dist 폴더안에다가 생성, dev 서버인 경우 메모리에 생성(webpack이 생성해주는 경로)
    static: { directory: path.resolve(__dirname) }, // 실제로 존재하는 정적파일들의 경로 (여기 폴더에서는 index.html과 같은 파일들의 경로),
    // 만약 index.html이 다른 폴더에 있으면 path.resolve(__dirname , 'src') 이렇게 하면 된다. src 폴더
    hot: true,
  },
};
