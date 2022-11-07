const path = require('path');

module.exports = {
  name: 'word-relay-setting', // 어떤 걸 위한 webpack 설정인지
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
        test: /\.jsx?/, //  규칙을 적용할 파일들, js파일이랑 jsx파일에 룰을 적용하겠다는 뜻
        loader: 'babel-loader', // babel rule을 적용하겠다. js랑 jsx에 바벨을 적용해서 최신이나 실용적인 문법을 옛날 브라우저에서 돌아가는 문법으로 바꿔주겠다.
        options: {
          // babel option들, presets들 받은거 넣어주면 된다.
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ], // rules는 여러개의 규칙을 정할 수 있기 때문에 배열이다.
  }, // entry의 파일을 읽고 거기에 module을 적용한 후 output에 뺸다.

  output: {
    path: path.join(__dirname, 'dist'), // 현재 폴더 안의 dist 폴더
    filename: 'app.js',
  }, // 출력 (webpack 출력하는 것, app.js)
};
