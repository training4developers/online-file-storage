module.exports = function(grunt) {

	grunt.initConfig({
		webServer: {
			rootFolder: "www",
			port: 8080
		},
		mongoServer: {
      host: "localhost",
      port: 27017,
      dbName: "Intuit"
    },
    logger: {
      transports: {
        console: {
          level: "debug",
          colorize: true,
          timeStamp: true
        },
        file: {
          level: "debug",
          fileName: "logs/app.log",
          timeStamp : true
        }
      }
    },
    handlebars: {
			compile: {
				options: {
					namespace: "templates",
					processName: function(filePath) {
						return path.basename(filePath, ".min.hbs");
					},
					processPartialName: function(filePath) {
						return path.basename(filePath, ".min.hbs");
					}
				},
				files: {
					"app/www/js/app.templates.js": "app/templates-min/**/*.min.hbs"
				}
			}
		},
		htmlmin: {
			templates: {
	      options: {
	        removeComments: true,
	        collapseWhitespace: true
	      },
        expand: true,
        cwd: 'app/templates',
        src: '*.hbs',
        dest: 'app/templates-min/',
        ext: ".min.hbs"
	    }
		},
    sass: {
			main: {
        options: {
          sourcemap: "none"
        },
				files: {
					"app/www/css/site.css": "app/sass/site.scss"
				}
			}
		},
		cssmin: {
			main: {
        options: {
          keepSpecialComments: 0,
          sourceMap: false
        },
				files: {
					"app/www/css/site.min.css": [
            'app/www/libs/bootstrap/dist/css/bootstrap.css',
            'app/www/libs/bootstrap/dist/css/bootstrap-theme.css',
            'app/www/css/site.css',
          ]
				}
			}
		},
		uglify: {
			combine: {
        options: {
          compress: false,
          beautify: {
            beautify: true,
            indent_level: 2,
            comments: true
          },
          mangle: false,
        },
				files: {
					"app/www/js/site.js": [
            "app/www/libs/jquery/dist/jquery.js",
            "app/www/libs/bootstrap/dist/js/bootstrap.js",
            "app/www/libs/underscore/underscore.js",
            "app/www/libs/backbone/backbone.js",
            "app/www/libs/handlebars/handlebars.js",
            "app/www/libs/localforage/dist/localforage.js",
            'app/www/js/app.templates.js',
            'app/www/js/app.common.js',
            'app/www/js/models/**/*.js',
            'app/www/js/collections/**/*.js',
            'app/www/js/views/**/*.js',
            'app/www/js/routers/**/*.js',
            'app/www/js/app.js'
          ]
				}
			},
      minify: {
        options: {
          compress: {
            drop_debugger: true,
            unsafe: true,
            drop_console: true
          },
          beautify: false,
          mangle: {},
          screwIE8: true
        },
        files: {
          "app/www/js/site.min.js": "app/www/js/site.js"
        }
      }
		},
    compress: {
      js: {
        options: {
          mode: 'gzip'
        },
        files: {
          "app/www/js/site.min.gz.js": "app/www/js/site.min.js"
        }
      },
      css: {
        options: {
          mode: 'gzip'
        },
        files: {
          "app/www/css/site.min.gz.css": "app/www/css/site.min.css"
        }
      }
    },

		watch: {
			templates: {
				files: ["app/templates/**/*.hbs"],
				tasks: ["htmlmin", "handlebars"],
				options: {
					spawn: false
				}
			},
      css: {
				files: "app/sass/**/*.scss",
				tasks: ["sass","cssmin","compress:css"]
			},
			js: {
				files: ["app/www/js/**/*.js", "!app/www/js/*.min.js"],
				tasks: ["uglify:combine","compress:js"]
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-handlebars");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-compress");

	grunt.registerTask("webServer", "start web server", function() {

		var
			webServer = require("./app/webServer"),
			webServerConfig = grunt.config("webServer");

		this.async();
		webServer(webServerConfig);

	});

	grunt.registerTask("default", "start development environment", ["webServer"]);

};
