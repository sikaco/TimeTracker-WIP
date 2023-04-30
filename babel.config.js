module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-classname-to-style',
      [
        'react-native-platform-specific-extensions',
        { extensions: ['scss', 'sass'] },
      ],
      [
        'module-resolver',
        {
          alias: {
            'src': './src',
            '$components': './src/components',
            '$screens': './src/screens',
            '$common': './src/common',
            '$utils': './src/common/utils',
            '$xuder': './src/xuder',
          },
        },
      ],
    ],
  }
}
