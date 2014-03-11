 module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		//Optimize images
		//You may need to run "npm install jpegtran-bin@0.2.0" so that the minimize images feature works properly.
		imagemin:{
			dynamic:{
				files:[{
					expand:true,
					cwd: 'images/',
					src: ['*.{png,jpg,gif}'],
					dest: 'build/images'
				}]
			}
		},
		
		//Create image sprite
		sprite:{
		  all: {
			src: 'images/sprites/*.png',
			destImg: 'images/sprite.png',
			destCSS: 'images/sprite.css'
		  }
		},
		
		//Combine JS files
		concat:{
			js:{
				src:[
					'js/*.js',
				],
				dest: 'build/js/production.js',
			},
			css:{
				src:[
						'css/*.css',
					],
					dest: 'build/css/production.css',
			}
		},
		
		// Minify JS file
		uglify:{
			build:{
				src: 'build/js/production.js',
				dest: 'build/js/production.min.js'
			}
		},
		
		//Minify CSS
		cssmin:{
			minify:{
				expand: true,
				cwd: 'build/css/',
				src: ['*.css', '!*.min.css'],
				dest: 'build/css/',
				ext: '.min.css'
			}
		},
		
		//Clean up build directory
		clean:["build"],
		
		//Watch folders		
		watch: {
			images:{
				files:'images/*.{png,jpg,gif}',
				tasks:['imagemin'],
				options:{
					spawn: false,
				}
			},
			javascripts:{
				files:'js/*.js',
				tasks:['concat','uglify'],
				options:{
					spawn: false,
				}
			},
			css:{
				files:'css/*.css',
				tasks:['concat','cssmin'],
				options:{
					spawn: false,
				}
			},
			sprite:{
				files:'images/sprites/*.png',
				tasks:['sprite'],
				options:{
					spawn: false,
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-spritesmith');
	
	grunt.registerTask('default', ['watch']);
};
	