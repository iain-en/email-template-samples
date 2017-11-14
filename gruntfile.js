module.exports = function(grunt) {
	grunt.initConfig({

	    clean: {
	      build: ['build/']
	    },

	    includes: {
			build: {
				cwd: 'src',
				src: [ '*.html'],
				dest: 'build/',
				options: {
					includePath: 'includes'
				}
			}
	    }

	});

	// Load plugins used by this task gruntfile
	grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-contrib-clean');
  
  
	// Task definitions
	grunt.registerTask('build', ['clean', 'includes']);
	grunt.registerTask('default', ['build']);

}