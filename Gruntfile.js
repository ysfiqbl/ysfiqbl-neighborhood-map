module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			build: ['Gruntfile.js', 'js/scripts/*.js']
		},
		uglify : {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/'
			},
			build: {
		        files: {
		            'dist/js/scripts/app.min.js' : [ 'js/scripts/app.min.js' ]
		        }
		    }
		},
    	cssmin : {
    		options: {
        		banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/'
        	},
            build:{
            	files: {
                	'dist/css/offline.min.css': ['css/offline.min.css'],
                	'dist/css/main.min.css': ['css/main.min.css']
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
		         src: ['index.html'],
		         dest: 'dist/'
		      }]
		   }
		},
	    watch: {
	    	stylesheets: {
	    		files: 'css/*.css',
	    		tasks: 'cssmin'
	    	},
	    	scripts: {
	    		files: 'js/scripts/*.js',
	    		tasks: ['jshint', 'uglify']
	    	},
	    	html: {
	    		files: 'index.html',
	    		tasks: 'htmlmin'
	    	}
	   	}
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'htmlmin' ]);
};