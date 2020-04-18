const repository = '/home-page';
const assetPrefix = process.env.NODE_ENV === 'production' ? repository : '';

module.exports = {
  assetPrefix,
};
