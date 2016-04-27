module.exports = function(grunt){
	
	//Configure tasks
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			dev: {
				port: 9000
			}
		},
		uglify: {	
			build:{
				src: 'src/js/*.js',
				dest: 'js/script.min.js'
			},
			dev :{
				options : {
					beautify: true,
					mangle: false,
					compress: false,
					preserveComments: 'all'
				},
				src: 'src/js/*.js',
				dest: 'js/script.min.js'
			}
		},
		less : {
			dev: {
				options: {
					paths: ['src/less/']
				},
				files: {
					'src/css/app.css':'src/less/app.less'
				}
			}
		},
		concat_css: {
			dev: {
				options: {},
				files: {
					'css/main.css' : 'src/css/app.css'					
				} 
			}
		},
		// most important task
		watch : {			
			dev_watch: {
		        files: ['src/less/*.less','src/js/*.js','*.html','css/*.css','js/*.js'],
		        tasks: ['uglify:dev','less:dev', 'concat_css:dev']
		    }			
		},
		
		// prepare the project for distribution
		// make a zipfile
		compress: {
		  main: {
		    options: {
		      archive: 'archive.zip'
		    },
		    files: [
		      {src: ['*.html'], dest: '/', filter: 'isFile'},
		      {src: ['css/*'], dest: '/', filter: 'isFile'}, // includes files in path
		      {src: ['bower_components/**'], dest: '/'}, // includes files in path and its subdirs
		      {src: ['js/*'], dest: '/', filter: 'isFile'}, // includes files in path
		      {src: ['img/*'], dest: '/', filter: 'isFile'}, // includes files in path
		      {src: ['elements/**'], dest: '/'} // includes files in path and its subdirs
		    ]
		  }
		}
	});
	
	
	//Load plugins
	grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-compress');
	
	//Register tasks
	grunt.registerTask('dev', ['connect:dev', 'uglify:dev']);
	grunt.registerTask('build', ['compress']);
	grunt.registerTask('watchless', ['uglify:dev','less:dev', 'concat_css:dev', 'connect:dev']);
	grunt.registerTask('default', ['watchless','watch:dev_watch']);
	
};