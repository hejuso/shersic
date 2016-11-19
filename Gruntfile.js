module.exports = function(grunt) {
  grunt.initConfig({

    concat: {
      options: {
        separator: ';'
      },
//      dist: {
//        src: ['htdocs/admin/js/libraries/**/*.js'],
//        dest: 'htdocs/admin/js/libraries.js'
//      },
      jsethic: {
        src: ['www/js/libraries/**/*.js'],
        dest: 'www/js/scripts.js'
      }
    },
    uglify: {
        options: {
          mangle: {
            except: ['jQuery', 'Backbone']
          }
        },
        dist: {
          files: {
            'www/js/scripts.js': ['www/js/scripts.js']
          }
        }
      }
    ,
    less: {
      development: {
        options: {
          compress: true,
          ieCompat: true,
          yuicompress: false,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          "www/css/styles.css": "htdocs/public/temas/weaddyou/less/styles.less",
        }
      }
    },
    watch: {
      styles: {
        files: [
        'www/less/**/*.less',
        'www/js/libraries/**/*.js'
        ], // which files to watch
        tasks: ['less','concat'],
        options: {
          nospawn: true
        }
      }
    },
imagemin: {
    png: {
      options: {
        optimizationLevel: 7
      },
      files: [
//        {
//          expand: true,
//          cwd: 'uploads/weaddyou/',
//          src: ['**/*.png'],
//          dest: 'uploads/weaddyou/',
//          ext: '.png'
//        },
        {
          expand: true,
          cwd: 'www/img/',
          src: ['**/*.png'],
          dest: 'www/img/',
          ext: '.png'
        }
      ]
    },
    jpg: {
      options: {
        progressive: true
      },
      files: [
        {
          expand: true,
          cwd: 'www/img/',
          src: ['**/*.jpg'],
          dest: 'htdocs/img/',
          ext: '.jpg'
        },
//        {
//          expand: true,
//          cwd: 'uploads/weaddyou/',
//          src: ['**/*.jpg'],
//          dest: 'uploads/weaddyou/',
//          ext: '.jpg'
//        }
      ]
    }
  }
  });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['watch','concat','uglify','imagemin']);
    // para ejecutar la concatenacion de js --> grunt concat
};