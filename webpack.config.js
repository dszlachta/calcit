const path = require('path');

module.exports = {
    entry: {
        lib: './src/index.js',
        component: './src/component/index.js',
        calcit: './src/index.js' // temporary
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'CalcIt',
        libraryTarget: 'umd'
    }
};
