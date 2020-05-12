const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | more about Laravel-mix
 |--------------------------------------------------------------------------
 |
 | visit : https://laravel-mix.com/docs/
 |
 | if you use browserSync
 | first run :=  npm install  browser-sync browser-sync-webpack-plugin@2.2.2 --save-dev
 |
 |
 */

mix.js('resources/js/app.js', 'public/js/main.js')
    .sass('resources/sass/app.scss', 'public/css/style.css')
    .options({ processCssUrls: false });