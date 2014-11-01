module.exports = function ( grunt ) {

  require('load-grunt-tasks')(grunt);

  /**
   * Load in our build configuration file.
   */
  var userConfig = require( './build.config.js' );

  /**
   * This is the configuration object Grunt uses to give each plugin its 
   * instructions.
   */
  
  var taskConfig = {
    /**
     * We read in our `package.json` file so we can access the package name and
     * version. It's already there, so we don't repeat ourselves here.
     */
    pkg: grunt.file.readJSON("package.json"),

    /**
     * The banner is the comment that is placed at the top of our compiled 
     * source files. It is first processed as a Grunt template, where the `<%=`
     * pairs are evaluated based on this very configuration object.
     */
    meta: {
      banner: 
        '/**\n' +
        ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' *\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' */\n'
    },
    /**
     * The directories to delete when `grunt clean` is executed.
     */
    clean: ['<%= compile_dir %>/*', '<%= tmp_dir %>/*' ],
    

    copy: {
      bower_components: {
        files: [
          {
            //makes all src relative to cwd
            expand: true, 
            cwd: '<%= src_dir%>', 
            src: [
              '<%= bower_components.js %>',
              '<%= bower_components.css %>'
            ], 
            dest: '<%= compile_dir %>'
          },
        ]
      },
      app_files: {
        files: [
          {
            //makes all src relative to cwd
            expand: true, 
            cwd: '<%= src_dir%>', 
            src: [
              '<%= app_files.js %>',
              '<%= app_files.html %>',
              '<%= app_files.assets %>'
            ], 
            dest: '<%= compile_dir%>'
          },
        ]
      }
    },
    exec: {
      prepare: {
        command: function(platform){
          return 'cordova prepare --verbose';
        }
      }
    },
    watch: {
      sources: {
          files: [
            '<%= src_dir %>/**/*',
          ],
          tasks: ['copy', 'exec:prepare'],
          options: { 
            livereload: true
          }
      }
    }
    
  };

  grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

  grunt.registerTask('build', [
    'clean',
    'copy',
    'exec'
  ]);
  
};