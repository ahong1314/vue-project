module.exports = {
    devServer: {
        open: true,
        proxy: 'http://www.cxcpw.me',
        overlay: {
            warnings: true,
            errors: true
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html'
        },      
        mobile: {
            entry: 'src/mobile.js',
            template: 'public/mobile.html'
        }
    },
    productionSourceMap: false,
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                // @/ is an alias to src/
                // so this assumes you have a file named `src/variables.scss`
                includePaths: ['src/style']
            }
        }
    }
}
