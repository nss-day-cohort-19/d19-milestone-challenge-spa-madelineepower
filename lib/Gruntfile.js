module.exports = function(grunt) {
  grunt.initConfig({
    bootstrap: {
        dest: 'out',
        js: [
            'bootstrap-modal.js'
        ],
        css: [
            'modals.less'
        ]
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/main.css': '../sass/main.scss'
        }
      }
    },
    watch: { //automatically watch for changes
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('grunt-bootstrap');
  grunt.registerTask('default', ['sass', 'watch']);
};
