module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    	cssmin : {
            css:{
            	files: {
                	'dist/css/offline.min.css': ['css/offline.min.css'],
                	'dist/css/main.min.css': ['css/main.min.css']
                }
            }
        },
        uglify : {
        	js: {
	            files: {
	                'dist/js/scripts/app.min.js' : [ 'js/scripts/app.min.js' ]
	            }
	        }
	    },
	    htmlmin: {
		   dist: {
		      options: {
		         removeComments: true,
		         collapseWhitespace: true
		      },
		      files: [{
		         expand: true,
		         cwd: '.',
		         src: ['index.html', 'orders/*.html'],
		         dest: 'dist/'
		      }]
		   }
		},
	    watch: {
			files: ['css/*', 'js/*', '.'],
			tasks: ['concat', 'cssmin', 'uglify']
	   	}
    });
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'cssmin:css', 'uglify:js', 'htmlmin' ])
};