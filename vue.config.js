const path = require('path');
const resolve = dir => path.join(__dirname, dir);

const config = {
    chainWebpack: config => {
        config.resolve.alias.set('lodash', resolve(`node_modules/lodash-es`));
    }
};
module.exports = config;