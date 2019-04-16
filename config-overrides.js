
const {override, fixBabelImports,addBabelPresets} = require('customize-cra');
/*const rewiredMap = () => config => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    return config;
};*/
const polyfillEntry = () => config => {
    config.entry= ["babel-polyfill",'./src/index.js']
    return config;
};

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',

    }),
    polyfillEntry()
);
