module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		sass: {
	    dist: {
	      files: {
	        'css/fancy.css': 'sass/fancy.scss'
	      }
	    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('build', [
		'sass'
	]);
}
