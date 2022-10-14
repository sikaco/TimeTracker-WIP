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
            '$components': './src/components',
            '$pages': './src/components/pages',
            '$utils': './src/components/utils',
            '$xuder': './src/xuder',
          },
        },
      ],
    ],
  }
}
