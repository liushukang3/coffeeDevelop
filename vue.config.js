const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    pluginOptions: { // 第三方插件配置
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/assets/css/mixin.less')] // less所在文件路径
        }
    }
}