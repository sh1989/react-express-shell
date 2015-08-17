module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    clean: ['build'],
    browserify: {
      main: {
        files: {
          'build/js/app.js': 'src/js/main.js'
        },
        options: {
          transform: ['babelify']
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/img/',
            src: '**',
            dest: 'build/img/'
          }
        ]
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/less/**/*.less'],
        dest: 'build/css/style.less'
      }
    },
    less: {
      development: {
        files: {
          'build/css/style.css': 'build/css/style.less'
        }
      }
    }
  });
  
  grunt.registerTask('build', ['clean', 'browserify', 'copy', 'concat', 'less']);
  grunt.registerTask('default', ['build']);
};