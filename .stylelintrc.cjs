module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order'],
  rules: {
    'color-hex-length': 'long',
  },
};
