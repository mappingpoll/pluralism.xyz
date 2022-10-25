const pcss_import = require('postcss-import');
const pcss_extend = require('postcss-extend-rule');
const pcss_preset_env = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');
const cssnano = require('cssnano');

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    pcss_import(),
    pcss_extend(),
    pcss_preset_env({
      stage: 4,
      features: {
        'nesting-rules': true,
      }
    }),
    autoprefixer,
    stylelint({
      fix: true,
      rules: {
        "at-rule-no-unknown": null,
      },
    }),
    cssnano({
      preset: "default",
    }),
  ],
};
