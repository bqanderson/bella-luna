module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['Gruntfile.js', 'public/scripts/*.js', 'routes/*.js']
    },
    watch: {
      files: ['**/*.js'],
      tasks: ['jshint']
    },
    copy: {
      main: {
        files: [
          // makes all src relative to cwd
          {expand: true, cwd: 'node_modules', src: [
            'angular/**',
            'angular-route/**',
            'bootstrap/**',
            'angular-bootstrap-calendar/**',
            'angular-ui-bootstrap/**',
            'angular-animate/**',
            'angular-momentjs/**',
            'moment/**',
            'requirejs/**',
            'jquery/**',
            'jquery-migrate/**'],

            dest: 'public/vendor'
          },
        ],
      },
    },
    uglify: {
     my_target: {
      //  options: {
      //    mangle: false
      //  },
       files: {
         'dest/output.min.js': ['public/scripts/*.js']
       }
     }
   }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'watch']);

};
