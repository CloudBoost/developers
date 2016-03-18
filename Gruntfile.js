module.exports = function(grunt) {
  
  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			development: {
				port: 1446
			}
		},

		less: {
		  development: {
		    options: {
		      paths: ["assets/css"]
		    },
		    files: {
		      "path/to/result.css": "path/to/source.less"
		    }
		  },
		  production: {
		    options: {
		      paths: ["assets/css"],
		      cleancss: true,
		      modifyVars: {
		        imgPath: '"http://mycdn.com/path/to/images"',
		        bgColor: 'red'
		      }
		    },
		    files: {
		      "path/to/result.css": "path/to/source.less"
		    }
		  }
		}
	});



	grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', 'connect:development');

};