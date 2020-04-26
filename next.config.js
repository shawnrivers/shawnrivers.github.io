const withImages = require('next-images');

const repository = '';
const pathPrefix = process.env.NODE_ENV === 'production' ? repository : '';

module.exports = withImages({
  assetPrefix: pathPrefix,
  publicRuntimeConfig: {
    basePath: pathPrefix,
  },
});
