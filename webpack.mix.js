let mix = require('laravel-mix');


mix.copy('src/js/vendor', 'dist/js/vendor');

mix.sass('src/sass/app.scss', 'dist/css/').options({
    processCssUrls: false
});

mix.styles([
    'dist/css/app.css',
], 'dist/css/app.css', './');


mix.js('src/js/app.js', 'dist/js/');

mix.webpackConfig({
    target: "electron-renderer"
});