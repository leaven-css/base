const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const cssnano = require('cssnano');
const systemMonospace = require('postcss-system-monospace');
const systemUI = require('postcss-font-family-system-ui');
const colorEmoji = require('postcss-color-emoji');
const pseudoClassAnyLink = require('postcss-pseudo-class-any-link');
const nesting = require('postcss-nesting');
const inputRange = require('postcss-input-range');


module.exports = (context) => {
  const isProduction = context.env === 'production';

  return {
    map: false,
    plugins: [
      atImport,
      nesting,
      systemMonospace,
      systemUI,
      colorEmoji,
      pseudoClassAnyLink({
        preserve: false
      }),
      inputRange,
      autoprefixer,
      isProduction ? cssnano : null
    ].filter(Boolean),
  }
};
