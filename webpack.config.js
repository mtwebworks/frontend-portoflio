const {
  merge
} = require('webpack-merge');
const commonCofiguration = require('./webpack/common');

module.exports = (_env, {
  mode
}) => {
  const properlyConfig = require(`./webpack/${mode}`);
  const mergedConfig = merge(commonCofiguration, properlyConfig);

  return mergedConfig;
}