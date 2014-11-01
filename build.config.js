/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {

    src_dir: 'src',
    compile_dir: 'www',
    tmp_dir: '.tmp',

    app_files: {
        html: ['index.html', 'templates/**/*.html' ],
        js: [ 'js/**/*.js'],
        assets: ['img/**/*', 'css/*']
    },

    bower_components: {
        js: [
            'bower_components/angular/angular.js',
            'bower_components/angular-aria/angular-aria.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/hammerjs/hammer.js',
            'bower_components/angular-material/angular-material.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js'
        ],
        css: [
            'bower_components/angular-material/angular-material.css',
            'bower_components/angular-material/themes/default-theme.css'
        ]
    }
};
