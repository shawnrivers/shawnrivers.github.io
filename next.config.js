const repository = '/home-page';
const pathPrefix = process.env.NODE_ENV === 'production' ? repository : '';

module.exports = {
  assetPrefix: pathPrefix,
  publicRuntimeConfig: {
    basePath: pathPrefix,
  },
};
