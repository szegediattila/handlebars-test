module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dev: {
        files: {
          'public/css/bootstrap.css': 'public/sass/bootstrap.scss',
          'public/css/main.css': 'public/sass/main.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'public/sass/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch:css']);
};