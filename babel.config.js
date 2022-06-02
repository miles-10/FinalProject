module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utility': './src/utility',
        },
      },
    ],
    'react-native-reanimated/plugin'
  ],
};
