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
            '$pages': './src/pages',
            '$utils': './src/utils',
            '$xuder': './src/xuder',
          },
        },
      ],
    ],
  }
}
