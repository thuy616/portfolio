module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		sass: {
	    dist: {
	      files: {
	        'css/fancy.css': 'sass/fancy.scss'
	      }
	    }
		},
    watch: {
        css: {
            files: ['sass/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false
            }
        }
    }
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('build', [
		'sass'
	]);
  grunt.registerTask('dev', ['watch']);
}
